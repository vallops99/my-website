// PROTOTYPE (#8) structure A: one page, proof first.
// Hero → Case studies → How I can help → What I work with → Contact. The Visitor sees Evidence before the pitch;
// the offer then reads as "this, again, for you". Case studies are anchors (#case-<slug>), never pages.
import React from 'react';
import { Header, Hero, CaseStudies, Offer, Skills, Contact, Footer } from './sections';

export const pageMap = [{ path: '/', sections: ['Hero', 'Case studies (6, full)', 'How I can help', 'What I work with', 'Contact'] }];

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#help', label: 'How I can help' },
  { href: '#skills', label: 'What I work with' },
  { href: '#contact', label: 'Contact' },
];

export default function VariantA() {
  return (
    <div className="f">
      <Header nav={nav} />
      <main id="main">
        <Hero />
        <CaseStudies intro="Six engagements, anonymous unless the repository is public." />
        <Offer caseHref={(c) => `#case-${c.slug}`} />
        <Skills alt />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
