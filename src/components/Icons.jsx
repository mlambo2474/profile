import React from 'react'
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Icons = () => {
  return (
     <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0, ease: "easeOut", delay: 2.5 }}
          className="text-center mt-8 lg:mt-10 border-t border-gray-300 pt-6"
        >
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
        </motion.div>
  )
}

export default Icons