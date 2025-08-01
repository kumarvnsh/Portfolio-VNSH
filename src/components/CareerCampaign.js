import React from 'react';

const CareerCampaign = () => {
  const careerLevels = [
    {
      level: 4,
      company: 'Nexchar Ventures',
      role: 'Senior Game Developer',
      period: 'June 2025 – Present',
      xp: '1000+',
      details: 'Building gamified and educational tools using Unity, C#, and real-time multiplayer systems. Focused on immersive and accessible designs tailored for underserved users.',
      current: true
    },
    {
      level: 3,
      company: 'Saathi',
      role: 'Game Programmer',
      period: 'Oct 2023 – May 2025',
      xp: '800',
      details: 'Specialized in developing hyper-casual and hybrid-casual games, as well as AR and VR applications. Worked on rapid prototyping, technical design, and feature pipelines.',
      current: false
    },
    {
      level: 2,
      company: 'Meta Extended Reality',
      role: 'Game/AR-VR Programmer',
      period: 'Mar 2023 – Sep 2023',
      xp: '600',
      details: 'Contributed to cutting-edge AR and XR production. Worked with teams to integrate advanced Unity functionality into scalable projects.',
      current: false
    },
    {
      level: 1,
      company: 'Zeap Solutions',
      role: 'Game Programmer Intern',
      period: 'Dec 2022 – Mar 2023',
      xp: '300',
      details: 'Supported cross-platform development. Assisted in debugging, level design, and multiplayer features.',
      current: false
    }
  ];

  return (
    <section id="experience" className="game-section">
      <div className="career-campaign">
        <h2 className="section-title">Career Campaign</h2>
        <div className="campaign-path">
          {careerLevels.map((level) => (
            <div key={level.level} className={`level-node ${level.current ? 'current' : ''}`}>
              <div className="level-number">{level.level}</div>
              <div className="level-info">
                <h3>{level.company}</h3>
                <div className="job-role">{level.role}</div>
                <div className="job-period">{level.period}</div>
                <div className="xp-gained">XP Gained: {level.xp}</div>
                <div className="level-details">{level.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerCampaign; 