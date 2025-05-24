import React, { useEffect } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiBootstrap, SiMongodb } from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "A responsive weather application built with React.",
    image: "/weather.webp",
    liveUrl: "https://weather-app-beige-nine-93.vercel.app/",
    techIcons: (
      <div className="tech-icons">
        <FaReact size={24} color="#61DBFB" style={{ marginRight: '6px' }} />
        <SiBootstrap size={24} color="#563d7c" style={{ marginRight: '6px' }} />
      </div>
    )
  },
  {
    id: 2,
    title: "Movie Explorer",
    description: "A movie explorer built with React for dynamic search.",
    image: "/movie.webp",
    liveUrl: "https://dotmovieexplorer.vercel.app/",
    techIcons: (
      <div className="tech-icons">
        <FaReact size={24} color="#61DBFB" style={{ marginRight: '6px' }} />
        <SiBootstrap size={24} color="#563d7c" style={{ marginRight: '6px' }} />
      </div>
    )
  },
  {
    id: 3,
    title: "MERN Bookstore",
    description: "A MERN stack bookstore app with dynamic inventory management.",
    image: "/book.png",
    liveUrl: "https://b00kst0re.netlify.app/",
    techIcons: (
      <div className="tech-icons">
        <FaReact size={24} color="#61DBFB" style={{ marginRight: '6px' }} />
        <FaNodeJs size={24} color="#68A063" style={{ marginRight: '6px' }} />
        <SiMongodb size={24} color="#4DB33D" style={{ marginRight: '6px' }} />
      </div>
    )
  },
  {
    id: 4,
    title: "Workout App",
    description: "A workout app built with the MERN stack to monitor fitness routines.",
    image: "/workout.png",
    liveUrl: "https://w0rk0ut-tracker.netlify.app/",
    techIcons: (
      <div className="tech-icons">
        <FaReact size={24} color="#61DBFB" style={{ marginRight: '6px' }} />
        <FaNodeJs size={24} color="#68A063" style={{ marginRight: '6px' }} />
        <SiMongodb size={24} color="#4DB33D" style={{ marginRight: '6px' }} />
      </div>
    )
  },
  {
    id: 5,
    title: "Aviation Quiz",
    description: "A quiz app for aviation students built with the MERN stack.",
    image: "/quiz.webp",
    liveUrl: "https://amt-technician.netlify.app",
    techIcons: (
      <div className="tech-icons">
        <FaReact size={24} color="#61DBFB" style={{ marginRight: '6px' }} />
        <FaNodeJs size={24} color="#68A063" style={{ marginRight: '6px' }} />
        <SiMongodb size={24} color="#4DB33D" style={{ marginRight: '6px' }} />
      </div>
    )
  },
  {
    id: 6,
    title: "Eyorika Charity",
    description: "A MERN stack web app for voluntary initiatives by Eyorika.",
    image: "/charity.webp",
    liveUrl: "https://eyorika-hub.netlify.app",
    techIcons: (
      <div className="tech-icons">
        <FaReact size={24} color="#61DBFB" style={{ marginRight: '6px' }} />
        <FaNodeJs size={24} color="#68A063" style={{ marginRight: '6px' }} />
        <SiMongodb size={24} color="#4DB33D" style={{ marginRight: '6px' }} />
      </div>
    )
  }
];

const Projects = () => {
  // Animate cards on scroll using Intersection Observer.
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="icon-group">
                {project.techIcons}
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Live View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
