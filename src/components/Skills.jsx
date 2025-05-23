import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  SiJavascript,
  SiTypescript,
  SiC,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skill-categories">
        <div className="skill-category">
          <h4>Programming Languages</h4>
          <ul className="skill-list">
            <li><SiJavascript className="skill-icon" /> JavaScript (Intermediate)</li>
            <li><SiTypescript className="skill-icon" /> TypeScript (Intermediate)</li>
            <li><SiC className="skill-icon" /> C (Intermediate)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Frameworks & Libraries</h4>
          <ul className="skill-list">
            <li><SiReact className="skill-icon" /> React Js</li>
            <li><SiExpress className="skill-icon" /> Express Js</li>
            <li><SiNodedotjs className="skill-icon" /> Node Js</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Databases</h4>
          <ul className="skill-list">
            <li><SiMongodb className="skill-icon" /> MongoDB</li>
            <li><SiMysql className="skill-icon" /> MySQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>CSS Frameworks</h4>
          <ul className="skill-list">
            <li><SiTailwindcss className="skill-icon" /> Tailwind CSS</li>
            <li><SiBootstrap className="skill-icon" /> Bootstrap</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Development Tools</h4>
          <ul className="skill-list">
            <li><SiGit className="skill-icon" /> Git</li>
            <li><SiGithub className="skill-icon" /> GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
