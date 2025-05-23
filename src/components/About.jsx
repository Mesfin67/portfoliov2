import React from 'react';
import { Container } from 'react-bootstrap';
import { FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <Container>
        <h2>About Me</h2>
        <p>
          I am a creative developer passionate about building elegant and functional web applications.
          I enjoy experimenting with new technologies and innovative user experiences.
        </p>
        <div className="extra-info">
          <div className="info-item"><FaMapMarkerAlt className="info-icon" /><span>Addis Ababa, Ethiopia</span></div>
          <div className="info-item"><FaClock className="info-icon" /><span>Freelance Remotly</span></div>
          <div className="info-item"><FaEnvelope className="info-icon" /><span>dev.mesfinb@gmail.com</span></div>
        </div>
        <div className="about-image-container">
          <img src="/aa.JPG" alt="mesfinimage" className="clipped-image" />
        </div>
      </Container>
    </div>
  );
};

export default About;
