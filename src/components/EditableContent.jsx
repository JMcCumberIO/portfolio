// src/components/EditableContent.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import PropTypes from 'prop-types';

export const EditableContent = ({ component: Component, contentType }) => {
  const { isEditing, updateContent } = useAuth();
  const [editableContent, setEditableContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load content on mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        setIsLoading(true);
        // Get initial content from props or fetch from GitHub
        const content = await Component.getInitialContent?.() || {};
        setEditableContent(content);
      } catch (err) {
        console.error('Error loading content:', err);
        setError('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [Component]);

  const handleContentChange = (newContent) => {
    setEditableContent(newContent);
  };

  const handleSave = async () => {
    try {
      // Update content in GitHub
      await updateContent(`content/${contentType}.json`, editableContent);
    } catch (err) {
      console.error('Error saving content:', err);
      setError('Failed to save content');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        {error}
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="relative border-2 border-dashed border-blue-400 p-4 my-4 rounded-lg">
        <Component 
          content={editableContent} 
          onContentChange={handleContentChange}
          isEditing={true}
        />
        <button
          onClick={handleSave}
          className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 text-sm"
        >
          Save Section
        </button>
      </div>
    );
  }

  return <Component content={editableContent} />;
};

EditableContent.propTypes = {
  component: PropTypes.elementType.isRequired,
  contentType: PropTypes.oneOf(['html', 'json']).isRequired
};