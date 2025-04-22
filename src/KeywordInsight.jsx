// KeywordInsight.jsx
// I want to show two lists: one for skills found in the resume, and one for the ones that are missing
// Use the same BA skill list and just filter them out

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
      {/* Matched skills go in the left column */}
      <div style={{ flex: 1 }}>
        <h3 style={{ color: '#2a9d8f' }}>Skills Detected</h3>
        <ul>
          {matched.map((skill, i) => (
            <li key={i} className="matched-skill">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Missing ones go in the right column */}
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
