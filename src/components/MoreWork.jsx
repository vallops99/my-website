import { caseStudies, offer, sections } from '../content';

// The Case studies no engagement type cites; the cited ones are shown under "How I can help".
const cited = new Set(offer.types.map((t) => t.caseSlug));
const cases = caseStudies.filter((c) => !cited.has(c.slug));

const MoreWork = () => (
  <section id={sections.moreWork.id} className="section alt" aria-labelledby="more-work-h">
    <div className="wrap">
      <h2 id="more-work-h">{sections.moreWork.heading}</h2>
      <ul className="more">
        {cases.map((c) => (
          <li key={c.slug} id={`case-${c.slug}`}>
            <p className="small muted">{c.context}</p>
            <h3>{c.client}</h3>
            {c.status && <p className="status small">{c.status}</p>}
            <p>{c.lead}</p>
            {c.supporting.length > 0 && (
              <ul className="muted small">
                {c.supporting.map((s) => <li key={s}>{s}</li>)}
              </ul>
            )}
            <ul className="chips">
              {c.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            {c.href && (
              <p className="small repo">
                <a href={c.href} target="_blank" rel="noopener noreferrer">View the repository ↗</a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default MoreWork;
