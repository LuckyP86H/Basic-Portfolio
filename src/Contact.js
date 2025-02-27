import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './style.css';

const Contact = () => (
  <Container id="main-container">
    <motion.section
      className="main-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Contact</h1>
      <Form id="contact-form">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Paul Xu" required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@mail.com" required />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </motion.section>
  </Container>
);

export default Contact;
