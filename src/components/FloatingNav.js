import React from 'react';

const FloatingNav = ({ activeSection, setActiveSection, sections }) => {
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="floating-nav">
      <div className="nav-container">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-icon-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleNavClick(section.id)}
            title={section.id.charAt(0).toUpperCase() + section.id.slice(1)}
          >
            <span className="nav-icon">{section.icon}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav; 