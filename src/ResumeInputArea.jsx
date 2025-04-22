// I want a text box where users can paste in their resume
// It should update the resumeText state in the parent as they type

import React from 'react';

function ResumeInputArea({ resumeText, setResumeText }) {
  return (
    // Add spacing between the input and the rest of the page
    <div style={{ marginBottom: '2rem', width: '100%', maxWidth: '1200px' }}>
      {/* Label the textarea so it's accessible */}
      <label
        htmlFor="resumeInput"
        style={{
          fontWeight: 'bold',
          fontSize: '1.1rem',
          display: 'block',
          marginBottom: '0.5rem',
          textAlign: 'center',
          color: '#ffffff'
        }}
      >
        Paste Your Resume Text
      </label>

      {/* Textarea that syncs with resumeText state from the App */}
      {/* Use a class so styles come from CSS and we don't override them here */}
      <textarea
        id="resumeInput"
        className="resume-input"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Copy and paste your resume here. The analyzer will scan it for relevant Business Analyst skills."
      />
    </div>
  );
}

export default ResumeInputArea;
