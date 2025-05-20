import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SkipToContent from "./components/SkipToContent";

const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Certifications = lazy(() => import("./components/Certifications"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-transparent">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="w-full mx-auto px-4 py-8">
          <Hero />
          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
            <Education />
            <Certifications />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
