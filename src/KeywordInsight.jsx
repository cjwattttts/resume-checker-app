// I want to check which Business Analyst skills show up in the resume
// Then split them into two lists: one for skills found and one for skills missing

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

function KeywordInsight({ resumeText, profession }) {
  const skills = professionSkills[profession] || [];
  const matched = skills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );
  const missing = skills.filter(skill =>
    !resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  return (
    <div className="skills-list-container">
      <h3 className="skills-section-title">Skills You Have</h3>
      <ul className="skills-list">
        {matched.length > 0 ? matched.map(skill => (
          <li key={skill} className="matched-skill">{skill}</li>
        )) : <li style={{ color: '#888' }}>No key skills detected yet.</li>}
      </ul>
      <h3 className="skills-section-title" style={{ marginTop: '1.5rem' }}>Skills You’re Missing</h3>
      <ul className="skills-list">
        {missing.length > 0 ? missing.map(skill => (
          <li key={skill} className="missing-skill">{skill}</li>
        )) : <li style={{ color: '#888' }}>None! You have all the key skills.</li>}
      </ul>
    </div>
  );
}

export default KeywordInsight;