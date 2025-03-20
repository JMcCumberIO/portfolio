// src/components/Experience.jsx
import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "SPS Commerce",
      roles: [
        {
          title: "Sr. Application Engineer",
          period: "Dec 2023 - Present",
          description: "Senior Application Engineer role focusing on cloud administration and technical support."
        },
        {
          title: "Manager I, Development",
          period: "Aug 2022 - Dec 2023",
          description: "Software Development manager managing a team of Individual contributors across technical and customer-facing roles. Built relationships of trust, provided coaching, and managed employee performance while partnering with development and product teams."
        },
        {
          title: "Software Engineer",
          period: "Jan 2022 - Aug 2022",
          description: "Software Engineering role at SPS Commerce."
        }
      ]
    },
    {
      company: "NetSource One",
      roles: [
        {
          title: "Systems Engineer Tier 2",
          period: "Jun 2021 - Dec 2021",
          description: "Advanced systems engineering role handling escalated service requests and incidents."
        },
        {
          title: "System Engineer",
          period: "Aug 2020 - Jun 2021",
          description: "Handled service requests and incidents for technologies including printers, workstations, servers, vendor hardware/software, backups and disaster recovery. Provided IT support for Microsoft systems, virtual environments (VMware, Citrix)."
        }
      ]
    },
    {
      company: "ZOLL Data",
      roles: [
        {
          title: "Technical Support Representative",
          period: "Sep 2019 - Aug 2020",
          description: "Troubleshooted SQL databases, Windows environments and networks for ZOLL's ePCR software. Updated software versions, assisted users via multiple channels, and documented repairs."
        }
      ]
    },
    {
      company: "Retail Data Systems",
      roles: [
        {
          title: "Sr. Support Technician",
          period: "Aug 2018 - Sep 2019",
          description: "Technical support role for leading point of sale company, involving hardware installation/repair, software support, and system networking."
        }
      ]
    },
    {
      company: "24-7 Intouch",
      roles: [
        {
          title: "Customer Service Representative",
          period: "Jun 2018 - Aug 2018",
          description: "Customer service role providing support and assistance."
        }
      ]
    },
    {
      company: "Noodles & Company",
      roles: [
        {
          title: "Shift Manager",
          period: "Feb 2016 - Jun 2018",
          description: "Management role overseeing shift operations and team performance."
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 relative backdrop-blur-sm bg-white/30 dark:bg-black/20 p-6 rounded-r-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 transition-colors duration-300">
                {exp.company}
              </h3>
              <div className="space-y-6">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="hover:bg-white/50 dark:hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                    <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 transition-colors duration-300">
                      {role.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-300 mb-2 font-medium transition-colors duration-300">
                      {role.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {role.description}
                    </p>
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

export default Experience;