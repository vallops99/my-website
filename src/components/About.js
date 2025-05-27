import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            👨‍💻
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm Valerio, <strong>Backend Developer & Bitcoin enthusiast</strong> who loves 
              intuitive, clean and modern technologies development and design.
            </p>
            <p>
              With over 6 years of experience in building scalable backend systems, I specialize 
              in creating robust APIs, optimizing database performance, and implementing DevOps 
              best practices. My passion lies in solving complex technical challenges and 
              building systems that can handle millions of users.
            </p>
            <div className="quote">
              "Handles millions of requests silently while everyone assumes it's magic."
            </div>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through technical blogs and mentoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 