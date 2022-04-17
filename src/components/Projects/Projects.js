import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shotflix from "../../Assets/Projects/shotflix.png";
import crypto from "../../Assets/Projects/crypto.png";
import real from "../../Assets/Projects/real.png";
import hogwarts from "../../Assets/Projects/hogwarts.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shotflix}
              isBlog={false}
              title="Shotflix"
              description="Shotflix is a free streaming service that allows our member to watch movies without commercials on an internet-connected Desktop with the help of react.js, Material-UI, and Firebase."
              link="https://github.com/GetRajatTanwar/Shotflix"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Maniac"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hogwarts}
              isBlog={false}
              title="The Hogwarts Pizza"
              description="We've made a Online Food Management System with the help of Python GUI & MySQL. The objective of this prject is to sell different varieties of Pizza online like Dominos which supports html, css, and js code with instant view of website."
              link="https://github.com/GetRajatTanwar/The-Hogwarts-Pizza"
            />
          </Col>

          <Col md={4} className="Real Estate Price Predictor">
            <ProjectCard
              imgPath={real}
              isBlog={false}
              title="Real Estate Price Predictor"
              description="This is a web based project which is used to predict the price of house, flat or any real eastate using supervised machine learning algorithms. The model was successfully able to detect the price of real estate."
              link="https://github.com/GetRajatTanwar/Real-Estate_Price_Predictor"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
