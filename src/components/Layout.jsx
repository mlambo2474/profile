import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col  min-h-screen  justify-center ">
      <header className=" sticky top-0 z-50  bg-indigo-400 text-white">
        <Header />
      </header>

      <main className="flex-1 bg-pink-100 snap-y snap-mandatory scroll-smooth pb-6">
        <Outlet />
      </main>

      <footer className="  bg-indigo-500 text-white ">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
