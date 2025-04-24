// src/components/Projects.jsx
import React from "react";
import { FaGithub, FaPython, FaChartBar, FaRobot } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Data Analysis Pipeline",
      description: "Automated data processing and analysis pipeline using Python, Pandas, and NumPy. Features include data cleaning, visualization, and report generation.",
      icon: <FaChartBar className="w-8 h-8" />,
      tags: ["Python", "Pandas", "NumPy", "Data Analysis"],
      githubLink: "https://github.com/JMcCumberIO/data-analysis-pipeline"
    },
    {
      title: "Task Automation Suite",
      description: "Collection of Python scripts for automating routine system administration tasks, including log analysis, file management, and scheduled backups.",
      icon: <FaRobot className="w-8 h-8" />,
      tags: ["Python", "Automation", "System Admin"],
      githubLink: "https://github.com/JMcCumberIO/task-automation"
    },
    {
      title: "Python API Framework",
      description: "RESTful API framework built with Python and Flask, featuring authentication, data validation, and automated testing.",
      icon: <FaPython className="w-8 h-8" />,
      tags: ["Python", "Flask", "REST API"],
      githubLink: "https://github.com/JMcCumberIO/python-api"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-900 dark:via-gray-900 dark:to-indigo-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                  {project.icon}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow transition-colors duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;