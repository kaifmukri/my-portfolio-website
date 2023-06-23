import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import littlelemon from "../../Assets/Projects/littlelemon.png";
import Movieland from "../../Assets/Projects/Movieland.png";
import gpt from "../../Assets/Projects/gpt.png";

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
              imgPath={littlelemon}
              isBlog={false}
              title="Little Lemon restraunt "
              description="A detailed and responsive website with table-booking functionality built using React. "
              ghLink="https://github.com/kaifmukri/Little-Lemon-restraunt"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movieland}
              isBlog={false}
              title="MovieLand"
              description="With this simple app, you can search for movies, know their year of release and know if it a series or movie. This app was built using REACT JS"
              ghLink="https://github.com/kaifmukri/MovieLand"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt}
              isBlog={false}
              title="Modern UI/UX GPT-3"
              description="A fully Responsive Modern UI/UX Website in React JS"
              ghLink="https://github.com/kaifmukri/Modern-UI-UX-GPT-3"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
