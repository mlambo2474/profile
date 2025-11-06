import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState("text-indigo-500");
  const [bgColor, setBgColor] = useState("bg-indigo-700/70");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setTextColor("text-pink-100");
      } else {
        setTextColor("text-indigo-500");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = ["home", "skills", "about", "contact"];
  const labels = ["Home", "Services", "About", "Contact"];

  return (
    <div className={` w-full transition-colors duration-300  `}>
      <div className="flex h-16 items-center justify-between px-4 lg:px-8 max-w-7xl mx-auto mt-2 mb-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md">
        <div
          className={`flex flex-col ${textColor} text-xs sm:text-sm hover:text-white`}
        >
          <p>generaltonde@gmail.com</p>
          <p>+27 61 310 1642</p>
        </div>

        <div className="hidden md:flex lg:flex items-center font-bold">
          {navItems.map((id, index) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-2 py-1 mx-2 cursor-pointer transition duration-300 easeOut border-b-2 border-transparent hover:text-indigo-500 hover:bg-pink-300 rounded-lg`}
            >
              {labels[index]}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden lg:hidden">
          <MdMenu
            className="text-3xl cursor-pointer rounded-full hover:text-pink-200"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <>
          {/* Overlay to close sidebar on outside click */}
          <div
            className="fixed inset-0 bg-black/30 lg:hidden z-40"
            onClick={() => setMenuOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 h-full w-1/2 ${bgColor} lg:hidden shadow-lg z-50`}
          >
            <div className="flex flex-col items-start px-4 pt-4 pb-6">
              {navItems.map((id, index) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setMenuOpen(false);
                  }}
                  className={`block w-full px-2 py-2 text-sm text-left font-medium transition duration-300 border-b border-gray-200 text-white hover:text-indigo-700 hover:bg-pink-300 rounded-lg`}
                >
                  {labels[index]}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
