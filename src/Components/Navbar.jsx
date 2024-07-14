import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const topButton = document.getElementById("topButton");
    if (topButton) {
      topButton.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
    return () => {
      if (topButton) {
        topButton.removeEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        });
      }
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-3">
        <div className="max-w-2xl bg-white/75 backdrop-blur-md rounded-full lg:hover:shadow-md mx-auto flex justify-between w-5/6 px-10 py-3 border-2 border-white">
          {/* Logo and primary menu */}
          <div className="flex items-center gap-16">
            {/* Logo */}
            <div>
              <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
                <span className="h-7 text-primary flex justify-center items-center overflow-hidden">
                  <img src="src\assets\logo.png" className="h-full w-auto" alt="Logo" />
                </span>
              </a>
            </div>
            {/* Primary menu */}
            <div className="hidden lg:flex gap-8">
              <a href="/" className="flex items-center justify-center rounded-full py-1 px-3 hover:bg-primary hover:text-slate-100">Home</a>
              <a href="/Games" className="flex items-center justify-center rounded-full py-1 px-3 hover:bg-primary hover:text-slate-100">Games</a>
              <a href="/Reviews" className="flex items-center justify-center rounded-full py-1 px-3 hover:bg-primary hover:text-slate-100">Reviews</a>
              <a href="/contact" className="flex items-center justify-center rounded-full py-1 px-3 hover:bg-primary hover:text-slate-100">Contact Us</a>
            </div>
          </div>

          {/* Secondary menu */}
          <div className="flex items-center gap-6">
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <button
                    className="relative border-2 group hover:border-green-500 w-6 h-6 duration-500 overflow-hidden"
                    type="button"
                  >
                    <p className="font-Manrope text-3xl h-full w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0">
                      ×
                    </p>
                    <span className="absolute w-full h-full bg-blue-500 rotate-45 group-hover:top-4 duration-500 top-12 left-0"></span>
                    <span className="absolute w-full h-full bg-red-500 rotate-45 top-0 group-hover:left-4 duration-500 left-12"></span>
                    <span className="absolute w-full h-full bg-red-500 rotate-45 top-0 group-hover:right-4 duration-500 right-12"></span>
                    <span className="absolute w-full h-full bg-blue-500 rotate-45 group-hover:bottom-4 duration-500 bottom-12 right-0"></span>
                  </button>
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex justify-center my-3 mx-10">
          <div className={`fixed z-40 w-full rounded-3xl bg-white/75 backdrop-blur-md max-w-xl shadow-md overflow-hidden flex items-center flex-col lg:hidden gap-12 origin-left duration-700 ${!isOpen ? "h-0" : "h-fit"}`}>
            <div className="px-8 overflow-hidden">
              <div className="flex flex-col py-2 items-center font-bold tracking-wider">
                <a href="/" className="w-full h-full flex items-center justify-center my-1 px-10 py-2 rounded-full hover:bg-primary hover:text-slate-100">Home</a>
                <a href="/about" className="w-full h-full flex items-center justify-center my-1 px-10 py-2 rounded-full hover:bg-primary hover:text-slate-100">Games</a>
                <a href="/classes" className="w-full h-full flex items-center justify-center my-1 px-10 py-2 rounded-full hover:bg-primary hover:text-slate-100">Reviews</a>
                <a href="/contact" className="w-full h-full flex items-center justify-center my-1 px-10 py-2 rounded-full hover:bg-primary hover:text-slate-100">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <button id="topButton" className="topbutton fixed bottom-5 right-5">
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
      </button>
    </>
  );
};

export default Navbar;
