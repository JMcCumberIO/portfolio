import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {/* Senior System Administrator */}
          <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 relative backdrop-blur-sm bg-white/30 dark:bg-black/20 p-6 rounded-r-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 transition-colors duration-300">
              Healthcare Technology Solutions
            </h3>
            <div className="space-y-6">
              <div className="hover:bg-white/50 dark:hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 transition-colors duration-300">
                  Senior System Administrator
                </h4>
                <p className="text-blue-600 dark:text-blue-300 mb-2 font-medium transition-colors duration-300">
                  2020 - Present
                </p>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Spearheaded enterprise-wide IT infrastructure modernization and security initiatives for a healthcare technology organization supporting 500+ users across multiple locations.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Orchestrated migration to hybrid cloud infrastructure (AWS/Azure) reducing operational costs by 40% while maintaining HIPAA compliance",
                    "Implemented zero-trust security architecture and enhanced monitoring solutions, decreasing security incidents by 90% and achieving 99.99% system uptime",
                    "Led deployment of EDI integration systems for healthcare data exchange, processing 50,000+ transactions monthly",
                    "Automated 95% of system provisioning processes using PowerShell and Python, reducing deployment time from days to hours"
                  ].map((achievement, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-purple-400 dark:border-purple-500">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* IT Infrastructure Specialist */}
          <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 relative backdrop-blur-sm bg-white/30 dark:bg-black/20 p-6 rounded-r-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 transition-colors duration-300">
              Government Services Provider
            </h3>
            <div className="space-y-6">
              <div className="hover:bg-white/50 dark:hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 transition-colors duration-300">
                  IT Infrastructure Specialist
                </h4>
                <p className="text-blue-600 dark:text-blue-300 mb-2 font-medium transition-colors duration-300">
                  2018 - 2020
                </p>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Managed critical IT infrastructure and technical support operations for government entities, ensuring high availability and security compliance.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Reduced system downtime by 30% through implementation of proactive monitoring and maintenance protocols",
                    "Managed MSP services delivery for 3 government agencies, supporting 200+ endpoints with 98% satisfaction rate",
                    "Designed and implemented disaster recovery solutions achieving 15-minute RPO and 1-hour RTO targets",
                    "Decreased recurring incident resolution time by 45% through knowledge base implementation and automation"
                  ].map((achievement, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-purple-400 dark:border-purple-500">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Support Engineer */}
          <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 relative backdrop-blur-sm bg-white/30 dark:bg-black/20 p-6 rounded-r-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 transition-colors duration-300">
              Emergency Management Systems
            </h3>
            <div className="space-y-6">
              <div className="hover:bg-white/50 dark:hover:bg-white/10 p-4 rounded-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 transition-colors duration-300">
                  Technical Support Engineer
                </h4>
                <p className="text-blue-600 dark:text-blue-300 mb-2 font-medium transition-colors duration-300">
                  2016 - 2018
                </p>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Provided advanced technical support and system optimization for emergency management software solutions, including Zoll Data Systems.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Improved application response times by 60% through database optimization and system tuning",
                    "Managed EMS software deployment for 25+ emergency service organizations with zero critical incidents",
                    "Developed and delivered technical training programs, reducing support tickets by 35%",
                    "Maintained 99.9% uptime for critical emergency response systems serving 100,000+ citizens"
                  ].map((achievement, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-purple-400 dark:border-purple-500">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;