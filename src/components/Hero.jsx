// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Jonathan McCumber
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300 transition-colors duration-300">
            Senior Software Engineer
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-300 mb-8 transition-colors duration-300">
            Coralville, Iowa, United States
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Results-driven Senior Software Engineer with extensive experience in cloud infrastructure, system administration, and application development. Proven track record of designing and implementing scalable solutions, optimizing system performance, and leading technical initiatives. Skilled in cloud technologies, network administration, and modern development practices. Known for delivering innovative solutions while maintaining high standards of code quality and system reliability. Passionate about leveraging technology to solve complex business challenges and drive organizational success.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 bg-white/30 dark:bg-black/20 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;