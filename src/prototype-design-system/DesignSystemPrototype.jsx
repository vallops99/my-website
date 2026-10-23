// PROTOTYPE (#10): "Which design system does the site use?"
// Round 2: three modern variants applied to the same decided content (#4–#7), on the existing `/` route, switchable via
// `?variant=E|F|G` (and `?theme=light|dark`). Round 1 (A–D: Pico, editorial, technical, Radix) was rejected as "old" and lives in
// commit e700998. Every variant here follows the rules in research/ui-ux-best-practices.md ("Implications for #10"):
// one font family, 17–18px body, ≤70ch measure, ≥14px text, one accent, opaque header, light default + system dark, AA contrast.
// Section order is provisional: #8 (Site structure) decides it after this one.
// Dev only: src/index.jsx never loads this file in production builds.
import React, { useEffect, useState } from 'react';
import PrototypeSwitcher from '../components/PrototypeSwitcher';
import TokenSheet from './TokenSheet';

export const variants = [
  { key: 'E', name: 'Bento', load: () => import('./VariantE.jsx') },
  { key: 'F', name: 'Aurora split', load: () => import('./VariantF.jsx') },
  { key: 'G', name: 'Precision list', load: () => import('./VariantG.jsx') },
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
