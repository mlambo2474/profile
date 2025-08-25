import React, { useState } from "react";
import image from "../assets/about.png";
import { motion } from "framer-motion";
import Icons from "./Icons"


const AboutMe = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [refference, setRefference] = useState(false);
  const [isActive, setIsActive] = useState("education");

  const handleClick = (tab) => {
    setIsActive(tab);
    if (tab === "education") displayEducationHandler();
    if (tab === "skills") displaySkillsHandler();
    if (tab === "experience") displayExperienceHandler();
    if (tab === "refference") displayRefferenceHandler();
  };

  const displayEducationHandler = () => {
    setEducation(true);
    setSkills(false);
    setExperience(false);
    setRefference(false);
  };

  const displaySkillsHandler = () => {
    setSkills(true);
    setEducation(false);
    setExperience(false);
    setRefference(false);
  };
  const displayExperienceHandler = () => {
    setExperience(true);
    setSkills(false);
    setEducation(false);
    setRefference(false);
  };
  const displayRefferenceHandler = () => {
    setExperience(false);
    setSkills(false);
    setEducation(false);
    setRefference(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">

           <motion.div 
      initial ={{ opacity: 0, y:-70}}
      animate ={{ opacity:1, y:0}}
      transition ={{ duration: 1.0, ease: "easeOut", delay:0.6}}
      className=" relative flex w-full p-10 items-center justify-center overflow-x-hidden">
        <img
          src="https://files.123freevectors.com/wp-content/original/107103-light-purple-abstract.jpg"
          alt="header"
          className="w-full h-50  rounded-lg shadow-lg"
        />

        <h1 className=" text-6xl lg:text-8xl absolute font-bold text-indigo-500">
          About me
        </h1>
        {/* If you want it on top, wrap in a relative and use absolute: */}
      </motion.div>
      <div className="flex flex-col lg:flex-row justify-center mt-8 px-4 lg:px-20 snap-start">
        {/* Image + Title */}
        <motion.div
          className="mb-8 lg:mb-0 lg:mr-20"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
        >
          <p className="text-xl sm:text-4xl  lg:text-[48px] font-bold pb-4 text-gray-600 text-center ">
           Tonderai
          </p>
          <div className="bg-purple-200 rounded-lg w-full max-w-xs mx-auto lg:mx-0 lg:mb-4">
            <img src={image} alt="" className="w-full h-auto rounded-lg" />
          </div>
        </motion.div>

        {/* Description + Tabs */}
        <motion.div
          className="max-w-3xl w-full"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
        >
          <p className="text-sm sm:text-base text-gray-600 mt-4 lg:mt-8">
            I'm a passionate front-end developer with a strong foundation in
            HTML, CSS, JavaScript and React, recently completing my front-end
            development course. I enjoy creating responsive, user-friendly
            websites and am constantly exploring other modern technologies like
            Typescript and Next.js to enhance my skills. With a keen eye for design and a love
            for clean, efficient code, I aim to build engaging digital
            experiences that make an impact.I am currently doing Backend development to fully equip
            myself in full Stack web development as I have already done Node.js and Express.js and
             doing MongoDB for databases. I am looking forward to extend my skills in 
             AI Automation that is building LLM Apps & AI-Agents with n8n & APIs to become 
             a Full Stack + AI Automation Engineer and helping businesses grow faster and generating revenue.
          
          </p>
          
          {/* Tabs */}
          <div className="text-gray-600 mt-4 font-bold text-sm flex flex-wrap gap-x-6 gap-y-2">
            {["education", "skills", "experience", "refference"].map((tab) => (
              <span
                key={tab}
                onClick={() => handleClick(tab)}
                className={`cursor-pointer ${
                  isActive === tab
                    ? "border-b-2 border-purple-400 text-purple-500 "
                    : ""
                }`}
              >
                {tab.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Conditional Sections */}
          {education && (
            <div className="my-4">
              <h5 className="text-sm font-bold text-indigo-600">
                Zaio Institute of Technology
              </h5>
              <p className="text-sm text-gray-600">Front-End Engineer</p>
              <h5 className="text-sm font-bold pt-2 text-indigo-600">
                University of London Goldsmiths
              </h5>
              <p className="text-sm text-gray-600">Web Design</p>
            </div>
          )}

          {skills && (
            <div className="my-4">
              <h5 className="text-sm font-bold text-indigo-600">
               Languages
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "React",
                  "Redux",
                  "Tailwind",
                  "TypeScript",
                  "Git, GitHub",
                ].map((skill) => (
                  <h5 key={skill} className="text-sm font-bold text-gray-600">
                    {skill}
                  </h5>
                ))}
              </div>
              <h5 className="text-sm pt-4 font-bold text-indigo-600">
              Tools
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                {[
                  "Git",
                  "GitHub",
                  "Netlify",
                  "Render",
                  "npm",
                  "Axios",
                  "DevTools"
                ].map((skill) => (
                  <h5 key={skill} className="text-sm font-bold text-gray-600">
                    {skill}
                  </h5>
                ))}
              </div>
            </div>
          )}

          {refference && (
            <div className="my-4">
              <p className="text-md font-bold text-indigo-600">
                Akhil Boddu (Zaio Instructor):
                <br />
                <span className="text-gray-600 font-normal">
                  akhil4mara@gmail.com <br/>
                  akhil@zaio.io
                </span>
              </p>
              <p className="text-md font-bold text-indigo-600 mt-4">
                Ulli Haw (Prev Employer):
                <br />
                <span className="text-gray-600 font-normal">
                  ulli@westwoods.co.za
                </span>
              </p>
              <p className="text-md font-bold text-indigo-600 mt-4">
                Asif Hassam (Zaio Co-Founder):
                <br />
                <span className="text-gray-600 font-normal">
                  asif@zaio.io
                </span>
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <div>  <Icons /></div>
    </div>
  );
};

export default AboutMe;
