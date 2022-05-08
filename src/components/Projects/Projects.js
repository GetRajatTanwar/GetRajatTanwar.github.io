import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shotflix from "../../Assets/Projects/shotflix.png";
import crypto from "../../Assets/Projects/crypto.png";
import real from "../../Assets/Projects/real.png";
import hogwarts from "../../Assets/Projects/hogwarts.png";
import face from "../../Assets/Projects/face.png";
import krypton from "../../Assets/Projects/krypton.PNG";

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
              imgPath={crypto}
              isBlog={false}
              title="Crypto Maniac"
              description="Crypro Maniac is a React.js based project on Cryptocurrency where we get all the information regarding top 100 coins around the world. "
              link="https://crypto-maniac-agr.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypton}
              isBlog={false}
              title="Krypton"
              description="Krypton is a Modern Real World Web 3.0 Blockchain application. This is a React.js based project which is used to sending transactions through Blockchain & store those transactions right inside of the application.   "
              link="https://krypton-agr.vercel.app/"
            />
          </Col>

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
              imgPath={hogwarts}
              isBlog={false}
              title="The Hogwarts Pizza"
              description="We've made a Online Food Management System with the help of Python GUI & MySQL. The objective of this prject is to sell different varieties of Pizza online like Dominos which supports html, css, and js code with instant view of website."
              link="https://github.com/GetRajatTanwar/The-Hogwarts-Pizza"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real}
              isBlog={false}
              title="Real Estate Price Predictor"
              description="This is a web based project which is used to predict the price of house, flat or any real eastate using supervised machine learning algorithms. The model was successfully able to detect the price of real estate."
              link="https://github.com/GetRajatTanwar/Real-Estate_Price_Predictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition Attendance System"
              description="The objective of this project is to build a face recognition-based attendance monitoring system for educational institution to upgrade the current attendance system. Using Python & ML, HAAR, OpenCV. We've also won 1 price for this project in Internal Smart India Hackathon 2022." 
              link=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
