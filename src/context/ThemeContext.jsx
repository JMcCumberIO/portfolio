// src/App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;