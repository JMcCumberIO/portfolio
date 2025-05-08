import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { Link } from 'react-router-dom';

export default function LoginNav({ className = '' }) {
  const { user, login, logout } = useAuth();
  return (
    <div className={className}>
      {user ? (
        <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Logout
        </button>
      ) : (
        <button onClick={login} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Login with GitHub
        </button>
      )}
    </div>
  );
}
