import React, { useEffect, useRef } from "react";
import hero from "../assets/hero.jpg";
import profileImage from "../assets/tonderaimlambosimage.png"
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroCtaRef = useRef(null);
  const projectsTitleUnderlineRef = useRef(null);
  const projectsGridRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(heroImgRef.current, { opacity: 0, y: 40, duration: 0.4 })
        .from(heroTextRef.current, { opacity: 0, y: 20, duration: 0.4 }, "-=0.4")
        .from(heroCtaRef.current, { opacity: 0, y: 16, duration: 0.5 }, "-=0.3");

      // Background parallax
      if (heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Projects underline draw
      if (projectsTitleUnderlineRef.current) {
        gsap.set(projectsTitleUnderlineRef.current, { scaleX: 0, transformOrigin: "center" });
        ScrollTrigger.create({
          trigger: projectsTitleUnderlineRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(projectsTitleUnderlineRef.current, { scaleX: 1, duration: 0.4, ease: "power2.out" });
          },
        });
      }

      // Projects grid reveal
      if (projectsGridRef.current) {
        const items = projectsGridRef.current.querySelectorAll("[data-project-card]");
        gsap.set(items, { opacity: 0, y: 24 });
        ScrollTrigger.create({
          trigger: projectsGridRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(items, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.12 });
          },
        });
      }

      // Magnetic hover on CTA
      const btn = heroCtaRef.current;
      if (btn) {
        const onMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const relX = e.clientX - rect.left - rect.width / 2;
          const relY = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: relX * 0.08, y: relY * 0.08, duration: 0.2, ease: "power3.out" });
        };
        const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power3.out" });
        btn.addEventListener("mousemove", onMove);
        btn.addEventListener("mouseleave", onLeave);
        // Cleanup listeners
        return () => {
          btn.removeEventListener("mousemove", onMove);
          btn.removeEventListener("mouseleave", onLeave);
        };
      }
    }, heroRef); // scope animations to hero section where possible

    return () => ctx.revert();
  }, []);
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        ref={heroRef}
      >
        {/* Background Image */}
        <img
          src={hero}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
          ref={heroBgRef}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 px-4 lg:px-20 py-16 lg:py-10 pb-20 h-auto text-white">
          {/* Image Section */}
          <motion.div
            className="mt-8 mb-6 lg:mb-0 lg:mr-20 flex-shrink-0 "
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
            ref={heroImgRef}
          >
            <img
              src={profileImage}
              alt="Tonderai Mlambo's image"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-76 lg:h-76 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <div className="text-center lg:text-left" ref={heroTextRef}>
            <TypewriterHeading />
            
            {/* View Projects Button */}
            <motion.button
              onClick={scrollToProjects}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="mt-8 mb-0 lg:mb-12 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              ref={heroCtaRef}
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

      {/* Projects Section */
      }
      <div data-projects-section className="py-2 bg-white">
      <motion.div 
      initial ={{ opacity: 0, y:-70}}
      animate ={{ opacity:1, y:0}}
      transition ={{ duration: 1.0, ease: "easeOut", delay:0.6}}
      className=" relative flex w-full p-10 items-center justify-center overflow-x-hidden">
        <div className="inline-block text-center">
        <h1 className=" text-4xl lg:text-6xl font-bold text-purple-500">
            Projects
          </h1>
          <div className="w-3/4 mx-auto h-1 bg-indigo-500 rounded-full mt-2" ref={projectsTitleUnderlineRef}></div>
        </div>
      </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-20 place-items-center" ref={projectsGridRef}>
          {projects.map((project, index) => (
            <div key={index} data-project-card className="w-full h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
