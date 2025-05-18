import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-section py-5">
      <Container>
        <h3 className="text-center mb-5">Gallery</h3>
        <Row>
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Image src="aa.jpg" alt="Gallery Image 1" rounded fluid />
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Image src="aa.jpg" alt="Gallery Image 2" rounded fluid />
          </Col>
          <Col md={4} sm={6} xs={12} className="mb-4">
            <Image src="aa.jpg" alt="Gallery Image 3" rounded fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
