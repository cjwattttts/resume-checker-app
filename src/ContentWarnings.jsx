// I want to scan the resume text for common filler phrases or buzzwords
// If any are found, show a warning box listing them out

import React from 'react';

function ContentWarnings({ resumeText }) {
  // List of overused phrases to flag in resumes
  const fillerPhrases = [
    'responsible for', 'team player', 'hardworking', 'detail-oriented',
    'go-getter', 'works well under pressure', 'self-starter'
  ];

  // Check if any of those phrases appear in the resume
  const found = fillerPhrases.filter(phrase =>
    resumeText.toLowerCase().includes(phrase)
  );

  // If none are found, skip rendering this component
  if (found.length === 0) return null;

  return (
    // Display a yellow warning box with suggestions
    <div className="warning-box">
      <h4 style={{ marginBottom: '0.5rem' }}>Soft Warnings</h4>
      <p>
        The following vague or overused phrases were found in your resume. Consider replacing them with measurable or specific language:
      </p>

      {/* Show each flagged phrase in a list */}
      <ul>
        {found.map((phrase, i) => (
          <li key={i}>{phrase}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContentWarnings;
