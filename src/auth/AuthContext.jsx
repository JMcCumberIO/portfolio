// src/auth/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getOctokit, createOAuthUrl, getFileContent, updateFile } from '../config/github';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [octokit, setOctokit] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('github_token');
    if (token) {
      initializeWithToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const initializeWithToken = async (token) => {
    try {
      const oktokitInstance = getOctokit(token);
      const { data: userData } = await oktokitInstance.rest.users.getAuthenticated();
      
      setOctokit(oktokitInstance);
      setUser(userData);
    } catch (error) {
      console.error('Authentication error:', error);
      localStorage.removeItem('github_token');
    } finally {
      setLoading(false);
    }
  };

  const login = () => {
    window.location.href = createOAuthUrl();
  };

  const logout = () => {
    localStorage.removeItem('github_token');
    setUser(null);
    setOctokit(null);
    setIsEditing(false);
  };

  const handleAuthCallback = async (code) => {
    try {
      // Note: Token exchange should be handled by a secure backend
      // This is a placeholder for the OAuth flow
      const token = 'placeholder_token';
      
      localStorage.setItem('github_token', token);
      await initializeWithToken(token);
      return true;
    } catch (error) {
      console.error('Auth callback error:', error);
      return false;
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const updateContent = async (path, content) => {
    if (!octokit) throw new Error('Not authenticated');

    const { sha } = await getFileContent(octokit, path);
    await updateFile(octokit, path, content, sha);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isEditing,
        login,
        logout,
        handleAuthCallback,
        toggleEditMode,
        updateContent,
      }}
    >
      {children}
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