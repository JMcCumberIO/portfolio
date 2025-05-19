import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import PropTypes from 'prop-types';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log('Scroll event', window.scrollY); // Debug: log scroll position
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // TEMP: Use red background for visibility
  return visible ? (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[9999] bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  ) : null;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle keyboard accessibility for navigation items
  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full relative">
            {/* Logo */}
            <a 
              href="#" 
              className="text-lg xs:text-xl sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-colors duration-300"
              aria-label="Jonathan McCumber - Home"
            >
              Jonathan McCumber
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#certifications">Certifications</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Always Visible Controls */}
            <div className="flex items-center space-x-1.5 xs:space-x-2.5 sm:space-x-4 pr-0.5 xs:pr-1 sm:pr-2">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleTheme}
                onKeyDown={(e) => handleKeyDown(e, toggleTheme)}
                className="p-1 xs:p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === 'dark' ? (
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                onKeyDown={(e) => handleKeyDown(e, toggleMenu)}
                className="block md:hidden inline-flex items-center justify-center p-1.5 xs:p-2 sm:p-2.5 rounded-lg bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 border-2 border-blue-400 dark:border-blue-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                <svg 
                  className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`${
              isMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
            } md:hidden overflow-hidden transition-all duration-300 ease-in-out -mx-1 xs:-mx-2 sm:-mx-4 ${isMenuOpen ? 'backdrop-blur-sm bg-white/30 dark:bg-gray-900/30' : ''}`}
            aria-hidden={!isMenuOpen}
          >
            <div className="py-3 space-y-2 xs:space-y-3 sm:space-y-4 pb-5">
              <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</MobileNavLink>
              <MobileNavLink href="#education" onClick={() => setIsMenuOpen(false)}>Education</MobileNavLink>
              <MobileNavLink href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
              <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        </div>
      </nav>
      <ScrollToTopButton />
    </>
  );
}

// Reusable NavLink component for desktop navigation
const NavLink = ({ href, children }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Optionally update the hash in the URL
        window.history.replaceState(null, '', href);
      }
    }
  };
  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-md py-1 px-2"
    >
      {children}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Reusable MobileNavLink component for mobile navigation
const MobileNavLink = ({ href, onClick, children }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', href);
      }
    }
    if (onClick) onClick(e);
  };
  return (
    <a 
      href={href} 
      className="block px-3 xs:px-4 py-1.5 xs:py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-300 text-sm xs:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

MobileNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
