import React, { useState } from "react";
import { useNavigate} from 'react-router-dom'
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
// import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
// import axios from "axios";

const Contacts = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xwpoakaj"); // Replace with your Formspree form ID

 
  if (state.succeeded) {
    return alert("Message sent successfully"), navigate('/');
  }
    
  

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  // const [isSending, setIsSending] = useState(false);

    const downloadCV = async () => {
      const cvRef = ref(storage, 'resume@tonderaimlambo.pdf');
      const url = await getDownloadURL(cvRef);
      window.open(url, '_blank');
    };

  //   //handling changes in the input fields
  //   const handleChange = (e) => {
  //     const {name, value} = e.target;
  //     setFormData((prev) =>({
  //       ...prev,
  //       [name] : value,
  //     }))
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setIsSending(true);

  //     try{
  //        await emailjs.send(
  //         "service_jt4jq5a",
  //          "template_dzv8ea6",
  //         {
  //           name: formData.name,
  //           subject: `A new message from ${formData.name} from Portfolio  Contact form`,
  //           email: formData.email,
  //           message: formData.message,
  //         },
  //         "d9qUvD0CuTUau776d"
  //        );
  //        alert("Message sent successfully");
  //        setFormData({ name:"", email:"", message:"" })
  //     }catch(error){
  //     console.error("Error sending message", error);
  //     alert("Failed to send message. Please try again later.");
  //     } finally {
  //       setIsSending(false);
  //     }

  //     // try{
  //     //   await axios.post("https://us-central1-profile-fe6e3.cloudfunctions.net/sendContactEmail", formData);
  //     //   alert("Message sent successfully");
  //     //   //clear the form for next submission
  //     //   setFormData({name:"", email:"", message:""})
  //     // }catch(error){
  //     //     console.error("Error sending message:", error);
  //     //     alert("Failed to send message.Please try again later.")
  //     // }
  //   };

  return (
    <>
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

        <h1 className=" text-6xl lg:text-8xl absolute font-bold text-indigo-500">
          Contact me
        </h1>
        {/* If you want it on top, wrap in a relative and use absolute: */}
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
          <h1 className="text-4xl lg:text-[50px] font-bold text-gray-600 mb-10 ">
            Lets Connect
          </h1>

          <div className="flex flex-col font-medium text-gray-600 space-y-4">
            <div className="flex items-center">
              <MdEmail className="w-6 h-6 text-purple-500 mr-2 hover:text-purple-800 cursor-pointer" />
              generaltonde@gmail.com
            </div>
            <div className="flex items-center">
              <FaPhone className="w-5 h-6 text-purple-500 mr-2 hover:text-purple-800 cursor-pointer" />
              +27613101642
            </div>
          </div>

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
            <Button onClick={downloadCV}>Download CV</Button>
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
              className="bg-purple-200 border border-gray-400 h-10 px-2 focus:outline-none"
              type="text"
              placeholder="Your name"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              className="bg-purple-200 border border-gray-400 h-10 px-2 focus:outline-none"
              type="email"
              placeholder="Email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              className="bg-purple-200 border border-gray-400 h-28 px-2 py-1 focus:outline-none"
              name="message"
              placeholder="Your message"
              // value={formData.message}
              // onChange={handleChange}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <div className="pt-4">
              <Button type="submit">Submit</Button>
            </div>
          </motion.div>
        </form>
      
      </div>
    </div>
    </>
  
  );
};

export default Contacts;

// /******** */
// // const { onRequest } = require("firebase-functions/v2/https");
// const functions = require("firebase-functions");
// // const { defineSecret } = require("firebase-functions/params");
// // const logger = require("firebase-functions/logger");
// const nodemailer = require("nodemailer");
// // const cors = require("cors")({ origin: true });

// const gmailEmail = functions.config().gmail.username;
// const gmailPassword = functions.config().gmail.password;

//  const transport = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//             user: gmailEmail,
//             pass: gmailPassword,
//           },
//         });

//         const sendContactEmail = (formData) => {
//            return transport
//            .sendMail({
//             from: formData.email,
//             to: gmailEmail,
//             subject: `New message from ${formData.name}`,
//             text: formData.message,
//            })
//            .then((r) =>{
//             console.log("accepted", r.accepted);
//                  console.log("rejected", r.rejected);
//            })
//            .catch((e) => {
//             console.log("error", e);
//            });
//         }

//         exports. helloWorld = functions.https.onRequest((req, res) => {
//           if(req.body.secret !== "firebaseIsGreat") {
//             return res.send("missing secret");
//             sendContactEmail(req.body);
//             res.send
//           }
//         })
