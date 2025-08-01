import React, { useEffect, useRef } from 'react';

const PlayerProfile = () => {
  const abilityRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const abilityFill = entry.target.querySelector('.ability-fill');
            if (abilityFill) {
              const percentage = abilityFill.getAttribute('data-percentage');
              abilityFill.style.width = percentage;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    abilityRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const abilities = [
    { name: 'Unity Development', percentage: '95%' },
    { name: 'AR/VR Technology', percentage: '90%' },
    { name: 'Multiplayer Systems', percentage: '88%' },
    { name: 'Game Design', percentage: '85%' }
  ];

  return (
    <section id="about" className="game-section">
      <div className="character-sheet">
        <h2 className="section-title">Player Profile</h2>
        
        <div className="stat-block">
          <div className="character-description">
            <p>
              Greetings, fellow developers! I'm Vnsh Kumar, a Level 4 Senior Game Developer 
              currently on an epic quest at Nexchar Ventures. My journey through the gaming 
              realm has been filled with exciting challenges and incredible achievements.
            </p>
            <p>
              I specialize in crafting immersive experiences using Unity, C#, and cutting-edge 
              AR/VR technologies. From hyper-casual games to complex multiplayer systems, 
              I've mastered the art of turning creative visions into interactive realities.
            </p>
            <p>
              My mission is to create games that not only entertain but also educate and 
              inspire. Every line of code I write is a step toward building something 
              extraordinary that can make a difference in people's lives.
            </p>
          </div>
          
          <div className="ability-bars">
            {abilities.map((ability, index) => (
              <div 
                key={ability.name} 
                className="ability"
                ref={(el) => (abilityRefs.current[index] = el)}
              >
                <span>{ability.name}</span>
                <div className="ability-bar">
                  <div 
                    className="ability-fill" 
                    data-percentage={ability.percentage}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerProfile; 