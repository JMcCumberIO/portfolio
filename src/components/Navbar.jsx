// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

function Navbar() {
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

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label="Toggle dark mode"
      >
        {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
      </button>
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
