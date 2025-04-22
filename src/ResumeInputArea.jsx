// I want a text box where users can paste in their resume
// It should update the resumeText state in the parent as they type

import React from 'react';

function ResumeInputArea({ resumeText, setResumeText }) {
  return (
    // Add spacing between the input and the rest of the page
    <div style={{ marginBottom: '2rem' }}>
      {/* Label the textarea so it's accessible */}
      <label
        htmlFor="resumeInput"
        style={{
          fontWeight: 'bold',
          fontSize: '1.1rem',
          display: 'block',
          marginBottom: '0.5rem'
        }}
      >
        Paste Your Resume Text
      </label>

      {/* Textarea that syncs with resumeText state from the App */}
      <textarea
        id="resumeInput"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        rows="12"
        placeholder="Copy and paste your resume here. The analyzer will scan it for relevant Business Analyst skills."
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
      />
    </div>
  );
}

export default ResumeInputArea;
