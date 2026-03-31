import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Game Engines & Development",
      skills: ["Unity", "Unreal Engine (Blueprints)", "3D Mobile Games", "AR / VR / Mixed Reality"]
    },
    {
      title: "Programming",
      skills: ["C#", ".NET (Basics)"]
    },
    {
      title: "Backend & Networking",
      skills: ["Firebase", "REST APIs", "Socket.io", "WebSockets"]
    },
    {
      title: "Monetization & Analytics",
      skills: ["Ads", "Analytics", "Crashlytics", "Notifications"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Google Play Console", "App Store Connect", "Xcode", "Postman"]
    }
  ];

  return (
    <section id="skills" className="section-container" style={{ alignItems: 'center', minHeight: 'auto', paddingBottom: '8rem' }}>
      <h3 className="heading-section" style={{ textAlign: 'center' }}>Tech Stack & Arsenal</h3>

      <div className="grid-2" style={{ width: '100%' }}>
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
          >
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.5px' }}>{category.title}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  style={{
                    padding: '0.5rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '40px',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)';
                    e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
                    e.currentTarget.style.color = '#FFF';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
