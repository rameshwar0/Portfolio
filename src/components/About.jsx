import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Cpu, ShieldCheck, Zap, Smartphone, Download, UserCheck, Gamepad2, ArrowRight } from 'lucide-react';
import { aboutData, personalInfo } from '../data/mock';
import { playHoverSound, playClickSound } from '../utils/soundEffects';
import devAvatarImg from '../assets/developer_avatar.png';

const attributes = [
  { icon: Gamepad2, title: '3+ YEARS IN GAME DEV', desc: 'Specializing in Unity 3D, physics, gameplay loops & performance optimization.' },
  { icon: Cpu, title: 'AR / VR / MIXED REALITY', desc: 'Building spatial apps for Apple VisionOS, Oculus Meta Quest, and AR face tracking.' },
  { icon: Zap, title: 'MULTIPLAYER ARCHITECTURE', desc: 'Realtime network sync using WebSockets, Socket.io, and server authority.' },
  { icon: Smartphone, title: 'STORE PUBLISHING & MONETIZATION', desc: 'End-to-end publishing on Google Play & App Store with Ads, Firebase & Analytics.' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-code text-cyan-400 font-bold uppercase tracking-widest">
            <UserCheck size={14} /> DEVELOPER PROFILE
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            About <span className="gradient-text-figma">Rameshwar Ghanekar</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 3D Avatar Card */}
          <div className="lg:col-span-5">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.15}
              className="bento-card p-6 text-left h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                  <img
                    src={devAvatarImg}
                    alt="Rameshwar Ghanekar 3D Avatar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-cyan-400 text-black text-[10px] font-code font-bold rounded-full uppercase">
                    @rameshwar.ghanekar05
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-bold text-white">Rameshwar Ghanekar</h3>
                  <p className="text-xs text-cyan-400 font-code">Game Developer | Unity & AR/VR Specialist</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-code">
                <span>LOCATION: INDIA</span>
                <span className="text-green-400 font-bold">AVAILABLE FOR HIRE</span>
              </div>
            </Tilt>
          </div>

          {/* Right Column: Bio Summary & Key Attributes */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              className="bento-card p-8 text-left space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-code text-cyan-400 font-bold">
                <span>FILE: DOSSIER_SUMMARY.DAT</span>
                <span className="text-green-400 font-bold">VERIFIED DEVELOPER</span>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                {aboutData.summary}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="figma-btn-primary"
                >
                  <span>Hire Developer</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href={personalInfo.cvUrl}
                  download="Rameshwar_Ghanekar_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="figma-btn-secondary"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>
            </Tilt>

            {/* Attributes Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {attributes.map((attr, index) => {
                const IconComponent = attr.icon;
                return (
                  <Tilt
                    key={index}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={800}
                    glareEnable={true}
                    glareMaxOpacity={0.15}
                    scale={1.02}
                    className="bento-card p-4 text-left"
                  >
                    <div onMouseEnter={playHoverSound} className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h4 className="text-xs font-heading font-bold text-white tracking-wide mb-1">
                          {attr.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                          {attr.desc}
                        </p>
                      </div>
                    </div>
                  </Tilt>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
