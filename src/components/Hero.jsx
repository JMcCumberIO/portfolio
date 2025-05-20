// src/components/Hero.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Hero() {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Jonathan McCumber
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300 transition-colors duration-300">
            IT Professional & Developer
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-300 mb-8 transition-colors duration-300">
            Coralville, Iowa, United States
          </p>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Versatile IT Professional with extensive expertise across diverse technology domains. Notable experience includes EDI system development at SPS Commerce, delivering managed IT services for government entities at Net Source One, and developing EMS software solutions at Zoll Data. Proven track record in system administration, cloud infrastructure, and application development. Skilled in implementing enterprise-wide solutions, optimizing IT operations, and leading technical initiatives. Committed to delivering innovative solutions while maintaining high standards of system reliability and security across various technology sectors.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <CallToActionButton 
              href="#contact" 
              isPrimary={true}
            >
              Contact Me
            </CallToActionButton>
            <CallToActionButton 
              href="#experience" 
              isPrimary={false}
            >
              View Experience
            </CallToActionButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable button component to ensure consistent styling and accessibility
const CallToActionButton = ({ href, isPrimary = false, children }) => {
  const baseClasses = "px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const primaryClasses = "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white";
  const secondaryClasses = "bg-white/30 dark:bg-black/20 backdrop-blur-sm text-blue-700 dark:text-blue-300";

  return (
    <a 
      href={href}
      className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}
    >
      {children}
    </a>
  );
};

CallToActionButton.propTypes = {
  href: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Hero;