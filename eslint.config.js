import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsx_a11y from 'eslint-plugin-jsx-a11y'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsx_a11y,
    },
    rules: {
      // JavaScript errors
      'no-undef': 'error',        // Catches undefined variables
      'no-unused-vars': 'warn',   // Warns about unused variables
      'prefer-const': 'warn',     // Use const when variables aren't reassigned
      
      // React errors
      'react/jsx-no-undef': 'error',            // Catches undefined variables
      'react/jsx-no-duplicate-props': 'error',  // Duplicate props will cause unexpected behavior
      'react/no-direct-mutation-state': 'error', // Direct state mutations break React's state management
      'react/react-in-jsx-scope': 'off',        // Not needed in React 17+
      'react/prop-types': 'warn',               // Ensure prop types are defined
      
      // Critical Hook rules
      'react-hooks/rules-of-hooks': 'error',    // Hooks must be called in the same order every render
      'react-hooks/exhaustive-deps': 'warn',    // Checks effect dependencies
      
      // Fast Refresh - only if you're using React Fast Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Accessibility rules
      'jsx-a11y/alt-text': 'warn',              // Enforce alt text on images
      'jsx-a11y/click-events-have-key-events': 'warn', // Ensure click events are also accessible via keyboard
      'jsx-a11y/no-static-element-interactions': 'warn', // Elements with event handlers need role
      'jsx-a11y/interactive-supports-focus': 'warn',   // Interactive elements need to be focusable
    },
  },
];
