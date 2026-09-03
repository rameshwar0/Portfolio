import React from 'react';
import { X, ExternalLink, Smartphone, Apple, Gamepad2, CheckCircle2 } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="hud-panel w-full max-w-3xl p-6 sm:p-8 rounded-3xl border-cyan-500/40 relative space-y-6 max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,255,245,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div>
            <span className="text-[10px] font-code text-cyan-400 font-bold uppercase tracking-widest">
              PROJECT DOSSIER // {project.category}
            </span>
            <h2 className="text-3xl font-black font-heading text-white tracking-wide">
              {project.name}
            </h2>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-2.5 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:border-cyan-400 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Thumbnail Preview */}
        {project.images && project.images.length > 0 && (
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-cyan-500/20 bg-black">
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-code text-cyan-400 uppercase tracking-widest font-bold">
            MISSION BRIEFING
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-code text-cyan-400 uppercase tracking-widest font-bold">
              SYSTEM MECHANICS & FEATURES
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-black/40 border border-cyan-500/10 text-xs text-gray-300 font-light"
                >
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-code text-cyan-400 uppercase tracking-widest font-bold">
            DEPLOYED TECH STACK
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-code font-bold rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
          {project.playStoreLink && (
            <a
              href={project.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/40 hover:bg-green-500/20 text-xs font-code font-bold uppercase transition-all"
            >
              <Smartphone size={16} />
              <span>PLAY STORE</span>
            </a>
          )}
          {project.appStoreLink && (
            <a
              href={project.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/20 text-xs font-code font-bold uppercase transition-all"
            >
              <Apple size={16} />
              <span>APP STORE</span>
            </a>
          )}
          {project.link && !project.playStoreLink && !project.appStoreLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/40 hover:bg-purple-500/20 text-xs font-code font-bold uppercase transition-all"
            >
              <ExternalLink size={16} />
              <span>MORE DETAILS</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
