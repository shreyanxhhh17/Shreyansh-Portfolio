import React from "react";
import { 
  FaPaintBrush, 
  FaCode, 
  FaChalkboardTeacher, 
  FaServer, 
  FaLightbulb, 
  FaBug 
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "UI / UX Design",
      description:
        "Designing clean, modern, and user-friendly interfaces that create delightful digital experiences.",
      icon: <FaPaintBrush className="text-4xl text-blue-500" />,
    },
    {
      title: "Website Development",
      description:
        "Building fast, responsive, and scalable websites with the MERN stack and cutting-edge technologies.",
      icon: <FaCode className="text-4xl text-purple-500" />,
    },
    {
      title: "Course Instructor",
      description:
        "Delivering high-quality, hands-on learning experiences in programming and web development.",
      icon: <FaChalkboardTeacher className="text-4xl text-pink-500" />,
    },
    {
      title: "Backend Development",
      description:
        "Creating secure, high-performance APIs and server-side applications using Node.js and Express.",
      icon: <FaServer className="text-4xl text-green-500" />,
    },
    {
      title: "Consultation & Mentoring",
      description:
        "Helping developers improve coding skills, project architecture, and career growth.",
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    },
    {
      title: "Testing & Debugging",
      description:
        "Ensuring your applications run flawlessly with thorough testing and efficient bug fixes.",
      icon: <FaBug className="text-4xl text-red-500" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold mb-4 text-gray-900">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Services</span>
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          I create digital solutions that combine elegant design with powerful functionality, tailored to your needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-5 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
