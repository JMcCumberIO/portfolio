import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Eager loading for critical components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Lazy loading for non-critical components
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

// Loading spinner for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Main content component for the homepage
const HomePage = () => (
  <>
    <Navbar />
    <main className="w-full mx-auto px-4 py-8">
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
