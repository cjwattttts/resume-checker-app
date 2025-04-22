// App.jsx
// I want to build a resume checker layout that pulls in components for input, score, and results
// Let’s pass the resumeText as props and wrap everything in a clean container

import React, { useState } from 'react';
import ResumeInputArea from './ResumeInputArea';
import MatchScoreIndicator from './MatchScoreIndicator';
import KeywordInsight from './KeywordInsight';
import ContentWarnings from './ContentWarnings';

function App() {
  const [resumeText, setResumeText] = useState('');

  return (
    <div className="container">
      <h1 style={{ color: '#264653' }}>Business Analyst Resume Analyzer</h1>
      <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>
        Evaluate your resume against key Business Analyst competencies.
      </p>

      <ResumeInputArea resumeText={resumeText} setResumeText={setResumeText} />
      <MatchScoreIndicator resumeText={resumeText} />
      <KeywordInsight resumeText={resumeText} />
      <ContentWarnings resumeText={resumeText} />

      <footer style={{ marginTop: '4rem', color: '#adb5bd', fontSize: '0.85rem', textAlign: 'center' }}>
        Built by Cameron Watts – Business Analytics & Information Systems, USF
      </footer>
    </div>
  );
}

export default App;
