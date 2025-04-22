// I want to track resume quality by awarding XP and badges based on keywords
// Each skill match adds XP, filler phrases subtract XP, and XP increases level
// Add animated badges, glowing XP level bar, and proper emoji styling

import React, { useEffect, useState } from 'react';

function GamifiedStats({ resumeText }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState([]);
  const [summary, setSummary] = useState('');

  // Skill keywords that should award XP when mentioned
  const skills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  // Common resume buzzwords that will subtract XP if detected
  const fillerPhrases = [
    'responsible for', 'team player', 'hardworking', 'detail-oriented',
    'go-getter', 'works well under pressure', 'self-starter'
  ];

  useEffect(() => {
    // Filter detected skills
    const matched = skills.filter(skill =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    // Count filler/buzzword phrases
    const fillerCount = fillerPhrases.filter(phrase =>
      resumeText.toLowerCase().includes(phrase)
    ).length;

    // XP logic
    const newXp = matched.length * 10 - fillerCount * 5;
    const adjustedXp = newXp < 0 ? 0 : newXp;
    setXp(adjustedXp);

    // Leveling system
    setLevel(Math.floor(adjustedXp / 50) + 1);

    // Badge logic
    const newBadges = [];
    if (matched.length >= 5) newBadges.push('🧠 Skill Stacker');
    if (fillerCount === 0 && resumeText.length > 0) newBadges.push('🧹 Buzzword Killer');
    if (resumeText.length > 1000) newBadges.push('📜 Verbose Veteran');
    setBadges(newBadges);

    // Summary sentence generation with comma separation
    const score = Math.round((matched.length / skills.length) * 100);
    const summaryString = `This resume aligns with ${score}% of key Business Analyst skills. Core strengths include: ${matched.join(', ')}.`;
    setSummary(summaryString);
  }, [resumeText]);

  // XP progress bar (how full it is visually)
  const xpProgress = xp % 50;
  const glowClass = xpProgress === 0 && xp > 0 ? 'glow-border' : '';

  // Copy summary to clipboard
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

      {/* XP progress bar */}
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

      {/* Summary paragraph */}
      <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1rem', textAlign: 'center' }}>
        <h3>Resume Summary</h3>
        <p>{summary}</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
          <button
            onClick={handleCopy}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#ffffff',
              color: '#1e1f23',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Copy Summary
          </button>
        </div>
      </div>

      {/* Badges section */}
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
