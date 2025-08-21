import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Devera",
    tech: ["React", "TailwindCSS"],
    description:
      "A modern, aesthetically project management app.",
    github: "https://github.com/shreyanxhhh17/DevEra.git",
  },
  {
    title: "Gemini Clone",
    tech: ["React", "Gemini API"],
    description: "Clone of Google Gemini with AI-powered conversational UI.",
    github: "https://github.com/shreyanxhhh17/Gemini-Clone.git",
  },
  {
    title: "Rhythm - Music Player",
    tech: ["HTML5","CSS3"],
    description: "Basic Music Player design",
    github: "",
    live: "",
  },
    {
    title: "Phishing Detection",
    tech: ["Python", "Flask", "ML"],
    description: "AI-powered phishing URL detection with 99% accuracy.",
    github: "https://github.com/shreyanxhhh17/PhisGuard-phishing-website-detection-using-ML.git",
    live: "",
  },
  {
    title: "Admin Dashboard",
    tech: ["ReactJs", "Rechart"],
    description: "Created a admin dashboard using reactjs & chart",
    github: "https://github.com/shreyanxhhh17/Admin-Dashboard",
  },
  {
    title: "Swap Skill",
    tech: ["Typescript", "Javascript"],
    description: "A platform where users can swap skills and learn together.",
    github: "https://github.com/shreyanxhhh17/Swap-skill.git",
  },
  {
    title: "Password Manager",
    tech: ["C Programming"],
    description: "Password Manager ",
    github: "https://github.com/shreyanxhhh17/C-Password-Manager.git",
  },
];

const courses = [
  {
    title: "C Programming",
    tech: ["Basics", "Advanced", "DSA"],
    description: "Complete C programming course from basics to advanced.",
  },
  {
    title: "React JS",
    tech: ["Hooks", "State Management", "Projects"],
    description: "Modern React JS course with hooks, state, and projects.",
  },
];

const WorkPage = () => {
  return (
    <section id="work" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Projects Section */}
        <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
          My <span className="text-blue-600">Courses</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-3">{course.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {course.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {course.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
