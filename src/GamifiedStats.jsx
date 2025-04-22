// I want to track resume quality by awarding XP and badges based on keywords
// Each skill match adds XP, filler phrases subtract XP, and XP increases level

import React, { useEffect, useState } from 'react';

function GamifiedStats({ resumeText }) {
  // Track XP, user level, and badge list
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState([]);

  // Create a skill bank that will earn XP when detected in resumeText
  const skills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  // Add filler buzzwords that will reduce XP if detected
  const fillerPhrases = [
    'responsible for', 'team player', 'hardworking', 'detail-oriented',
    'go-getter', 'works well under pressure', 'self-starter'
  ];

  useEffect(() => {
    // Match any skill keywords found in the resume text
    const matched = skills.filter(skill =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    // Count how many filler phrases are in the resume
    const fillerCount = fillerPhrases.filter(phrase =>
      resumeText.toLowerCase().includes(phrase)
    ).length;

    // XP = +10 per matched skill, -5 per filler phrase (min 0)
    const newXp = matched.length * 10 - fillerCount * 5;
    const adjustedXp = newXp < 0 ? 0 : newXp;
    setXp(adjustedXp);

    // Level up every 50 XP
    setLevel(Math.floor(adjustedXp / 50) + 1);

    // Add badges when user reaches different goals
    const newBadges = [];
    if (matched.length >= 5) newBadges.push('🧠 Skill Stacker');
    if (fillerCount === 0 && resumeText.length > 0) newBadges.push('🧹 Buzzword Killer');
    if (resumeText.length > 1000) newBadges.push('📜 Verbose Veteran');

    setBadges(newBadges);
  }, [resumeText]);

  // Calculate how full the XP progress bar should be (out of 50 XP per level)
  const xpProgress = xp % 50;

  return (
    // Create a panel to show XP, level, and badges with a progress bar
    <div style={{
      marginTop: '2rem',
      padding: '1.5rem',
      backgroundColor: '#f0f4f8',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '1100px',
      textAlign: 'center',
      boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
    }}>
      <p style={{ fontSize: '1.1rem' }}><strong>XP:</strong> {xp} / <strong>Level:</strong> {level}</p>

      {/* XP progress bar */}
      {/* I want a horizontal bar that fills up to show XP progress toward next level */}
      <div style={{
        backgroundColor: '#ddd',
        borderRadius: '10px',
        height: '24px',
        width: '80%',
        margin: '10px auto',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${(xpProgress / 50) * 100}%`,
          background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
          height: '100%',
          transition: 'width 0.4s ease'
        }} />
      </div>

      {/* Display earned badges with icons */}
      {/* Show emojis and descriptions if any badge goals are met */}
      <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
        <strong>Badges:</strong> {badges.length > 0 ? badges.join(' | ') : 'None yet – keep going!'}
      </p>
    </div>
  );
}

export default GamifiedStats;
