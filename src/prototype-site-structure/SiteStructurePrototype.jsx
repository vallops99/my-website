// PROTOTYPE (#8): "Single page or Case study pages, and in what order?"
// Four structures of the same decided content (#4–#7), all in the chosen design system (#10, variant F "Aurora split"),
// on the existing `/` route, switchable via `?structure=A|B|C|D` (and `?theme=light|dark`).
// Only structure varies: which pages exist, which sections each page has, their order, and how Case studies are presented.
// The pink "page map" strip at the top is prototype chrome, not part of the design.
// Dev only: src/index.jsx never loads this file in production builds.
import React, { useEffect, useState } from 'react';
import PrototypeSwitcher from '../components/PrototypeSwitcher';
import './structure.css';

export const variants = [
  { key: 'A', name: 'One page, proof first', load: () => import('./VariantA.jsx') },
  { key: 'B', name: 'One page, offer-led', load: () => import('./VariantB.jsx') },
  { key: 'C', name: 'Home + Case study pages', load: () => import('./VariantC.jsx') },
  { key: 'D', name: 'Home + Work page', load: () => import('./VariantD.jsx') },
];

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'auto') delete root.dataset.theme;
  else root.dataset.theme = theme;
}

// Hash router for the multi-page variants. `#/work/x` is a page; any other hash (`#contact`) is a section on the home page.
export function useRoute() {
  const parse = () => {
    const h = window.location.hash;
    return h.startsWith('#/') ? { path: h.slice(1), section: null } : { path: '/', section: h.slice(1) || null };
  };
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const on = () => setRoute(parse());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  useEffect(() => {
    if (route.section) document.getElementById(route.section)?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route.path, route.section]);
  return route;
}

function PageMap({ pages, path }) {
  return (
    <div className="pm" role="note" aria-label="Prototype page map">
      <strong>PROTOTYPE page map</strong>
      {pages.map((p) => (
        <span key={p.path} className={p.match?.(path) ?? p.path === path ? 'pm-on' : undefined}>
          <code>{p.path}</code> {p.sections.join(' → ')}
        </span>
      ))}
    </div>
  );
}

export default function SiteStructurePrototype({ variantKey }) {
  const params = new URLSearchParams(window.location.search);
  const [theme, setTheme] = useState(params.get('theme') ?? 'auto');
  const [mod, setMod] = useState(null);
  const current = variants.find((v) => v.key === variantKey) ?? variants[0];
  const route = useRoute();

  useEffect(() => {
    current.load().then(setMod);
    document.title = `PROTOTYPE ${current.key}: ${current.name}`;
  }, [current]);

  useEffect(() => {
    applyTheme(theme);
    const p = new URLSearchParams(window.location.search);
    if (theme === 'auto') p.delete('theme'); else p.set('theme', theme);
    window.history.replaceState(null, '', `?${p}${window.location.hash}`);
  }, [theme]);

  const Variant = mod?.default;
  return (
    <>
      {mod && <PageMap pages={mod.pageMap} path={route.path} />}
      {Variant && <Variant route={route} />}
      <PrototypeSwitcher variants={variants} current={current.key} theme={theme} onTheme={setTheme} param="structure" />
    </>
  );
}
