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

function ResumeSummary({ resumeText, profession }) {
  const skills = professionSkills[profession] || [];
  const matched = skills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );
  const percent = skills.length > 0 ? Math.round((matched.length / skills.length) * 100) : 0;

  const summary = skills.length
    ? `Your resume matches ${percent}% of the top ${profession.replace('-', ' ')} skills.`
    : 'Select a profession to see your resume summary.';

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    alert('Summary copied to clipboard!');
  };

  return (
    <div style={{
      marginTop: '2rem',
      borderTop: '3px solid #eee',
      width: '100%',
      paddingTop: '1rem',
      textAlign: 'center'
    }} className="resume-summary">
      <h3 className="resume-summary-title">Resume Summary</h3>
      <p>{summary}</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
        <button
          onClick={handleCopy}
          style={{
            padding: '0.5rem 1.2rem',
            backgroundColor: '#ffffff',
            color: '#1e1f23',
            fontWeight: '600',
            border: '2px solid #8e2de2',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out'
          }}
        >
          Copy Summary
        </button>
      </div>
    </div>
  );
}

export default ResumeSummary;