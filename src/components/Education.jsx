import React from 'react';
import { Container } from 'react-bootstrap';
import './Education.css';

const Education = () => {
  return (
    <div className="education-section py-5">
      <Container>
        <h3 className="text-center mb-5">Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2000 – 2004</div>
            <div className="timeline-content">
              <h4>Primary School</h4>
              <p>Details about your early education.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2005 – 2009</div>
            <div className="timeline-content">
              <h4>High School</h4>
              <p>Highlights and experiences from high school.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2010 – 2014</div>
            <div className="timeline-content">
              <h4>University</h4>
              <p>Academic pursuits and significant achievements.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Education;
