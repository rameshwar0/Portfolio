import React from 'react';
import { Code2, Eye, Zap, Smartphone, Download } from 'lucide-react';
import { aboutData, personalInfo } from '../data/mock';

const highlights = [
  { icon: Code2, text: '3+ years experience in Unity & Game Development' },
  { icon: Eye, text: 'Expertise in AR/VR/Mixed Reality' },
  { icon: Zap, text: 'Multiplayer systems with WebSockets & Socket.io' },
  { icon: Smartphone, text: 'Published mobile games on Android & iOS' },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">{aboutData.summary}</p>
            <div className="flex gap-4 flex-wrap">
              <a href="#contact" className="glow-button">
                Hire Me
              </a>
              <a
                href={personalInfo.cvUrl}
                download="Rameshwar_Ghanekar_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 card-hover"
                >
                  <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 flex-shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <p className="text-gray-300 flex-1 pt-1">{highlight.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
