import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Gamepad2, Smartphone, Apple, Eye, Layers } from 'lucide-react';
import { projectsData } from '../data/mock';
import { playHoverSound, playClickSound } from '../utils/soundEffects';

const categories = ['All', 'Arcade', 'Racing', 'Puzzle', 'Match-3', 'Endless Runner', 'AR/VR', 'Multiplayer', 'VR/MR'];

const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-code text-cyan-400 font-bold uppercase tracking-widest">
            <Layers size={14} /> FEATURED CASE STUDIES
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Portfolio <span className="gradient-text-figma">Showcase</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onMouseEnter={playHoverSound}
                onClick={() => {
                  playClickSound();
                  setFilter(cat);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                    : 'bento-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento Showcase Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <Tilt
              key={p.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={900}
              glareEnable={true}
              glareMaxOpacity={0.18}
              scale={1.02}
              className="bento-card rounded-3xl overflow-hidden flex flex-col group text-left cursor-pointer"
            >
              <div
                onMouseEnter={playHoverSound}
                onClick={() => {
                  playClickSound();
                  onSelectProject(p);
                }}
                className="flex flex-col h-full"
              >
                {/* Image Thumbnail */}
                {p.images && p.images.length > 0 ? (
                  <div className="relative h-56 overflow-hidden bg-black">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-cyan-400 text-black text-[10px] font-bold uppercase rounded-full shadow-md font-code">
                      {p.category}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-56 bg-slate-900 flex items-center justify-center">
                    <Gamepad2 size={56} className="text-cyan-400/40" />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-cyan-400 text-black text-[10px] font-bold uppercase rounded-full shadow-md font-code">
                      {p.category}
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {p.name}
                    </h3>
                    <Eye size={18} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light line-clamp-3">
                    {p.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-code font-semibold rounded-md bg-white/5 text-cyan-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="flex gap-2.5 mt-auto pt-2">
                    {p.playStoreLink && (
                      <a
                        href={p.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 text-xs font-code font-bold uppercase transition-all"
                      >
                        <Smartphone size={14} />
                        <span>Play Store</span>
                      </a>
                    )}
                    {p.appStoreLink && (
                      <a
                        href={p.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 text-xs font-code font-bold uppercase transition-all"
                      >
                        <Apple size={14} />
                        <span>App Store</span>
                      </a>
                    )}
                    {p.link && !p.playStoreLink && !p.appStoreLink && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                          onSelectProject(p);
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 text-xs font-code font-bold uppercase transition-all"
                      >
                        <ExternalLink size={14} />
                        <span>View Project</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
