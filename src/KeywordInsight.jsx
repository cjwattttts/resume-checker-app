// I want to check which Business Analyst skills show up in the resume
// Then split them into two lists: one for skills found and one for skills missing

import React from 'react';

function KeywordInsight({ resumeText }) {
  // List of skills a Business Analyst resume should include
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Adaptability', 'Stakeholders', 'Visualization'
  ];

  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const missing = baSkills.filter(skill =>
    !resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  return (
    <div style={{ 
      display: 'flex', 
      gap: '4rem', 
      marginTop: '2rem', 
      justifyContent: 'space-between', 
      flexWrap: 'wrap',
      maxWidth: '1200px', 
      width: '100%' 
    }}>
      {/* Matched skills */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h3 style={{ color: '#ffffff' }}>Skills Detected</h3>
        {matched.length > 0 ? (
          <ul>
            {matched.map((skill, i) => (
              <li key={i} className="matched-skill">{skill}</li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#888', fontStyle: 'italic' }}>No skills detected yet.</p>
        )}
      </div>

      {/* Missing skills */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h3 style={{ color: '#ffffff' }}>Skills Not Found</h3>
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
