import React, { useEffect, useState } from 'react';

const professionSkills = {
  'business-analyst': [
    'SQL', 'Excel', 'Power BI', 'Tableau', 'Data Analysis',
    'Storytelling', 'Agile', 'JIRA', 'KPIs',
    'Communication', 'Adaptability', 'Stakeholders', 'Visualization'
  ],
  'project-manager': [
    'Project Planning', 'Risk Management', 'Scrum', 'Kanban', 'Budgeting',
    'Stakeholder Management', 'Scheduling', 'Leadership', 'MS Project',
    'Communication', 'Resource Allocation', 'Timeline', 'Reporting'
  ],
  'data-analyst': [
    'Python', 'R', 'SQL', 'Excel', 'Tableau', 'Power BI',
    'Data Cleaning', 'Statistics', 'Visualization', 'Pandas',
    'Machine Learning', 'Reporting', 'Data Mining'
  ],
  'web-developer': [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'APIs',
    'Responsive Design', 'Git', 'Webpack', 'Testing',
    'Accessibility', 'Performance', 'Deployment'
  ]
};

const fillerPhrases = [
  'responsible for', 'team player', 'hardworking', 'detail-oriented',
  'go-getter', 'works well under pressure', 'self-starter'
];

function GamifiedStats({ resumeText, profession }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState([]);
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const skills = professionSkills[profession] || [];
    const matched = skills.filter(skill =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    const fillerCount = fillerPhrases.filter(phrase =>
      resumeText.toLowerCase().includes(phrase)
    ).length;

    const rawXp = matched.length * 10 - fillerCount * 5;
    const safeXp = Math.max(0, rawXp);
    setXp(safeXp);

    setLevel(Math.floor(safeXp / 50) + 1);

    const newBadges = [];
    if (matched.length >= 5) newBadges.push('🧠 Skill Stacker');
    if (fillerCount === 0 && resumeText.length > 0) newBadges.push('🧹 Buzzword Killer');
    if (resumeText.length > 1000) newBadges.push('📜 Verbose Veteran');
    setBadges(newBadges);

    const score = skills.length > 0 ? Math.round((matched.length / skills.length) * 100) : 0;
    let summaryText = `This resume aligns with ${score}% of key ${profession.replace('-', ' ')} skills.`;
    if (matched.length > 0) {
      summaryText += ` Core strengths include: ${matched.join(', ')}.`;
    }
    setSummary(summaryText);
  }, [resumeText, profession]);

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
      </div>
      
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

      {/* Gamified summary and copy button at the bottom */}
      <div style={{ marginTop: '2rem' }}>
        <p style={{ color: '#cbb8ff', fontSize: '1.05rem' }}>{summary}</p>
        <button
          onClick={handleCopy}
          className="copy-summary-button"
          style={{
            marginTop: '1rem',
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
          Copy Gamified Summary
        </button>
      </div>
    </div>
  );
}

export default GamifiedStats;