import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import profileImage from './assets/images/profile.jpg';
import aboutMeContent from './content/aboutMe';
import './style.css';

const About = () => (
  <Container id="main-container">
    <motion.section
      className="main-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>About Me</h1>
      <Row>
        <Col md={4}>
          <Image src={profileImage} roundedCircle className="auth-image" />
        </Col>
        <Col md={8}>
          <p>{aboutMeContent}</p>
          <p><a href="/Resume.pdf" target="_blank" className="btn btn-primary">Download my resume</a></p>
        </Col>
      </Row>
    </motion.section>
  </Container>
);

export default About;
