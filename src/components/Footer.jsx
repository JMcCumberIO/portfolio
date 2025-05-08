import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
      <div className="w-full mx-auto px-1 xs:px-2 sm:px-4 py-4">
        <div className="flex flex-col items-center justify-center space-y-2">
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

