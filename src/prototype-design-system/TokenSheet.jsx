// PROTOTYPE (#10): renders a variant's tokens and checks WCAG 2.2 contrast live, in the active theme.
// It is styled by the variant itself (via the `ts-*` hooks each variant's CSS may target) so it reads as part of the specimen.
import React, { useLayoutEffect, useRef, useState } from 'react';

function resolveColor(el, value) {
  const probe = document.createElement('span');
  probe.style.color = value;
  el.appendChild(probe);
  const rgb = getComputedStyle(probe).color;
  probe.remove();
  return rgb;
}

function parse(rgb) {
  const m = rgb.match(/[\d.]+/g)?.map(Number) ?? [0, 0, 0, 1];
  return { r: m[0], g: m[1], b: m[2], a: m[3] ?? 1 };
}

function blend(fg, bg) {
  return { r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 };
}

function lum({ r, g, b }) {
  const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function ratio(a, b) {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

const hex = ({ r, g, b }) => '#' + [r, g, b].map((n) => Math.round(n).toString(16).padStart(2, '0')).join('');

export default function TokenSheet({ tokens, theme }) {
  const ref = useRef(null);
  const [rows, setRows] = useState([]);
  const [swatches, setSwatches] = useState([]);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const compute = () => {
      const page = parse(resolveColor(el, tokens.pageBg));
      setSwatches(tokens.swatches.map(([name, value]) => ({ name, hex: hex(blend(parse(resolveColor(el, value)), page)) })));
      setRows(
        tokens.pairs.map(([label, fg, bg, min]) => {
          const b = blend(parse(resolveColor(el, bg)), page);
          const f = blend(parse(resolveColor(el, fg)), b);
          const r = ratio(f, b);
          return { label, r, min, pass: r >= min };
        }),
      );
    };
    compute();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', compute);
    return () => mq.removeEventListener('change', compute);
  }, [tokens, theme]);

  return (
    <section ref={ref} className="ts" aria-labelledby="ts-h">
      <h2 id="ts-h">Tokens (prototype only)</h2>
      <p className="ts-note">{tokens.summary}</p>

      <h3>Color · {theme === 'auto' ? 'system theme' : theme}</h3>
      <ul className="ts-swatches">
        {swatches.map((s) => (
          <li key={s.name}>
            <span className="ts-swatch" style={{ background: s.hex }} />
            <code>{s.name}</code> <code>{s.hex}</code>
          </li>
        ))}
      </ul>

      <h3>Contrast (WCAG 2.2 AA)</h3>
      <table className="ts-table">
        <thead><tr><th>Pair</th><th>Ratio</th><th>Needs</th><th></th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td>{r.label}</td>
              <td>{r.r.toFixed(2)}:1</td>
              <td>{r.min}:1</td>
              <td>{r.pass ? '✓ pass' : '✗ FAIL'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Type</h3>
      <ul className="ts-list">{tokens.type.map((t) => <li key={t}>{t}</li>)}</ul>
      <h3>Spacing · radii · shadows · breakpoints</h3>
      <ul className="ts-list">{tokens.other.map((t) => <li key={t}>{t}</li>)}</ul>
    </section>
  );
}
