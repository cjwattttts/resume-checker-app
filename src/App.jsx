// I want to build the full resume analyzer layout
// Include resume input, score components, and new gamified stats box

import React, { useState } from 'react';
import ResumeInputArea from './ResumeInputArea';
import MatchScoreIndicator from './MatchScoreIndicator';
import KeywordInsight from './KeywordInsight';
import ContentWarnings from './ContentWarnings';
import ResumeSummary from './ResumeSummary';
import GamifiedStats from './GamifiedStats';
import upwordLogo from './photos/upword.png';

function App() {
  const [resumeText, setResumeText] = useState('');

  return (
    <div className="container">
      {/* Logo */}
      <img
        src={upwordLogo}
        alt="Upword Logo"
        style={{
          height: '200px',
          marginBottom: '0rem',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />

      {/* Subtitle */}
      <p style={{ color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
        Evaluate and improve your resume with instant insights and gamified feedback.
      </p>

      {/* Resume input */}
      <ResumeInputArea resumeText={resumeText} setResumeText={setResumeText} />

      {/* Gamified stats */}
      <GamifiedStats resumeText={resumeText} />

      {/* Progress bar for skill match percentage */}
      <MatchScoreIndicator resumeText={resumeText} />

      {/* Skills matched/missing */}
      <KeywordInsight resumeText={resumeText} />

      {/* Content warnings */}
      <ContentWarnings resumeText={resumeText} />

      {/* Resume summary */}
      <ResumeSummary resumeText={resumeText} />

      {/* Footer */}
      <footer style={{ marginTop: '2rem', color: '#adb5bd', fontSize: '0.85rem', textAlign: 'center' }}>
        Built by Cameron Watts – Business Analytics & Information Systems, USF
      </footer>
    </div>
  );
}

export default App;