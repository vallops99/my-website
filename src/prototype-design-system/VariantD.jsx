// PROTOTYPE (#10) variant D: Radix Colors scales + Inter (the font the site already loads).
// Adopts an existing *token* system (Radix slate + indigo, values copied, no runtime dependency) with custom components:
// sticky blurred header, centred hero, rounded cards with soft shadows, a 2-column Case study grid, tinted pill chips.
import React from 'react';
import './token-sheet.css';
import './variant-d.css';
import { nav, hero, offer, caseStudies, skills, contact, footer } from './content';

export const tokens = {
  summary:
    'Radix Colors (slate + indigo + grass, 12-step scales with light and dark pairs designed for contrast) copied in as CSS variables, no npm dependency; Inter as today. Components are custom: cards with 12px radius and soft shadows, pill chips, sticky header.',
  pageBg: 'var(--slate-1)',
  swatches: [
    ['slate-1 (page)', 'var(--slate-1)'], ['slate-2 (card)', 'var(--slate-2)'], ['slate-3 (chip)', 'var(--slate-3)'], ['slate-6 (border)', 'var(--slate-6)'],
    ['slate-11 (muted)', 'var(--slate-11)'], ['slate-12 (text)', 'var(--slate-12)'], ['indigo-3 (tint)', 'var(--indigo-3)'], ['indigo-9 (solid)', 'var(--indigo-9)'], ['indigo-11 (link)', 'var(--indigo-11)'],
  ],
  pairs: [
    ['Body text on page (slate-12/1)', 'var(--slate-12)', 'var(--slate-1)', 4.5],
    ['Muted text on card (slate-11/2)', 'var(--slate-11)', 'var(--slate-2)', 4.5],
    ['Link text on page (indigo-11/1)', 'var(--indigo-11)', 'var(--slate-1)', 4.5],
    ['Primary button label (white/indigo-9)', '#ffffff', 'var(--indigo-9)', 4.5],
    ['Chip text (slate-12/3)', 'var(--slate-12)', 'var(--slate-3)', 4.5],
    ['Accent chip (indigo-11/3)', 'var(--indigo-11)', 'var(--indigo-3)', 4.5],
    ['Focus ring on page (indigo-9, non-text)', 'var(--indigo-9)', 'var(--slate-1)', 3],
  ],
  type: [
    'Inter (already loaded by the site)',
    'Scale (5 sizes): 0.875rem small · 1rem body · 1.25rem h3 · 2rem h2 · clamp(2.5rem, 7vw, 4rem) h1',
    'Line height 1.6 body, 1.1 h1 · centred hero, left-aligned everything else · measure ≤ 68ch',
  ],
  other: [
    'Spacing: 8px base · 8 · 12 · 16 · 24 · 32 · 48 · 80 · 120',
    'Radii: 8px buttons · 12px cards · 999px chips',
    'Shadows: 0 1px 2px slate-a3, 0 4px 16px slate-a3 (cards); none in dark, border only',
    'Breakpoints: 40rem (tablet: 2-col cards) · 64rem (desktop: 3-col offer, nav inline) · max width 72rem',
  ],
};

export default function VariantD({ tokenSheet }) {
  return (
    <div className="d">
      <a className="d-skip" href="#main">Skip to content</a>
      <header className="d-header">
        <div className="d-wrap d-header-in">
          <a href="#top" className="d-logo">Valerio Farrotti</a>
          <nav aria-label="Main">
            <ul>{nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
          </nav>
          <a className="d-btn d-btn-sm" href={hero.primary.href}>Contact</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="d-hero">
          <div className="d-wrap">
            <p className="d-pill"><span className="d-dot" aria-hidden="true" />{hero.badge}</p>
            <h1>Freelance backend developer</h1>
            <p className="d-lede">{hero.name}, passionate about open source and Bitcoin.</p>
            <p className="d-sub">{hero.description}</p>
            <div className="d-actions">
              <a className="d-btn" href={hero.primary.href}>{hero.primary.label}</a>
              <a className="d-btn d-btn-secondary" href={hero.secondary.href}>{hero.secondary.label}</a>
            </div>
          </div>
        </section>

        <section id="help" className="d-section" aria-labelledby="help-h">
          <div className="d-wrap">
            <h2 id="help-h">{offer.heading}</h2>
            <div className="d-grid d-grid-3">
              {offer.types.map((t, i) => (
                <article key={t.title} className="d-card">
                  <span className="d-icon" aria-hidden="true">{['◆', '◇', '○'][i]}</span>
                  <h3>{t.title}</h3>
                  <p className="d-muted">{t.tagline}. {t.lede}</p>
                  <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <a className="d-card-link" href="#work">{t.cites} →</a>
                </article>
              ))}
            </div>
            <div className="d-note">
              <p>{offer.terms}</p>
              <p>{offer.agents}</p>
            </div>
          </div>
        </section>

        <section id="work" className="d-section d-alt" aria-labelledby="work-h">
          <div className="d-wrap">
            <h2 id="work-h">Case studies</h2>
            <div className="d-grid d-grid-2">
              {caseStudies.map((c) => (
                <article key={c.client} className="d-card">
                  <div className="d-card-top">
                    <span className="d-chip d-chip-accent">{c.context}</span>
                    {c.status && <span className="d-chip d-chip-warn">{c.status}</span>}
                  </div>
                  <h3>{c.href ? <a href={c.href}>{c.client}</a> : c.client}</h3>
                  <p>{c.lead}</p>
                  {c.supporting.length > 0 && <ul className="d-muted">{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
                  <ul className="d-chips d-chips-sm">{c.tech.map((t) => <li key={t} className="d-chip">{t}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="d-section" aria-labelledby="skills-h">
          <div className="d-wrap">
            <h2 id="skills-h">{skills.heading}</h2>
            <div className="d-grid d-grid-2">
              {skills.groups.map((g) => (
                <div key={g.name}>
                  <h3 className="d-gh">{g.name}</h3>
                  <ul className="d-chips">{g.chips.map((c) => <li key={c} className="d-chip">{c}</li>)}</ul>
                </div>
              ))}
            </div>
            <p className="d-also"><strong>Also shipped with</strong> {skills.alsoShipped.join(' · ')}</p>
            <p className="d-muted">{skills.coverage}</p>
            <div className="d-card d-quiet">
              <h3 className="d-gh">{skills.handsOn.title} <span className="d-muted">{skills.handsOn.subtitle}</span></h3>
              <ul className="d-chips">{skills.handsOn.chips.map((c) => <li key={c} className="d-chip d-chip-ghost">{c}</li>)}</ul>
            </div>
            <p className="d-muted">
              {skills.contributions.label}:{' '}
              {skills.contributions.items.map((it, i) => (
                <React.Fragment key={it.href}>{i > 0 && ' · '}<a href={it.href}>{it.text}</a></React.Fragment>
              ))}
            </p>
          </div>
        </section>

        <section id="contact" className="d-section" aria-labelledby="contact-h">
          <div className="d-wrap">
            <div className="d-cta">
              <h2 id="contact-h">{contact.heading}</h2>
              <p>{contact.body}</p>
              <div className="d-actions">
                <a className="d-btn d-btn-invert" href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <p className="d-cta-links">{contact.links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="d-wrap d-footer d-muted">{footer}</footer>
      <div className="d-wrap">{tokenSheet}</div>
    </div>
  );
}
