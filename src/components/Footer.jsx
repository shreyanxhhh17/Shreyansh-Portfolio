import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-lg border-t border-white/30 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Shreyansh <span className="text-blue-500">Portfolio</span>
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Crafting modern and impactful digital experiences.
            </p>
          </div>
          <div className="border-t border-gray-300/40 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Shreyansh. All rights reserved.
          </p>
        </div>
          {/* Social Icons */}
          <div className="flex gap-5 text-gray-700 text-xl">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider */}

      </div>
    </footer>
  );
};

export default Footer;
