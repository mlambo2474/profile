import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterHeading = () => {
  const phrases = [
    "Hello there!",
    "I'm Tonderai Mlambo",
    "I am a Web Designer",
    "And Front-end Engineer",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        setDisplayedText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        if (!isDeleting) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setCharIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhraseIndex, phrases]);

  return (
    <motion.div
      className="max-w-xl text-center lg:text-left "
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
    >
      <h1 className="text-2xl sm:text-5xl font-bold text-white mb-4">
        {displayedText}
        {/* <span className="animate-pulse">|</span> */}
        <span className="inline-block w-[2px] h-9 bg-indigo-600 animate-blink ml-1"></span>

      </h1>
       <p className="hidden lg:block text-white text-base sm:text-lg leading-relaxed">
              I'm a passionate Front-end developer who loves building
              user-friendly, responsive, user-focused mobile and web
              applications using  <br />
              <span className="bg-pink-300 px-3 mx-1 font-bold text-sm rounded-lg text-black">HTML</span>
               <span className="bg-pink-300 px-3 mx-1 font-bold text-sm rounded-lg text-black">CSS</span>
                <span className="bg-pink-300 px-3 mx-1 font-bold text-sm rounded-lg text-black">JavaScript</span>
               <span className="bg-pink-300 px-3 mx-1 font-bold text-sm rounded-lg text-black">TypeScript</span>
               <span className="bg-pink-300 px-3 mx-1 font-bold text-sm rounded-lg text-black">Tailwind</span>
               <span className="bg-pink-300 px-3 mx-1 font-bold text-sm rounded-lg text-black">React</span> 
             <span className="bg-pink-300 px-3 mx-1 font-bold text-sm rounded-lg text-black">Redux</span><br />
             With these modern technologies I enjoy turning ideas into clean,
              efficient code and constantly learning new tools to level up my
              craft.
            </p>
    </motion.div>
  );
};

export default TypewriterHeading;
