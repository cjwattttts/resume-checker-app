// I want to build a summary component that gives quick feedback based on the resume
// It should calculate a skill match score and generate a summary sentence

import React from 'react';

function ResumeSummary({ resumeText }) {
  // List of Business Analyst skills the resume should be compared to
  const baSkills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  // Filter the skills that are actually found in the resume text
  const matched = baSkills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  // Calculate a percentage score based on how many were matched
  const score = Math.round((matched.length / baSkills.length) * 100);

  // Generate the summary string using the matched skills and score
  const summary = `This resume aligns with ${score}% of key Business Analyst skills. Core strengths include: ${matched.join(', ')}.`;

  // Function to copy the summary to clipboard so the user can reuse it
  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    alert('Summary copied to clipboard!');
  };

  return (
    // Display the summary and add a styled copy button
    <div style={{ 
      marginTop: '2rem', 
      borderTop: '1px solid #eee', 
      paddingTop: '1rem', 
      textAlign: 'center'
    }}>
      <h3>Resume Summary</h3>
      <p>{summary}</p>

      {/* Center the copy button */}
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
