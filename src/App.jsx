import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection-bg-cyan-300 selection-text-cyan-900">
      <div className="fixed-full-bg">
        <div className="radial-gradient-bg"></div>
      </div>

      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
