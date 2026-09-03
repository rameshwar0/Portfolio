import React from 'react';
import { Mail, Gamepad2 } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { playHoverSound, playClickSound } from '../utils/soundEffects';

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 bg-black/40 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-black font-extrabold shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <Gamepad2 size={20} />
            </div>
            <div className="text-left">
              <span className="text-xl font-heading font-extrabold text-white tracking-tight">
                Rameshwar Ghanekar
              </span>
              <div className="text-xs text-slate-400 font-light">Game Developer | Unity & AR/VR Specialist</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-3 rounded-full border border-white/10 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all hover:scale-110 bg-white/5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="p-3 rounded-full border border-white/10 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all hover:scale-110 bg-white/5"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="pt-6 text-center text-slate-500 text-xs space-y-1">
          <p>© {new Date().getFullYear()} Rameshwar Ghanekar. All rights reserved.</p>
          <p className="text-slate-400 text-xs">Game Developer & Extended Reality Specialist</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
