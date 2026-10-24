// PROTOTYPE (#8): section building blocks in the #10 design system (variant F classes).
// Shared on purpose: the question here is arrangement, so every variant uses the same blocks in a different order and page split.
// Each block takes `links` so single-page variants point at anchors and multi-page variants point at `#/` routes.
import React from 'react';
import '../prototype-design-system/variant-f.css';
import { hero, facts, offer, caseStudies, skills, contact, footer } from '../prototype-design-system/content';

// Slugs for Case study pages / anchors, and which Case study each offer type cites (#6).
export const slugs = ['crypto-fintech', 'industrial-scheduler', 'production-line-inspection', 'tax-product', 'ohomemy', 'conda-autoactivate-env'];
export const cases = caseStudies.map((c, i) => ({ ...c, slug: slugs[i], index: i }));
export const offerCites = [0, 1, 0];

export function Header({ nav, home = '#top' }) {
  return (
    <>
      <a className="f-skip" href="#main">Skip to content</a>
      <header className="f-header">
        <div className="f-wrap f-header-in">
          <a href={home} className="f-logo"><span className="f-mark" aria-hidden="true">VF</span>Valerio Farrotti</a>
          <nav aria-label="Main">
            <ul>{nav.map((n) => <li key={n.href}><a href={n.href} aria-current={n.current ? 'page' : undefined}>{n.label}</a></li>)}</ul>
          </nav>
          <a className="f-btn f-btn-secondary f-btn-sm f-mobile-only" href="#contact">Contact</a>
        </div>
      </header>
    </>
  );
}

export function Hero({ workHref = '#work' }) {
  return (
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
            <a className="f-btn f-btn-secondary" href={workHref}>{hero.secondary.label} →</a>
          </div>
        </div>
        <aside className="f-card" aria-label="At a glance">
          <dl>
            {facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
            <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

export function Offer({ caseHref, alt }) {
  return (
    <section id="help" className={`f-section${alt ? ' f-alt' : ''}`} aria-labelledby="help-h">
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
              <p className="f-small">Case study: <a href={caseHref(cases[offerCites[i]])}>{t.cites}</a></p>
            </article>
          ))}
        </div>
        <p className="f-small f-muted f-agents">{offer.terms}<br />{offer.agents}</p>
      </div>
    </section>
  );
}

// Full Case study row (#10's two-column layout).
export function CaseRow({ c, n = c.index + 1, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <li id={`case-${c.slug}`}>
      <div className="f-case-meta">
        <p className="f-small f-muted">{String(n).padStart(2, '0')} · {c.context}</p>
        <H className="f-h3">{c.client}</H>
        {c.status && <p className="f-chip-accent">{c.status}</p>}
        <ul className="f-chips">{c.tech.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
      <div className="f-case-body">
        <p className="f-case-lead">{c.lead}</p>
        {c.supporting.length > 0 && <ul className="f-muted">{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
        {c.href && <p className="f-small"><a href={c.href}>View the repository ↗</a></p>}
      </div>
    </li>
  );
}

export function CaseStudies({ list = cases, heading = 'Case studies', intro, alt = true, more }) {
  return (
    <section id="work" className={`f-section${alt ? ' f-alt' : ''}`} aria-labelledby="work-h">
      <div className="f-wrap">
        <h2 id="work-h">{heading}</h2>
        {intro && <p className="f-prose f-muted s-intro">{intro}</p>}
        <ol className="f-cases">{list.map((c, i) => <CaseRow key={c.slug} c={c} n={i + 1} />)}</ol>
        {more}
      </div>
    </section>
  );
}

export function Skills({ alt }) {
  return (
    <section id="skills" className={`f-section${alt ? ' f-alt' : ''}`} aria-labelledby="skills-h">
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
  );
}

export function Contact({ id = 'contact' }) {
  return (
    <section id={id} className="f-contact" aria-labelledby={`${id}-h`}>
      <div className="f-aurora f-aurora-low" aria-hidden="true" />
      <div className="f-wrap">
        <h2 id={`${id}-h`}>{contact.heading}</h2>
        <p className="f-prose f-lead">{contact.body}</p>
        <div className="f-actions"><a className="f-btn" href={`mailto:${contact.email}`}>{contact.email}</a></div>
        <p className="f-small">{contact.links.map((l, i) => <React.Fragment key={l.href}>{i > 0 && ' · '}<a href={l.href}>{l.label}</a></React.Fragment>)}</p>
      </div>
    </section>
  );
}

export function Footer() {
  return <footer className="f-wrap f-footer f-small f-muted">{footer}</footer>;
}
