// src/components/AdminToolbar.jsx
import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { FaSave, FaTimes } from 'react-icons/fa';

export const AdminToolbar = () => {
  const { isEditing, toggleEditMode, updateContent } = useAuth();

  if (!isEditing) return null;

  const handleSave = async () => {
    try {
      // Example: update content for a specific file
      await updateContent('data/content.json', {
        // Add your content here
      });
      toggleEditMode();
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex space-x-2">
      <button
        onClick={handleSave}
        className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
      >
        <FaSave className="w-4 h-4 mr-2" />
        Save Changes
      </button>
      <button
        onClick={toggleEditMode}
        className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
      >
        <FaTimes className="w-4 h-4 mr-2" />
        Cancel
      </button>
    </div>
  );
};