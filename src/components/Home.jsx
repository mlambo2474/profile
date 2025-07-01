import React from "react";
import image from "../assets/tondev.jpg";
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";
import Icons from "./Icons"

const Home = () => {
  return (
    <div className="bg-[url('https://files.123freevectors.com/wp-content/original/107103-light-purple-abstract.jpg')] bg-cover bg-center bg-cover h-full  ">
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
        className=" relative flex w-full p-10 items-center justify-center overflow-x-hidden"
      >
        <img
          src="https://files.123freevectors.com/wp-content/original/107103-light-purple-abstract.jpg"
          alt="header"
          className="w-full h-100  rounded-lg shadow-lg"
        />

        <div className=" absolute flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-10 h-auto  text-purple-900">
          {/* Image Section */}
          <motion.div
            className="mb-8 lg:mb-0 lg:mr-12 flex-shrink-0 lg:pt-12 "
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
          >
            <img
              src={image}
              alt="Tonderai Mlambo's image"
              className="w-64 h-64 rounded-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <TypewriterHeading />

        </div>
      </motion.div>

      <div className="flex justify-center items-center ">
        <p className=" text-gray-600 lg:hidden sm:text-lg text-center leading-relaxed max-w-100">
          I'm a passionate Front-end developer who loves building user-friendly,
          responsive, user-focused mobile and web applications using  modern technologies like <br />
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

  <div>
         <Icons />

        <h1 className="text-2xl text-center text-indigo-500 font-bold ">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:mx-20 place-items-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default Home;
