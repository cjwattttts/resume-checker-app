// I want to calculate how many Business Analyst skills are in the resume
// Then use that to create a progress bar showing the match percentage

import React from 'react';

function MatchScoreIndicator({ resumeText }) {
  // Key Business Analyst skills to check for
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Adaptability', 'Stakeholders', 'Visualization'
  ];

  // See which ones are mentioned in the resume
  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  // Convert number of matches into a percentage
  const percent = Math.round((matched.length / baSkills.length) * 100);

  // Choose color based on performance
  const color = percent >= 80 ? '#2a9d8f' : percent >= 50 ? '#f4a261' : '#e76f51';

  return (
    // Show a header and animated score bar
    <div style={{ marginTop: '2rem', width: '100%', maxWidth: '100%' }}>
      <h3 style={{ marginBottom: '0.5rem', textAlign: 'center', color: '#ffffff' }}>
        Resume Match Score
      </h3>

      {/* Full-width progress bar container */}
      <div className="score-bar-container" style={{ width: '100%', maxWidth: '100%' }}>
        {/* Inner bar shows percentage and changes color based on match strength */}
        <div
          className="score-bar-fill"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
            textAlign: 'center'
          }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
}

export default MatchScoreIndicator;
