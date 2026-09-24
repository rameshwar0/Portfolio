import React from 'react';
import { Gamepad2, ChevronDown, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-normal">
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
              className="p-3 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <div className="w-[22px] h-[35px] border-2 border-cyan-400/30 rounded-full flex justify-center p-1.5">
          <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
