// Detect filler phrases and buzzwords in resume
// Show a warning section if any are found

import React from 'react';

function ContentWarnings({ resumeText }) {
  const fillerPhrases = [
    'responsible for', 'team player', 'hardworking', 'detail-oriented',
    'go-getter', 'works well under pressure', 'self-starter'
  ];

  const found = fillerPhrases.filter(phrase =>
    resumeText.toLowerCase().includes(phrase)
  );

  if (found.length === 0) return null;

  return (
    <div className="warning-box">
      <h4 style={{ marginBottom: '0.5rem' }}>Soft Warnings</h4>
      <p>
        The following vague or overused phrases were found in your resume. Consider replacing them with measurable or specific language:
      </p>
      <ul>
        {found.map((phrase, i) => (
          <li key={i}>{phrase}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContentWarnings;
