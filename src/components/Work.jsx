import React, { useState } from "react";

// Example data for projects
const projects = [
  {
    title: "Portfolio Website",
    images: [
      "/images/portfolio1.png",
      "/images/portfolio2.png",
      "/images/portfolio3.png",
    ],
    description: "A modern portfolio website showcasing my skills and projects.",
  },
  {
    title: "E-commerce Store",
    images: [
      "/images/ecom1.png",
      "/images/ecom2.png",
      "/images/ecom3.png",
    ],
    description: "Full-stack MERN e-commerce platform with payment integration.",
  },
  {
    title: "Chat Application",
    images: [
      "/images/chat1.png",
      "/images/chat2.png",
      "/images/chat3.png",
    ],
    description: "Real-time chat app built using Socket.io and Node.js.",
  },
  {
    title: "Weather App",
    images: [
      "/images/weather1.png",
      "/images/weather2.png",
      "/images/weather3.png",
    ],
    description: "Weather forecast app using OpenWeather API.",
  },
];

// Example data for courses
const courses = [
  {
    title: "C Programming",
    logo: "/src/assets/C-prog.webp",
    description: "Complete C programming course from basics to advanced.",
  },
  {
    title: "React JS",
    logo: "/src/assets/React-Logo.webp",
    description:
      "Modern React JS course with hooks, state management, and projects.",
  },
];

const WorkPage = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
    let i = 0;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % projects[index].images.length);
      i++;
      if (i > projects[index].images.length * 2) clearInterval(interval);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setImageIndex(0);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Projects Section */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={
                hoverIndex === index
                  ? project.images[imageIndex]
                  : project.images[0]
              }
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Courses Section */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition"
          >
            <img
              src={course.logo}
              alt={`${course.title} logo`}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
