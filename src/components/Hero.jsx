import React from 'react';
import { Gamepad2, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full border-2 border-cyan-400 bg-cyan-400/10">
              <Gamepad2 size={48} className="text-cyan-400" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-medium">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="#projects" className="glow-button text-lg">
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 text-lg"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              LinkedIn
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-sm">Scroll</span>
        <ChevronDown size={20} className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
