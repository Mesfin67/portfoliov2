import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeartAnimation from "./components/HeartAnimation";
import "./App.css";

function App() {
  return (
    <div>
      <HeartAnimation />
      <NavigationBar />
      <section id="home">
        <Home />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
