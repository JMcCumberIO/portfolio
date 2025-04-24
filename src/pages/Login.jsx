// src/pages/Login.jsx
import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { FaGithub } from 'react-icons/fa';

export const Login = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Sign in to Admin Panel
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Use your GitHub account to manage content
          </p>
        </div>
        
        <button
          onClick={login}
          className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
        >
          <FaGithub className="w-5 h-5 mr-2" />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};