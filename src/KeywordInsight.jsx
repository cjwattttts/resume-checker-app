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

  // Check which skills are found in the resume
  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  // Get the skills not mentioned
  const missing = baSkills.filter(skill =>
    !resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  return (
    // Use flex layout to show matched vs missing skills side by side
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
        marginTop: '2rem',
        flexWrap: 'wrap'
      }}
    >
      {/* Matched skills section */}
      <div style={{
        flex: '1 1 45%',
        minWidth: '300px',
        wordWrap: 'break-word'
      }}>
        <h3 style={{ color: '#ffffff' }}>Skills Detected</h3>
        <ul>
          {matched.map((skill, i) => (
            <li key={i} className="matched-skill">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Missing skills section */}
      <div style={{
        flex: '1 1 45%',
        minWidth: '300px',
        wordWrap: 'break-word'
      }}>
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
