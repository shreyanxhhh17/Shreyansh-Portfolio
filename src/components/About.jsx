import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="src\assets\pfp.webp" // Replace with your image path
            alt="Shreyansh Sahu"
            className="w-80 h-96 rounded-4xl border-4 border-blue-500 shadow-lg object-cover"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-md mb-4 leading-relaxed">
            Hi, I’m <span className="font-semibold">Shreyansh Sahu</span> — a
            passionate <span className="text-blue-600">MERN Stack Developer </span> 
            dedicated to crafting modern, user-friendly, and high-performance 
            web applications.
          </p>
          <p className="text-md mb-4 leading-relaxed">
            My focus is on building clean, responsive, and scalable solutions 
            that deliver seamless user experiences. I love working with the latest 
            web technologies to create projects that combine elegant design with 
            powerful functionality.
          </p>

          {/* Skills Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">Skills & Tools</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">HTML5 / CSS3</li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">JavaScript (ES6+)</li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">React.js</li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">Node.js & Express</li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">MongoDB</li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">PostgresSQL</li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">Git & GitHub</li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">Jest</li>
              <li className="bg-gray-100 p-3 rounded-lg shadow-sm">Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
