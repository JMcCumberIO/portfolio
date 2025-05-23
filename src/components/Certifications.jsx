// src/components/Certifications.jsx
import React from 'react';

function Certifications() {
  const certifications = [
    {
      title: "MS-100 Microsoft 365 Identity and Services",
      issuer: "Microsoft",
      date: "Feb 2021",
      credentialId: "990844587"
    },
    {
      title: "Learning Python",
      issuer: "LinkedIn",
      date: "Jun 2020"
    },
    {
      title: "Subnetting in Your Head",
      issuer: "LinkedIn",
      date: "Jun 2020"
    },
    {
      title: "PowerShell: Automating Administration",
      issuer: "LinkedIn",
      date: "May 2020"
    },
    {
      title: "IT Service Desk: Service Management",
      issuer: "LinkedIn",
      date: "Apr 2020"
    },
    {
      title: "Data Visualization for Data Analysts",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "Introduction to AWS for Non-Engineers: 1 Cloud Concepts",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "Learning Personal Branding",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "Learning SQL Programming",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "Programming Foundations: Databases",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "SQL Essential Training",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "SQL: Data Reporting and Analysis (2016)",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "Windows 10: Advanced Troubleshooting for IT Support",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "Windows Server 2019: Install and Configure Active Directory",
      issuer: "LinkedIn",
      date: "Jan 2020"
    },
    {
      title: "Cisco Certifications: First Steps",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "CompTIA Server+ (SK0-004) Cert Prep: 7 Troubleshooting",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "Computer Components and Peripherals for IT Technicians",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "IT Service Desk: Customer Service Fundamentals",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "IT Service Desk: Monitoring and Metrics Fundamentals",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "Learning PC Maintenance and Performance",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "Microsoft SQL Server 2016 Essential Training",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "Networking Foundations: Protocols and CLI Tools",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "Windows 10: Manage and Maintain Windows 10",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "Windows Server 2012 R2: Deploy Manage and Maintain Servers",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "Writing Customer Service Emails",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "vSphere 6.7 Part 02: Managing Storage",
      issuer: "LinkedIn",
      date: "Oct 2019"
    },
    {
      title: "Managing Customer Expectations for Frontline Employees",
      issuer: "LinkedIn",
      date: "Sep 2019"
    },
    {
      title: "Phone-Based Customer Service",
      issuer: "LinkedIn",
      date: "Sep 2019"
    },
    {
      title: "Honored Listee",
      issuer: "Marquis Who's Who",
      date: "Aug 2024",
      expires: "Dec 2029",
      credentialId: "012d41f8bd48457bb19c4b826775b04ee7641489b80d4398bed6a14cac658582"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm bg-white/30 dark:bg-black/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2 transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-purple-700 dark:text-purple-300 font-medium transition-colors duration-300">
                {cert.issuer}
              </p>
              <p className="text-indigo-700 dark:text-indigo-300 text-sm mt-2 transition-colors duration-300">
                Issued: {cert.date}{cert.expires ? ` - Expires: ${cert.expires}` : ''}
              </p>
              {cert.credentialId && (
                <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 transition-colors duration-300">
                  Credential ID: {cert.credentialId}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;