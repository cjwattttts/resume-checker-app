// I want to create the main App component for my resume analyzer
// This should render the full layout of the tool with all the key features

import React, { useState } from 'react';

// Add imports for the components that handle input and feedback
import ResumeInputArea from './ResumeInputArea';
import MatchScoreIndicator from './MatchScoreIndicator';
import KeywordInsight from './KeywordInsight';
import ContentWarnings from './ContentWarnings';

function App() {
  // Set up state to store the resume text input from the user
  const [resumeText, setResumeText] = useState('');

  return (
    // Wrap everything in a container to center and style the layout
    <div className="container">
      {/* Title and description for the tool */}
      <h1 style={{ color: '#264653' }}>Business Analyst Resume Analyzer</h1>
      <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>
        Evaluate your resume against key Business Analyst competencies.
      </p>

      {/* Input box for the resume text */}
      <ResumeInputArea resumeText={resumeText} setResumeText={setResumeText} />

      {/* Show a score bar based on how many keywords are matched */}
      <MatchScoreIndicator resumeText={resumeText} />

      {/* List matched and missing skills */}
      <KeywordInsight resumeText={resumeText} />

      {/* Show any vague phrases or filler words that should be fixed */}
      <ContentWarnings resumeText={resumeText} />

      {/* Basic footer with my name and info */}
      <footer style={{ marginTop: '4rem', color: '#adb5bd', fontSize: '0.85rem', textAlign: 'center' }}>
        Built by Cameron Watts – Business Analytics & Information Systems, USF
      </footer>
    </div>
  );
}

export default App;
