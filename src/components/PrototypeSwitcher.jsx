// PROTOTYPE: floating variant switcher. Only mounted in dev builds (see src/index.jsx).
import React, { useEffect } from 'react';

const THEMES = ['auto', 'light', 'dark'];

const barStyle = {
  position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 2147483647,
  display: 'flex', alignItems: 'center', gap: 4, padding: 4, borderRadius: 999,
  background: '#ff2d95', color: '#fff', boxShadow: '0 6px 24px rgba(0,0,0,.35)',
  font: '600 13px/1 ui-monospace, SFMono-Regular, Menlo, monospace', maxWidth: 'calc(100vw - 16px)',
};
const btnStyle = {
  all: 'unset', cursor: 'pointer', minWidth: 36, height: 36, borderRadius: 999, display: 'grid',
  placeItems: 'center', background: 'rgba(0,0,0,.25)', padding: '0 10px', whiteSpace: 'nowrap',
};

export default function PrototypeSwitcher({ variants, current, theme, onTheme, param = 'variant' }) {
  const idx = Math.max(0, variants.findIndex((v) => v.key === current));
  const go = (delta) => {
    const next = variants[(idx + delta + variants.length) % variants.length];
    const params = new URLSearchParams(window.location.search);
    params.set(param, next.key);
    // Full reload on purpose: each variant ships its own global CSS, and a reload keeps them from bleeding.
    window.location.search = params.toString();
  };

  useEffect(() => {
    const onKey = (e) => {
      const t = e.target;
      if (t.closest?.('input, textarea, select, [contenteditable]')) return;
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
  const v = variants[idx];

  return (
    <div style={barStyle} role="toolbar" aria-label="Prototype variant switcher">
      <button style={btnStyle} onClick={() => go(-1)} aria-label="Previous variant">←</button>
      <span style={{ padding: '0 8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {v.key} ({v.name})
      </span>
      <button style={btnStyle} onClick={() => go(1)} aria-label="Next variant">→</button>
      <button style={btnStyle} onClick={() => onTheme(nextTheme)} aria-label={`Theme: ${theme}. Switch to ${nextTheme}`}>
        {theme === 'auto' ? '◐ auto' : theme === 'light' ? '☀ light' : '☾ dark'}
      </button>
    </div>
  );
}
