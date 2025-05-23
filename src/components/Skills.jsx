// src/components/Skills.jsx
import React from "react";
import {
  FaCloud,
  FaDesktop,
  FaNetworkWired,
  FaDatabase,
  FaWindows,
  FaTerminal,
  FaVectorSquare,
  FaUsers,
  FaPython,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      category: "Cloud & Infrastructure",
      skills: [
        {
          name: "Azure Cloud Services",
          icon: <VscAzure className="w-8 h-8" />,
        },
        {
          name: "VMware Infrastructure",
          icon: <FaVectorSquare className="w-8 h-8" />,
        },
        {
          name: "Cloud Administration",
          icon: <FaCloud className="w-8 h-8" />,
        },
      ],
    },
    {
      category: "Systems & Network",
      skills: [
        {
          name: "Windows Server",
          icon: <FaWindows className="w-8 h-8" />,
        },
        {
          name: "Network Systems",
          icon: <FaNetworkWired className="w-8 h-8" />,
        },
        {
          name: "Active Directory",
          icon: <FaUsers className="w-8 h-8" />,
        },
      ],
    },
    {
      category: "Development & Tools",
      skills: [
        {
          name: "Python Development",
          icon: <FaPython className="w-8 h-8" />,
        },
        {
          name: "SQL & Databases",
          icon: <FaDatabase className="w-8 h-8" />,
        },
        {
          name: "PowerShell & Scripts",
          icon: <FaTerminal className="w-8 h-8" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6 transition-colors duration-300">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-6 backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-indigo-600 dark:text-indigo-400 mb-4 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 text-center transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
