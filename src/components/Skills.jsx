import React, { useState } from "react";
import uxImage from "../assets/designer3.JPG";
import devImage from "../assets/designer2.png";
import webImage from "../assets/designer6.png";
import { motion } from "framer-motion";

const Skills = () => {

  return (
    <motion.div
      className="flex  justify-center items-center flex-wrap  snap-start"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="relative  h-92 group overflow-hidden rounded-lg shadow-lg mx-12 my-4 lg:mt-12">
        <img src={uxImage} alt="" className="h-92 w-48  rounded-lg" />
        <div className=" absolute bottom-0 right-0 h-full w-52 bg-purple-800/60 text-white font-bold text-md flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <span>Layouts</span>
          <span>Colors</span>
          <span>Typography</span>
          <span className="pb-2"> visuals</span>
          <br />
          <span>Navigation flow</span>
          <span>Ease of use</span>
          <span>Accessibility</span>
          <span>User satisfaction</span>
        </div>
      </div>

      <div className="relative  h-92 group overflow-hidden rounded-lg shadow-lg mx-12 my-4 lg:mt-12">
        <img src={devImage} alt="" className="h-92 w-48 rounded-lg" />
        <div className=" absolute bottom-0 right-0 h-full w-52 bg-purple-800/60 text-white font-bold text-md flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <span>HTML</span>
          <span>CSS</span>
          <span>Tailwind</span>
          <span>JAVASCRIPT</span>
          <span>React</span>
          <span>API interaction</span>
        </div>
      </div>

      <div className="relative h-92 group overflow-hidden rounded-lg shadow-lg mx-12 my-4 lg:mt-12">
        <img src={webImage} alt="" className="h-92 w-48 rounded-lg" />
        <div className=" absolute bottom-0 right-0 h-full w-52 bg-purple-800/60 text-white pl-4 font-bold text-md flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <span>Flexible Layouts</span>
          <span>Media Querries</span>
          <span>Mobile-First design</span>
          <span>Responsive images</span>
          <span>Touch Friendly UI</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
