import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Unity 3D Programmer",
    company: "IndiaNIC Infotech Limited",
    period: "Sep 2024 - Current",
    description: "• Developed and enhanced Unity mobile games (Android & iOS) across Match-3, Bubble Shooter, Racing, and Ludo genres, focusing on gameplay, UI/UX, and performance.\n• Integrated Firebase backend and live services (Auth, Firestore, Realtime DB, Analytics, Crashlytics, Cloud Messaging) along with Ads monetization.\n• Built a 3D AI-driven mixed reality character using Unreal Engine, including scene management, actor lifecycle, leveraging Blueprint Visual Scripting.\n• Working on a real-time multiplayer Housie (Tambola) game, implementing Socket.io/WebSockets.\n• Managed cross-platform builds and publishing using Google Play Console, App Store Connect, Xcode, and Postman."
  },
  {
    role: "Game Developer",
    company: "Samyak Infotech Pvt. Ltd.",
    period: "July 2023 - Aug 2024",
    description: "• Skillfully contributed to a range of projects, specializing in virtual reality and mixed reality development.\n• Currently developing a game for Apple VisionOS in VR and MR with Unity Game Engine.\n• Focused on a sniper-based game, merging immersive experiences with innovative gameplay mechanics."
  },
  {
    role: "Software Developer Intern",
    company: "Samyak Infotech Pvt. Ltd.",
    period: "Jan 2023 - June 2023",
    description: "• Developed expertise in .NET technology for web API development.\n• Designed and developed a captivating 3D endless runner game with Unity.\n• Revolutionized gameplay through integrated mobile gesture and dynamic AR face detection.\n• Orchestrated successful deployment of the game on the Google Play Store platform."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container" style={{ zIndex: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="heading-section">Experience</h3>
        <p className="text-body" style={{ maxWidth: '600px', marginBottom: '4rem', fontSize: '1.25rem' }}>
          Over the years, I've engineered complex systems, optimized real-time rendering, and led development across Unity and Unreal contexts. Here's my journey.
        </p>
      </motion.div>

      <div style={{ position: 'relative', paddingLeft: '2.5rem', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
        {/* Sleek Timeline Line */}
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ position: 'relative', marginBottom: '5rem' }}
          >
            {/* Timeline Node */}
            <div className="timeline-dot"></div>

            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.5px' }}>{exp.role}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-blue)', fontSize: '1.1rem', fontWeight: 600 }}>{exp.company}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', borderRadius: '20px' }}>{exp.period}</span>
                </div>
              </div>
              
              <div className="text-body" style={{ margin: 0, whiteSpace: 'pre-line' }}>{exp.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
