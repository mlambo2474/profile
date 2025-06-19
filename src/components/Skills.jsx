import React, { useState, useEffect } from "react";
import uxImage from "../assets/designer3.JPG";
import devImage from "../assets/designer2.png";
import webImage from "../assets/designer6.png";
import { motion } from "framer-motion";
import Overlay from "./Overlay";

const Skills = () => {
  const [uiImage, setUiImage] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 1300) {
        setUiImage(true);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div className="">
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

        <h1 className="text-8xl absolute font-bold text-indigo-500">
          Services
        </h1>
        {/* If you want it on top, wrap in a relative and use absolute: */}
      </motion.div>
        <motion.div 
      initial ={{ opacity: 0, y:70}}
      animate ={{ opacity:1, y:0}}
      transition ={{ duration: 1.0, ease: "easeOut", delay:0.6}}
      // className=" relative flex w-full p-10 items-center justify-center overflow-x-hidden"
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/017/377/541/non_2x/front-end-development-minimal-infographic-banner-vector.jpg"
          alt=""
          className="w-full h-100  rounded-lg shadow-lg"
        />
      </motion.div>

      <div className=" grid grid-cols-2 gap-4 mx-4 grid-cols-auto-fit pt-36 pb-28">
        <div className="row-span-2 bg-pink-500 text-center content-center align-left">
          <h1 className="font-bold text-xl text-indigo-600 ">
            {" "}
            Responsive Design
          </h1>
          <p className=" text-gray-600 text-lg mt-2 mb-8 px-4 text-white ">
            I build fully responsive websites that adapt seamlessly to any
            device—desktop, tablet, or mobile—ensuring an optimal user
            experience. Using mobile-first design principles, I leverage CSS
            Grid, Flexbox, and media queries to create fluid layouts that look
            and function flawlessly across all screen sizes. My approach ensures
            accessibility and usability, whether a user is browsing on a 4K
            monitor or a smartphone. Key Tools & Techniques: Mobile-first &
            progressive enhancement strategies Fluid typography & relative units
            (rem, vw/vh) Cross-browser compatibility testing
          </p>
        </div>
        <div className="bg-sky-600 text-center content-center p-2">
          <h1 className="font-bold text-xl text-indigo-800">
            {" "}
            Responsive Design
          </h1>
          <p className="text-center text-white mt-2">
            2. I develop fast, dynamic Single Page Applications (SPAs) using
             React. SPAs deliver a
            smoother, app-like experience by loading content dynamically without
            full page refreshes. I optimize SPAs for performance, implementing
            client-side routing (React Router) and state management
            (Redux, Context API) to ensure scalability and
            maintainability. Key Strengths: Seamless navigation with instant
            load transitions Efficient state management for complex UIs
            Integration with backend APIs for real-time data
          </p>
        </div>
        <div className="bg-black text-center content-center align-left">
          {" "}
          <h1 className="font-bold text-xl text-indigo-400">
            API Integration{" "}
          </h1>
          <p className="text-center text-white my-2 px-4 ">
            I seamlessly connect front-end applications with RESTful or GraphQL
            APIs to fetch, display, and manipulate data in real time. Whether
            working with third-party APIs (e.g., Google Maps, Stripe, Auth0) or
            custom backend services, I ensure secure, efficient communication
            using fetch, Axios, or Apollo Client. My implementations include
            error handling, loading states, and data caching for reliability and
            performance. Examples of API Work: User authentication (JWT, OAuth)
            Dynamic content loading (e.g., blogs, notes) Real-time updates
            (Firebase)
          </p>
        </div>
      </div>

      {uiImage && (
        <motion.div
          className="flex  justify-center items-center flex-wrap  snap-start pb-20"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {/* <div className="relative  h-92 group overflow-hidden rounded-lg shadow-lg mx-12 my-4 lg:mt-12">
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
        </div> */}
          <div className="relative  h-92 group overflow-hidden rounded-lg shadow-lg mx-12 my-4 lg:mt-12">
            <img src={uxImage} alt="" className="h-92 w-48  rounded-lg" />
            <div className="absolute bottom-0 right-0 h-full w-52 bg-purple-800/60 text-white font-bold text-md flex flex-col items-center justify-center translate-y-full transition-transform duration-500 ease-in-out animate-upDown group-hover:animate-none group-hover:translate-y-0">
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
      )}

      <div className="bg-teal-950 text-center content-center align-left m-4 p-8">
        {" "}
        <h1 className="font-bold text-xl text-indigo-400">
          Responsive Styling & Modern Tools
        </h1>
        <p className="  w-full text-center text-white mt-2 mb-8 px-4 lg:px-48 flex items-center justify-center">
          I craft visually stunning, maintainable UIs using modern CSS
          methodologies like BEM, CSS-in-JS (Styled Components, Emotion), and
          utility-first frameworks (Tailwind CSS). My workflow includes
          Sass/SCSS for preprocessing and CSS variables for theming, ensuring
          consistency across projects. I also adopt component-based design
          systems to streamline collaboration with designers. Tools & Workflow:
          CSS Frameworks: Tailwind, Bootstrap (customized) Design Handoff:
          Figma, Adobe XD to pixel-perfect code Animation & Interactivity: GSAP,
          Framer Motion, CSS transitions
        </p>
      </div>
    </div>
  );
};

export default Skills;
