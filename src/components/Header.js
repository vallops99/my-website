import React from 'react';
import { ReactComponent as Github } from '../icons/github.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#home" className="logo">
            VF;
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>    
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="social-links">
            <a href="https://github.com/vallops99" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://linkedin.com/in/valerio-farrotti" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;