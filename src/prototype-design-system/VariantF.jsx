// PROTOTYPE (#10) round 2, variant F: Aurora split.
// Plus Jakarta Sans, a soft static aurora behind the hero and Contact, violet accent. Split hero (pitch left, facts card right).
// No cards for the offer (big numerals and whitespace); Case studies are wide feature rows: meta + tech on the left, story on the right.
import React from 'react';
import './token-sheet.css';
import './variant-f.css';
import { nav, hero, facts, offer, caseStudies, skills, contact, footer } from './content';

const v = (n) => `var(--f-${n})`;

export const tokens = {
  summary:
    'Custom, ~25 tokens. Plus Jakarta Sans (one variable family). Cool violet-tinted neutrals, one violet accent; the aurora is decorative only (static radial gradients, no text sits on its brightest part). One 16px radius, one soft shadow (the facts card only). Lists and rows over cards.',
  pageBg: v('bg'),
  swatches: ['bg', 'alt', 'surface', 'text', 'muted', 'border', 'border-strong', 'chip', 'accent', 'accent-text', 'on-accent'].map((n) => [`--f-${n}`, v(n)]),
  pairs: [
    ['Body text on page', v('text'), v('bg'), 4.5],
    ['Body text on alt band', v('text'), v('alt'), 4.5],
    ['Muted text on page', v('muted'), v('bg'), 4.5],
    ['Muted text on alt band', v('muted'), v('alt'), 4.5],
    ['Muted text on card', v('muted'), v('surface'), 4.5],
    ['Chip text on chip', v('text'), v('chip'), 4.5],
    ['Link text on page', v('accent-text'), v('bg'), 4.5],
    ['Link text on alt band', v('accent-text'), v('alt'), 4.5],
    ['Badge / chip accent text on chip', v('accent-text'), v('chip'), 4.5],
    ['Primary button label', v('on-accent'), v('accent'), 4.5],
    ['Secondary button border on page (non-text)', v('border-strong'), v('bg'), 3],
    ['Focus ring on page (non-text)', v('accent-text'), v('bg'), 3],
  ],
  type: [
    'Plus Jakarta Sans (variable; weights 400 / 600 / 750). No second family.',
    '5 sizes: 0.875rem small · 1.125rem body · 1.375rem lead/h3 · clamp(1.875rem, 3.5vw, 2.5rem) h2 · clamp(2.5rem, 6.5vw, 4.5rem) h1',
    'Line height 1.65 body, 1.08 h1 · prose capped at 62ch · h1 tracked −0.04em',
  ],
  other: [
    'Spacing: 8px base · 8 · 16 · 24 · 32 · 48 · 72 · 112',
    'Radius: 16px (card, buttons use pill)',
    'Shadow: one, on the facts card only: 0 20px 50px -20px rgba(40, 20, 90, .25)',
    'Breakpoints: 40rem (offer 3-col) · 64rem (split hero, two-column Case study rows) · content max 74rem',
    'Header: sticky, opaque, 64px; scroll-padding-top 80px',
  ],
};

export default function VariantF({ tokenSheet }) {
  return (
    <div className="f">
      <a className="f-skip" href="#main">Skip to content</a>
      <header className="f-header">
        <div className="f-wrap f-header-in">
          <a href="#top" className="f-logo"><span className="f-mark" aria-hidden="true">VF</span>Valerio Farrotti</a>
          <nav aria-label="Main">
            <ul>{nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
          </nav>
          <a className="f-btn f-btn-secondary f-btn-sm f-mobile-only" href="#contact">Contact</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="f-hero">
          <div className="f-aurora" aria-hidden="true" />
          <div className="f-wrap f-hero-grid">
            <div>
              <p className="f-eyebrow"><span className="f-dot" aria-hidden="true" />{hero.badge}</p>
              <h1>Freelance backend developer</h1>
              <p className="f-lead">{hero.name}, passionate about open source and Bitcoin.</p>
              <p className="f-prose f-muted">{hero.description}</p>
              <div className="f-actions">
                <a className="f-btn" href={hero.primary.href}>{hero.primary.label}</a>
                <a className="f-btn f-btn-secondary" href={hero.secondary.href}>{hero.secondary.label} →</a>
              </div>
            </div>
            <aside className="f-card" aria-label="At a glance">
              <dl>
                {facts.map((f) => (
                  <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
                ))}
                <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="help" className="f-section" aria-labelledby="help-h">
          <div className="f-wrap">
            <h2 id="help-h">{offer.heading}</h2>
            <div className="f-offer">
              {offer.types.map((t, i) => (
                <article key={t.title}>
                  <span className="f-numeral" aria-hidden="true">{i + 1}</span>
                  <h3>{t.title}</h3>
                  <p className="f-accent-line">{t.tagline}</p>
                  <p className="f-muted">{t.lede}</p>
                  <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <p className="f-small"><a href="#work">{t.cites}</a></p>
                </article>
              ))}
            </div>
            <p className="f-small f-muted f-agents">{offer.agents}</p>
          </div>
        </section>

        <section id="work" className="f-section f-alt" aria-labelledby="work-h">
          <div className="f-wrap">
            <h2 id="work-h">Case studies</h2>
            <ol className="f-cases">
              {caseStudies.map((c, i) => (
                <li key={c.client}>
                  <div className="f-case-meta">
                    <p className="f-small f-muted">{String(i + 1).padStart(2, '0')} · {c.context}</p>
                    <h3>{c.client}</h3>
                    {c.status && <p className="f-chip-accent">{c.status}</p>}
                    <ul className="f-chips">{c.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                  </div>
                  <div className="f-case-body">
                    <p className="f-case-lead">{c.lead}</p>
                    {c.supporting.length > 0 && <ul className="f-muted">{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
                    {c.href && <p className="f-small"><a href={c.href}>View the repository ↗</a></p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="skills" className="f-section" aria-labelledby="skills-h">
          <div className="f-wrap f-skills">
            <div className="f-skills-intro">
              <h2 id="skills-h">{skills.heading}</h2>
              <p className="f-muted">{skills.coverage}</p>
            </div>
            <div>
              {skills.groups.map((g) => (
                <div key={g.name} className="f-group">
                  <h3 className="f-gh">{g.name}</h3>
                  <ul className="f-chips f-chips-lg">{g.chips.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              ))}
              <div className="f-group">
                <h3 className="f-gh">Also shipped with</h3>
                <p>{skills.alsoShipped.join(' · ')}</p>
              </div>
              <div className="f-group f-quiet">
                <h3 className="f-gh">{skills.handsOn.title} <span className="f-muted">· {skills.handsOn.subtitle}</span></h3>
                <p className="f-muted">{skills.handsOn.chips.join(' · ')}</p>
                <p className="f-small f-muted">
                  {skills.contributions.label}:{' '}
                  {skills.contributions.items.map((it, i) => (
                    <React.Fragment key={it.href}>{i > 0 && ' · '}<a href={it.href}>{it.text}</a></React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="f-contact" aria-labelledby="contact-h">
          <div className="f-aurora f-aurora-low" aria-hidden="true" />
          <div className="f-wrap">
            <h2 id="contact-h">{contact.heading}</h2>
            <p className="f-prose f-lead">{contact.body}</p>
            <div className="f-actions">
              <a className="f-btn" href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <p className="f-small">{contact.links.map((l, i) => <React.Fragment key={l.href}>{i > 0 && ' · '}<a href={l.href}>{l.label}</a></React.Fragment>)}</p>
          </div>
        </section>
      </main>

      <footer className="f-wrap f-footer f-small f-muted">{footer}</footer>
      <div className="f-wrap">{tokenSheet}</div>
    </div>
  );
}
