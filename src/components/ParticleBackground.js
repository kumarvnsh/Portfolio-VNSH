import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Gaming-themed particles and shapes
    const particles = [];
    const shapes = [];
    const maxParticles = 50;
    const maxShapes = 15;

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = [
          'rgba(65, 105, 225, 0.3)',   // Royal blue
          'rgba(255, 215, 0, 0.2)',    // Gold
          'rgba(255, 255, 255, 0.1)',  // White
          'rgba(30, 58, 138, 0.2)'     // Dark blue
        ][Math.floor(Math.random() * 4)];
        this.type = Math.random() > 0.7 ? 'square' : 'circle';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        if (this.type === 'square') {
          ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    // Geometric shape class
    class Shape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.color = 'rgba(255, 215, 0, 0.1)';
        this.type = ['triangle', 'diamond', 'hexagon'][Math.floor(Math.random() * 3)];
      }

      update() {
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        switch (this.type) {
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(-this.size * 0.866, this.size * 0.5);
            ctx.lineTo(this.size * 0.866, this.size * 0.5);
            ctx.closePath();
            ctx.fill();
            break;
          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, 0);
            ctx.lineTo(0, this.size);
            ctx.lineTo(-this.size, 0);
            ctx.closePath();
            ctx.fill();
            break;
          case 'hexagon':
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3;
              const x = Math.cos(angle) * this.size;
              const y = Math.sin(angle) * this.size;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            break;
          default:
            // Default case for any other shape types
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
        ctx.restore();
      }
    }

    // Initialize particles and shapes
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < maxShapes; i++) {
      shapes.push(new Shape());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(1, 'rgba(30, 58, 138, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw shapes
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(65, 105, 225, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add subtle pulsing effect
      const time = Date.now() * 0.001;
      const pulse = Math.sin(time) * 0.1 + 0.9;
      ctx.globalAlpha = pulse * 0.3;
      
      // Draw some floating text-like elements
      ctx.fillStyle = 'rgba(255, 215, 0, 0.05)';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      
      const gameElements = ['🎮', '⚡', '🏆', '💎', '⭐'];
      gameElements.forEach((element, index) => {
        const x = (canvas.width / gameElements.length) * index + Math.sin(time + index) * 20;
        const y = canvas.height * 0.2 + Math.cos(time + index) * 30;
        ctx.fillText(element, x, y);
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground; 