// Add a dropdown that lets the user choose their target job role
// Update state when the selection changes

import React from 'react';

function RoleSelector({ role, setRole }) {
  return (
    <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
      <label style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Select Target Role:</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      >
        <option>Business Analyst</option>
        <option>Data Analyst</option>
        <option>Project Manager</option>
      </select>
    </div>
  );
}

export default RoleSelector;
