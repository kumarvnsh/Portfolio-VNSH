import React, { useEffect, useRef } from 'react';

const SkillTree = () => {
  const canvasRef = useRef(null);

  const skills = [
    { name: 'Unity', level: 95, icon: '🎮', master: true, color: '#ffd700' },
    { name: 'AR/VR', level: 90, icon: '🥽', master: true, color: '#4169e1' },
    { name: 'Multiplayer', level: 88, icon: '🌐', master: false, color: '#32cd32' },
    { name: 'Game Design', level: 85, icon: '🎨', master: false, color: '#ff69b4' },
    { name: 'Project Management', level: 80, icon: '🎯', master: false, color: '#ff6347' },
    { name: 'Design Patterns', level: 85, icon: '🏗️', master: false, color: '#9370db' },
    { name: 'C#', level: 92, icon: '⚡', master: true, color: '#00ced1' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = 800;
      canvas.height = 600;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Planet class
    class Planet {
      constructor(skill, index) {
        this.skill = skill;
        this.index = index;
        this.orbitRadius = 120 + (index * 25);
        this.orbitSpeed = 0.003 + (index * 0.0005);
        this.angle = (index * Math.PI * 2) / skills.length;
        this.size = Math.max(12, skill.level / 4);
        this.x = 0;
        this.y = 0;
        this.hovered = false;
        this.glowIntensity = 0;
        this.nameOpacity = 0;
      }

      update(time) {
        this.angle += this.orbitSpeed;
        this.x = canvas.width / 2 + Math.cos(this.angle) * this.orbitRadius;
        this.y = canvas.height / 2 + Math.sin(this.angle) * this.orbitRadius;
        
        // Update glow and name opacity
        if (this.hovered) {
          this.glowIntensity = Math.min(1, this.glowIntensity + 0.1);
          this.nameOpacity = Math.min(1, this.nameOpacity + 0.1);
        } else {
          this.glowIntensity = Math.max(0, this.glowIntensity - 0.05);
          this.nameOpacity = Math.max(0, this.nameOpacity - 0.05);
        }
      }

      draw() {
        ctx.save();
        
        // Draw orbit path
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, this.orbitRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw planet glow
        if (this.glowIntensity > 0) {
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 3
          );
          gradient.addColorStop(0, `${this.skill.color}40`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw planet
        const planetGradient = ctx.createRadialGradient(
          this.x - this.size * 0.3, this.y - this.size * 0.3, 0,
          this.x, this.y, this.size
        );
        planetGradient.addColorStop(0, this.skill.color);
        planetGradient.addColorStop(1, this.skill.master ? '#ffd700' : this.skill.color + '80');
        
        ctx.fillStyle = planetGradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw planet border
        ctx.strokeStyle = this.skill.master ? '#ffd700' : 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw skill icon
        ctx.fillStyle = '#000';
        ctx.font = `${this.size * 0.8}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.skill.icon, this.x, this.y);

        // Draw skill name below planet
        ctx.fillStyle = this.skill.master ? '#ffd700' : '#ffffff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(this.skill.name, this.x, this.y + this.size + 8);

        // Draw skill level below name
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = '10px Arial';
        ctx.fillText(`Level ${this.skill.level}`, this.x, this.y + this.size + 22);

        // Draw enhanced tooltip on hover
        if (this.nameOpacity > 0) {
          ctx.fillStyle = `rgba(0, 0, 0, ${this.nameOpacity * 0.9})`;
          ctx.fillRect(this.x - 70, this.y - this.size - 60, 140, 50);
          
          ctx.fillStyle = `rgba(255, 255, 255, ${this.nameOpacity})`;
          ctx.font = 'bold 12px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.skill.name, this.x, this.y - this.size - 40);
          ctx.font = '11px Arial';
          ctx.fillText(`Level ${this.skill.level}`, this.x, this.y - this.size - 25);
        }

        ctx.restore();
      }

      isPointInside(x, y) {
        const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        return distance <= this.size;
      }
    }

    const planets = skills.map((skill, index) => new Planet(skill, index));

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      planets.forEach(planet => {
        planet.hovered = planet.isPointInside(mouseX, mouseY);
      });
    });

    // Animation loop
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw space background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
      gradient.addColorStop(1, 'rgba(30, 58, 138, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      for (let i = 0; i < 80; i++) {
        const x = (i * 37) % canvas.width;
        const y = (i * 73) % canvas.height;
        const opacity = Math.sin(time * 0.001 + i) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
        ctx.fillRect(x, y, 1, 1);
      }

      // Draw sun (you)
      const sunGradient = ctx.createRadialGradient(
        canvas.width / 2 - 25, canvas.height / 2 - 25, 0,
        canvas.width / 2, canvas.height / 2, 60
      );
      sunGradient.addColorStop(0, '#ffd700');
      sunGradient.addColorStop(0.5, '#ffed4e');
      sunGradient.addColorStop(1, 'rgba(255, 215, 0, 0.3)');
      
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
      ctx.fill();

      // Sun glow
      const sunGlow = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, 120
      );
      sunGlow.addColorStop(0, 'rgba(255, 215, 0, 0.2)');
      sunGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
      ctx.fill();

      // Draw sun text
      ctx.fillStyle = '#000';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('VNSH', canvas.width / 2, canvas.height / 2);

      // Update and draw planets
      planets.forEach(planet => {
        planet.update(time);
        planet.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="skills" className="game-section">
      <div className="skill-tree">
        <h2 className="section-title">Skill Solar System</h2>
        <div className="solar-system-container">
          <canvas
            ref={canvasRef}
            style={{
              width: '800px',
              height: '600px',
              borderRadius: '12px',
              cursor: 'pointer',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
          <div className="skill-legend">
            <h3>Skill Levels</h3>
            <div className="legend-items">
              <div className="legend-item">
                <div className="legend-planet master"></div>
                <span>Master Level (90+)</span>
              </div>
              <div className="legend-item">
                <div className="legend-planet expert"></div>
                <span>Expert Level (85-89)</span>
              </div>
              <div className="legend-item">
                <div className="legend-planet advanced"></div>
                <span>Advanced Level (80-84)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTree; 