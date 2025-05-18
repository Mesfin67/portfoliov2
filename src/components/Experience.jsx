import React from "react";
import { Container } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-section py-5">
      <Container>
        <h3 className="text-center mb-5">Experience</h3>
        <div className="experience-timeline">
          <div className="timeline-item">
            <div className="timeline-date">2015 - 2017</div>
            <div className="timeline-content">
              <h4>Biology Teacher</h4>
              <p>Worked on various schools as biology teacher</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2017 - 2019</div>
            <div className="timeline-content">
              <h4>Mid advisorr</h4>
              <p>Enhanced skills in full-stack development and team collaboration.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2019 - Present</div>
            <div className="timeline-content">
              <h4>claims officer</h4>
              <p>Lead a team to build modern web applications.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
