// src/auth/AuthContext.jsx
import React, { createContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Authentication and editing features have been removed.
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
