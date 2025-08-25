import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); 
  const [textColor, setTextColor] = useState("text-indigo-500");

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        // setBgColor("bg-indigo-500");
        setTextColor("text-pink-100");
      } else {
        // setBgColor("bg-purple-300");
        setTextColor("text-indigo-500");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


   

  const navItems = ["/", "skills", "about", "contact"];
  const labels = ["Home", "Services", "About", "Contact"];

  return (
    <div className={` w-full transition-colors duration-300  `}>
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div className={`flex flex-col ${textColor} text-xs sm:text-sm`}>
          <p>generaltonde@gmail.com</p>
          <p>+27 61 310 1642</p>
        </div>

        <div className="hidden lg:flex items-center font-bold">
          {navItems.map((path, index) => (
            <NavLink
              key={path}
              to={path === "/" ? "/" : `${path}`}
              className={({ isActive }) =>
                `px-2 py-1 mx-2 cursor-pointer transition duration-300 easeOut border-b-2
                ${
                  isActive
                    ? "border-white text-white"
                    : "border-transparent hover:text-indigo-500 hover:bg-pink-300 rounded-lg"
                }`
              }
            >
              {labels[index]}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="block lg:hidden">
          <MdMenu
            className="text-3xl cursor-pointer rounded-full hover:text-pink-200"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start px-4 pt-2 pb-4 bg-pink-100 lg:hidden shadow-lg z-50">
          {navItems.map((path, index) => (
            <NavLink
              key={path}
              to={path === "/" ? "/" : `${path}`}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `block w-full px-2 py-2 text-sm text-center font-medium transition duration-300 border-b border-gray-200
                ${
                  isActive
                    ? "text-indigo-400"
                    : "text-indigo-400 hover:text-indigo-700 hover:bg-pink-300 rounded-lg"
                }`
              }
            >
              {labels[index]}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
