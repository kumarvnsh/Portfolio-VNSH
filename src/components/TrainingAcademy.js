import React from 'react';

const TrainingAcademy = () => {
  return (
    <section id="education" className="game-section">
      <div className="training-academy">
        <h2 className="section-title">Training Academy</h2>
        
        <div className="education-grid">
          {/* B.Tech Degree */}
          <div className="education-card">
            <div className="education-header">
              <div className="institution-logo">
                <span className="logo-text">RGPV</span>
              </div>
              <div className="education-info">
                <h3 className="institution-name">Rajiv Gandhi Prodyogiki Vishwavidyalaya</h3>
                <h4 className="degree-name">Bachelor of Technology - BTech</h4>
                <p className="field-of-study">Computer Science</p>
                <p className="duration">Aug 2019 - Jun 2023</p>
                <p className="grade">Grade: 8.53</p>
              </div>
            </div>
            <div className="education-details">
              <p>Completed comprehensive computer science curriculum with focus on software development, algorithms, and system design. Graduated with distinction and strong foundation in programming fundamentals.</p>
            </div>
          </div>

          {/* Outscal Certification */}
          <div className="education-card">
            <div className="education-header">
              <div className="institution-logo outscal">
                <span className="logo-text">OUTSCAL</span>
              </div>
              <div className="education-info">
                <h3 className="institution-name">Outscal</h3>
                <h4 className="degree-name">Full Stack Game Development</h4>
                <p className="field-of-study">Computer Games and Programming Skills</p>
                <p className="duration">Dec 2023</p>
                <p className="certification-type">Professional Certification</p>
              </div>
            </div>
            <div className="education-details">
              <p>Intensive program covering full-stack game development, including Unity, C#, multiplayer systems, and modern game development practices. Enhanced skills in AR/VR development and real-time multiplayer applications.</p>
            </div>
          </div>

          {/* AR/VR Certification */}
          <div className="education-card">
            <div className="education-header">
              <div className="institution-logo ihub">
                <span className="logo-text">iHUB</span>
              </div>
              <div className="education-info">
                <h3 className="institution-name">iHUB DivyaSampark @ IIT Roorkee</h3>
                <h4 className="degree-name">Interactive Augmented and Virtual Reality App Development</h4>
                <p className="field-of-study">AR/VR Development</p>
                <p className="duration">Issued Apr 2022</p>
                <p className="credential-id">Credential ID: TIH2200016</p>
              </div>
            </div>
            <div className="education-details">
              <p>Specialized certification in AR/VR application development, covering Unity, AR Foundation, VR development, and interactive 3D applications. Gained expertise in creating immersive experiences and spatial computing solutions.</p>
              <div className="skills-tags">
                <span className="skill-tag">Augmented Reality (AR)</span>
                <span className="skill-tag">Virtual Reality (VR)</span>
                <span className="skill-tag">Unity Development</span>
                <span className="skill-tag">3D Applications</span>
                <span className="skill-tag">Spatial Computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingAcademy; 