// PROTOTYPE (#10) round 2, variant G: Precision list.
// Inter (variable, optical sizes), crisp cool neutrals, one blue accent. Dense but calm: a facts strip under the hero,
// the offer as one panel split in three, Case studies as an expandable index (first one open), skills as a two-column table.
import React from 'react';
import './token-sheet.css';
import './variant-g.css';
import { nav, hero, facts, offer, caseStudies, skills, contact, footer } from './content';

const v = (n) => `var(--g-${n})`;

export const tokens = {
  summary:
    'Custom, ~22 tokens. Inter variable with optical sizing (the font the site already uses), one family. Cool neutrals, one blue accent, 1px borders, one 10px radius, no shadows. Information-dense: Case studies are an expandable index you can scan in one screen, first entry open.',
  pageBg: v('bg'),
  swatches: ['bg', 'subtle', 'text', 'muted', 'border', 'border-strong', 'chip', 'accent', 'accent-text', 'on-accent'].map((n) => [`--g-${n}`, v(n)]),
  pairs: [
    ['Body text on page', v('text'), v('bg'), 4.5],
    ['Body text on subtle', v('text'), v('subtle'), 4.5],
    ['Muted text on page (also headline gradient end)', v('muted'), v('bg'), 4.5],
    ['Muted text on subtle', v('muted'), v('subtle'), 4.5],
    ['Chip text on chip', v('text'), v('chip'), 4.5],
    ['Link text on page', v('accent-text'), v('bg'), 4.5],
    ['Link text on subtle', v('accent-text'), v('subtle'), 4.5],
    ['Primary button label', v('on-accent'), v('accent'), 4.5],
    ['Secondary button border on page (non-text)', v('border-strong'), v('bg'), 3],
    ['Focus ring on page (non-text)', v('accent-text'), v('bg'), 3],
  ],
  type: [
    'Inter (variable, opsz axis on; weights 400 / 500 / 600). No second family.',
    '5 sizes: 0.875rem small · 1.0625rem body · 1.25rem lead/h3 · clamp(1.75rem, 3vw, 2.25rem) h2 · clamp(2.5rem, 6vw, 4rem) h1',
    'Line height 1.6 body, 1.05 h1 · prose capped at 64ch · headline with a text→muted gradient (both ends pass 4.5:1)',
  ],
  other: [
    'Spacing: 4px base · 8 · 12 · 16 · 24 · 32 · 48 · 80',
    'Radius: 10px everywhere',
    'Shadows: none',
    'Breakpoints: 40rem (facts strip in a row, two-column skills) · 64rem (three-column offer, inline nav) · content max 70rem',
    'Header: sticky, opaque, 56px; scroll-padding-top 72px',
  ],
};

const icons = [
  <path key="a" d="M4 6h16M4 12h10M4 18h7" />,
  <path key="b" d="M4 7h6v10H4zM14 4h6v6h-6zM14 14h6v6h-6z" />,
  <path key="c" d="M4 17l5-5 4 4 7-8M15 8h5v5" />,
];

export default function VariantG({ tokenSheet }) {
  return (
    <div className="g">
      <a className="g-skip" href="#main">Skip to content</a>
      <header className="g-header">
        <div className="g-wrap g-header-in">
          <a href="#top" className="g-logo">Valerio Farrotti</a>
          <nav aria-label="Main">
            <ul>{nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
          </nav>
          <a className="g-btn g-btn-sm" href="#contact">Contact</a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="g-hero">
          <div className="g-wrap">
            <p className="g-status"><span className="g-dot" aria-hidden="true" />{hero.badge}</p>
            <h1><span className="g-grad">Freelance backend developer.</span></h1>
            <p className="g-lead">{hero.name}, passionate about open source and Bitcoin. {hero.description}</p>
            <div className="g-actions">
              <a className="g-btn" href={hero.primary.href}>{hero.primary.label}</a>
              <a className="g-btn g-btn-secondary" href={hero.secondary.href}>{hero.secondary.label}</a>
            </div>
            <dl className="g-facts">
              {facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
              <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
            </dl>
          </div>
        </section>

        <section id="help" className="g-section" aria-labelledby="help-h">
          <div className="g-wrap">
            <h2 id="help-h">{offer.heading}</h2>
            <div className="g-offer">
              {offer.types.map((t, i) => (
                <article key={t.title}>
                  <svg className="g-icon" viewBox="0 0 24 24" aria-hidden="true">{icons[i]}</svg>
                  <h3>{t.title}</h3>
                  <p className="g-muted">{t.tagline}. {t.lede}</p>
                  <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <p className="g-small g-cite">Backed by <a href="#work">{t.cites}</a></p>
                </article>
              ))}
            </div>
            <p className="g-small g-muted g-agents">{offer.agents}</p>
          </div>
        </section>

        <section id="work" className="g-section" aria-labelledby="work-h">
          <div className="g-wrap">
            <div className="g-head-row">
              <h2 id="work-h">Case studies</h2>
              <p className="g-small g-muted">Six engagements. Clients stay anonymous unless the code is public.</p>
            </div>
            <ol className="g-cases">
              {caseStudies.map((c, i) => (
                <li key={c.client}>
                  <details open={i === 0}>
                    <summary>
                      <span className="g-idx">{String(i + 1).padStart(2, '0')}</span>
                      <span className="g-case-title">{c.client}</span>
                      <span className="g-case-ctx">{c.context}</span>
                      {c.status && <span className="g-tag">{c.status}</span>}
                      <svg className="g-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                    </summary>
                    <div className="g-case-body">
                      <p className="g-case-lead">{c.lead}</p>
                      {c.supporting.length > 0 && <ul className="g-muted">{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
                      <ul className="g-chips">{c.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                      {c.href && <p className="g-small"><a href={c.href}>Source on GitHub ↗</a></p>}
                    </div>
                  </details>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="skills" className="g-section" aria-labelledby="skills-h">
          <div className="g-wrap">
            <div className="g-head-row">
              <h2 id="skills-h">{skills.heading}</h2>
              <p className="g-small g-muted">{skills.coverage}</p>
            </div>
            <dl className="g-table">
              {skills.groups.map((g) => (
                <div key={g.name}>
                  <dt>{g.name}</dt>
                  <dd><ul className="g-chips">{g.chips.map((c) => <li key={c}>{c}</li>)}</ul></dd>
                </div>
              ))}
              <div>
                <dt>Also shipped with</dt>
                <dd>{skills.alsoShipped.join(' · ')}</dd>
              </div>
              <div className="g-quiet">
                <dt>{skills.handsOn.title}<span className="g-muted g-sub">{skills.handsOn.subtitle}</span></dt>
                <dd className="g-muted">{skills.handsOn.chips.join(' · ')}</dd>
              </div>
              <div className="g-quiet">
                <dt>{skills.contributions.label}</dt>
                <dd>{skills.contributions.items.map((it, i) => (
                  <React.Fragment key={it.href}>{i > 0 && ' · '}<a href={it.href}>{it.text}</a></React.Fragment>
                ))}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="contact" className="g-section g-contact" aria-labelledby="contact-h">
          <div className="g-wrap">
            <h2 id="contact-h">{contact.heading}</h2>
            <p className="g-lead">{contact.body}</p>
            <p className="g-email"><a href={`mailto:${contact.email}`}>{contact.email} →</a></p>
            <p className="g-small">{contact.links.map((l, i) => <React.Fragment key={l.href}>{i > 0 && ' · '}<a href={l.href}>{l.label}</a></React.Fragment>)}</p>
          </div>
        </section>
      </main>

      <footer className="g-wrap g-footer g-small g-muted">{footer}</footer>
      <div className="g-wrap">{tokenSheet}</div>
    </div>
  );
}
