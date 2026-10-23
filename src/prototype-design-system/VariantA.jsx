// PROTOTYPE (#10) variant A: Pico CSS v2, adopted as is (conditional build, default azure theme).
// Semantic HTML does the work: nav lists, <article> cards, role="button" links, <details> to fold supporting Accomplishments.
// The only custom CSS is a chip, which Pico doesn't ship, built from Pico's own variables.
import React from 'react';
import '@picocss/pico/css/pico.conditional.min.css';
import './token-sheet.css';
import './variant-a.css';
import { nav, hero, offer, caseStudies, skills, contact, footer } from './content';

export const tokens = {
  summary:
    'Existing system: Pico CSS v2 (conditional build: 87 kB minified, ~12 kB gzipped, no JS). Classless-first: semantic HTML gets styled, a handful of classes (.container, .grid, .secondary, .outline). Light + dark built in. Customised by overriding --pico-* variables; anything Pico lacks (chips) is ours to add.',
  pageBg: 'var(--pico-background-color)',
  swatches: [
    ['--pico-background-color', 'var(--pico-background-color)'], ['--pico-card-background-color', 'var(--pico-card-background-color)'],
    ['--pico-color', 'var(--pico-color)'], ['--pico-muted-color', 'var(--pico-muted-color)'], ['--pico-muted-border-color', 'var(--pico-muted-border-color)'],
    ['--pico-primary', 'var(--pico-primary)'], ['--pico-primary-background', 'var(--pico-primary-background)'], ['--pico-secondary', 'var(--pico-secondary)'],
  ],
  pairs: [
    ['Body text on page', 'var(--pico-color)', 'var(--pico-background-color)', 4.5],
    ['Muted text on page', 'var(--pico-muted-color)', 'var(--pico-background-color)', 4.5],
    ['Link text on page', 'var(--pico-primary)', 'var(--pico-background-color)', 4.5],
    ['Primary button label', 'var(--pico-primary-inverse)', 'var(--pico-primary-background)', 4.5],
    ['Secondary (outline) button label', 'var(--pico-secondary)', 'var(--pico-background-color)', 4.5],
    ['Chip text on chip', 'var(--pico-color)', 'var(--pico-card-sectioning-background-color)', 4.5],
    ['Focus ring on page (non-text)', 'var(--pico-primary)', 'var(--pico-background-color)', 3],
  ],
  type: [
    'System font stack (system-ui, Segoe UI, Roboto, …): no web font to load',
    'Pico scale: h1 2rem · h2 1.75rem · h3 1.5rem · h4 1.25rem · body 100%→131.25% fluid by breakpoint',
    'Line height 1.5 · typography responsive via root font-size',
  ],
  other: [
    'Spacing: --pico-spacing 1rem; block spacing 2rem vertical / 1rem horizontal (×breakpoint)',
    'Radii: --pico-border-radius 0.25rem',
    'Shadows: --pico-box-shadow on <article> (layered soft shadow)',
    'Breakpoints (container widths): 576px → 510px · 768px → 700px · 1024px → 950px · 1280px → 1200px · 1536px → 1450px',
  ],
};

export default function VariantA({ tokenSheet }) {
  return (
    <div className="pico a">
      <header className="container">
        <nav aria-label="Main">
          <ul><li><a href="#top" className="contrast"><strong>Valerio Farrotti</strong></a></li></ul>
          <ul className="a-nav">{nav.map((n) => <li key={n.href}><a href={n.href} className="secondary">{n.label}</a></li>)}</ul>
        </nav>
      </header>

      <main className="container" id="main">
        <section id="top" className="a-hero">
          <p><small className="a-badge"><span aria-hidden="true">●</span> {hero.badge}</small></p>
          <hgroup>
            <h1>{hero.name}</h1>
            <p>{hero.subtitle}</p>
          </hgroup>
          <p>{hero.description}</p>
          <div className="a-actions">
            <a role="button" href={hero.primary.href}>{hero.primary.label}</a>
            <a role="button" className="secondary outline" href={hero.secondary.href}>{hero.secondary.label}</a>
          </div>
        </section>

        <section id="help" aria-labelledby="help-h">
          <h2 id="help-h">{offer.heading}</h2>
          <div className="grid">
            {offer.types.map((t) => (
              <article key={t.title}>
                <header>
                  <hgroup>
                    <h3>{t.title}</h3>
                    <p>{t.tagline}</p>
                  </hgroup>
                </header>
                <p>{t.lede}</p>
                <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <footer><small>See <a href="#work">{t.cites}</a></small></footer>
              </article>
            ))}
          </div>
          <p><small>{offer.terms}</small><br /><small>{offer.agents}</small></p>
        </section>

        <section id="work" aria-labelledby="work-h">
          <h2 id="work-h">Case studies</h2>
          {caseStudies.map((c) => (
            <article key={c.client}>
              <header>
                <hgroup>
                  <h3>{c.href ? <a href={c.href}>{c.client}</a> : c.client}</h3>
                  <p>{c.context}{c.status && <> · <mark>{c.status}</mark></>}</p>
                </hgroup>
              </header>
              <p>{c.lead}</p>
              {c.supporting.length > 0 && (
                <details>
                  <summary>Also in this engagement ({c.supporting.length})</summary>
                  <ul>{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>
                </details>
              )}
              <footer><small>{c.tech.join(' · ')}</small></footer>
            </article>
          ))}
        </section>

        <section id="skills" aria-labelledby="skills-h">
          <h2 id="skills-h">{skills.heading}</h2>
          <div className="grid a-groups">
            {skills.groups.map((g) => (
              <div key={g.name}>
                <h4>{g.name}</h4>
                <ul className="a-chips">{g.chips.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            ))}
          </div>
          <p><strong>Also shipped with:</strong> {skills.alsoShipped.join(' · ')}</p>
          <p><small>{skills.coverage}</small></p>
          <blockquote className="a-quiet">
            <h4>{skills.handsOn.title} <small>({skills.handsOn.subtitle})</small></h4>
            <ul className="a-chips a-chips-quiet">{skills.handsOn.chips.map((c) => <li key={c}>{c}</li>)}</ul>
          </blockquote>
          <p><small>
            {skills.contributions.label}:{' '}
            {skills.contributions.items.map((it, i) => (
              <React.Fragment key={it.href}>{i > 0 && ' · '}<a href={it.href}>{it.text}</a></React.Fragment>
            ))}
          </small></p>
        </section>

        <section id="contact" aria-labelledby="contact-h">
          <article>
            <h2 id="contact-h">{contact.heading}</h2>
            <p>{contact.body}</p>
            <a role="button" href={`mailto:${contact.email}`}>{contact.email}</a>
            <footer>{contact.links.map((l, i) => <React.Fragment key={l.href}>{i > 0 && ' · '}<a href={l.href} className="secondary">{l.label}</a></React.Fragment>)}</footer>
          </article>
        </section>

        <footer><small>{footer}</small></footer>
        {tokenSheet}
      </main>
    </div>
  );
}
