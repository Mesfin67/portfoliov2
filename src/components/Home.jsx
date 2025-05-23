import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane, FaEye } from 'react-icons/fa';
import CodeSnippet from './CodeSnippet';
import './Home.css';

const Home = () => {
  return (
    <div className="home-section">
      <Container fluid>
        <Row className="home-row align-items-center">
          {/* Left Column: Greeting */}
          <Col md={6} className="home-text">
            <h1 className="slide-in-left">👋 Hello, I'm Mesfin</h1>
            <p className="slide-in-left">
              I build clean, fast, and engaging web experiences that bring ideas to life.  
              I transform creative visions into intuitive digital products that spark delight.
            </p>
            <div className="social-icons slide-in-left">
              
              <a href="https://github.com/Mesfin67" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://twitter.com/tech_freakj" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://t.me/fforgiven" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane />
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="button-container slide-in-left">
              <Button
                variant="info"
                size="sm"
                href="/Mesfin-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                <span className="btn-text">Download CV</span>
                <span className="btn-icon"><FaEye /></span>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                href="https://t.me/fforgiven"
                className="contact-btn"
              >
                Contact Me
              </Button>
            </div>
          </Col>
          {/* Right Column: CodeSnippet */}
          <Col md={6} className="home-code slide-in-right">
            <CodeSnippet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
