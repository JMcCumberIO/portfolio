import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PropTypes from 'prop-types';

// Social link component for consistent styling and accessibility
const SocialLink = ({ href, label, icon }) => (
  <a
    href={href}
    aria-label={label}
    className="mx-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-full p-1"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
      <div className="w-full mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social links */}
          <div className="flex items-center justify-center space-x-2 mb-2">
            <SocialLink
              href="https://github.com/JMcCumberIO"
              label="GitHub Profile"
              icon={<FaGithub className="w-6 h-6" />}
            />
            <SocialLink
              href="https://linkedin.com/in/jonathan-mccumber"
              label="LinkedIn Profile"
              icon={<FaLinkedin className="w-6 h-6" />}
            />
            <SocialLink
              href="mailto:contact@jmccumber.io"
              label="Email"
              icon={<FaEnvelope className="w-6 h-6" />}
            />
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Jonathan McCumber. All rights reserved.
          </div>
          
          <div className="text-xs text-gray-500 dark:text-gray-500">
            Built with React + Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

