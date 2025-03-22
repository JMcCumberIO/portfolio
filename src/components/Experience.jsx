// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {/* Senior System Administrator */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-0">
                  Senior System Administrator
                </h3>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  2020 - Present
                </span>
              </div>
              <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                Healthcare Technology Solutions
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Spearheaded enterprise-wide IT infrastructure modernization and security initiatives for a healthcare technology organization supporting 500+ users across multiple locations.
              </p>
              <ul className="space-y-3">
                {[
                  "Orchestrated migration to hybrid cloud infrastructure (AWS/Azure) reducing operational costs by 40% while maintaining HIPAA compliance",
                  "Implemented zero-trust security architecture and enhanced monitoring solutions, decreasing security incidents by 90% and achieving 99.99% system uptime",
                  "Led deployment of EDI integration systems for healthcare data exchange, processing 50,000+ transactions monthly",
                  "Automated 95% of system provisioning processes using PowerShell and Python, reducing deployment time from days to hours"
                ].map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* IT Infrastructure Specialist */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-0">
                  IT Infrastructure Specialist
                </h3>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  2018 - 2020
                </span>
              </div>
              <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                Government Services Provider
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Managed critical IT infrastructure and technical support operations for government entities, ensuring high availability and security compliance.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduced system downtime by 30% through implementation of proactive monitoring and maintenance protocols",
                  "Managed MSP services delivery for 3 government agencies, supporting 200+ endpoints with 98% satisfaction rate",
                  "Designed and implemented disaster recovery solutions achieving 15-minute RPO and 1-hour RTO targets",
                  "Decreased recurring incident resolution time by 45% through knowledge base implementation and automation"
                ].map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Support Engineer */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-0">
                  Technical Support Engineer
                </h3>
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                  2016 - 2018
                </span>
              </div>
              <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                Emergency Management Systems
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Provided advanced technical support and system optimization for emergency management software solutions, including Zoll Data Systems.
              </p>
              <ul className="space-y-3">
                {[
                  "Improved application response times by 60% through database optimization and system tuning",
                  "Managed EMS software deployment for 25+ emergency service organizations with zero critical incidents",
                  "Developed and delivered technical training programs, reducing support tickets by 35%",
                  "Maintained 99.9% uptime for critical emergency response systems serving 100,000+ citizens"
                ].map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;