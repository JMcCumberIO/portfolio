// src/components/Education.jsx
import React from 'react';

function Education() {
  return (
    <section className="py-10 pb-4 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="backdrop-blur-sm bg-white/30 dark:bg-black/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4 transition-colors duration-300">
            Metropolitan State University of Denver
          </h3>
          <p className="text-xl text-blue-700 dark:text-blue-300 mb-4 font-medium transition-colors duration-300">
            Computer Information Systems
          </p>
          <p className="text-lg text-indigo-700 dark:text-indigo-300 mb-2 transition-colors duration-300">
            Specialization: Network Systems and Administration
          </p>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Focused on advanced networking concepts, system administration, and cloud computing technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;