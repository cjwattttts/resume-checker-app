// Build the main structure of the resume analyzer app
// Include new ResumeSummary and copy features at the bottom
// Center the title and ensure layout feels balanced

import React, { useState } from 'react';
import ResumeInputArea from './ResumeInputArea';
import MatchScoreIndicator from './MatchScoreIndicator';
import KeywordInsight from './KeywordInsight';
import ContentWarnings from './ContentWarnings';
import ResumeSummary from './ResumeSummary';

function App() {
  const [resumeText, setResumeText] = useState('');

  return (
    <div className="container">
      <h1 className="app-title">Business Analyst Resume Analyzer</h1>
      <p style={{ color: '#6c757d', textAlign: 'center', marginBottom: '1.5rem' }}>
        Evaluate your resume against key Business Analyst competencies.
      </p>

      <ResumeInputArea resumeText={resumeText} setResumeText={setResumeText} />
      <MatchScoreIndicator resumeText={resumeText} />
      <KeywordInsight resumeText={resumeText} />
      <ContentWarnings resumeText={resumeText} />
      <ResumeSummary resumeText={resumeText} />

      <footer style={{ marginTop: '4rem', color: '#adb5bd', fontSize: '0.85rem', textAlign: 'center' }}>
        Built by Cameron Watts – Business Analytics & Information Systems, USF
      </footer>
    </div>
  );
}

export default App;
