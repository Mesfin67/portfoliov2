import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <Container>
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Whether you have a question, a project idea, or just want to say hi, my inbox is open.
        </p>
        <Row className="contact-content">
          {/* Left Column: Modern Contact Details */}
          <Col md={5} className="contact-info">
            <div className="info-card">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <span>dev.mesfinb@gmail.com</span>
              </div>
              <div className="info-item">
                <FaPhone className="info-icon" />
                <span>+251 703181803</span>
              </div>
              <div className="info-social">
                <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Mesfin67" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/tech_freakj" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </Col>
          {/* Right Column: Glassmorphic Contact Form */}
          <Col md={7}>
            <div className="form-card">
              <Form>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group controlId="formName">
                      <Form.Control type="text" placeholder="Your Name" required />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Control type="email" placeholder="Your Email" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formSubject">
                  <Form.Control type="text" placeholder="Subject" required />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control as="textarea" rows={5} placeholder="Message" required />
                </Form.Group>
                <Button href='mailto:dev.mesfinb@gmail.com' variant="primary" type="submit" className="contact-submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
                  <hr />

    </div>
  );
};

export default Contact;
