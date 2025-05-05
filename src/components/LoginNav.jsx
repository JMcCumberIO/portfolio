import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

export default function LoginNav({ className = '' }) {
  const { 
    user, 
    loading, 
    isEditing, 
    login, 
    logout, 
    toggleEditMode,
    authModalOpen
  } = useAuth();
  
  const [error, setError] = useState(null);

  // GitHub icon for login button
  const GitHubIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );

  // Edit icon for edit mode button
  const EditIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
    </svg>
  );

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  // Handle login with error handling
  const handleLogin = async () => {
    try {
      setError(null);
      await login();
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to initialize login process');
    }
  };

  // Display error state if there's an error
  if (error) {
    return (
      <div className={className}>
        <div className="flex flex-col">
          <button 
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg mb-2"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Login Error
          </button>
          <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
          <button 
            onClick={() => setError(null)}
            className="text-xs text-blue-600 dark:text-blue-400 underline mt-1"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Show loading state while authentication is in progress
  if (loading || authModalOpen) {
    return (
      <div className={className}>
        <button className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-lg cursor-wait">
          <LoadingSpinner />
          {authModalOpen ? 'Authenticating...' : 'Loading...'}
        </button>
      </div>
    );
  }

  // Show login button when not authenticated
  if (!user) {
    return (
      <div className={className}>
        <button 
          onClick={handleLogin}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg relative"
        >
          <GitHubIcon />
          Login with GitHub
          {/* Debug indicator */}
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-1 rounded-full">
            DEBUG
          </span>
        </button>
      </div>
    );
  }

  // Show authenticated state with edit mode option
  return (
    <div className={`${className} flex space-x-2`}>
      {/* Edit mode toggle button */}
      <button
        onClick={toggleEditMode}
        className={`flex items-center px-4 py-2 ${
          isEditing
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white rounded-lg transition-colors duration-300 shadow-lg`}
        title={isEditing ? 'Currently in edit mode' : 'Enable edit mode'}
      >
        <EditIcon />
        {isEditing ? 'Editing' : 'Edit'}
      </button>
      
      {/* Logout button */}
      <button 
        onClick={logout}
        className="flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 shadow-lg"
        title={`Logged in as ${user.login}`}
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
        </svg>
        Logout
      </button>
    </div>
  );
}
