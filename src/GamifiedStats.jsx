// I want to track resume quality by awarding XP and badges based on keywords
// Each skill match adds XP, filler phrases subtract XP, and XP increases level
// Add animated badges, glowing XP level bar, and proper emoji styling

import React, { useEffect, useState } from 'react';

function GamifiedStats({ resumeText }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState([]);

  // Skill keywords that should award XP when mentioned
  const skills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Adaptability', 'Stakeholders', 'Visualization'
  ];

  // Common resume buzzwords that will subtract XP if detected
  const fillerPhrases = [
    'responsible for', 'team player', 'hardworking', 'detail-oriented',
    'go-getter', 'works well under pressure', 'self-starter'
  ];

  useEffect(() => {
    const matched = skills.filter(skill =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    const fillerCount = fillerPhrases.filter(phrase =>
      resumeText.toLowerCase().includes(phrase)
    ).length;

    const newXp = matched.length * 10 - fillerCount * 5;
    const adjustedXp = Math.max(newXp, 0);
    setXp(adjustedXp);

    setLevel(Math.floor(adjustedXp / 50) + 1);

    const newBadges = [];
    if (matched.length >= 5) newBadges.push('🧠 Skill Stacker');
    if (fillerCount === 0 && resumeText.length > 0) newBadges.push('🧹 Buzzword Killer');
    if (resumeText.length > 1000) newBadges.push('📜 Verbose Veteran');
    setBadges(newBadges);
  }, [resumeText]);

  const xpProgress = xp % 50;
  const glowClass = xpProgress === 0 && xp > 0 ? 'glow-border' : '';

  return (
    <div className="gamified-stats">
      {/* XP + Level */}
      <p style={{ fontSize: '1.1rem' }}>
        <strong>XP:</strong> {xp} / <strong>Level:</strong> {level}
      </p>

      {/* XP Bar */}
      <div style={{
        backgroundColor: '#3a3356',
        borderRadius: '10px',
        height: '24px',
        width: '80%',
        margin: '10px auto',
        overflow: 'hidden'
      }}>
        <div className={`score-bar-fill ${glowClass}`} style={{
          width: `${(xpProgress / 50) * 100}%`,
          height: '100%',
          transition: 'width 0.4s ease'
        }} />
      </div>

      {/* Badges */}
      <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#ffffff' }}>
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
