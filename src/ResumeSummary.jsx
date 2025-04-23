import React from 'react';

function ResumeSummary({ resumeText }) {
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Adaptability', 'Stakeholders', 'Visualization'
  ];

  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const score = Math.round((matched.length / baSkills.length) * 100);

  // Only add core strengths if there are matched skills
  let summary = `This resume aligns with ${score}% of key Business Analyst skills.`;
  if (matched.length > 0) {
    summary += ` Core strengths include: ${matched.join(', ')}.`;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    alert('Summary copied to clipboard!');
  };

  return (
    <div style={{ 
      marginTop: '2rem', 
      borderTop: '1px solid #eee', 
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