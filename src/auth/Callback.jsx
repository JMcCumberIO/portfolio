import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const Callback = () => {
  const { handleAuthCallback } = useAuth();
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const processAuth = async () => {
      try {
        // Extract the code from URL parameters
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get('code');
        
        if (!code) {
          setStatus('error');
          setError('No authorization code found in the URL');
          return;
        }

        // Process the code with the auth context
        const success = await handleAuthCallback(code);
        
        if (success) {
          setStatus('success');
          // Redirect to home page after a brief delay
          setTimeout(() => {
            window.location.href = '/';
          }, 1500);
        } else {
          setStatus('error');
          setError('Failed to authenticate with GitHub');
        }
      } catch (err) {
        console.error('Authentication error:', err);
        setStatus('error');
        setError(err.message || 'An unexpected error occurred during authentication');
      }
    };

    processAuth();
  }, [handleAuthCallback]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <h2 className="text-xl font-semibold mb-2">Authenticating...</h2>
          <p className="text-gray-600 dark:text-gray-400">Connecting to GitHub, please wait.</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="text-center max-w-md">
          <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Authentication Failed</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <a 
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="text-center max-w-md">
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Authentication Successful!</h2>
          <p className="text-gray-600 dark:text-gray-400">You've successfully logged in with GitHub.</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Redirecting you to the home page...</p>
        </div>
      </div>
    );
  }

  // This should never be reached, but just in case
  return null;
};

export default Callback;

