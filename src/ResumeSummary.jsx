// Based on the matched skills, generate a short summary of resume strength
// Add a button to copy this summary to the clipboard for external use

import React from 'react';

function ResumeSummary({ resumeText }) {
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const score = Math.round((matched.length / baSkills.length) * 100);

  const summary = `This resume aligns with ${score}% of key Business Analyst skills. Core strengths include: ${matched.join(', ')}.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    alert('Summary copied to clipboard!');
  };

  return (
    <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
      <h3>Resume Summary</h3>
      <p>{summary}</p>
      <button onClick={handleCopy} style={{
        marginTop: '0.5rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#2a9d8f',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Copy Summary
      </button>
    </div>
  );
}

export default ResumeSummary;
