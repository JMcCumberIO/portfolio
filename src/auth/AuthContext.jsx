// src/auth/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getOctokit, getFileContent, updateFile } from '../config/github';

const AuthContext = createContext(null);

// DEBUG HELPERS
const DEBUG_PREFIX = '[Auth Debug]';
const debugLog = (...args) => console.log(DEBUG_PREFIX, ...args);

// GitHub device flow configuration
const GITHUB_DEVICE_CODE_URL = 'https://github.com/login/device/code';
const GITHUB_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const SCOPE = import.meta.env.VITE_GITHUB_SCOPE;

// Debug output for configuration
debugLog('Auth Configuration:', { 
  CLIENT_ID,
  SCOPE,
  deviceCodeUrl: GITHUB_DEVICE_CODE_URL,
  tokenUrl: GITHUB_ACCESS_TOKEN_URL
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [octokit, setOctokit] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [deviceCode, setDeviceCode] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [verificationUrl, setVerificationUrl] = useState('');
  const [pollingInterval, setPollingInterval] = useState(null);
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    debugLog('AuthContext initializing...');
    const token = localStorage.getItem('github_token');
    
    if (token) {
      debugLog('Found token in localStorage, attempting to initialize with token');
      initializeWithToken(token);
    } else {
      debugLog('No token found in localStorage, setting loading to false');
      setLoading(false);
    }

    // Clean up polling interval on unmount
    return () => {
      if (pollingInterval) {
        debugLog('Cleaning up polling interval on unmount');
        clearInterval(pollingInterval);
      }
    };
  }, []);

  const initializeWithToken = async (token) => {
    debugLog('Initializing with token...');
    try {
      debugLog('Creating Octokit instance');
      const oktokitInstance = getOctokit(token);
      
      debugLog('Retrieving authenticated user data');
      const { data: userData } = await oktokitInstance.rest.users.getAuthenticated();
      
      debugLog('Authentication successful, user:', userData.login);
      setOctokit(oktokitInstance);
      setUser(userData);
    } catch (error) {
      debugLog('Authentication error during initialization:', error);
      console.error('Authentication error:', error);
      localStorage.removeItem('github_token');
    } finally {
      debugLog('Setting loading state to false');
      setLoading(false);
    }
  };

  // Start device flow authentication
  const login = async () => {
    debugLog('Login function called');
    try {
      debugLog('Setting loading state to true');
      setLoading(true);
      setAuthError('');
      
      debugLog('Requesting device code from GitHub');
      debugLog('Request params:', { client_id: CLIENT_ID, scope: SCOPE });
      
      // Request device code
      const response = await fetch(GITHUB_DEVICE_CODE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          scope: SCOPE
        })
      });

      debugLog('Device code response status:', response.status);
      
      if (!response.ok) {
        debugLog('Failed to initiate device flow, response:', response);
        throw new Error('Failed to initiate device flow');
      }

      const data = await response.json();
      debugLog('Device code response data:', {
        device_code: data.device_code ? '[PRESENT]' : '[MISSING]',
        user_code: data.user_code,
        verification_uri: data.verification_uri,
        interval: data.interval
      });
      
      // Store device flow info
      debugLog('Storing device flow info');
      setDeviceCode(data.device_code);
      setUserCode(data.user_code);
      setVerificationUrl(data.verification_uri);
      
      // Open auth modal for user to complete verification
      debugLog('Opening auth modal for user verification');
      setAuthModalOpen(true);
      
      // Start polling for token
      debugLog('Starting token polling');
      startTokenPolling(data.device_code, data.interval || 5);
      
    } catch (error) {
      debugLog('Login error:', error);
      console.error('Login error:', error);
      setAuthError(error.message || 'Failed to start authentication');
      setLoading(false);
    }
  };

  // Poll for access token
  const startTokenPolling = (deviceCode, interval) => {
    debugLog('Starting token polling with interval:', interval, 'seconds');
    
    // Clear any existing interval
    if (pollingInterval) {
      debugLog('Clearing existing polling interval');
      clearInterval(pollingInterval);
    }

    const intervalId = setInterval(async () => {
      debugLog('Polling for token...');
      try {
        debugLog('Sending request to token endpoint');
        const response = await fetch(GITHUB_ACCESS_TOKEN_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            client_id: CLIENT_ID,
            device_code: deviceCode,
            grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
          })
        });

        debugLog('Token response status:', response.status);
        const data = await response.json();
        debugLog('Token response data:', {
          error: data.error || 'none',
          has_access_token: !!data.access_token
        });

        if (data.error) {
          // authorization_pending is normal while waiting for user
          if (data.error !== 'authorization_pending') {
            debugLog('Token polling error:', data.error);
            console.error('Token polling error:', data.error);
            if (data.error === 'expired_token') {
              debugLog('Token expired, stopping polling');
              clearInterval(intervalId);
              setAuthError('Verification timed out. Please try again.');
              setAuthModalOpen(false);
              setLoading(false);
            }
          } else {
            debugLog('Still waiting for user authorization...');
          }
          return;
        }

        // Successfully got access token
        if (data.access_token) {
          debugLog('Successfully received access token');
          clearInterval(intervalId);
          setPollingInterval(null);
          setAuthModalOpen(false);
          
          // Store token and initialize
          debugLog('Storing token in localStorage and initializing');
          localStorage.setItem('github_token', data.access_token);
          await initializeWithToken(data.access_token);
        }
      } catch (error) {
        debugLog('Token polling error:', error);
        console.error('Token polling error:', error);
      }
    }, interval * 1000);

    debugLog('Setting polling interval ID');
    setPollingInterval(intervalId);
  };

  const logout = () => {
    debugLog('Logging out user');
    localStorage.removeItem('github_token');
    setUser(null);
    setOctokit(null);
    setIsEditing(false);
    debugLog('User logged out, all state reset');
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const updateContent = async (path, content) => {
    if (!octokit) throw new Error('Not authenticated');

    const { sha } = await getFileContent(octokit, path);
    await updateFile(octokit, path, content, sha);
  };

  // Close auth modal
  const closeAuthModal = () => {
    debugLog('Closing auth modal');
    if (pollingInterval) {
      debugLog('Clearing polling interval');
      clearInterval(pollingInterval);
      setPollingInterval(null);
    }
    setAuthModalOpen(false);
    setLoading(false);
    debugLog('Auth modal closed, loading set to false');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isEditing,
        login,
        logout,
        toggleEditMode,
        updateContent,
        authModalOpen,
        userCode,
        verificationUrl,
        authError,
        closeAuthModal
      }}
    >
      {children}
      
      {/* Device Flow Auth Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">GitHub Authentication</h2>
            
            {authError ? (
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded mb-4 text-red-800 dark:text-red-200">
                {authError}
              </div>
            ) : (
              <>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  To complete authentication, visit:
                </p>
                <a 
                  href={verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-blue-50 dark:bg-blue-900/30 rounded text-blue-800 dark:text-blue-200 font-medium text-center mb-4 hover:underline"
                >
                  {verificationUrl}
                </a>
                <p className="mb-2 text-gray-700 dark:text-gray-300">
                  And enter this code:
                </p>
                <div className="flex justify-center mb-6">
                  <div className="font-mono text-lg bg-gray-100 dark:bg-gray-700 p-3 rounded-md tracking-widest font-bold">
                    {userCode}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="animate-spin h-5 w-5 mr-2 border-2 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full"></div>
                  <p className="text-gray-700 dark:text-gray-300">Waiting for authentication...</p>
                </div>
              </>
            )}
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeAuthModal}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
