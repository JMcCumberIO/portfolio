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
            Sr. Application Engineer @ SPS Commerce
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-300 mb-8 transition-colors duration-300">
            Coralville, Iowa, United States
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              As a Sr. Application Engineer at SPS Commerce, I leverage my skills in cloud administration, technical support, and virtual networks to deliver high-quality solutions for our clients. I have a strong background in network systems and administration, having studied at Metropolitan State University of Denver and Community College of Aurora. I am passionate about staying updated with the latest technologies and best practices in the field, and I continuously seek opportunities to learn and grow as a professional. My goal is to contribute to the success of SPS Commerce and its customers by providing innovative and reliable solutions that meet their needs and expectations.
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