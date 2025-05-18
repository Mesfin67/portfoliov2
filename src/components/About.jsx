import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-section py-5">
      <Container>
        <h3 className="text-center mb-4">About Me</h3>
        <Row className="justify-content-center">
          <Col md={8} className="about-text text-center">
            <p>
              Share your story, experiences, and what drives you forward. Explain your background and what makes your journey unique.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="aa.jpg" alt="User1 picture 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="aa.jpg" alt="User1 picture 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="user2.jpg" alt="User1 picture 3" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
