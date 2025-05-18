import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section py-5">
      <Container>
        <h3 className="text-center mb-5">Hire me</h3>
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>
          <Button variant="info" type="submit" size="sm">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
