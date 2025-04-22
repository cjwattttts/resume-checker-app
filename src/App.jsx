// Build the app layout with a dark mode toggle, job selector, and resume input
// Add a state for theme and role, and pass everything to child components

import React, { useState } from 'react';
import ResumeInputArea from './ResumeInputArea';
import MatchScoreIndicator from './MatchScoreIndicator';
import KeywordInsight from './KeywordInsight';
import ContentWarnings from './ContentWarnings';
import ResumeSummary from './ResumeSummary';
import RoleSelector from './RoleSelector';
import ThemeToggle from './ThemeToggle';
import ExportToPDF from './ExportToPDF';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [role, setRole] = useState('Business Analyst');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className="app-title">Resume Analyzer</h1>
      <p style={{ color: darkMode ? '#ccc' : '#6c757d', textAlign: 'center', marginBottom: '1.5rem' }}>
        Check your resume against industry-relevant skills for your selected role.
      </p>

      <RoleSelector role={role} setRole={setRole} />
      <ResumeInputArea resumeText={resumeText} setResumeText={setResumeText} />
      <MatchScoreIndicator resumeText={resumeText} role={role} />
      <KeywordInsight resumeText={resumeText} role={role} />
      <ContentWarnings resumeText={resumeText} />
      <ResumeSummary resumeText={resumeText} role={role} />
      <ExportToPDF resumeText={resumeText} role={role} />

      <footer style={{ marginTop: '4rem', color: '#888', fontSize: '0.85rem', textAlign: 'center' }}>
        Built by Cameron Watts – Business Analytics & Information Systems, USF
      </footer>
    </div>
  );
}

export default App;
