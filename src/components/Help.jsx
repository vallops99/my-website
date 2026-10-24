import CaseRow from './CaseRow';
import { offer, caseStudies } from '../content';

const Help = () => {
  return (
    <section id="help" aria-labelledby="help-h">
      <div className="section intro">
        <div className="wrap">
          <h2 id="help-h">{offer.heading}</h2>
          <ol className="toc">
            {offer.types.map((t, i) => (
              <li key={t.title}>
                <a href={`#help-${i}`}><span className="toc-n" aria-hidden="true">{i + 1}</span>{t.title}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {offer.types.map((t, i) => {
        const index = caseStudies.findIndex((c) => c.slug === t.caseSlug);
        const repeat = offer.types.findIndex((o) => o.caseSlug === t.caseSlug) < i;
        return (
          <article key={t.title} id={`help-${i}`} className={`section chapter${i % 2 ? ' alt' : ''}`} aria-labelledby={`help-${i}-h`}>
            <div className="wrap">
              <div className="pitch">
                <span className="numeral" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3 id={`help-${i}-h`} className="chapter-title">{t.title}</h3>
                  <p className="accent-line">{t.tagline}</p>
                  <p className="prose">{t.lede}</p>
                  <ul className="muted bullets">{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
              </div>
              <p className="small muted label">Where I did this</p>
              {repeat ? (
                <p className="backref">
                  {t.cites}: part of the <a href={`#case-${t.caseSlug}`}>{t.linkLabel}</a>.
                </p>
              ) : (
                <ol className="cases"><CaseRow study={caseStudies[index]} number={index + 1} /></ol>
              )}
            </div>
          </article>
        );
      })}
      <div className="wrap"><p className="small muted terms">{offer.terms}<br />{offer.agents}</p></div>
    </section>
  );
};

export default Help;
