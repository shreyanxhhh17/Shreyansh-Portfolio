import React, { useState } from "react";
import { Moon, ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 tracking-tight">
          Shreyansh Sahu<span className="text-blue-600">.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-gray-100/70 rounded-full px-6 py-2 shadow-sm space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#work" className="hover:text-blue-600 transition">Work</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Button */}
        {!isOpen && (
          <div className="hidden md:flex items-center">
            <a
              href="https://github.com/shreyanxhhh17"
              className="flex items-center gap-1 border border-gray-300 px-4 py-2 rounded-full text-gray-800 hover:bg-gray-100 transition"
            >
              github<ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 shadow-md rounded-b-xl mt-2 py-4 px-6 flex flex-col space-y-4 text-gray-700 font-medium">
          <a href="#home" onClick={toggleMenu} className="hover:text-blue-600 transition">Home</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-blue-600 transition">About</a>
          <a href="#services" onClick={toggleMenu} className="hover:text-blue-600 transition">Services</a>
          <a href="#work" onClick={toggleMenu} className="hover:text-blue-600 transition">Work</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-blue-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
