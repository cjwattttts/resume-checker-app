// I want to track resume quality by awarding XP and badges based on keywords
// Each skill match adds XP, filler phrases subtract XP, and XP increases level
// Add animated badges, glowing XP level bar, and proper emoji styling
// Also add summary sentence that only includes skills if they're found

import React, { useEffect, useState } from 'react';

function GamifiedStats({ resumeText }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState([]);
  const [summary, setSummary] = useState('');

  // student prompt: track which keywords give XP
  const skills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Adaptability', 'Stakeholders', 'Visualization'
  ];

  // student prompt: subtract XP for vague filler terms
  const fillerPhrases = [
    'responsible for', 'team player', 'hardworking', 'detail-oriented',
    'go-getter', 'works well under pressure', 'self-starter'
  ];

  useEffect(() => {
    // student: detect matched keywords
    const matched = skills.filter(skill =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    // student: detect filler phrases
    const fillerCount = fillerPhrases.filter(phrase =>
      resumeText.toLowerCase().includes(phrase)
    ).length;

    // student: calculate total XP
    const rawXp = matched.length * 10 - fillerCount * 5;
    const safeXp = Math.max(0, rawXp);
    setXp(safeXp);

    // student: update level based on XP
    setLevel(Math.floor(safeXp / 50) + 1);

    // student: badge logic
    const newBadges = [];
    if (matched.length >= 5) newBadges.push('🧠 Skill Stacker');
    if (fillerCount === 0 && resumeText.length > 0) newBadges.push('🧹 Buzzword Killer');
    if (resumeText.length > 1000) newBadges.push('📜 Verbose Veteran');
    setBadges(newBadges);

    // student: generate summary only if skills exist
    const score = Math.round((matched.length / skills.length) * 100);
    let summaryText = `This resume aligns with ${score}% of key Business Analyst skills.`;
if (matched.length > 0) {
  summaryText += ` Core strengths include: ${matched.join(', ')}.`;
}
setSummary(summaryText);
    setSummary(summaryText);
  }, [resumeText]);

  const xpProgress = xp % 50;
  const glowClass = xpProgress === 0 && xp > 0 ? 'glow-border' : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    alert('Summary copied to clipboard!');
  };

  return (
    <div className="gamified-stats">
      {/* XP + Level */}
      <p style={{ fontSize: '1.1rem' }}>
        <strong>XP:</strong> {xp} / <strong>Level:</strong> {level}
      </p>

      {/* XP bar */}
      <div
        style={{
          backgroundColor: '#3a3356',
          borderRadius: '10px',
          height: '24px',
          width: '80%',
          margin: '10px auto',
          overflow: 'hidden',
        }}
      >
        <div
          className={`score-bar-fill ${glowClass}`}
          style={{
            width: xpProgress === 0 && xp > 0 ? '100%' : `${(xpProgress / 50) * 100}%`,
            height: '100%',
            transition: 'width 0.4s ease',
          }}
        />
      </div>}
      <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#ffffff' }}>
        <strong>Badges:</strong>
      </p>
      <div className="badge-row">
        {badges.length > 0 ? (
          badges.map((badge, i) => (
            <span key={i} className="badge-icon" style={{ marginRight: '0.6rem' }}>
              {badge}
            </span>
          ))
        ) : (
          <p style={{ color: '#888', marginTop: '0.5rem' }}>None yet – keep going!</p>
        )}
      </div>
    </div>
  );
}

export default GamifiedStats;
