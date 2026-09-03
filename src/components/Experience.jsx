import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Trophy, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/mock';
import { playHoverSound, playQuestUnlockSound } from '../utils/soundEffects';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-code text-cyan-400 font-bold uppercase tracking-widest">
            <Trophy size={14} /> WORK HISTORY
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Career <span className="gradient-text-figma">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 max-w-4xl mx-auto text-left">
          {experienceData.map((exp, index) => (
            <Tilt
              key={exp.id}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              className="bento-card p-6 sm:p-8 rounded-3xl"
            >
              <div onMouseEnter={playHoverSound}>
                {/* Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white tracking-wide mb-1">
                      {exp.role} <span className="text-cyan-400 font-medium">@ {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-code">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-cyan-400" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-cyan-400" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-semibold px-4 py-1.5 rounded-full border font-code ${
                      index === 0
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    }`}
                  >
                    {index === 0 ? 'CURRENT ROLE' : 'PREVIOUS ROLE'}
                  </span>
                </div>

                {/* Key Accomplishments */}
                <div className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-3 text-sm text-slate-300 font-light leading-relaxed"
                    >
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
