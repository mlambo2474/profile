import React, { useState } from "react";
import image from "../assets/about.png";
import { NavLink } from "react-router-dom";

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
    <div className="flex flex-col lg:flex-row justify-center mt-8 px-4 lg:px-20 snap-start">
    {/* Image + Title */}
    <div className="mb-8 lg:mb-0 lg:mr-20">
      <p className="text-xl sm:text-4xl  lg:text-[48px] font-bold pb-4 text-gray-600 text-center ">
        About me
      </p>
      <div className="bg-purple-200 rounded-lg w-full max-w-xs mx-auto lg:mx-0 lg:mb-4">
        <img
          src={image}
          alt=""
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  
    {/* Description + Tabs */}
    <div className="max-w-3xl w-full">
      <p className="text-sm sm:text-base text-gray-600 mt-4 lg:mt-8">
        I'm a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript and React, recently completing my front-end development course. I enjoy creating responsive, user-friendly websites and am constantly exploring other modern frameworks like Angular to enhance my skills. With a keen eye for design and a love for clean, efficient code, I aim to build engaging digital experiences that make an impact. When I'm not coding, you'll find me experimenting with new web technologies or contributing to open-source projects. Let's connect and build something amazing together!
      </p>
  
      {/* Tabs */}
      <div className="text-gray-600 mt-4 font-bold text-sm flex flex-wrap gap-x-6 gap-y-2">
        {["education", "skills", "experience", "refference"].map((tab) => (
          <span
            key={tab}
            onClick={() => handleClick(tab)}
            className={`cursor-pointer ${
              isActive === tab
                ? "border-b-2 border-purple-400 text-purple-500"
                : ""
            }`}
          >
            {tab.toUpperCase()}
          </span>
        ))}
      </div>
  
      {/* Conditional Sections */}
      {education && (
        <div className="mt-4">
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
        <div className="mt-4">
          <h5 className="text-sm font-bold text-indigo-600">
            Technical skills and tools
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {["HTML5, CSS3, JavaScript", "React", "Tailwind", "TypeScript", "Responsive Design", "Git, GitHub"].map(skill => (
              <h5 key={skill} className="text-sm font-bold text-gray-600">{skill}</h5>
            ))}
          </div>
          <h5 className="text-sm pt-4 font-bold text-indigo-600">Soft skills</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {["Problem-solving", "Communication", "Attention to detail", "Collaboration"].map(skill => (
              <h5 key={skill} className="text-sm font-bold text-gray-600">{skill}</h5>
            ))}
          </div>
        </div>
      )}
  
      {refference && (
        <div className="mt-4">
          <p className="text-md text-indigo-600">
            Akhil Boddu (Zaio Instructor):<br />
            <span className="font-bold text-gray-600">akhil4mara@gmail.com</span>
          </p>
          <p className="text-md text-indigo-600 mt-4">
            Ulli Haw (Prev Employer):<br />
            <span className="font-bold text-gray-600">ulli@westwoods.co.za</span>
          </p>
        </div>
      )}
    </div>
  </div>
</div>  
  );
};

export default AboutMe;
