import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
       <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
     
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
