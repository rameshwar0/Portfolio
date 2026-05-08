import React, { useState } from 'react';
import { ExternalLink, Gamepad2 } from 'lucide-react';
import { projectsData } from '../data/mock';

const categories = ['All', 'Arcade', 'Racing', 'Puzzle', 'Match-3', 'Endless Runner', 'AR/VR', 'Multiplayer', 'VR/MR'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-b from-cyan-500/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#0a0a0f]'
                  : 'bg-gray-800/50 text-gray-300 border border-cyan-500/30 hover:border-cyan-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 card-hover flex flex-col"
            >
              {/* Image */}
              {project.images && project.images.length > 0 ? (
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-cyan-400/90 text-[#0a0a0f] text-xs font-bold rounded-full">
                    {project.category}
                  </div>
                </div>
              ) : (
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                  <Gamepad2 size={52} className="text-cyan-400/40" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-cyan-400/90 text-[#0a0a0f] text-xs font-bold rounded-full">
                    {project.category}
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-xs flex items-center gap-2">
                        <span className="text-cyan-400">✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-cyan-500/10">
                  {project.playStoreLink && (
                    <a
                      href={project.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Play Store
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a
                      href={project.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={14} />
                      App Store
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
