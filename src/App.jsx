// I want to build the full resume analyzer layout
// Include resume input, score components, and new gamified stats box

import React, { useState } from 'react';
import ResumeInputArea from './ResumeInputArea';
import MatchScoreIndicator from './MatchScoreIndicator';
import KeywordInsight from './KeywordInsight';
import ContentWarnings from './ContentWarnings';
import GamifiedStats from './GamifiedStats';
import upwordLogo from './photos/upword.png';

const professions = [
  { label: 'Business Analyst', value: 'business-analyst' },
  { label: 'Project Manager', value: 'project-manager' },
  { label: 'Data Analyst', value: 'data-analyst' },
  { label: 'Web Developer', value: 'web-developer' }
];

function App() {
  const [resumeText, setResumeText] = useState('');
  const [profession, setProfession] = useState(professions[0].value);

  return (
    <div className="container">
      {/* Logo */}
      <img
        src={upwordLogo}
        alt="Upword Logo"
        style={{
          height: '150px',
          marginTop: '1rem',
          marginBottom: '.5rem',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />

      {/* Profession Dropdown */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
        <select
          value={profession}
          onChange={e => setProfession(e.target.value)}
          style={{
            fontSize: '1.2rem',
            padding: '0.5rem 1.2rem',
            borderRadius: '8px',
            border: '2px solid #8e2de2',
            fontWeight: 600,
            background: '#23242a',
            color: '#fff',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          {professions.map(p => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>

      {/* Resume input */}
      <ResumeInputArea resumeText={resumeText} setResumeText={setResumeText} />

      <hr className="section-divider" />

      {/* Gamified stats */}
      <GamifiedStats resumeText={resumeText} profession={profession} />

      <hr className="section-divider" />

      {/* Progress bar for skill match percentage */}
      <MatchScoreIndicator resumeText={resumeText} profession={profession} />

      <hr className="section-divider" />

      {/* Skills matched/missing */}
      <KeywordInsight resumeText={resumeText} profession={profession} />

      <hr className="section-divider" />

      {/* Content warnings */}
      <ContentWarnings resumeText={resumeText} profession={profession} />

      {/* Footer */}
      <footer style={{ marginTop: '2rem', color: '#adb5bd', fontSize: '0.85rem', textAlign: 'center' }}>
        Built by Cameron Watts – Business Analytics & Information Systems, USF
      </footer>
    </div>
  );
}

export default App;