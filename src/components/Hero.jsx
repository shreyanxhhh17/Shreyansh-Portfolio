import React from "react";
import pfp from "../assets/pfp.webp";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-lg text-gray-600 mb-2">
          Hello, I'm <span className="font-semibold text-gray-900">Shreyansh</span>
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Crafting modern <span className="text-blue-600">web experiences</span> <br />
          that people love.
        </h1>
        <p className="text-gray-600 text-lg max-w-lg mb-6">
          I'm a MERN developer passionate about building clean, responsive,
          and user-friendly websites. I focus on elegant solutions that combine
          design and performance.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Get in Touch →
          </a>
          <a
            href="/resume.pdf"
            className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            View Resume ⬇
          </a>
        </div>
      </div>

      {/* Right Profile Image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-1 shadow-xl ">
          <img
            src={pfp} // Put your image in public folder
            alt="Shreyansh"
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
