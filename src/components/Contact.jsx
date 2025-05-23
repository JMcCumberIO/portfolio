// src/components/Contact.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a
            href="https://www.linkedin.com/in/jon-mccumber-3505b212b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FaLinkedin className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 transition-colors duration-300">LinkedIn</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-center transition-colors duration-300">Let's connect professionally</p>
          </a>

          <a
            href="https://github.com/JMcCumberIO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="w-12 h-12 text-purple-700 dark:text-purple-300 mb-4 transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 transition-colors duration-300">GitHub</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-center transition-colors duration-300">Check out my projects</p>
          </a>

          <a
            href="mailto:JMcCumber12345@gmail.com"
            className="flex flex-col items-center p-6 backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FaEnvelope className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4 transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 transition-colors duration-300">Email</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-center transition-colors duration-300">Send me a message</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <a
            href={`${import.meta.env.BASE_URL}assets/jonathan-mccumber-resume.pdf`}
            download
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
