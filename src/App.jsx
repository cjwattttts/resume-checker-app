// I want to build the full resume analyzer layout
// Include resume input, score components, and new gamified stats box

import React, { useState } from 'react';
import ResumeInputArea from './ResumeInputArea';
import MatchScoreIndicator from './MatchScoreIndicator';
import KeywordInsight from './KeywordInsight';
import ContentWarnings from './ContentWarnings';
import ResumeSummary from './ResumeSummary';
import GamifiedStats from './GamifiedStats';

function App() {
  // Store the user's pasted resume text
  const [resumeText, setResumeText] = useState('');

  return (
    // Layout container with title, tools, and feedback panels
    <div className="container">
      <h1 style={{ color: '#264653' }}>Business Analyst Resume Analyzer</h1>
      <p style={{ color: '#6c757d', marginBottom: '1.5rem', textAlign: 'center' }}>
        Evaluate and improve your resume with instant insights and gamified feedback.
      </p>

      {/* Text input for the resume */}
      <ResumeInputArea resumeText={resumeText} setResumeText={setResumeText} />

      {/* Progress bar for skill match percentage */}
      <MatchScoreIndicator resumeText={resumeText} />

      {/* Show skills that are matched and missing */}
      <KeywordInsight resumeText={resumeText} />

      {/* Show vague words and filler phrases if found */}
      <ContentWarnings resumeText={resumeText} />

      {/* Display a summary sentence and let the user copy it */}
      <ResumeSummary resumeText={resumeText} />

      {/* New: Display XP, level, and badges earned */}
      <GamifiedStats resumeText={resumeText} />

      {/* Footer branding */}
      <footer style={{ marginTop: '4rem', color: '#adb5bd', fontSize: '0.85rem', textAlign: 'center' }}>
        Built by Cameron Watts – Business Analytics & Information Systems, USF
      </footer>
    </div>
  );
}

export default App;