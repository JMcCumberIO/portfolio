// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Professional Experience</h2>
        
        {/* Senior System Administrator */}
        <div className="mb-12">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Senior System Administrator</h3>
            <span className="text-gray-600 dark:text-gray-400">2020 - Present</span>
          </div>
          <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Healthcare Technology Solutions</div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Spearheaded enterprise-wide IT infrastructure modernization and security initiatives for a healthcare technology organization supporting 500+ users across multiple locations.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
            <li>Orchestrated migration to hybrid cloud infrastructure (AWS/Azure) reducing operational costs by 40% while maintaining HIPAA compliance</li>
            <li>Implemented zero-trust security architecture and enhanced monitoring solutions, decreasing security incidents by 90% and achieving 99.99% system uptime</li>
            <li>Led deployment of EDI integration systems for healthcare data exchange, processing 50,000+ transactions monthly</li>
            <li>Automated 95% of system provisioning processes using PowerShell and Python, reducing deployment time from days to hours</li>
          </ul>
        </div>

        {/* IT Infrastructure Specialist */}
        <div className="mb-12">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">IT Infrastructure Specialist</h3>
            <span className="text-gray-600 dark:text-gray-400">2018 - 2020</span>
          </div>
          <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Government Services Provider</div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Managed critical IT infrastructure and technical support operations for government entities, ensuring high availability and security compliance.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
            <li>Reduced system downtime by 30% through implementation of proactive monitoring and maintenance protocols</li>
            <li>Managed MSP services delivery for 3 government agencies, supporting 200+ endpoints with 98% satisfaction rate</li>
            <li>Designed and implemented disaster recovery solutions achieving 15-minute RPO and 1-hour RTO targets</li>
            <li>Decreased recurring incident resolution time by 45% through knowledge base implementation and automation</li>
          </ul>
        </div>

        {/* Technical Support Engineer */}
        <div className="mb-12">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Technical Support Engineer</h3>
            <span className="text-gray-600 dark:text-gray-400">2016 - 2018</span>
          </div>
          <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Emergency Management Systems</div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Provided advanced technical support and system optimization for emergency management software solutions, including Zoll Data Systems.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
            <li>Improved application response times by 60% through database optimization and system tuning</li>
            <li>Managed EMS software deployment for 25+ emergency service organizations with zero critical incidents</li>
            <li>Developed and delivered technical training programs, reducing support tickets by 35%</li>
            <li>Maintained 99.9% uptime for critical emergency response systems serving 100,000+ citizens</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;