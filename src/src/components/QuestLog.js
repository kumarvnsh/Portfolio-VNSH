import React from 'react';

const QuestLog = () => {
  const projects = [
    {
      id: 1,
      title: 'AR Dinosaur Project',
      description: 'An immersive augmented reality experience featuring interactive dinosaurs. Built with Unity and AR Foundation, showcasing advanced AR tracking and 3D model integration.',
      badge: '🏆',
      difficulty: 'expert',
      achievements: ['AR Master', '3D Integration', 'User Experience']
    },
    {
      id: 2,
      title: 'Blockie (Tetris Adaptation)',
      description: 'A modern twist on the classic Tetris game with enhanced graphics and smooth gameplay mechanics. Features include score tracking, level progression, and responsive controls.',
      badge: '🧩',
      difficulty: 'advanced',
      achievements: ['Block Puzzler', 'Game Mechanics', 'Performance']
    },
    {
      id: 3,
      title: 'Hungry Pac Game',
      description: 'A Pac-Man inspired game with unique gameplay elements and modern graphics. Includes AI pathfinding, power-ups, and multiple levels with increasing difficulty.',
      badge: '👾',
      difficulty: 'expert',
      achievements: ['Arcade Legend', 'AI Programming', 'Level Design']
    },
    {
      id: 4,
      title: 'AR Multiplayer with Photon PUN 2',
      description: 'Real-time multiplayer AR experience using Photon PUN 2 networking. Players can interact in shared AR space with synchronized 3D objects and real-time communication.',
      badge: '🌐',
      difficulty: 'expert',
      achievements: ['Network Ninja', 'Real-time Sync', 'AR Networking']
    },
    {
      id: 5,
      title: 'BoatRush Madness',
      description: 'Fast-paced boat racing game with dynamic water physics and competitive multiplayer features. Includes boat customization, track variety, and leaderboards.',
      badge: '🚤',
      difficulty: 'advanced',
      achievements: ['Speed Demon', 'Physics Engine', 'Multiplayer']
    },
    {
      id: 6,
      title: 'AR Ball Game',
      description: 'Interactive AR ball game using device sensors and AR tracking. Features realistic physics, gesture controls, and immersive gameplay in real-world environments.',
      badge: '⚽',
      difficulty: 'intermediate',
      achievements: ['Reality Bender', 'Sensor Integration', 'AR Physics']
    },
    {
      id: 7,
      title: 'AR Earth and Heart',
      description: 'Educational AR application featuring interactive 3D models of Earth and human heart. Designed for learning with detailed anatomical information and interactive elements.',
      badge: '🌍',
      difficulty: 'intermediate',
      achievements: ['Model Master', 'Educational Content', '3D Modeling']
    },
    {
      id: 8,
      title: 'VR Scene Changer',
      description: 'Virtual reality application allowing users to switch between different immersive environments. Features include scene transitions, interactive elements, and VR optimization.',
      badge: '🥽',
      difficulty: 'advanced',
      achievements: ['Virtual Architect', 'VR Development', 'Scene Management']
    }
  ];

  return (
    <section id="projects" className="game-section">
      <div className="quest-log">
        <h2 className="section-title">Quest Log</h2>
        <div className="achievement-gallery">
          {projects.map((project) => (
            <div key={project.id} className="quest-card">
              <div className="quest-badge">{project.badge}</div>
              <div className="quest-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.achievements.map((achievement, index) => (
                    <span key={index} className="achievement">{achievement}</span>
                  ))}
                </div>
              </div>
              <div className={`difficulty-badge ${project.difficulty}`}>
                {project.difficulty}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestLog; 