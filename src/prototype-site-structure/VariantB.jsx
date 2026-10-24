// PROTOTYPE (#8) structure B: one page, offer-led.
// Hero → [Offer type 1 + its Case study] → [Offer type 2 + its Case study] → [Offer type 3 + its Case study] → More work → What I work with → Contact.
// No separate offer grid: one "How I can help" heading with a 3-item index, then each engagement type is a chapter (h3)
// that carries its own Evidence underneath it.
// Uncited Case studies (production-line inspection, tax product, OHomeMy, Conda) fall into "More work". Type 3 cites the same fintech engagement as type 1,
// so it points back up to it instead of repeating it; judge whether that seam feels weak.
import React from 'react';
import { offer } from '../prototype-design-system/content';
import { Header, Hero, CaseRow, Skills, Contact, Footer, cases, offerCites } from './sections';

export const pageMap = [
  { path: '/', sections: ['Hero', 'How I can help (index)', 'Help 1 + fintech', 'Help 2 + scheduler', 'Help 3 (→ fintech)', 'More work (4 compact)', 'What I work with', 'Contact'] },
];

const nav = [
  { href: '#help', label: 'How I can help' },
  { href: '#more-work', label: 'More work' },
  { href: '#skills', label: 'What I work with' },
  { href: '#contact', label: 'Contact' },
];

const cited = new Set(offerCites);
const uncited = cases.filter((c) => !cited.has(c.index));

export default function VariantB() {
  const shown = new Set();
  return (
    <div className="f">
      <Header nav={nav} />
      <main id="main">
        <Hero workHref="#help" />
        <section id="help" aria-labelledby="help-h">
          <div className="f-section b-intro">
            <div className="f-wrap">
              <h2 id="help-h">{offer.heading}</h2>
              <ol className="b-toc">
                {offer.types.map((t, i) => (
                  <li key={t.title}><a href={`#help-${i}`}><span className="b-toc-n" aria-hidden="true">{i + 1}</span>{t.title}</a></li>
                ))}
              </ol>
            </div>
          </div>
          {offer.types.map((t, i) => {
            const c = cases[offerCites[i]];
            const repeat = shown.has(c.index);
            shown.add(c.index);
            return (
              <article key={t.title} className={`f-section b-chapter${i % 2 ? ' f-alt' : ''}`} aria-labelledby={`help-${i}`}>
                <div className="f-wrap">
                  <div className="b-pitch">
                    <span className="f-numeral" aria-hidden="true">{i + 1}</span>
                    <div>
                      <h3 id={`help-${i}`} className="b-title">{t.title}</h3>
                      <p className="f-accent-line">{t.tagline}</p>
                      <p className="f-prose">{t.lede}</p>
                      <ul className="f-muted b-bullets">{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                    </div>
                  </div>
                  <p className="f-small f-muted b-label">Where I did this</p>
                  {repeat ? (
                    <p className="b-backref">
                      {t.cites}: part of the <a href={`#case-${c.slug}`}>{c.client.toLowerCase()} engagement above</a>.
                    </p>
                  ) : (
                    <ol className="f-cases b-case"><CaseRow c={c} headingLevel={4} /></ol>
                  )}
                </div>
              </article>
            );
          })}
          <div className="f-wrap"><p className="f-small f-muted b-terms">{offer.terms}<br />{offer.agents}</p></div>
        </section>

        <section id="more-work" className="f-section f-alt" aria-labelledby="more-h">
          <div className="f-wrap">
            <h2 id="more-h">More work</h2>
            <ul className="b-more">
              {uncited.map((c) => (
                <li key={c.slug} id={`case-${c.slug}`}>
                  <p className="f-small f-muted">{c.context}{c.status && ` · ${c.status}`}</p>
                  <h3>{c.client}</h3>
                  <p>{c.lead}</p>
                  {c.supporting.length > 0 && <ul className="f-muted f-small">{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
                  <ul className="f-chips">{c.tech.map((x) => <li key={x}>{x}</li>)}</ul>
                  {c.href && <p className="f-small b-repo"><a href={c.href}>View the repository ↗</a></p>}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
