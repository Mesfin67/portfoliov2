import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Education.css';

const Education = () => {
  useEffect(() => {
    // Update the vertical position of the moving circle along the timeline as the user scrolls
    const handleScroll = () => {
      const timeline = document.querySelector('.timeline');
      const circle = document.querySelector('.moving-circle');
      if (!timeline || !circle) return;

      // Calculate how far the timeline is in view
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (timelineRect.top < windowHeight && timelineRect.bottom > 0) {
        // Calculate a progress factor (0 at the top of the timeline, 1 at the bottom)
        const progress = (windowHeight - timelineRect.top) / (windowHeight + timelineRect.height);
        const timelineHeight = timeline.offsetHeight;
        const maxTop = timelineHeight - circle.offsetHeight;
        // Set the circle's top position to a percentage of timeline height
        circle.style.top = `${progress * maxTop}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial positioning
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 return (
    <div className="education-section py-5">
      <Container>
        <h3 className="text-center mb-5">Education</h3>
       
        <div className="timeline">
          {/* The moving circle will slide along the line on scroll */}
          <div className="moving-circle"></div>
          
          {/* Timeline Item 1 – placed close to the vertical line */}
          <div className="timeline-item item-one">
            <div className="timeline-date">2008 – 2012</div>
            <div className="timeline-content">
              <h4>Sinados Primary School</h4>
              <p>
                I learned basic reading, writing, and numbers here. This is where my love for learning began.
              </p>
            </div>
          </div>
          
          {/* Timeline Item 2 – placed a bit further from the line */}
          <div className="timeline-item item-two">
            <div className="timeline-date">2012 – 2020</div>
            <div className="timeline-content">
              <h4>Tatem Secondary and Tertiary School</h4>
              <p>
                I studied many subjects and learned to think clearly. It was a busy time full of homework and experiments.
              </p>
            </div>
          </div>
          
          {/* Timeline Item 3 – placed close again to the line */}
          <div className="timeline-item item-three">
            <div className="timeline-date">2021 – 2024</div>
            <div className="timeline-content">
              <h4>Hawassa University</h4>
              <p>
                I joined Hawassa University. Soon, I left to learn web development because it is what I love doing.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Education;
