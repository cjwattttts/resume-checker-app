// I want to check which Business Analyst skills show up in the resume
// Then split them into two lists: one for skills found and one for skills missing

import React from 'react';

function KeywordInsight({ resumeText }) {
  // List of skills a Business Analyst resume should include
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  // Go through the list and see which ones are mentioned in the resume
  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  // Find the skills that are missing from the resume
  const missing = baSkills.filter(skill =>
    !resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  return (
    // Use flexbox to show the two lists side by side
    <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
      {/* Matched skills list */}
      <div style={{ flex: 1 }}>
        <h3 style={{ color: '#2a9d8f' }}>Skills Detected</h3>
        <ul>
          {matched.map((skill, i) => (
            <li key={i} className="matched-skill">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Missing skills list */}
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
