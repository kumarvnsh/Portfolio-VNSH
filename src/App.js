import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import FloatingNav from './components/FloatingNav';
import PlayerProfile from './components/PlayerProfile';
import QuestLog from './components/QuestLog';
import CareerCampaign from './components/CareerCampaign';
import TrainingAcademy from './components/TrainingAcademy';
import SkillTree from './components/SkillTree';
import DeveloperLogs from './components/DeveloperLogs';
import GuildChannels from './components/GuildChannels';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', component: PlayerProfile, icon: '👤' },
    { id: 'projects', component: QuestLog, icon: '📋' },
    { id: 'experience', component: CareerCampaign, icon: '🎯' },
    { id: 'education', component: TrainingAcademy, icon: '🎓' },
    { id: 'skills', component: SkillTree, icon: '🌳' },
    { id: 'blog', component: DeveloperLogs, icon: '📝' },
    { id: 'contact', component: GuildChannels, icon: '💬' }
  ];

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component || PlayerProfile;

  return (
    <div className="App gaming-theme" data-color-scheme="dark">
      <ParticleBackground />
      
      <div className="portfolio-layout">
        <Sidebar />
        
        <main className="main-content">
          <ActiveComponent />
        </main>
        
        <FloatingNav activeSection={activeSection} setActiveSection={setActiveSection} sections={sections} />
      </div>
    </div>
  );
}

export default App;
