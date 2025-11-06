import React, { useState } from "react";
import image from "../assets/about.png";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  // const [experience, setExperience] = useState(false);
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
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
        className=" relative flex w-full p-10 items-center justify-center overflow-x-hidden"
      >
        <div className="inline-block text-center">
          <h1 className=" text-4xl lg:text-6xl font-bold text-purple-500">
            About me
          </h1>
          <motion.div
            className="w-3/4 mx-auto h-1 bg-indigo-500 rounded-full mt-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ originX: 0.5 }}
          />
        </div>
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
            <motion.img
              src={image}
              alt="Portrait of Tonderai"
              loading="lazy"
              className="w-full h-auto rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              whileInView={{}}
              viewport={{ once: true }}
              style={{}}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
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
            Typescript and Next.js to enhance my skills. With a keen eye for
            design and a love for clean, efficient code, I aim to build engaging
            digital experiences that make an impact.I am currently doing Backend
            development to fully equip myself in full Stack web development as I
            have already done Node.js and Express.js and doing MongoDB for
            databases. I am looking forward to extend my skills in AI Automation
            that is building LLM Apps & AI-Agents with n8n & APIs to become a
            Full Stack + AI Automation Engineer and helping businesses grow
            faster and generating revenue.
          </p>

          {/* Tabs with animated underline */}
          <div className="relative text-gray-600 mt-4 font-bold text-sm flex flex-wrap gap-x-6 gap-y-2">
            {["education", "skills", "refference"].map((tab) => (
              <div key={tab} className="relative">
                <button
                  onClick={() => handleClick(tab)}
                  className={`cursor-pointer ${isActive === tab ? "text-purple-500" : ""}`}
                >
                  {tab.toUpperCase()}
                </button>
                {isActive === tab && (
                  <motion.span
                    layoutId="aboutTabsUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 rounded"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Conditional Sections */}
          <AnimatePresence mode="wait">
            <div>
              {education && (
                <motion.div
                  key="education"
                  className="my-4"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                >
                  <motion.h5
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="text-sm font-bold text-indigo-600"
                  >
                    Zaio Institute of Technology
                  </motion.h5>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="text-sm text-gray-600"
                  >
                    Front-End Engineer
                  </motion.p>
                  <motion.h5
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="text-sm font-bold pt-2 text-indigo-600"
                  >
                    University of London Goldsmiths
                  </motion.h5>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="text-sm text-gray-600"
                  >
                    Web Design
                  </motion.p>
                  <motion.h5
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="text-sm font-bold pt-2 text-indigo-600"
                  >
                    Udemy{" "}
                    <span className="text-normal">(learning in progress)</span>
                  </motion.h5>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="text-sm text-gray-600"
                  >
                    Backend Development
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="text-sm text-gray-600"
                  >
                    AI Automation: Build LLM Apps & AI-Agents with n8n & APIs
                  </motion.p>
                </motion.div>
              )}

              {skills && (
                <motion.div
                  key="skills"
                  className="my-4 space-y-2 text-sm text-gray-600"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                >
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      Programming Languages:
                    </span>{" "}
                    HTML5, CSS3, Javascript
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      Frontend Development:
                    </span>{" "}
                    React.js, Redux, React hooks, Tailwindcss
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      Backend Development:
                    </span>{" "}
                    Node.js, Express.js, Restful APIs, Firebase, Supabase
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      Database Management:
                    </span>{" "}
                    MongoDB, Mongoose
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      Tools and Technologies:
                    </span>{" "}
                    Git, npm, VScode, Trello, Agile
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      AI tools and Vibe Coding:
                    </span>{" "}
                    Cursor, lovable, LLMs e.g Chatgpt-5, Deepseek, Claude etc..
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      Testing and Deployment:
                    </span>{" "}
                    Jest, React-testing-library, Github, Netlify, Vercel, Render
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      Code Quality Oversight:
                    </span>{" "}
                    Mantainability, Scalability, Readability, Performance
                    Optimization, Security, Documentation
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <span className="font-bold text-indigo-600">
                      Soft skills:
                    </span>{" "}
                    Teamwork, Cross-functional collaboration, Digital marketing,
                    Excellent communication, Problem solving
                  </motion.p>
                </motion.div>
              )}

              {refference && (
                <motion.div
                  key="refference"
                  className="my-4"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                >
                  <motion.p
                    className="text-md font-bold text-indigo-600"
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    Akhil Boddu (Zaio Instructor):
                    <br />
                    <span className="text-gray-600 font-normal">
                      akhil4mara@gmail.com <br />
                      akhil@zaio.io
                    </span>
                  </motion.p>
                  <motion.p
                    className="text-md font-bold text-indigo-600 mt-4"
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    Asif Hassam (Zaio Co-Founder):
                    <br />
                    <span className="text-gray-600 font-normal">
                      asif@zaio.io
                    </span>
                  </motion.p>
                  <motion.p
                    className="text-md font-bold text-indigo-600 mt-4"
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    Ulli Haw (Prev Employer):
                    <br />
                    <span className="text-gray-600 font-normal">
                      ulli@westwoods.co.za
                    </span>
                  </motion.p>
                  <motion.p
                    className="text-md font-bold text-indigo-600 mt-4"
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    Michael Brain(Sengamedi Properties):
                    <br />
                    <span className="text-gray-600 font-normal">
                      micheal@tridentpress.co.za
                    </span>
                  </motion.p>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
