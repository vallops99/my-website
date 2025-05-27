import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi! 👋<br />
              I'm <strong>Valerio Farrotti</strong>
            </h1>
            <p className="subtitle">
              Backend Developer, passionate about open source, Bitcoin and turning complex problems into elegant solutions.
            </p>
            <p className="description">
              Building secure, high-performance systems that scale from 10 to 10 million requests. 
              Clean code, CI/CD automation and simpleness.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary">Get in Touch</a>
              <a href="https://farrotti.com/resume.pdf" target="_blank" className="btn-secondary" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 