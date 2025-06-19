import React from "react";
import image from "../assets/tondev.jpg";
import { motion } from "framer-motion";
import ticVideo from "../assets/ticvideo.mp4";
import amazonvid from "../assets/amazon.mp4";
import teslavid from "../assets/tesalvid.mp4";
import airbnbvid from "../assets/airbnb.mp4";
import netflixvid from "../assets/netflixvid.mp4";
import signupvid from "../assets/signUPvideo.mp4";

import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
// import teslavid from "../assets/teslavid.mp4";
import Skills from "./Skills"; // Assuming Skills component is in the same directory

const Home = () => {
  return (
    <div className="bg-[url('https://files.123freevectors.com/wp-content/original/107103-light-purple-abstract.jpg')] bg-cover bg-center bg-cover h-full  ">

   <motion.div 
      initial ={{ opacity: 0, y:-70}}
      animate ={{ opacity:1, y:0}}
      transition ={{ duration: 1.0, ease: "easeOut", delay:0.6}}
      className=" relative flex w-full p-10 items-center justify-center overflow-x-hidden">
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
          transition={{ duration: 1.0, ease: "easeOut", delay:0.6}}
        >
          <img
            src={image}
            alt="Tonderai Mlambo's image"
            className="w-64 h-64 rounded-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="max-w-xl text-center lg:text-left lg:pt-12"
          initial={{ opacity: 0, x:80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-4">
           Tonderai Mlambo
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            I'm a passionate Front-end developer who loves building
            user-friendly, responsive, user-focused mobile and web applications
            using modern technologies like JavaScript, TypeScript, React,
            Tailwind, and Node.js. I enjoy turning ideas into clean, efficient
            code and constantly learning new tools to level up my craft.
          </p>
        </motion.div>
      </div>


        {/* If you want it on top, wrap in a relative and use absolute: */}
      </motion.div>



  


      <div>
          <motion.div 
      initial ={{ opacity: 0, y: 80}}
      animate ={{ opacity:1, y:0}}
      transition ={{ duration: 2.0, ease: "easeOut", delay:2.5}}
        className="text-center mt-8 lg:mt-10 border-t border-gray-300 pt-6">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mt-10">
            My Work
          </h2>

          <div className=" hidden lg:block text-indigo-500 text-5xl fixed bottom-2 left-8 mt-16 z-index-100">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="p-2 hover:bg-pink-200 rounded-full  shadow-2xl mb-2"
            >
              <FaReact />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="p-2 hover:bg-pink-200 rounded-full shadow-2xl mb-2"
            >
              <FaJs className="rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="p-2 hover:bg-pink-200 rounded-full shadow-2xl mb-2"
            >
              <FaHtml5 className="rounded-full" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="p-2 hover:bg-pink-200 rounded-full shadow-2xl mb-2"
            >
              <FaCss3Alt className="rounded-full" />
            </motion.div>
                 <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="p-2 hover:bg-pink-200 rounded-full shadow-2xl mb-2"
            >
              <SiTailwindcss className="rounded-full" />
            </motion.div>

               <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="p-2 hover:bg-pink-200 rounded-full shadow-2xl mb-2"
            >
              <SiTypescript className="rounded-full" />
            </motion.div>
         
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="p-2 hover:bg-pink-200 rounded-full shadow-2xl mb-2"
            >
              <FaGit className="rounded-full" />
            </motion.div>

               <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="p-2 hover:bg-pink-200 rounded-full shadow-2xl mb-2"
            >
              <FaGithub className="rounded-full" />
            </motion.div>
          

          </div>

          <p className="text-center text-gray-600 mt-2 mb-8 px-4 lg:px-48">
            I designed and developed these components using React, focusing on
            creating interactive, reusable UI elements that look great and feel
            smooth to use. Each video below is a clone that highlights a piece
            of my work, practising my skills in making beautiful user-friendly
            designs — from just creative designs to functional components — all
            crafted with a mix of coding, creativity, and a love for making the
            web more interactive and enjoyable and growing my skill.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 place-items-center px-4 lg:px-10 pt-10  ">
          <video
            src={netflixvid}
            className=" transition-all duration-500 ease-in-out transform lg:hover:scale-170 rounded-lg shadow-lg mb-4"
            controls
            loop
            muted
            playsInline
            height="400px"
            width="400px"
          ></video>

          <video
            src={teslavid}
            className=" transition-all duration-500 ease-in-out transform lg:hover:scale-170 rounded-lg shadow-lg mb-4"
            controls
            loop
            muted
            playsInline
            height="400px"
            width="400px"
          ></video>

          <video
            src={ticVideo}
            className=" transition-all duration-500 ease-in-out transform lg:hover:scale-170 rounded-lg shadow-lg mb-4 "
            controls
            loop
            muted
            playsInline
            height="400px"
            width="400px"
          ></video>

          <video
            src={amazonvid}
            className=" transition-all duration-500 ease-in-out transform lg:hover:scale-170 rounded-lg shadow-lg mb-4 "
            controls
            loop
            muted
            playsInline
            height="400px"
            width="400px"
          ></video>

          <video
            src={airbnbvid}
            className=" transition-all duration-500 ease-in-out transform lg:hover:scale-170 rounded-lg shadow-lg mb-16"
            controls
            loop
            muted
            playsInline
            height="400px"
            width="400px"
          ></video>

          <video
            src={signupvid}
            className=" transition-all duration-500 ease-in-out transform lg:hover:scale-170 rounded-lg shadow-lg mb-16"
            controls
            loop
            muted
            playsInline
            height="400px"
            width="400px"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
