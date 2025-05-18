import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="py-3" style={{ background: 'rgba(255, 192, 203, 0.8)' }}>
      <Container className="text-center">
        <p>&copy; 2025 Rediet Tesfaye
</p>
      </Container>
    </footer>
  );
};

export default Footer;
