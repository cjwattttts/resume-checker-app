// Create a styled textarea for users to paste resume content
// Update resumeText in parent state on change

import React from 'react';

function ResumeInputArea({ resumeText, setResumeText }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <label htmlFor="resumeInput" style={{ fontWeight: 'bold', fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>
        Paste Your Resume Text
      </label>
      <textarea
        id="resumeInput"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        rows="12"
        style={{
          width: '100%',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '1rem',
          fontFamily: 'monospace',
          backgroundColor: '#fdfdfd',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}
        placeholder="Copy and paste your resume here. The analyzer will scan it for relevant Business Analyst skills."
      />
    </div>
  );
}

export default ResumeInputArea;
