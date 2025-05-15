import React, { useState } from "react";
import airbnb from "../assets/airbnb.png";
import amazon from "../assets/amazon.gif";
import twitter from "../assets/twitter.png";
import calculator from "../assets/calculator.png";
import clock from "../assets/clock.jpg";
import instagram from "../assets/insta.jpeg";
import mathsapp from "../assets/maths-app.webp";
import tictactoe from "../assets/tictac.jpg";
import youtube from "../assets/youtube.jpg";
import tesla from "../assets/tesla-Emblem.png";
import netflix from "../assets/Netflix-Logo.png";
import google from "../assets/google.png";
// import airbnb from '../assets/airbnb.png'

const Projects = () => {
  const [isfullstack, setIsfullstack] = useState(true);
  const [isStatic, setIsStatic] = useState(false);

  const reactPagesHandler = () => {
    setIsfullstack(true);
    setIsStatic(false);
  };

  const staticPagesHandler = () => {
    setIsfullstack(false);
    setIsStatic(true);
  };

  return (
    <div>
      <div className="flex justify-center items-center text-gray-600 pt-2 mb-2 font-bold text-sm">
        <span className="pr-8 cursor-pointer" onClick={reactPagesHandler}>
          Full Stack (JavaScript, React & Firebase)
        </span>
        <span className="pr-8 cursor-pointer" onClick={staticPagesHandler}>
          HTML5 & CSS3{" "}
        </span>
      </div>

      {isfullstack && (
        <>
          <h1 className="border-t border-gray-400 font-bold text-center text-indigo-500 px-4 mt-8 underline">
            JAVASCRIPT, REACT AND FIREBASE
          </h1>
          <p className="text-xs pb-2 px-4 text-gray-600 text-center">
            Note: These clones for educational purposes and have limited
            functionality and limited real app content please visit my github
            repository for more.
          </p>
          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://keen-squirrel-140738.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram Clone (fullstack)
              </a>
            </span>
            <a
              href="https://keen-squirrel-140738.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={instagram}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://keen-squirrel-140738.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Clone (fullstack)
                </a>
              </span>
              <p className="text-gray-600 w-200">
                A responsive Instagram clone built with HTML, CSS, JavaScript,
                and Firebase, featuring Firebase Authentication (Login/Signup),
                Firestore Database for post storage & user data, Firebase
                Storage for image uploads. The app mimics the modern UI of
                Instagram, allowing the user to create, display, edit, and
                delete posts. Demonstrates full-stack development with real-time
                data handling and secure user-based actions.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://github.com/mlambo2474/amazon-clone"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon Clone (fullstack)
              </a>
            </span>
            <a
              href="https://github.com/mlambo2474/amazon-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={amazon}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://github.com/mlambo2474/amazon-clone"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon Clone (fullstack)
                </a>
              </span>
              <p className="text-gray-600 w-200">
                This is a full-stack React eCommerce platform built with
                Firebase (Authentication, Firestore, and Cloud Functions) and
                integrated with Stripe for secure payment processing. The
                platform supports user authentication, real-time product and
                order management, and seamless checkout flows. Designed with a
                focus on performance and user experience, it efficiently handles
                product listings, user accounts, and transaction
                processing—demonstrating end-to-end development of a modern
                online store.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://github.com/mlambo2474/airbnb-clone"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Airbnb Clone (fullstack)
              </a>
            </span>
            <a
              href="https://github.com/mlambo2474/airbnb-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={airbnb}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://github.com/mlambo2474/airbnb-clone"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Airbnb Clone (fullstack)
                </a>
              </span>
              <p className="text-gray-600 w-200">
                A full-stack react property booking platform with a modern UI,
                built using HTML, CSS, and JavaScript with a JSON-powered fake
                backend for seamless data simulation. Key features include
                interactive property listings with search and filtering,
                date-picker calendar integration for booking availability, user
                authentication (login/signup) and booking management and
                responsive design mirroring Airbnb’s intuitive interface.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://gleaming-zabaione-0b7968.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tic Tac Toe(fullstack)
              </a>
            </span>
            <a
              href="https://gleaming-zabaione-0b7968.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={tictactoe}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://gleaming-zabaione-0b7968.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tic Tac Toe (fullstack)
                </a>
              </span>
              <p className="text-gray-600 w-200">
                This interactive Tic-Tac-Toe game is built with React and styled
                using Styled Components for a clean, modular design. It features
                a light/dark theme toggle for personalized visuals and optional
                background music to enhance the gaming experience. The game
                includes classic turn-based logic, win/draw detection, and a
                responsive board—showcasing React’s state management and dynamic
                UI rendering. Perfect for demonstrating front-end development
                skills with a fun, polished twist.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://luminous-cat-a6d705.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login Form
              </a>
            </span>
            <a
              href="https://luminous-cat-a6d705.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5JzMJz48PHjwEdaLmLtlskdYLOROdFhLtQ&s"
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://luminous-cat-a6d705.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login Form
                </a>
              </span>
              <p className="text-gray-600 w-200">
              A basic Login form to authenticate a user based on the required fields.This form, built using react-hook form 
              aims to provide a user-friendly interface for entering credentials and includes validation for email and password and also generate a username for the signed up user 
              which they can use also to login if they do not want to use their email.The registered user infomation is kept in local storage for easy access and management.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://jovial-sopapillas-1074a6.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Multiplication Game (fullstack)
              </a>
            </span>
            <a
              href="https://jovial-sopapillas-1074a6.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={mathsapp}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://jovial-sopapillas-1074a6.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Multiplication Game(fullstack)
                </a>
              </span>
              <p className="text-gray-600 w-200">
                This is a full-stack React eCommerce platform built with
                Firebase (Authentication, Firestore, and Cloud Functions) and
                integrated with Stripe for secure payment processing. The
                platform supports user authentication, real-time product and
                order management, and seamless checkout flows. Designed with a
                focus on performance and user experience, it efficiently handles
                product listings, user accounts, and transaction
                processing—demonstrating end-to-end development of a modern
                online store.
              </p>
            </div>
          </div>
        </>
      )}

      {/* STATIC APPS HEADERS GOES HERE  */}
      {isStatic && (
        <>
          <div>
            <h1 className="border-t border-gray-400 font-bold text-indigo-500 text-center px-4 mt-8 underline">
              HTML & CSS
            </h1>

            <p className="text-xs pb-2 px-4 text-gray-600 text-center">
              Note: These are static clones for educational purposes and have no
              backend functionality or real app content. Please visit my GitHub
              repository for more.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://kaleidoscopic-froyo-23babe.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netfix landing Page
              </a>
            </span>
            <a
         
              href="https://kaleidoscopic-froyo-23babe.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={netflix}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://kaleidoscopic-froyo-23babe.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Netflix landing Page
                </a>
              </span>
              <p className="text-gray-600 w-200">
                This is a responsive clone of the Netflix landing page built
                using HTML and CSS. The design mimics Netflix's modern UI.A hero
                section with a background image and call-to-action buttons.A
                clean layout with placeholder content for movies/shows. This
                project demonstrates front-end development skills in recreating
                a popular streaming platform's interface.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://zaio-youtube-clone-html-css-only.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube Landing Page
              </a>
            </span>
            <a
              href="https://zaio-youtube-clone-html-css-only.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={youtube}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://zaio-youtube-clone-html-css-only.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube Landing Page
                </a>
              </span>
              <p className="text-gray-600 w-200">
                This is a responsive clone of the Youtube landing page built
                using HTML and CSS. The design mimics Youtube's modern UI, with
                top and sidebar nav call-to-action buttons.A clean layout with
                placeholder content for videos. This project demonstrates
                front-end development skills in recreating a popular streaming
                platform's interface.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://tesla-landing-pageclone.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tesla Landing Page
              </a>
            </span>
            <a
              href="https://tesla-landing-pageclone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={tesla}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://tesla-landing-pageclone.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tesla landing Page
                </a>
              </span>
              <p className="text-gray-600 w-200">
                This is a responsive Tesla landing page clone built with HTML
                and CSS, mimicking Tesla's sleek and minimalist design. Key
                features include a sticky navigation bar with the Tesla logo and
                menu items Model S, Model 3, etc. Hero section with a
                high-quality Tesla vehicle image and a call-to-action button the
                "Order Now".Smooth hover effects on buttons and navigation
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://splendorous-hummingbird-c325fa.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X landing Page
              </a>
            </span>
            <a
              href="https://splendorous-hummingbird-c325fa.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={twitter}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://splendorous-hummingbird-c325fa.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X landing Page
                </a>
              </span>
              <p className="text-gray-600 w-200">
                A modern, mobile-friendly landing page built with HTML5 and
                CSS3, featuring a clean layout, smooth animations, and a
                visually appealing design.The page features Flexbox for seamless
                responsiveness across devices, custom animation lie hover
                effects and has semantic HTML for accessibility and SEO best
                practices. This page demonstrates a strong front-end development
                fundamentals with focus on UI/UX principles
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-center  lg:bg-purple-200 p-2 my-2">
            <span className="lg:hidden text-lg font-bold text-indigo-500">
              <a
                href="https://jade-bonbon-8dfbb8.netlify.app/"
                className="hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mordern Instagram Landing Page
              </a>
            </span>
            <a
              href="https://jade-bonbon-8dfbb8.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={instagram}
                alt="instagram clone"
                className="bg-white h-50 w-60 rounded-xl cursor-pointer  mb-4 lg:mb-0 lg:mr-12"
              />
            </a>

            <div className="description hidden lg:block lg:pl-12">
              <span className="text-sm font-bold text-indigo-500">
                <a
                  href="https://jade-bonbon-8dfbb8.netlify.app/"
                  className="hover:underline focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mordern Instagram Landing Page
                </a>
              </span>
              <p className="text-gray-600 w-200">
                A modern, mobile-friendly landing page built with HTML5 and
                CSS3, featuring a clean layout, smooth animations, and a
                visually appealing design.The page features Flexbox for seamless
                responsiveness across devices, custom animation lie hover
                effects and has semantic HTML for accessibility and SEO best
                practices. This page demonstrates a strong front-end development
                fundamentals with focus on UI/UX principles.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
