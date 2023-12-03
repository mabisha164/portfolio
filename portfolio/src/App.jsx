import "./App.css";
import React from "react";
import { NavLink, Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Hero from "./components/Hero";
import Social from "./components/Social";
import About from "./components/About";
import Skills from "./components/Skills";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" bg-gradient-to-r from-indigo-300 to-white">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Bot />
        <About />
        <Skills />
        <Hireme />
        <Projects />
        <Routes>
          {/* <Route path="/hero" element={<Hero />} /> */}

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
