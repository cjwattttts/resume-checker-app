import React, { useState } from 'react';
import ResumeInputArea from './ResumeInputArea';
import MatchScoreIndicator from './MatchScoreIndicator';
import KeywordInsight from './KeywordInsight';
import ContentWarnings from './ContentWarnings';
import ResumeSummary from './ResumeSummary';
import GamifiedStats from './GamifiedStats';
import upwordLogo from './photos/upword.png';
import mountainPhoto from './photos/mountain.png';

function App() {
  const [resumeText, setResumeText] = useState('');

  return (
    <>
      <div className="container">
        {/* Logo */}
        <img
          src={upwordLogo}
          alt="Upword Logo"
          style={{
            height: '210px',
            marginBottom: '0.5rem',
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

        {/* Mountain photo at the very bottom, inside the container */}
        <img
  src={mountainPhoto}
  alt="Mountain"
  style={{
    display: 'block',
    width: '100%',
    height: '400px',
    objectFit: 'contain',      // Show the whole mountain
    objectPosition: 'bottom',  // Anchor the base to the bottom
    borderRadius: 0,
    margin: 0,
    boxShadow: 'none',
    padding: 0,
    background: '#1e1f23'      // Match your app background if needed
  }}
/>
      </div>

      {/* Footer outside the container */}
      <footer style={{ marginTop: '2rem', color: '#adb5bd', fontSize: '0.85rem', textAlign: 'center' }}>
        Built by Cameron Watts – Business Analytics & Information Systems, USF
      </footer>
    </>
  );
}

export default App;