// I want to scan the resume text for common filler phrases or buzzwords
// If any are found, show a warning box listing them out

import React from 'react';

const fillerPhrases = [
  'responsible for', 'team player', 'hardworking', 'detail-oriented',
  'go-getter', 'works well under pressure', 'self-starter'
];

function ContentWarnings({ resumeText, profession }) {
  const foundFillers = fillerPhrases.filter(phrase =>
    resumeText.toLowerCase().includes(phrase)
  );

  return (
    <div className="warning-box">
      <h3 className="content-warnings-title">Content Warnings</h3>
      {foundFillers.length > 0 ? (
        <ul>
          {foundFillers.map(phrase => (
            <li key={phrase} style={{ color: '#ffffff' }}>
              Avoid using “{phrase}” – try to be more specific!
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: '#ffffff' }}>Great job! Your resume does not contain any common buzzwords or filler phrases. This means your language is specific and impactful.</p>
      )}
    </div>
  );
}

export default ContentWarnings;