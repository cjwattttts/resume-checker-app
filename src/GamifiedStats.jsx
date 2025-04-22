// I want to track resume quality by awarding XP and badges based on keywords
// Each skill match adds XP, filler phrases subtract XP, and XP increases level

import React, { useEffect, useState } from 'react';

function GamifiedStats({ resumeText }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState([]);

  // Define the core skill set for Business Analysts
  const skills = [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Business Requirements', 'Stakeholders', 'Process Mapping'
  ];

  // List common filler phrases that should reduce XP
  const fillerPhrases = [
    'responsible for', 'team player', 'hardworking', 'detail-oriented',
    'go-getter', 'works well under pressure', 'self-starter'
  ];

  useEffect(() => {
    // Check which skills are present in the resume
    const matched = skills.filter(skill =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    // Count how many filler phrases are used
    const fillerCount = fillerPhrases.filter(phrase =>
      resumeText.toLowerCase().includes(phrase)
    ).length;

    // XP formula: +10 per skill, -5 per filler, floor at 0
    const newXp = matched.length * 10 - fillerCount * 5;
    setXp(newXp < 0 ? 0 : newXp);

    // Level up every 50 XP
    setLevel(Math.floor((newXp < 0 ? 0 : newXp) / 50) + 1);

    // Assign badges based on conditions
    const newBadges = [];
    if (matched.length >= 5) newBadges.push('Skill Stacker');
    if (fillerCount === 0 && resumeText.length > 0) newBadges.push('Buzzword Killer');
    if (resumeText.length > 1000) newBadges.push('Verbose Veteran');

    setBadges(newBadges);
  }, [resumeText]);

  return (
    // Show XP, level, and badge progress in a styled panel
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
      <p><strong>XP:</strong> {xp} | <strong>Level:</strong> {level}</p>
      <p><strong>Badges:</strong> {badges.length > 0 ? badges.join(', ') : 'None yet – keep going!'}</p>
    </div>
  );
}

export default GamifiedStats;
