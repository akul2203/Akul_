import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"; 

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
              imgPath={"https://wedigitalindia.com/uploads/category/4a71386405f67a61db325dd65a631523.jpg"}
              isBlog={false}
              title="Exam Portal"
              description="An exam portal application offering MCQ-based assessments, automated grading, real-time results, progress tracking, and secure online testing."
              ghLink="https://github.com/akul2203/ExamPortal.git"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://img.freepik.com/free-photo/stethoscope-blue-background_23-2147612257.jpg?t=st=1716539463~exp=1716543063~hmac=143d9e691d4b3bc64b3439b39769e48800e26b3dde0748cb7843ad93aa89da0d&w=996"}
              isBlog={false}
              title="UpcharDwar(Virtual Clinic)"
              description="A virtual clinic application enabling remote consultations, prescription management, and health monitoring for patients and doctors via secure, user-friendly interface."
              ghLink="https://github.com/akul2203/Upchardwar_Angular.git"
 
            />
          </Col>

      
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
