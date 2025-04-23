// I want a text box where users can paste in their resume
// It should update the resumeText state in the parent as they type
// Also fix layout overflow caused by max-width and enforce line wrapping

import React from 'react';

function ResumeInputArea({ resumeText, setResumeText }) {
  return (
    // Create a full-width input block that adapts to container size
    <div
      style={{
        marginBottom: '2rem',
        width: '100%', // Full width of the container
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Label the input clearly so it's accessible */}
      {/* Student Prompt: Make sure to link label and input with htmlFor + id */}
      <label
        htmlFor="resumeInput"
        style={{
          fontWeight: 'bold',
          fontSize: '1.1rem',
          marginBottom: '0.75rem',
          textAlign: 'center',
          color: '#ffffff'
        }}
      >
        Paste Your Resume Text
      </label>

      {/* This textarea syncs user input with state */}
      {/* Student Prompt: Wrap long lines and prevent overflow */}
      <textarea
        id="resumeInput"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Copy and paste your resume here. The analyzer will scan it for relevant Business Analyst skills."
        style={{
          width: '100%',
          maxWidth: '100%',
          minHeight: '500px',
          padding: '1.5rem',
          border: '3px solid #a65cfa',
          borderRadius: '12px',
          fontSize: '1.1rem',
          fontFamily: 'monospace',
          backgroundColor: '#1c1d22',
          color: '#ffffff',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.25)',
          transition: 'all 0.3s ease',
          resize: 'vertical',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        }}
      />
    </div>
  );
}

export default ResumeInputArea;
