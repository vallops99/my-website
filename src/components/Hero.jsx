import { hero, facts, contact } from '../content';

const Hero = () => (
  <section id="top" className="hero">
    <div className="aurora" aria-hidden="true" />
    <div className="wrap hero-grid">
      <div>
        <p className="eyebrow"><span className="dot" aria-hidden="true" />{hero.badge}</p>
        <h1>{hero.title}</h1>
        <p className="lead">{hero.lead}</p>
        <p className="prose muted">{hero.description}</p>
        <div className="actions">
          <a className="btn" href={hero.primary.href}>{hero.primary.label}</a>
          <a className="btn btn-secondary" href={hero.secondary.href}>{hero.secondary.label}</a>
        </div>
      </div>
      <aside className="card" aria-label="At a glance">
        <dl>
          {facts.map((f) => (
            <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
          ))}
          <div><dt>Email</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
        </dl>
      </aside>
    </div>
  </section>
);

export default Hero;
