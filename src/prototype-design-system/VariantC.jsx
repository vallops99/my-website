// PROTOTYPE (#10) variant C: Technical, custom tokens.
// IBM Plex Sans + Mono, 1px borders, no shadows. On desktop, a sticky identity sidebar (name, availability, CTA, nav) next to the content;
// Case studies are an index of rows with the tech line set in mono.
import React from 'react';
import './token-sheet.css';
import './variant-c.css';
import { nav, hero, offer, caseStudies, skills, contact, footer } from './content';

export const tokens = {
  summary:
    'Custom, ~14 tokens, zero dependencies. Cool slate neutrals with a single teal accent, IBM Plex Sans for text and Plex Mono for labels, chips and tech lines. Bordered panels, 4px radii, no shadows. Two-column shell from 64rem.',
  pageBg: 'var(--c-bg)',
  swatches: [
    ['--c-bg', 'var(--c-bg)'], ['--c-surface', 'var(--c-surface)'], ['--c-text', 'var(--c-text)'], ['--c-muted', 'var(--c-muted)'],
    ['--c-border', 'var(--c-border)'], ['--c-accent', 'var(--c-accent)'], ['--c-accent-text', 'var(--c-accent-text)'], ['--c-on-accent', 'var(--c-on-accent)'],
  ],
  pairs: [
    ['Body text on page', 'var(--c-text)', 'var(--c-bg)', 4.5],
    ['Muted text on page', 'var(--c-muted)', 'var(--c-bg)', 4.5],
    ['Muted text on surface', 'var(--c-muted)', 'var(--c-surface)', 4.5],
    ['Link / accent text on page', 'var(--c-accent-text)', 'var(--c-bg)', 4.5],
    ['Primary button label', 'var(--c-on-accent)', 'var(--c-accent)', 4.5],
    ['Chip text on surface', 'var(--c-text)', 'var(--c-surface)', 4.5],
    ['Panel border on page (non-text)', 'var(--c-border-strong)', 'var(--c-bg)', 3],
    ['Focus ring on page (non-text)', 'var(--c-accent-text)', 'var(--c-bg)', 3],
  ],
  type: [
    'IBM Plex Sans (text), IBM Plex Mono (eyebrows, chips, tech lines, badge)',
    'Scale (5 sizes): 0.8125rem mono · 1rem body · 1.25rem h3 · 1.75rem h2 · clamp(2rem, 5vw, 2.75rem) h1',
    'Line height 1.65 body, 1.2 headings · measure ≤ 70ch',
  ],
  other: [
    'Spacing: 4px base · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96',
    'Radii: 4px everywhere',
    'Shadows: none; 1px borders (--c-border) and surfaces',
    'Breakpoints: 40rem (tablet: 2-col offer) · 64rem (desktop: sticky sidebar + content) · 80rem (max width 76rem)',
  ],
};

export default function VariantC({ tokenSheet }) {
  return (
    <div className="c">
      <a className="c-skip" href="#main">Skip to content</a>
      <div className="c-shell">
        <aside className="c-side">
          <a href="#top" className="c-name">Valerio Farrotti</a>
          <p className="c-role">Freelance backend developer</p>
          <p className="c-badge"><span className="c-dot" aria-hidden="true" />{hero.badge}</p>
          <nav aria-label="Main">
            <ul>{nav.map((n, i) => <li key={n.href}><a href={n.href}><span className="c-mono">0{i + 1}</span>{n.label}</a></li>)}</ul>
          </nav>
          <a className="c-btn c-side-cta" href={hero.primary.href}>{hero.primary.label}</a>
        </aside>

        <main id="main" className="c-main">
          <section id="top" className="c-hero">
            <h1>{hero.subtitle}</h1>
            <p className="c-lede">{hero.description}</p>
            <div className="c-actions">
              <a className="c-btn" href={hero.primary.href}>{hero.primary.label}</a>
              <a className="c-btn c-btn-secondary" href={hero.secondary.href}>{hero.secondary.label}</a>
            </div>
          </section>

          <section id="help" aria-labelledby="help-h">
            <p className="c-eyebrow">01 / Offer</p>
            <h2 id="help-h">{offer.heading}</h2>
            <div className="c-offer">
              {offer.types.map((t) => (
                <article key={t.title} className="c-panel">
                  <h3>{t.title}</h3>
                  <p className="c-mono c-muted">{t.tagline}</p>
                  <p>{t.lede}</p>
                  <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <p className="c-cite"><span className="c-mono">↳</span> <a href="#work">{t.cites}</a></p>
                </article>
              ))}
            </div>
            <ul className="c-terms">
              <li>{offer.terms}</li>
              <li>{offer.agents}</li>
            </ul>
          </section>

          <section id="work" aria-labelledby="work-h">
            <p className="c-eyebrow">02 / Work</p>
            <h2 id="work-h">Case studies</h2>
            <ol className="c-cases">
              {caseStudies.map((c, i) => (
                <li key={c.client}>
                  <span className="c-mono c-idx">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>
                      {c.href ? <a href={c.href}>{c.client}</a> : c.client}
                      {c.status && <span className="c-status">{c.status}</span>}
                    </h3>
                    <p className="c-mono c-muted">{c.context}</p>
                    <p>{c.lead}</p>
                    {c.supporting.length > 0 && <ul>{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
                    <p className="c-mono c-tech">{c.tech.join('  ·  ')}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="skills" aria-labelledby="skills-h">
            <p className="c-eyebrow">03 / Skills</p>
            <h2 id="skills-h">{skills.heading}</h2>
            <div className="c-groups">
              {skills.groups.map((g) => (
                <div key={g.name}>
                  <h3 className="c-mono c-muted c-gh">{g.name}</h3>
                  <ul className="c-chips">{g.chips.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              ))}
            </div>
            <p><span className="c-mono c-muted">Also shipped with:</span> {skills.alsoShipped.join(' · ')}</p>
            <p className="c-muted">{skills.coverage}</p>
            <div className="c-panel c-quiet">
              <h3 className="c-mono c-gh">{skills.handsOn.title} <span className="c-muted">// {skills.handsOn.subtitle}</span></h3>
              <ul className="c-chips c-chips-quiet">{skills.handsOn.chips.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <p>
              <span className="c-mono c-muted">{skills.contributions.label}:</span>{' '}
              {skills.contributions.items.map((it, i) => (
                <React.Fragment key={it.href}>{i > 0 && ' · '}<a href={it.href}>{it.text}</a></React.Fragment>
              ))}
            </p>
          </section>

          <section id="contact" aria-labelledby="contact-h" className="c-panel c-contact">
            <p className="c-eyebrow">04 / Contact</p>
            <h2 id="contact-h">{contact.heading}</h2>
            <p>{contact.body}</p>
            <div className="c-actions">
              <a className="c-btn" href={`mailto:${contact.email}`}>{contact.email}</a>
              {contact.links.map((l) => <a key={l.href} className="c-btn c-btn-secondary" href={l.href}>{l.label}</a>)}
            </div>
          </section>

          <footer className="c-footer c-mono c-muted">{footer}</footer>
          {tokenSheet}
        </main>
      </div>
    </div>
  );
}
