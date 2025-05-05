import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './auth/AuthContext';
import { useAuth } from './auth/AuthContext';
import Callback from './auth/Callback';
import { Login } from './pages/Login';
import Navbar from './components/Navbar';
import LoginNav from './components/LoginNav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Debug component to check environment variables
const DebugEnvironment = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [timestamp, setTimestamp] = React.useState(new Date().toLocaleTimeString());
  const auth = useAuth();

  // Mask sensitive information
  const maskString = (str) => {
    if (!str) return 'null';
    if (str.length <= 4) return str;
    return str.substring(0, 4) + '...' + str.substring(str.length - 4);
  };

  // Force refresh debug panel
  const refreshDebug = () => {
    setTimestamp(new Date().toLocaleTimeString());
  };

  // Log environment variables to console
  React.useEffect(() => {
    console.log('-------- DEBUG ENVIRONMENT VARS --------');
    console.log('GitHub Client ID:', import.meta.env.VITE_GITHUB_CLIENT_ID);
    console.log('GitHub Scope:', import.meta.env.VITE_GITHUB_SCOPE);
    console.log('Repo Owner:', import.meta.env.VITE_REPO_OWNER);
    console.log('Repo Name:', import.meta.env.VITE_REPO_NAME);
    console.log('---------------------------------------');
  }, []);

  return (
    <div className="fixed bottom-0 left-0 bg-yellow-100 dark:bg-yellow-900 border-t-2 border-r-2 border-yellow-500 p-4 z-50 text-xs shadow-lg max-w-lg overflow-auto max-h-[80vh]">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-sm text-red-600 dark:text-red-400">DEBUG PANEL</h3>
        <div className="flex space-x-2">
          <button 
            onClick={refreshDebug} 
            className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
          >
            Refresh
          </button>
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="bg-gray-500 text-white px-2 py-1 rounded text-xs"
          >
            {expanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>
      
      {expanded && (
        <>
          <div className="text-xs text-gray-500 mb-2">Last updated: {timestamp}</div>
          
          <div className="mb-4 p-2 bg-white dark:bg-gray-800 rounded border border-yellow-500">
            <h4 className="font-bold mb-1 text-blue-700 dark:text-blue-300">Environment Variables:</h4>
            <div className="grid grid-cols-2 gap-1">
              <div className="text-gray-600 dark:text-gray-400">CLIENT_ID:</div>
              <div className="font-mono">
                {import.meta.env.VITE_GITHUB_CLIENT_ID ? 
                  maskString(import.meta.env.VITE_GITHUB_CLIENT_ID) : 
                  <span className="text-red-500">Missing!</span>}
                <span className="text-gray-500 ml-1">
                  (Length: {import.meta.env.VITE_GITHUB_CLIENT_ID?.length || 0})
                </span>
              </div>
              
              <div className="text-gray-600 dark:text-gray-400">SCOPE:</div>
              <div className="font-mono">
                {import.meta.env.VITE_GITHUB_SCOPE || <span className="text-red-500">Missing!</span>}
              </div>
              
              <div className="text-gray-600 dark:text-gray-400">REPO_OWNER:</div>
              <div className="font-mono">
                {import.meta.env.VITE_REPO_OWNER || <span className="text-red-500">Missing!</span>}
              </div>
              
              <div className="text-gray-600 dark:text-gray-400">REPO_NAME:</div>
              <div className="font-mono">
                {import.meta.env.VITE_REPO_NAME || <span className="text-red-500">Missing!</span>}
              </div>
            </div>
          </div>
          
          <div className="mb-4 p-2 bg-white dark:bg-gray-800 rounded border border-yellow-500">
            <h4 className="font-bold mb-1 text-blue-700 dark:text-blue-300">Auth State:</h4>
            <div className="grid grid-cols-2 gap-1">
              <div className="text-gray-600 dark:text-gray-400">User:</div>
              <div>{auth.user ? auth.user.login : 'Not logged in'}</div>
              
              <div className="text-gray-600 dark:text-gray-400">Loading:</div>
              <div>{auth.loading ? 'Yes' : 'No'}</div>
              
              <div className="text-gray-600 dark:text-gray-400">Edit Mode:</div>
              <div>{auth.isEditing ? 'Yes' : 'No'}</div>
              
              <div className="text-gray-600 dark:text-gray-400">Auth Modal Open:</div>
              <div>{auth.authModalOpen ? 'Yes' : 'No'}</div>
              
              <div className="text-gray-600 dark:text-gray-400">Auth Error:</div>
              <div className="text-red-500">{auth.authError || 'None'}</div>
            </div>
            
            <div className="mt-3 flex space-x-2">
              <button 
                onClick={auth.login} 
                className="bg-green-500 text-white px-2 py-1 rounded text-xs disabled:bg-gray-400"
                disabled={auth.loading || auth.authModalOpen}
              >
                Test Login
              </button>
              <button 
                onClick={auth.logout} 
                className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                disabled={!auth.user}
              >
                Test Logout
              </button>
            </div>
          </div>
          
          <div className="p-2 bg-white dark:bg-gray-800 rounded border border-yellow-500">
            <h4 className="font-bold mb-1 text-blue-700 dark:text-blue-300">Login Component Test:</h4>
            <div className="mt-2 border-t pt-2 border-dashed border-gray-300">
              <LoginNav className="my-2" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

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
            <summary>Error Details</summary>
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
    <main className="container mx-auto px-4 py-8">
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
              
              {/* Debug component - remove in production */}
              <DebugEnvironment />
            </div>
          </Router>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
