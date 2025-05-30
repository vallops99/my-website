import React from 'react';
import Github from '../icons/github';
import Linkedin from '../icons/linkedin';
import Email from '../icons/email';

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
            <a href="mailto:valerio@farrotti.com">
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