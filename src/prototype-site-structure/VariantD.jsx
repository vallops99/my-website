// PROTOTYPE (#8) structure D: short home + a separate Work page.
// Home: Hero → How I can help → Selected work (top 3, full) → Contact. A short pitch a Visitor can finish in one scroll.
// /work: all 6 Case studies (full) → What I work with → Contact. The depth lives one click away, for Visitors who want it.
import React from 'react';
import { Header, Hero, Offer, CaseStudies, Skills, Contact, Footer, cases } from './sections';

export const pageMap = [
  { path: '/', sections: ['Hero', 'How I can help', 'Selected work (top 3, full)', 'Contact'] },
  { path: '/work', sections: ['All Case studies (6, full)', 'What I work with', 'Contact'] },
];

export default function VariantD({ route }) {
  const onWork = route.path === '/work';
  const nav = [
    { href: '#help', label: 'How I can help' },
    { href: '#/work', label: 'Work', current: onWork },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <div className="f">
      <Header nav={nav} />
      <main id="main">
        {onWork ? (
          <>
            <section className="f-section d-pagehead">
              <div className="f-wrap">
                <p className="f-small"><a href="#top">← Home</a></p>
                <h1 className="c-h1">Work</h1>
                <p className="f-prose f-lead">Six engagements, anonymous unless the repository is public, and the tech behind them.</p>
              </div>
            </section>
            <CaseStudies heading="Case studies" />
            <Skills />
            <Contact />
          </>
        ) : (
          <>
            <Hero workHref="#work" />
            <Offer caseHref={(c) => (c.index < 3 ? `#case-${c.slug}` : '#/work')} />
            <CaseStudies
              list={cases.slice(0, 3)}
              heading="Selected work"
              more={<p className="d-more"><a className="f-btn f-btn-secondary" href="#/work">All 6 Case studies and the tech I use →</a></p>}
            />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
