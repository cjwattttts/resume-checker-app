// I want to calculate how many Business Analyst skills are in the resume
// Then use that to create a progress bar showing the match percentage

import React from 'react';

function MatchScoreIndicator({ resumeText }) {
  // List of important BA skills we're checking for
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  // See which skills are actually in the resume
  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  // Calculate the score as a percentage
  const percent = Math.round((matched.length / baSkills.length) * 100);

  // Change the color of the bar based on the score
  const color = percent >= 80 ? '#2a9d8f' : percent >= 50 ? '#f4a261' : '#e76f51';

  return (
    // Render a heading and the score bar
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Resume Match Score</h3>

      {/* Create a container for the progress bar */}
      <div className="score-bar-container">
        {/* Fill the bar based on percent and apply dynamic color */}
        <div
          className="score-bar-fill"
          style={{
            width: `${percent}%`,
            backgroundColor: color
          }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
}

export default MatchScoreIndicator;
