// PROTOTYPE (#10) variant B: Editorial, custom tokens.
// One narrow reading column, serif text, hairline rules instead of cards, numbered Case studies. Reads like a printed CV.
import React from 'react';
import './token-sheet.css';
import './variant-b.css';
import { nav, hero, offer, caseStudies, skills, contact, footer } from './content';

export const tokens = {
  summary:
    'Custom, ~12 tokens, zero dependencies. Warm paper and ink, Source Serif 4 for everything that is read, system sans for small labels. One reading column (max 38rem), rules instead of cards.',
  pageBg: 'var(--b-bg)',
  swatches: [
    ['--b-bg', 'var(--b-bg)'], ['--b-ink', 'var(--b-ink)'], ['--b-muted', 'var(--b-muted)'],
    ['--b-accent', 'var(--b-accent)'], ['--b-on-accent', 'var(--b-on-accent)'], ['--b-rule', 'var(--b-rule)'], ['--b-chip', 'var(--b-chip)'],
  ],
  pairs: [
    ['Body text on page', 'var(--b-ink)', 'var(--b-bg)', 4.5],
    ['Muted text on page', 'var(--b-muted)', 'var(--b-bg)', 4.5],
    ['Link / accent text on page', 'var(--b-accent)', 'var(--b-bg)', 4.5],
    ['Primary button label', 'var(--b-on-accent)', 'var(--b-accent)', 4.5],
    ['Chip text on chip', 'var(--b-ink)', 'var(--b-chip)', 4.5],
    ['Focus ring on page (non-text)', 'var(--b-accent)', 'var(--b-bg)', 3],
  ],
  type: [
    'Source Serif 4 (headings + body), system-ui sans for labels/chips/buttons',
    'Scale (4 sizes): 0.8125rem label · 1.125rem body · 1.5rem h3/section · clamp(2.25rem, 6vw, 3.25rem) h1',
    'Line height 1.7 body, 1.15 headings · measure ≤ 65ch',
  ],
  other: [
    'Spacing (rem): 0.25 · 0.5 · 1 · 1.5 · 2.5 · 4 · 6',
    'Radii: 2px (chips, buttons). No cards.',
    'Shadows: none. Separation by 1px rules and whitespace.',
    'Breakpoints: 40rem (tablet: nav inline) · 64rem (desktop: wider margins only, column stays 38rem)',
  ],
};

export default function VariantB({ tokenSheet }) {
  return (
    <div className="b">
      <a className="b-skip" href="#main">Skip to content</a>
      <header className="b-header">
        <a href="#top" className="b-name">Valerio Farrotti</a>
        <nav aria-label="Main">
          <ul>{nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
        </nav>
      </header>

      <main id="main" className="b-col">
        <section id="top" className="b-hero">
          <p className="b-badge"><span aria-hidden="true">●</span> {hero.badge}</p>
          <h1>{hero.name}</h1>
          <p className="b-lede">{hero.subtitle}</p>
          <p>{hero.description}</p>
          <p className="b-actions">
            <a className="b-btn" href={hero.primary.href}>{hero.primary.label}</a>
            <a className="b-btn-text" href={hero.secondary.href}>{hero.secondary.label} →</a>
          </p>
        </section>

        <section id="help" aria-labelledby="help-h">
          <h2 id="help-h">{offer.heading}</h2>
          {offer.types.map((t, i) => (
            <div key={t.title} className="b-entry">
              <h3><span className="b-num">{i + 1}.</span> {t.title}: <em>{t.tagline.toLowerCase()}</em></h3>
              <p>{t.lede}</p>
              <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <p className="b-small">See: <a href="#work">{t.cites}</a></p>
            </div>
          ))}
          <p className="b-small">{offer.terms}</p>
          <p className="b-small">{offer.agents}</p>
        </section>

        <section id="work" aria-labelledby="work-h">
          <h2 id="work-h">Case studies</h2>
          <ol className="b-cases">
            {caseStudies.map((c) => (
              <li key={c.client} className="b-entry">
                <h3>{c.href ? <a href={c.href}>{c.client}</a> : c.client}</h3>
                <p className="b-small">{c.context}{c.status && <> · <strong>{c.status}</strong></>}</p>
                <p>{c.lead}</p>
                {c.supporting.length > 0 && <ul>{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
                <p className="b-tech">{c.tech.join(' · ')}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" aria-labelledby="skills-h">
          <h2 id="skills-h">{skills.heading}</h2>
          <dl className="b-groups">
            {skills.groups.map((g) => (
              <div key={g.name}>
                <dt>{g.name}</dt>
                <dd><ul className="b-chips">{g.chips.map((c) => <li key={c}>{c}</li>)}</ul></dd>
              </div>
            ))}
          </dl>
          <p><span className="b-label">Also shipped with</span> {skills.alsoShipped.join(' · ')}</p>
          <p className="b-small">{skills.coverage}</p>
          <div className="b-quiet">
            <p><span className="b-label">{skills.handsOn.title}</span> <em>{skills.handsOn.subtitle}</em></p>
            <ul className="b-chips">{skills.handsOn.chips.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <p className="b-small">
            {skills.contributions.label}:{' '}
            {skills.contributions.items.map((it, i) => (
              <React.Fragment key={it.href}>{i > 0 && ' · '}<a href={it.href}>{it.text}</a></React.Fragment>
            ))}
          </p>
        </section>

        <section id="contact" aria-labelledby="contact-h" className="b-contact">
          <h2 id="contact-h">{contact.heading}</h2>
          <p>{contact.body}</p>
          <p><a className="b-btn" href={`mailto:${contact.email}`}>{contact.email}</a></p>
          <p className="b-small">{contact.links.map((l, i) => <React.Fragment key={l.href}>{i > 0 && ' · '}<a href={l.href}>{l.label}</a></React.Fragment>)}</p>
        </section>

        <footer className="b-small b-footer">{footer}</footer>
        {tokenSheet}
      </main>
    </div>
  );
}
