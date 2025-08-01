import React from 'react';

const GuildChannels = () => {
  const channels = [
    {
      name: 'Email',
      description: 'Primary communication channel',
      icon: '📧',
      url: 'mailto:vnsh.kumar@email.com'
    },
    {
      name: 'LinkedIn',
      description: 'Professional network and updates',
      icon: '💼',
      url: 'https://linkedin.com/in/vnshkumar'
    },
    {
      name: 'GitHub',
      description: 'Code repositories and projects',
      icon: '🐙',
      url: 'https://github.com/vnshkumar'
    },
    {
      name: 'Blog',
      description: 'Game development insights and tutorials',
      icon: '📝',
      url: 'https://blog.vnshkumar.com'
    }
  ];

  return (
    <section id="contact" className="game-section">
      <div className="guild-channels">
        <h2 className="section-title">Guild Channels</h2>
        <div className="guild-content">
          <div className="guild-message">Ready to collaborate on epic projects?</div>
          <div className="guild-channels-list">
            {channels.map((channel, index) => (
              <a
                key={index}
                href={channel.url}
                className="channel-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="channel-icon">{channel.icon}</div>
                <div className="channel-info">
                  <div className="channel-name">{channel.name}</div>
                  <div className="channel-desc">{channel.description}</div>
                </div>
                <div className="channel-status"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuildChannels; 