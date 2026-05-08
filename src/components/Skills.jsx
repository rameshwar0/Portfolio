import React from 'react';
import { Gamepad2, Code2, Eye, Database, TrendingUp, Wrench } from 'lucide-react';
import { skillsData } from '../data/mock';

const skillCategories = [
  { title: 'Game Engines', icon: Gamepad2, skills: skillsData.gameEngines, color: 'cyan' },
  { title: 'Programming', icon: Code2, skills: skillsData.programming, color: 'blue' },
  { title: 'Game Development', icon: Eye, skills: skillsData.gameDevelopment, color: 'cyan' },
  { title: 'Backend & Networking', icon: Database, skills: skillsData.backendNetworking, color: 'blue' },
  { title: 'Monetization & Analytics', icon: TrendingUp, skills: skillsData.monetizationAnalytics, color: 'cyan' },
  { title: 'Tools & Platforms', icon: Wrench, skills: skillsData.toolsPlatforms, color: 'blue' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-transparent to-cyan-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      category.color === 'cyan'
                        ? 'bg-cyan-400/10 text-cyan-400'
                        : 'bg-blue-400/10 text-blue-400'
                    }`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full border border-gray-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
