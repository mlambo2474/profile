import React from "react";
import image from "../assets/tondev.jpg";
import hero from "../assets/hero.jpg";
import profileImage from "../assets/tonderaimlambosimage.png"
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('[data-projects-section]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={hero}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 bg-opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-10 h-auto text-white">
          {/* Image Section */}
          <motion.div
            className="mb-8 lg:mb-0 md:mr-20 flex-shrink-0 "
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
          >
            <img
              src={profileImage}
              alt="Tonderai Mlambo's image"
              className="w-76 h-76 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <div className="text-center lg:text-left">
            <TypewriterHeading />
            
            {/* View Projects Button */}
            <motion.button
              onClick={scrollToProjects}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View Projects
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Description Section */}
      <div className="flex justify-center items-center py-16 bg-gray-50">
        <p className="text-gray-600 lg:hidden sm:text-lg text-center leading-relaxed max-w-4xl px-4">
          I'm a passionate Front-end developer who loves building user-friendly,
          responsive, user-focused mobile and web applications using modern technologies like <br />
          <span className="bg-pink-300 px-2 mx-1 font-bold text-sm rounded-lg">HTML</span>
          <span className="bg-pink-300 px-2 mx-1 font-bold text-sm rounded-lg">CSS</span>
          <span className="bg-pink-300 px-2 mx-1 font-bold text-sm rounded-lg">JavaScript</span>
          <span className="bg-pink-300 px-2 mx-1 font-bold text-sm rounded-lg">TypeScript</span><br />
          <span className="bg-pink-300 px-2 mx-1 font-bold text-sm rounded-lg">Tailwind</span>
          <span className="bg-pink-300 px-2 mx-1 font-bold text-sm rounded-lg">React</span> 
          <span className="bg-pink-300 px-2 mx-1 font-bold text-sm rounded-lg">Redux</span><br />
          I enjoy turning ideas into clean,
          efficient code and constantly learning new tools to level up my
          craft.
        </p>
      </div>

      {/* Projects Section */}
      <div data-projects-section className="py-2 bg-white">
        <h1 className="text-3xl text-center text-indigo-500 font-bold mb-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:mx-20 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
