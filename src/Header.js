import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './style.css';

const Header = () => (
  <Navbar bg="light" expand="lg" className="header">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav">
        <Nav.Link as={Link} to="/">
          <FaUser className="icon" /> About
        </Nav.Link>
        <Nav.Link as={Link} to="/portfolio">
          <FaBriefcase className="icon" /> Portfolio
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          <FaEnvelope className="icon" /> Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
