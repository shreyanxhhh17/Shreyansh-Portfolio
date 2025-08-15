import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-16 px-6 lg:px-20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have a question, want to work together, or just want to
            say hello — drop me a message!
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">
                shreyansh@example.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">+91 98765 4XYZ</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">
                Indore, Madhya Pradesh, India
              </span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white rounded-full shadow hover:bg-blue-50 transition"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
              >
                <Github className="w-5 h-5 text-gray-800" />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
