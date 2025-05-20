// src/components/Projects.jsx
import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaPython, FaMarkdown, FaJsSquare, FaCode, FaTerminal } from "react-icons/fa";
import { VscAzureDevops, VscAzure } from "react-icons/vsc";

// ProjectCard component for DRY code
const ProjectCard = ({ project }) => (
  <div className="backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
        {project.icon}
      </div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} code on GitHub`}
        className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
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
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
  }).isRequired,
};

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "This very site! A modern, responsive portfolio built with React and Tailwind CSS, showcasing professional experience, skills, and projects.",
      icon: <FaJsSquare className="w-8 h-8" />,
      tags: ["React", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/JMcCumberIO/portfolio"
    },
    {
      title: "Flashforge Adventurer 5M Scripts",
      description: "Python scripts and resources for the Flashforge Adventurer 5M 3D printer, including automation and utility tools.",
      icon: <FaPython className="w-8 h-8" />,
      tags: ["Python", "3D Printing", "Automation"],
      githubLink: "https://github.com/JMcCumberIO/flashforge_adventurer5m"
    },
    {      title: "Enterprise Automation Framework",
      description: "A modular framework for automating enterprise cloud infrastructure provisioning and management. Built with PowerShell and Bicep, it enables repeatable, scalable deployments and automation workflows for Azure environments.",
      icon: <FaTerminal className="w-8 h-8" />,
      tags: ["PowerShell", "Bicep", "Azure", "Automation"],
      githubLink: "https://github.com/JMcCumberIO/Enterprise-Automation-Framework"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;