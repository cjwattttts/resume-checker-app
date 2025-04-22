// Check which key Business Analyst skills are present in the resume
// Display both matched and missing skill sets in styled columns

import React from 'react';

function KeywordInsight({ resumeText }) {
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const missing = baSkills.filter(skill =>
    !resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ color: '#2a9d8f' }}>Skills Detected</h3>
        <ul>
          {matched.map((skill, i) => (
            <li key={i} className="matched-skill">{skill}</li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ color: '#e76f51' }}>Skills Not Found</h3>
        <ul>
          {missing.map((skill, i) => (
            <li key={i} className="missing-skill">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KeywordInsight;
