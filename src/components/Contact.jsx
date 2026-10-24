import { contact } from '../content';

const Contact = () => (
  <section id="contact" className="contact" aria-labelledby="contact-h">
    <div className="aurora aurora-low" aria-hidden="true" />
    <div className="wrap">
      <h2 id="contact-h">{contact.heading}</h2>
      <p className="prose muted">{contact.body}</p>
      <div className="actions">
        <a className="btn" href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <ul className="links">
        {contact.links.map((l) => (
          <li key={l.href}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
        ))}
      </ul>
    </div>
  </section>
);

export default Contact;
