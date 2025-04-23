// I want to calculate how many Business Analyst skills are in the resume
// Then use that to create a progress bar showing the match percentage

import React from 'react';

const professionSkills = {
  'business-analyst': [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Adaptability', 'Stakeholders', 'Visualization'
  ],
  'project-manager': [
    'Project Planning', 'Risk Management', 'Scrum', 'Kanban', 'Budgeting',
    'Stakeholder Management', 'Scheduling', 'Leadership', 'MS Project',
    'Communication', 'Resource Allocation', 'Timeline', 'Reporting'
  ],
  'data-analyst': [
    'Python', 'R', 'SQL', 'Excel', 'Tableau', 'Power BI',
    'Data Cleaning', 'Statistics', 'Visualization', 'Pandas',
    'Machine Learning', 'Reporting', 'Data Mining'
  ],
  'web-developer': [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'APIs',
    'Responsive Design', 'Git', 'Webpack', 'Testing',
    'Accessibility', 'Performance', 'Deployment'
  ]
};

function MatchScoreIndicator({ resumeText, profession }) {
  const skills = professionSkills[profession] || [];
  const matched = skills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );
  const percent = skills.length > 0 ? Math.round((matched.length / skills.length) * 100) : 0;
  const color = percent >= 80 ? '#2a9d8f' : percent >= 50 ? '#f4a261' : '#e76f51';

  return (
    <div style={{ marginTop: '2rem', width: '100%', maxWidth: '100%' }}>
      <h3 className="resume-match-score-title" style={{ marginBottom: '0.5rem', textAlign: 'center', color: '#ffffff' }}>
        Resume Match Score
      </h3>

      {/* Centered progress bar with centered percentage */}
      <div className="score-bar-container" style={{ position: 'relative', maxWidth: '700px', width: '100%', margin: '0 auto' }}>
        {/* Filled bar */}
        <div
          className="score-bar-fill"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 1,
            transition: 'width 0.4s ease'
          }}
        />
        {/* Centered percentage label */}
        <span
          className="score-bar-label"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            fontWeight: 700,
            color: '#fff',
            pointerEvents: 'none',
            fontSize: '1.2rem'
          }}
        >
          {percent}%
        </span>
        {/* Empty bar background for visibility */}
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#3c3d43',
            borderRadius: '10px',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 0
          }}
        />
      </div>
    </div>
  );
}

export default MatchScoreIndicator;