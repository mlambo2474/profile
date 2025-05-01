

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contacts from "./components/Contact";
import AboutMe from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index  element={<Home /> } />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
   
    </>
  );
}

export default App;



// Project Console: https://console.firebase.google.com/project/portfolio-c590f/overview    
// Hosting URL: https://portfolio-c590f.web.app