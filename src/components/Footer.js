import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 Valerio Farrotti. Built with React and Coding Agents.</p>
        <p>
          <a 
            href="https://github.com/vallops99/my-website" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#667eea', textDecoration: 'none' }}
          >
            See the source code on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;