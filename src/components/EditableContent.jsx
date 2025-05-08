// src/components/EditableContent.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const EditableContent = ({ component: Component, ...props }) => {
  // Editing features removed
  return <Component {...props} />;
};

EditableContent.propTypes = {
  component: PropTypes.elementType.isRequired
};