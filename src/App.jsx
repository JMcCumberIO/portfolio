// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AdminToolbar } from './components/AdminToolbar';
import { Login } from './pages/Login';
import { EditableContent } from './components/EditableContent';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

// Main content with edit mode features
const MainContent = () => {
  const { isEditing } = useAuth();
  
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 ${isEditing ? 'editing-mode' : ''}`}>
      <Navbar />
      <EditableContent contentType="html" component={Hero} />
      <EditableContent contentType="html" component={Skills} />
      <EditableContent contentType="html" component={Projects} />
      <EditableContent contentType="html" component={Experience} />
      <EditableContent contentType="html" component={Certifications} />
      <EditableContent contentType="html" component={Education} />
      <EditableContent contentType="html" component={Contact} />
      <AdminToolbar />
    </div>
  );
};

// Auth callback handler
const AuthCallback = () => {
  const { handleAuthCallback } = useAuth();
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (!code) {
      setError('No authorization code found');
      return;
    }
    
    handleAuthCallback(code)
      .then((success) => {
        if (!success) {
          setError('Authentication failed');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [handleAuthCallback]);
  
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  
  return <div>Authenticating...</div>;
};

function App() {
  return (
    <AuthProvider>
      <Router basename="/portfolio">
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Certifications />
                  <Education />
                  <Contact />
                  {/* AdminToolbar only shown when authenticated */}
                  <ProtectedRoute>
                    <AdminToolbar />
                  </ProtectedRoute>
                </>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;