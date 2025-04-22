// MatchScoreIndicator.jsx
// Compare the resume text to a list of Business Analyst skills
// Then show a progress bar that fills based on how many match

import React from 'react';

function MatchScoreIndicator({ resumeText }) {
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  // Count how many keywords are found in the resume
  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const percent = Math.round((matched.length / baSkills.length) * 100);

  // Color code the score depending on how strong the resume is
  const color = percent >= 80 ? '#2a9d8f' : percent >= 50 ? '#f4a261' : '#e76f51';

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Resume Match Score</h3>
      <div className="score-bar-container">
        <div
          className="score-bar-fill"
          style={{ width: `${percent}%`, backgroundColor: color }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
}

export default MatchScoreIndicator;
