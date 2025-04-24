import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProjectList from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <main className="mt-16 container mx-auto px-4">
            <Routes>
              <Route path="/" element={
                <>
                  <Skills />
                  <ProjectList />
                </>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;