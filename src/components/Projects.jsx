import React from 'react';
import { FaReact } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "A responsive weather application built with React. ",
    image: "/weather.webp",
    liveUrl: "https://weather-app-beige-nine-93.vercel.app/",
    extra: <FaReact style={{ marginRight: '6px' }} />
  },
  {
    id: 2,
    title: "Movie Explorer",
    description: "A movie explorer built with React for dynamic search.",
    image: "/movie.webp",
    liveUrl: "https://dotmovieexplorer.vercel.app/",
    extra: <FaReact style={{ marginRight: '6px' }} />
  },
  {
    id: 3,
    title: "MERN Bookstore",
    description: "A MERN stack bookstore app with dynamic inventory management.",
    image: "/book.png",
    liveUrl: "https://b00kst0re.netlify.app/"
  },
  {
    id: 4,
    title: "Workout App",
    description: "A workout app built with MERN stack to monitor fitness routines.",
    image: "/workout.png",
    liveUrl: "https://w0rk0ut-tracker.netlify.app/"
  },
  {
    id: 5,
    title: "Aviation Quiz",
    description: "A quiz app for aviation students built with the MERN stack.",
    image: "/quiz.webp",
    liveUrl: "https://amt-technician.netlify.app"
  },
  {
    id: 6,
    title: "Eyorika Voluntary",
    description: "A MERN stack web app for voluntary initiatives by Eyorika.",
    image: "/charity.webp",
    liveUrl: "https://eyorika-hub.netlify.app"
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3>
                {project.extra && project.extra} {project.title}
              </h3>
              <p>{project.description}</p>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-button">
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
