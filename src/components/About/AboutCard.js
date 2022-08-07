import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Rajat Tanwar </span>
            from <span className="purple"> Delhi, India.</span>
            <br /> I am always ready to learn new things. I love to code and drink coffee😁. 
            <br /> I am a MCA student from JIMS (Jagan Institute of Management Studies). 
            <br /> I completed my Graduation from IITM (Institute of Innovation in Techology & Management) Affiliated with GGSIPU with 8.4 GPA.
            <br /> I'm a Front End Developer and I like Fries. No, Fries is not a Javascript Framework, I mean not yet😉.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music 🎶
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading 💹
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring 🗺️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hardwork Is Worthless For Those That Don't Believe In Themselves..."{" "}
          </p>
          <footer className="blockquote-footer">Rajat :D</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
