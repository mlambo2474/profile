import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
    const [bgColor, setBgColor] = useState("bg-purple-300");
   const [textColor, setTextColor] = useState("text-indigo-500");
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 70) {
          setBgColor("bg-indigo-500");
          setTextColor("text-pink-100");
        } else {
          setBgColor("bg-purple-300");
          setTextColor("text-indigo-500");
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className="flex flex-col  min-h-screen  justify-center ">
      <header className ={ `sticky top-0 z-50 ${textColor} ${bgColor} `}>
        <Header />
      </header>

      <main className="flex-1 bg-pink-100 snap-y snap-mandatory scroll-smooth ">
        <Outlet />
      </main>

      <footer className="  bg-indigo-500 text-white ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
