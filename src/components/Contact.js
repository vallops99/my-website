import React from 'react';
import { ReactComponent as Github } from '../icons/github.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as Email } from '../icons/email.svg';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Let's Build Something Amazing Together</h2>
          <p>
            Ready to discuss your next project? I'm always excited to work on 
            challenging backend systems and help bring your ideas to life.
          </p>
          <div className="contact-links">
            <a href="mailto:valerio.farrotti@gmail.com">
                <Email />
            </a>
            <a href="https://linkedin.com/in/valerio-farrotti" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://github.com/vallops99" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </div>
          <a href="#home" className="btn-primary">Back to Top</a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 