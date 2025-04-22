// I want to track resume quality by awarding XP and badges based on keywords
// Each skill match adds XP, filler phrases subtract XP, and XP increases level

import React, { useEffect, useState } from 'react';

function GamifiedStats({ resumeText }) {
  // Track XP, user level, and badge list
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState([]);

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
    // Count how many useful skills are in the resume
    const matched = skills.filter(skill =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    // Count how many filler phrases are detected
    const fillerCount = fillerPhrases.filter(phrase =>
      resumeText.toLowerCase().includes(phrase)
    ).length;

    // XP calculation: 10 per skill, -5 per filler
    const newXp = matched.length * 10 - fillerCount * 5;
    const adjustedXp = newXp < 0 ? 0 : newXp;
    setXp(adjustedXp);

    // Calculate level from XP (level up every 50)
    setLevel(Math.floor(adjustedXp / 50) + 1);

    // Award special badges based on resume quality
    const newBadges = [];
    if (matched.length >= 5) newBadges.push('🧠 Skill Stacker');
    if (fillerCount === 0 && resumeText.length > 0) newBadges.push('🧹 Buzzword Killer');
    if (resumeText.length > 1000) newBadges.push('📜 Verbose Veteran');

    setBadges(newBadges);
  }, [resumeText]);

  // Determine fill percentage for XP bar
  const xpProgress = xp % 50;

  return (
    // Gamified stats panel with matching dark purple theme
    <div className="gamified-stats">
      <p style={{ fontSize: '1.1rem' }}>
        <strong>XP:</strong> {xp} / <strong>Level:</strong> {level}
      </p>

      {/* XP progress bar */}
      {/* Make the XP bar purple and full width */}
      <div style={{
        backgroundColor: '#3a3356',
        borderRadius: '10px',
        height: '24px',
        width: '80%',
        margin: '10px auto',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${(xpProgress / 50) * 100}%`,
          background: 'linear-gradient(90deg, #b561fe, #7e3dff)',
          height: '100%',
          transition: 'width 0.4s ease'
        }} />
      </div>

      {/* Show the badges earned with emoji styling */}
      <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: '#dccdfc' }}>
        <strong>Badges:</strong> {badges.length > 0 ? badges.join(' | ') : 'None yet – keep going!'}
      </p>
    </div>
  );
}

export default GamifiedStats;
