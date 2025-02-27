import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import projectImage1 from './assets/images/crystal_collector.png';
import projectImage2 from './assets/images/gif_tastic.jpg';
import projectImage3 from './assets/images/letter_guess.jpg';
import projectImage4 from './assets/images/trivia.jpg';
import projectImage5 from './assets/images/ill_HUE_minate.jpg';
import './style.css';

const Portfolio = () => (
  <Container id="main-container">
    <motion.section
      className="main-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Portfolio</h1>
      <Row>
        <Col md={4}>
          <Card className="work">
            <Card.Img variant="top" src={projectImage3} />
            <Card.Body>
              <Card.Title>Letter Guess Game</Card.Title>
              <Card.Link href="https://luckyp86h.github.io/Letter-Guess-Game">View Project</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="work">
            <Card.Img variant="top" src={projectImage1} />
            <Card.Body>
              <Card.Title>Crystal Collector Game</Card.Title>
              <Card.Link href="https://luckyp86h.github.io/Crystal-Collector">View Project</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="work">
            <Card.Img variant="top" src={projectImage4} />
            <Card.Body>
              <Card.Title>Trivia Game</Card.Title>
              <Card.Link href="https://luckyp86h.github.io/Trivia-Game">View Project</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="work">
            <Card.Img variant="top" src={projectImage2} />
            <Card.Body>
              <Card.Title>Dynamic GIF Page</Card.Title>
              <Card.Link href="https://luckyp86h.github.io/Gif-Tastic-Dynamic">View Project</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="work">
            <Card.Img variant="top" src={projectImage5} />
            <Card.Body>
              <Card.Title>ill-HUE-minate</Card.Title>
              <Card.Link href="https://luckyp86h.github.io/illHUEminate">View Project</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </motion.section>
  </Container>
);

export default Portfolio;
