// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaEdit, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from '../auth/AuthContext';

function Navbar() {
  const { user, logout, isEditing, toggleEditMode } = useAuth();
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg transition-colors duration-500">
  <div className="max-w-7xl mx-auto px-4 w-full">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <a
        href="#home"
        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-colors duration-300"
      >
        Jonathan McCumber
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label="Open menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars className="w-5 h-5" />
      </button>

      {/* Auth Controls */}
      <div className="flex items-center space-x-2">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>

        {/* Auth Buttons */}
        {user ? (
          <>
            <button
              onClick={toggleEditMode}
              className={`p-2 rounded-lg ${isEditing ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'} hover:bg-blue-600 transition-colors duration-300`}
              aria-label="Toggle edit mode"
            >
              <FaEdit className="w-5 h-5" />
            </button>
            <button
              onClick={logout}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-colors duration-300"
              aria-label="Logout"
            >
              <FaSignOutAlt className="w-5 h-5" />
            </button>
          </>
        ) : (
          <button
            onClick={() => window.location.href = './login'}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            aria-label="Login with GitHub"
          >
            <FaSignInAlt className="w-5 h-5" />
            <span>Login with GitHub</span>
          </button>
        )}
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden flex flex-col space-y-4 mt-4">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    )}
  </div>
</nav>
  );
}

export default Navbar;
