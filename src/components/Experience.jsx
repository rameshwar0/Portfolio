import React from 'react';
import { Building2, MapPin, Calendar } from 'lucide-react';
import { experienceData } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-cyan-400 rounded-full border-4 border-[#0a0a0f] hidden md:block" style={{ top: '1.5rem' }} />

                {/* Card */}
                <div className="md:ml-20 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <Building2 size={16} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30 whitespace-nowrap self-start">
                      {index === 0 ? 'Current' : 'Past'}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
