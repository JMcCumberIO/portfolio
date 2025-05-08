import React, { Component } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./auth/AuthContext";
// Removed unused import
import Callback from "./auth/Callback";
import { Login } from "./pages/Login";
import Navbar from "./components/Navbar";
// Removed unused import
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AdminToolbar } from "./components/AdminToolbar";

// Removed incomplete JSX block

// Error boundary to catch authentication errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Auth Error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          <h2>Something went wrong with authentication.</h2>
          <details className="mt-2 text-sm">
            <pre className="mt-2 bg-gray-100 p-2 rounded overflow-auto">
              {this.state.error && this.state.error.toString()}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main content component for the homepage
const HomePage = () => (
  <>
    <Navbar />
    <main className="w-full mx-auto px-4 py-8">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <AuthProvider>
          <Router>
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/auth/callback" element={<Callback />} />
              </Routes>
              {/* Admin toolbar for editing content */}
              <AdminToolbar />
              {/* Debug component - removed for production */}
              {/* <DebugEnvironment /> */}
            </div>
          </Router>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
