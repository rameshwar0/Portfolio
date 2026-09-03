import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Gamepad2, Code2, Eye, Database, TrendingUp, Wrench, Zap } from 'lucide-react';
import { playHoverSound } from '../utils/soundEffects';

const matrixData = [
  {
    category: 'Game Engines & Tech',
    icon: Gamepad2,
    skills: [
      { name: 'Unity 3D/2D Engine', lvl: '95%' },
      { name: 'Unreal Engine (Blueprints)', lvl: '82%' },
      { name: 'Physics & Optimization', lvl: '90%' },
    ],
  },
  {
    category: 'Programming & Languages',
    icon: Code2,
    skills: [
      { name: 'C# (Object-Oriented Architecture)', lvl: '94%' },
      { name: '.NET Web API (Basics)', lvl: '76%' },
      { name: 'Data Structures & OOP', lvl: '88%' },
    ],
  },
  {
    category: 'Extended Reality (AR/VR/MR)',
    icon: Eye,
    skills: [
      { name: 'Apple VisionOS & Mixed Reality', lvl: '88%' },
      { name: 'AR Face & Gesture Controls', lvl: '90%' },
      { name: 'VR Sniper Mechanics', lvl: '85%' },
    ],
  },
  {
    category: 'Backend & Realtime Sync',
    icon: Database,
    skills: [
      { name: 'Firebase (Auth, Firestore, DB)', lvl: '92%' },
      { name: 'WebSockets & Socket.io Sync', lvl: '86%' },
      { name: 'REST APIs & Postman', lvl: '90%' },
    ],
  },
  {
    category: 'Monetization & Analytics',
    icon: TrendingUp,
    skills: [
      { name: 'Google Ads Integration', lvl: '90%' },
      { name: 'Crashlytics & Firebase Analytics', lvl: '88%' },
      { name: 'Push Notifications & Engagement', lvl: '85%' },
    ],
  },
  {
    category: 'Tools & Publishing Platforms',
    icon: Wrench,
    skills: [
      { name: 'Google Play Console', lvl: '94%' },
      { name: 'App Store Connect & Xcode', lvl: '90%' },
      { name: 'Visual Studio & Git', lvl: '92%' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-code text-cyan-400 font-bold uppercase tracking-widest">
            <Zap size={14} /> TECHNICAL ARSENAL
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-figma">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Bento Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matrixData.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <Tilt
                key={idx}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={900}
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.02}
                className="bento-card p-6 text-left"
              >
                <div onMouseEnter={playHoverSound}>
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                    <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-base font-heading font-bold text-white tracking-wide">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((sk, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-code">
                          <span className="text-slate-300 font-medium">{sk.name}</span>
                          <span className="text-cyan-400 font-bold">{sk.lvl}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-white/10 p-0.5">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,240,255,0.4)]"
                            style={{ width: sk.lvl }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
