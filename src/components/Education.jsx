import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FaCode, FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  // Desktop: Adjust the moving circle on the timeline as user scrolls.
  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector('.timeline');
      const circle = document.querySelector('.moving-circle');
      if (!timeline || !circle) return;

      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (timelineRect.top < windowHeight && timelineRect.bottom > 0) {
        const progress = (windowHeight - timelineRect.top) / (windowHeight + timelineRect.height);
        const timelineHeight = timeline.offsetHeight;
        const maxTop = timelineHeight - circle.offsetHeight;
        circle.style.top = `${progress * maxTop}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial adjustment
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile: Animate cards on scroll using Intersection Observer.
  useEffect(() => {
    if (window.innerWidth <= 767) {
      const mobileCards = document.querySelectorAll('.mobile-cards .card');
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      mobileCards.forEach(card => observer.observe(card));
    }
  }, []);

  return (
    <div className="education-section py-5">
      <Container>
        <h3 className="text-center mb-5">Education</h3>
        
        {/* Desktop Timeline View: Visible on wide screens */}
        <div className="desktop-timeline">
          <div className="timeline">
            <div className="moving-circle"></div>
            {/* Timeline Item 1 */}
              <div className="timeline-item item-three">
              {/* <div className="timeline-date">2021 – 2024</div> */}
              <div className="timeline-content">
                <h4>Hawassa University</h4>
                <p>
                  I joined Hawassa University but soon left to focus solely on web development, which is my true passion.
                </p>
              </div>
            </div>
            <div className="timeline-item item-one">
              {/* <div className="timeline-date">2008 – 2012</div> */}
              <div className="timeline-content">
                <h4>Alx Software Engineering Foundations</h4>
                <p>
                  I learned the basics of coding, problem solving, and system design that laid a strong foundation for my software development journey.
                </p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="timeline-item item-two">
              {/* <div className="timeline-date">2012 – 2020</div> */}
              <div className="timeline-content">
                <h4>Digital Opportunity Trust</h4>
                <p>
                  I gained hands-on experience in MERN stack web development by building dynamic and scalable web applications.
                </p>
              </div>
            </div>
            {/* Timeline Item 3 */}
          
          </div>
        </div>

        {/* Mobile Cards View: Visible on small screens */}
        <div className="mobile-cards">
           <div className="card">
            <div className="content">
              <div className="icon-date">
                <FaGraduationCap size={28} color="#333" />
                {/* <span className="date">2021 – 2024</span> */}
              </div>
              <h4 className="header">Hawassa University</h4>
              <p className="para">
                I joined Hawassa University but soon left to focus solely on web development because it is my true passion.
              </p>
            </div>
          </div>
          {/* Mobile Card 1 */}
          <div className="card">
            <div className="content">
              <div className="icon-date">
                <FaCode size={28} color="#333" />
                {/* <span className="date">2008 – 2012</span> */}
              </div>
              <h4 className="header">Alx Software Engineering Foundations</h4>
              <p className="para">
                I learned the basics of coding, problem solving, and system design that laid a strong foundation for my software development journey.
              </p>
            </div>
          </div>
          {/* Mobile Card 2 */}
          <div className="card">
            <div className="content">
              <div className="icon-date">
                <FaCode size={28} color="#333" />
                {/* <span className="date">2012 – 2020</span> */}
              </div>
              <h4 className="header">Digital Opportunity Trust</h4>
              <p className="para">
                I gained hands-on experience in MERN stack web development, building dynamic and scalable web applications and deepening my understanding of modern technology.
              </p>
            </div>
          </div>
          {/* Mobile Card 3 */}
         
        </div>
      </Container>
    </div>
  );
};

export default Education;
