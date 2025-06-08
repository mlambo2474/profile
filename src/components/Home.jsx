import React from "react";
import image from "../assets/tondev.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-10 h-auto min-h-screen text-purple-900">
      {/* Image Section */}
      <motion.div
        className="mb-8 lg:mb-0 lg:mr-12 flex-shrink-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={image}
          alt="Tonderai Mlambo"
          className="w-64 h-64 rounded-full object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="max-w-xl text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-4">
          Hi, <br />I am Tonderai Mlambo
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          I'm a passionate Front-end developer who loves building user-friendly,
          responsive, user-focused mobile and web applications using modern
          technologies like JavaScript, TypeScript, React, Tailwind, and
          Node.js. I enjoy turning ideas into clean, efficient code and
          constantly learning new tools to level up my craft.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
