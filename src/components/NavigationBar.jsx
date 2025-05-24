import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './NavigationBar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  // Collapse the navbar
  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="brand" onClick={handleNavClick}>
          Mesfin
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
          className="custom-toggler"
        >
          {expanded ? (
            <span className="toggler-icon">&#x2715;</span> // X icon
          ) : (
            <span className="toggler-icon">&#9776;</span> // Hamburger icon
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={handleNavClick}
              onSetActive={handleNavClick}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={handleNavClick}
              onSetActive={handleNavClick}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={handleNavClick}
              onSetActive={handleNavClick}
            >
              Education
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={handleNavClick}
              onSetActive={handleNavClick}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={handleNavClick}
              onSetActive={handleNavClick}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
