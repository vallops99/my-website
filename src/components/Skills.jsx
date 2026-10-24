import { Fragment } from 'react';
import { skills } from '../content';

const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-h">
    <div className="wrap skills">
      <div className="skills-intro">
        <h2 id="skills-h">{skills.heading}</h2>
        <p className="muted">{skills.coverage}</p>
      </div>
      <div>
        {skills.groups.map((g) => (
          <div key={g.name} className="group">
            <h3 className="group-label">{g.name}</h3>
            <ul className="chips chips-lg">
              {g.chips.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        ))}
        <div className="group">
          <h3 className="group-label">{skills.alsoShippedLabel}</h3>
          <p>{skills.alsoShipped.join(' · ')}</p>
        </div>
        <div className="group quiet">
          <h3 className="group-label">
            {skills.handsOn.title} <span className="muted">· {skills.handsOn.subtitle}</span>
          </h3>
          <p className="muted">{skills.handsOn.items.join(' · ')}</p>
          <p className="small muted contrib">
            <span>{skills.contributions.label}:</span>
            {skills.contributions.items.map((it, i) => (
              <Fragment key={it.href}>
                {i > 0 && <span aria-hidden="true">·</span>}
                <a href={it.href} target="_blank" rel="noopener noreferrer">{it.text}</a>
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
