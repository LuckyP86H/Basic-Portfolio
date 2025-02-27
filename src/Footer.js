import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './style.css';

const Footer = () => (
  <footer className="footer">
    <Container className="text-center">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/paul-xu/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/LuckyP86H/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>Paul X. 2025</p>
    </Container>
  </footer>
);

export default Footer;
