// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 transition-colors duration-500">
      <div className="w-full mx-auto">
        <div className="text-center">
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold mb-4 xs:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Jonathan McCumber
          </h1>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-semibold mb-3 xs:mb-4 text-indigo-700 dark:text-indigo-300 transition-colors duration-300">
            IT Professional & Developer
          </h2>
          <p className="text-base xs:text-lg text-blue-600 dark:text-blue-300 mb-6 xs:mb-8 transition-colors duration-300">
            Coralville, Iowa, United States
          </p>
          <div className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto mb-8 xs:mb-10 sm:mb-12">
            <p className="text-sm xs:text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Versatile IT Professional with extensive expertise across diverse technology domains. Notable experience includes EDI system development at SPS Commerce, delivering managed IT services for government entities at Net Source One, and developing EMS software solutions at Zoll Data. Proven track record in system administration, cloud infrastructure, and application development. Skilled in implementing enterprise-wide solutions, optimizing IT operations, and leading technical initiatives. Committed to delivering innovative solutions while maintaining high standards of system reliability and security across various technology sectors.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-white/30 dark:bg-black/20 backdrop-blur-sm text-blue-700 dark:text-blue-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
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