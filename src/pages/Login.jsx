// src/pages/Login.jsx
import React from 'react';

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Admin Login Disabled
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Browser authentication and editing are no longer available.
          </p>
        </div>
      </div>
    </div>
  );
};