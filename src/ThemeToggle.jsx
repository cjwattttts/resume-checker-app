// Let the user toggle between light and dark mode
// Add a basic button that updates darkMode state

import React from 'react';

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: '0.4rem 1rem',
          backgroundColor: darkMode ? '#f4f4f4' : '#333',
          color: darkMode ? '#000' : '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeToggle;
