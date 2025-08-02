import React from "react";
import { Moon, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 tracking-tight">
          Shreyansh Sahu<span className="text-blue-600">.</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex bg-gray-100/70 rounded-full px-6 py-2 shadow-sm space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#work" className="hover:text-blue-600 transition">Work</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <Moon className="w-5 h-5 text-gray-600" />
          </button>

          {/* Contact Button */}
          <a
            href="#social"
            className="flex items-center gap-1 border border-gray-300 px-4 py-2 rounded-full text-gray-800 hover:bg-gray-100 transition"
          >
            Linkedin <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
