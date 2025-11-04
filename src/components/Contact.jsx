import React, { useState } from "react";
import { supabase } from '../../supabase/supabase'
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const Contacts = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch(
        "https://mlpgmncacnuafbiyahux.supabase.co/functions/v1/contact-form",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY, // ✅ required
           },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleDownload = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.storage
        .from('resumes')
        .download('tmlambo(1).pdf') // Replace with your actual file name

      if (error) throw error

      // Create blob URL for both download and preview
      const url = URL.createObjectURL(data)
      
      // Download the file
      const a = document.createElement('a')
      a.href = url
      a.download = 'tmlambo(1).pdf' // Custom filename for user
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      
      // Open in new tab for preview
      const newWindow = window.open('', '_blank')
      if (newWindow) {
        newWindow.location.href = url
        // Clean up the URL after a delay to allow the new tab to load
        setTimeout(() => {
          URL.revokeObjectURL(url)
        }, 1000)
      } else {
        // Fallback if popup was blocked
        URL.revokeObjectURL(url)
        alert('Please allow popups to preview the resume')
      }
    } catch (error) {
      console.error('Download failed:', error)
      alert('Download failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  //firebase storage for cv download
    // const downloadCV = async () => {
    //   const cvRef = ref(storage, 'tonderaimlambo.pdf');
    //   const url = await getDownloadURL(cvRef);
    //   window.open(url, '_blank');
    // };

  return (
    <>
         <motion.div 
      initial ={{ opacity: 0, y:-70}}
      animate ={{ opacity:1, y:0}}
      transition ={{ duration: 1.0, ease: "easeOut", delay:0.6}}
      className=" relative flex w-full p-10 items-center justify-center overflow-x-hidden">
        <div className="inline-block text-center">
          <h1 className=" text-4xl lg:text-6xl font-bold text-purple-500">
            Lets Connect
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
      <div className="w-full flex justify-center items-center  snap-start px-4">
      
      <div className="flex flex-col lg:flex-row items-center justify-start gap-x-10 max-w-[1000px] w-full">
        {/* Left Section */}
        <motion.div 
         className="lg:w-1/2 mt-16 lg:mb-0"
            initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
         >
          <h1 className="text-4xl lg:text-[30px] font-bold text-gray-600 mb-10 ">
             Contact Details
          </h1>

          <motion.div
            className="flex flex-col font-medium text-gray-600 space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div className="flex items-center" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <MdEmail className="w-6 h-6 text-purple-500 mr-2 hover:text-purple-800 cursor-pointer" />
              generaltonde@gmail.com
            </motion.div>
            <motion.div className="flex items-center" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <FaPhone className="w-5 h-6 text-purple-500 mr-2 hover:text-purple-800 cursor-pointer" />
              +27613101642
            </motion.div>
          </motion.div>

          <div className="flex mt-6 space-x-5">
          
            <a
              href="https://github.com/mlambo2474"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8 text-purple-500 hover:text-purple-800 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/tonderai-mlambo-99a5a428b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-7 h-7 text-purple-500 hover:text-purple-800 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/generaltonde/">
              <BsInstagram className="w-7 h-7 text-purple-500 hover:text-purple-800 cursor-pointer" />
            </a>
            <a
              href="https://x.com/TheRiverTee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="w-7 h-7 text-purple-500 hover:text-purple-800 cursor-pointer" />
            </a>
          </div>

          <div className="pt-8 pb-12">
            <Button 
            onClick={handleDownload} 
            disabled={loading}
            >
            {loading ? 'Downloading...' : 'Resume'}
              </Button>
          </div>
        </motion.div>

        {/* Contact Form */}
      
        <form onSubmit={handleSubmit} className="w-full max-w-md lg:w-1/2 lg:mt-8">
          < motion.div
           className="flex flex-col text-gray-600 text-sm space-y-3"
             initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
           >
            <input
              className="bg-purple-200 border border-gray-400 h-10 px-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 transition"
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="bg-purple-200 border border-gray-400 h-10 px-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 transition"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="bg-purple-200 border border-gray-400 h-28 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1 transition"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="pt-4">
              <Button type="submit">
                {loading ? 'Sending...' : 'Submit'}
                </Button>
            </div>
            {success && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-3 bg-green-500 text-white text-center py-2 rounded-md"
          >
            ✅ Message successfully sent!
          </motion.div>
        )}
          </motion.div>
        </form>
      
      </div>
    </div>
    </>
  
  );
};

export default Contacts;
