import React from 'react';

const Sidebar = () => {
  const handleResumeDownload = () => {
    try {
      // Create a link to download the actual PDF file
      const a = document.createElement('a');
      a.href = '/Vnsh-Kumar-Resume.pdf';
      a.download = 'Vnsh-Kumar-Resume.pdf';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      
      setTimeout(() => {
        document.body.removeChild(a);
      }, 100);
      
      // Visual feedback
      const btn = document.querySelector('.contact-btn');
      if (btn) {
        const originalText = btn.textContent;
        btn.textContent = 'Resume Downloaded!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        btn.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.transform = '';
        }, 2000);
      }
    } catch (error) {
      console.log('Resume download initiated');
    }
  };



  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name">Vnsh Kumar</h1>
          <p className="profile-title">Senior Game Developer</p>
          
          <div className="profile-avatar">
            <img 
              src="/profile-pic.jpeg" 
              alt="Vnsh Kumar" 
              className="avatar-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-placeholder">🎮</div>
          </div>
          
          <div className="social-links">
            <a href="https://linkedin.com/in/vnshkumar" target="_blank" rel="noopener noreferrer" className="social-icon">
              <span>💼</span>
            </a>
            <a href="https://github.com/vnshkumar" target="_blank" rel="noopener noreferrer" className="social-icon">
              <span>🐙</span>
            </a>
            <a href="mailto:vnsh.kumar@email.com" className="social-icon">
              <span>📧</span>
            </a>
            <a href="https://blog.vnshkumar.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <span>📝</span>
            </a>
          </div>
          
          <div className="contact-info">
            <p className="email">vnsh.kumar@email.com</p>
            <p className="location">Gurgaon, Haryana, India</p>
          </div>
        </div>
        
        {/* Contact Button */}
        <button className="contact-btn" onClick={handleResumeDownload}>
          <span className="btn-icon">📄</span>
          <span className="btn-text">Download Resume</span>
        </button>
        
        {/* Copyright */}
        <div className="sidebar-footer">
          <p>© 2025 Vnsh Kumar. All Rights Reserved.</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 