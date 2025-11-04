import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="">
      <motion.div 
      initial ={{ opacity: 0, y:-70}}
      animate ={{ opacity:1, y:0}}
      transition ={{ duration: 1.0, ease: "easeOut", delay:0.6}}
      className=" relative flex w-full p-10 items-center justify-center overflow-x-hidden">
        <div className="inline-block text-center">
        <h1 className=" text-4xl lg:text-6xl font-bold text-purple-500">
            Services
          </h1>
          <div className="w-3/4 mx-auto h-1 bg-indigo-500 rounded-full mt-2"></div>
        </div>
      </motion.div>

      <motion.div 
        initial ={{ opacity: 0, y: 40}}
        whileInView ={{ opacity:1, y:0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition ={{ duration: 0.6, ease: "easeOut"}}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-16"
      >
        {/* Card 1: Responsive Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="w-11/12 mx-auto group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-indigo-50 hover:-translate-y-1 hover:scale-[1.01]"
        >
          <div className="p-6">
            <h3 className="text-lg font-bold text-indigo-700">Responsive Design</h3>
            <p className="mt-2 text-sm text-gray-600">
              Mobile‑first layouts that adapt beautifully across phones, tablets, and desktops.
              I design with fluid grids, flexible media, and accessible patterns to ensure
              consistent experiences. Performance and readability guide every breakpoint.
            </p>
          </div>
          <div className="px-6 pb-6">
            <a href="#" className="inline-block text-sm font-semibold text-pink-400 hover:text-pink-600 transition-colors">
              <span className="inline-block relative">
                Learn more →
                <span className="absolute left-0 -bottom-0.5 h-0.5 bg-pink-400 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Card 2: Dynamic SPA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="w-11/12 mx-auto group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-indigo-50 hover:-translate-y-1 hover:scale-[1.01]"
        >
          <div className="p-6">
            <h3 className="text-lg font-bold text-indigo-700">Dynamic Single Page Apps</h3>
            <p className="mt-2 text-sm text-gray-600">
              Fast, app‑like experiences powered by client‑side rendering and smart state.
              I craft seamless flows, page transitions, and data fetching that feel instant,
              scalable, and maintainable.
            </p>
          </div>
          <div className="px-6 pb-6">
            <a href="#" className="inline-block text-sm font-semibold text-pink-400 hover:text-pink-600 transition-colors">
              <span className="inline-block relative">
                Learn more →
                <span className="absolute left-0 -bottom-0.5 h-0.5 bg-pink-400 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Card 3: Responsive Web Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="w-11/12 mx-auto group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-indigo-50 hover:-translate-y-1 hover:scale-[1.01]"
        >
          <div className="p-6">
            <h3 className="text-lg font-bold text-indigo-700">Responsive Web Development</h3>
            <p className="mt-2 text-sm text-gray-600">
              Robust, accessible UIs engineered for clarity, speed, and long‑term growth.
              From semantic HTML to optimized assets and testing, I focus on quality that
              scales with your product.
            </p>
          </div>
          <div className="px-6 pb-6">
            <a href="#" className="inline-block text-sm font-semibold text-pink-400 hover:text-pink-600 transition-colors">
              <span className="inline-block relative">
                Learn more →
                <span className="absolute left-0 -bottom-0.5 h-0.5 bg-pink-400 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
