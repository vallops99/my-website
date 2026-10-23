// PROTOTYPE (#10): "Which design system does the site use?"
// Four design systems applied to the same decided content (#4–#7), on the existing `/` route, switchable via `?variant=A|B|C|D`
// (and `?theme=light|dark`). Variants disagree on tokens, type, component shapes and layout density.
// Section order is provisional: #8 (Site structure) decides it after this one.
// Dev only: src/index.jsx never loads this file in production builds.
import React, { useEffect, useState } from 'react';
import PrototypeSwitcher from '../components/PrototypeSwitcher';
import TokenSheet from './TokenSheet';

export const variants = [
  { key: 'A', name: 'Pico CSS, adopted', load: () => import('./VariantA.jsx') },
  { key: 'B', name: 'Editorial, custom', load: () => import('./VariantB.jsx') },
  { key: 'C', name: 'Technical, custom', load: () => import('./VariantC.jsx') },
  { key: 'D', name: 'Radix Colors + Inter', load: () => import('./VariantD.jsx') },
];

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'auto') delete root.dataset.theme;
  else root.dataset.theme = theme;
}

export default function DesignSystemPrototype({ variantKey }) {
  const params = new URLSearchParams(window.location.search);
  const [theme, setTheme] = useState(params.get('theme') ?? 'auto');
  const [mod, setMod] = useState(null);
  const current = variants.find((v) => v.key === variantKey) ?? variants[0];

  useEffect(() => {
    current.load().then(setMod);
    document.title = `PROTOTYPE ${current.key}: ${current.name}`;
  }, [current]);

  useEffect(() => {
    applyTheme(theme);
    const p = new URLSearchParams(window.location.search);
    if (theme === 'auto') p.delete('theme'); else p.set('theme', theme);
    window.history.replaceState(null, '', `?${p}`);
  }, [theme]);

  const Variant = mod?.default;
  return (
    <>
      {Variant && <Variant tokenSheet={<TokenSheet tokens={mod.tokens} theme={theme} />} />}
      <PrototypeSwitcher variants={variants} current={current.key} theme={theme} onTheme={setTheme} />
    </>
  );
}
