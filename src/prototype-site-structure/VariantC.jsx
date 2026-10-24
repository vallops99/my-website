// PROTOTYPE (#8) structure C: home + one page per Case study.
// Home: Hero → How I can help → Work (compact index of 6) → What I work with → Contact.
// /work/<slug>: the full Case study, prev/next, and a Contact block. Pages carry only the decided copy (lead + ≤2 supporting),
// no invented prose, so you can judge whether there is enough per Case study to justify a page.
import React from 'react';
import { Header, Hero, Offer, Skills, Contact, Footer, cases } from './sections';

export const pageMap = [
  { path: '/', sections: ['Hero', 'How I can help', 'Work index (6 compact)', 'What I work with', 'Contact'] },
  { path: '/work/:slug', match: (p) => p.startsWith('/work/'), sections: ['Case study (full)', 'Prev / next', 'Contact'] },
];

const href = (c) => `#/work/${c.slug}`;

const nav = [
  { href: '#help', label: 'How I can help' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'What I work with' },
  { href: '#contact', label: 'Contact' },
];

function Home() {
  return (
    <>
      <Hero />
      <Offer caseHref={href} />
      <section id="work" className="f-section f-alt" aria-labelledby="work-h">
        <div className="f-wrap">
          <h2 id="work-h">Case studies</h2>
          <ol className="c-index">
            {cases.map((c, i) => (
              <li key={c.slug}>
                <a href={href(c)}>
                  <span className="f-small f-muted">{String(i + 1).padStart(2, '0')} · {c.context}{c.status && ` · ${c.status}`}</span>
                  <span className="c-title">{c.client}</span>
                  <span className="c-lead">{c.lead}</span>
                  <span className="f-small c-read">Read the Case study →</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Skills />
      <Contact />
    </>
  );
}

function CasePage({ slug }) {
  const i = Math.max(0, cases.findIndex((c) => c.slug === slug));
  const c = cases[i];
  const prev = cases[(i - 1 + cases.length) % cases.length];
  const next = cases[(i + 1) % cases.length];
  return (
    <>
      <article className="f-section c-page">
        <div className="f-wrap">
          <p className="f-small"><a href="#work">← All Case studies</a></p>
          <p className="f-small f-muted">Case study {String(i + 1).padStart(2, '0')} of {cases.length} · {c.context}</p>
          <h1 className="c-h1">{c.client}</h1>
          {c.status && <p className="f-chip-accent">{c.status}</p>}
          <p className="f-case-lead c-page-lead">{c.lead}</p>
          {c.supporting.length > 0 && (
            <>
              <h2 className="f-gh">Also in this engagement</h2>
              <ul className="c-supporting">{c.supporting.map((s) => <li key={s}>{s}</li>)}</ul>
            </>
          )}
          <h2 className="f-gh">Tech used</h2>
          <ul className="f-chips f-chips-lg">{c.tech.map((t) => <li key={t}>{t}</li>)}</ul>
          {c.href && <p className="c-repo"><a href={c.href}>View the repository ↗</a></p>}
          <nav className="c-prevnext" aria-label="Case studies">
            <a href={href(prev)}><span className="f-small f-muted">← Previous</span>{prev.client}</a>
            <a href={href(next)}><span className="f-small f-muted">Next →</span>{next.client}</a>
          </nav>
        </div>
      </article>
      <Contact />
    </>
  );
}

export default function VariantC({ route }) {
  const slug = route.path.startsWith('/work/') ? route.path.slice('/work/'.length) : null;
  return (
    <div className="f">
      <Header nav={nav} home="#top" />
      <main id="main">{slug ? <CasePage slug={slug} /> : <Home />}</main>
      <Footer />
    </div>
  );
}
