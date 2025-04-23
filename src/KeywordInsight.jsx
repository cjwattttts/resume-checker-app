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
    <div className="skills-list-container" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      {/* Matched skills section */}
      <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
        <div className="skills-section-title">Skills Detected</div>
        <ul className="skills-list">
          {matched.length > 0 ? (
            matched.map((skill, i) => (
              <li key={i} className="matched-skill">{skill}</li>
            ))
          ) : (
            <li style={{ color: '#bbb' }}>None detected</li>
          )}
        </ul>
      </div>

      {/* Missing skills section */}
      <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
        <div className="skills-section-title">Skills Not Found</div>
        <ul className="skills-list">
          {missing.length > 0 ? (
            missing.map((skill, i) => (
              <li key={i} className="missing-skill">{skill}</li>
            ))
          ) : (
            <li style={{ color: '#bbb' }}>All detected!</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default KeywordInsight;