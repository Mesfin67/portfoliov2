import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './NavigationBar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" fixed="top" expanded={expanded} className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="brand" onClick={handleNavClick}>
          Rediet Tesfaye
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
            >
              Home
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
            >
              Education
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={handleNavClick}
            >
              About Me
            </Link>
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              onClick={handleNavClick}
            >
              Gallery
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
