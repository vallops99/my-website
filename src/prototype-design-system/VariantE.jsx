// PROTOTYPE (#10) round 2, variant E: Bento.
// The evolution of round-1 D. Geist, near-white/near-black neutrals, one indigo accent, 1px hairlines, no shadows.
// "How I can help" and the Case studies are bento grids: one featured tile, the rest in a tight mosaic. The hero sits on a faint dot grid.
import React from 'react';
import './token-sheet.css';
import './variant-e.css';
import { nav, hero, facts, offer, caseStudies, skills, contact, footer } from './content';

const v = (n) => `var(--e-${n})`;

export const tokens = {
  summary:
    'Custom, ~25 tokens. Geist (one variable family, 3 weights). Neutral greys plus one indigo accent; hairline borders instead of shadows; one 12px radius (the availability badge is a pill). Bento grids for the offer and the Case studies, with the first Case study featured full width.',
  pageBg: v('bg'),
  swatches: ['bg', 'surface', 'text', 'muted', 'border', 'border-strong', 'chip', 'accent', 'accent-soft', 'accent-text', 'on-accent'].map((n) => [`--e-${n}`, v(n)]),
  pairs: [
    ['Body text on page', v('text'), v('bg'), 4.5],
    ['Body text on tile', v('text'), v('surface'), 4.5],
    ['Muted text on page', v('muted'), v('bg'), 4.5],
    ['Muted text on tile', v('muted'), v('surface'), 4.5],
    ['Chip text on chip', v('text'), v('chip'), 4.5],
    ['Link text on page', v('accent-text'), v('bg'), 4.5],
    ['Link text on tile', v('accent-text'), v('surface'), 4.5],
    ['Badge text on badge', v('accent-text'), v('accent-soft'), 4.5],
    ['Primary button label', v('on-accent'), v('accent'), 4.5],
    ['Secondary button border on page (non-text)', v('border-strong'), v('bg'), 3],
    ['Focus ring on page (non-text)', v('accent-text'), v('bg'), 3],
  ],
  type: [
    'Geist (variable; weights 400 / 500 / 650). No second family.',
    '5 sizes: 0.875rem small/meta · 1.0625rem body · 1.375rem lead/h3 · clamp(1.75rem, 3vw, 2.25rem) h2 · clamp(2.5rem, 6vw, 4.25rem) h1',
    'Line height 1.6 body, 1.1 h1, 1.25 h2/h3 · prose capped at 65ch · headings tracked −0.02 to −0.035em',
  ],
  other: [
    'Spacing: 4px base · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96',
    'Radius: 12px everywhere (badge: pill)',
    'Shadows: none. Tiles separate by 1px border and a lighter surface.',
    'Breakpoints: 40rem (2-col bento) · 64rem (3-col bento, inline nav) · content max 72rem',
    'Header: sticky, opaque, 64px; scroll-padding-top 80px so focused targets are never hidden (2.4.11)',
  ],
};

export default function VariantE({ tokenSheet }) {
  const [featured, ...rest] = caseStudies;
  return (
    <div className="e">
      <a className="e-skip" href="#main">Skip to content</a>
      <header className="e-header">
        <div className="e-wrap e-header-in">
          <a href="#top" className="e-logo">Valerio Farrotti</a>
          <nav aria-label="Main">
            <ul>{nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
          </nav>
          <a className="e-btn e-btn-secondary e-btn-sm" href="#contact">Contact</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="e-hero">
          <div className="e-hero-bg" aria-hidden="true" />
          <div className="e-wrap">
            <p className="e-badge"><span className="e-dot" aria-hidden="true" />{hero.badge}</p>
            <h1>Freelance backend developer</h1>
            <p className="e-lead">{hero.name}, passionate about open source and Bitcoin.</p>
            <p className="e-prose">{hero.description}</p>
            <div className="e-actions">
              <a className="e-btn" href={hero.primary.href}>{hero.primary.label}</a>
              <a className="e-btn e-btn-secondary" href={hero.secondary.href}>{hero.secondary.label}</a>
            </div>
            <p className="e-small">or email <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
        </section>

        <section id="help" className="e-section" aria-labelledby="help-h">
          <div className="e-wrap">
            <h2 id="help-h">{offer.heading}</h2>
            <div className="e-bento e-bento-offer">
              {offer.types.map((t, i) => (
                <article key={t.title} className={`e-tile ${i === 0 ? 'e-tile-tall' : ''}`}>
                  <p className="e-small e-num">0{i + 1}</p>
                  <h3>{t.title}</h3>
                  <p className="e-muted">{t.tagline}. {t.lede}</p>
                  <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <p className="e-small e-cite">Backed by: <a href="#work">{t.cites}</a></p>
                </article>
              ))}
              <div className="e-tile e-tile-wide e-facts">
                <dl>
                  {facts.map((f) => (
                    <div key={f.label}><dt className="e-small">{f.label}</dt><dd>{f.value}</dd></div>
                  ))}
                </dl>
                <p className="e-small">{offer.agents}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="e-section" aria-labelledby="work-h">
          <div className="e-wrap">
            <h2 id="work-h">Case studies</h2>
            <div className="e-bento e-bento-work">
              <CaseTile c={featured} featured />
              {rest.map((c) => <CaseTile key={c.client} c={c} />)}
            </div>
          </div>
        </section>

        <section id="skills" className="e-section" aria-labelledby="skills-h">
          <div className="e-wrap">
            <h2 id="skills-h">{skills.heading}</h2>
            <div className="e-tile">
              <div className="e-groups">
                {skills.groups.map((g) => (
                  <div key={g.name}>
                    <h3 className="e-gh">{g.name}</h3>
                    <ul className="e-chips">{g.chips.map((c) => <li key={c}>{c}</li>)}</ul>
                  </div>
                ))}
              </div>
              <p className="e-also"><span className="e-gh">Also shipped with</span> {skills.alsoShipped.join(' · ')}</p>
              <p className="e-small e-muted">{skills.coverage}</p>
            </div>
            <div className="e-tile e-quiet">
              <h3 className="e-gh">{skills.handsOn.title} <span className="e-muted">· {skills.handsOn.subtitle}</span></h3>
              <ul className="e-chips e-chips-quiet">{skills.handsOn.chips.map((c) => <li key={c}>{c}</li>)}</ul>
              <p className="e-small e-muted">
                {skills.contributions.label}:{' '}
                {skills.contributions.items.map((it, i) => (
                  <React.Fragment key={it.href}>{i > 0 && ' · '}<a href={it.href}>{it.text}</a></React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="e-section" aria-labelledby="contact-h">
          <div className="e-wrap">
            <div className="e-tile e-contact">
              <h2 id="contact-h">{contact.heading}</h2>
              <p className="e-prose e-muted">{contact.body}</p>
              <p className="e-email"><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <div className="e-actions">
                <a className="e-btn" href={`mailto:${contact.email}`}>Email me</a>
                {contact.links.map((l) => <a key={l.href} className="e-btn e-btn-secondary" href={l.href}>{l.label}</a>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="e-wrap e-footer e-small e-muted">{footer}</footer>
      <div className="e-wrap">{tokenSheet}</div>
    </div>
  );
}

function CaseTile({ c, featured }) {
  return (
    <article className={`e-tile ${featured ? 'e-tile-feature' : ''}`}>
      <div>
        <p className="e-small e-meta">
          {c.context}
          {c.status && <span className="e-status">{c.status}</span>}
        </p>
        <h3>{c.client}</h3>
        <p>{c.lead}</p>
        {c.href && <p className="e-small"><a href={c.href}>View on GitHub ↗</a></p>}
      </div>
      <div>
        {c.supporting.length > 0 && <ul className="e-muted">{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
        <p className="e-small e-muted e-tech">{c.tech.join(' · ')}</p>
      </div>
    </article>
  );
}
