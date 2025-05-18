import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section mt-5">
      <Container className="home-container">
        <Row className="home-row align-items-center justify-content-center">
          <Col md={6} className="home-image text-center">
            <img
              src="user2.jpg"
              alt="User2"
              className="img-fluid rounded-circle slide-in-left"
            />
          </Col>
          <Col md={6} className="home-text text-center">
            <h1 className="slide-in-right">Hi, I am Rediet Tesfaye</h1>
            <p className="slide-in-right">
              This is some detailed information about Rediet Tesfaye. Share your background, passions, and what makes you unique.
            </p>
            <Button
              variant="info"
              size="sm"
              href="/resume.pdf"
              download
              className="slide-in-right download-btn"
            >
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
