import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Gamepad2, ArrowUpRight } from 'lucide-react';
import { playHoverSound, playClickSound, toggleMute } from '../utils/soundEffects';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = toggleMute();
    setMuted(newState);
    if (!newState) playClickSound();
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0d14]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-black font-extrabold shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
              <Gamepad2 size={22} />
            </div>
            <div className="text-left">
              <span className="text-xl font-heading font-bold text-white tracking-tight">
                Rameshwar.dev
              </span>
              <span className="text-xs text-cyan-400 font-medium block -mt-1">
                Game Dev & AR/VR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={handleAudioToggle}
              onMouseEnter={playHoverSound}
              className={`p-2.5 rounded-full border transition-all text-xs font-semibold flex items-center gap-2 ${
                muted
                  ? 'border-gray-800 bg-gray-900/50 text-gray-500'
                  : 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
              }`}
              title={muted ? 'Enable SFX Audio' : 'Mute SFX Audio'}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{muted ? 'SFX OFF' : 'SFX ON'}</span>
            </button>

            <a
              href="#contact"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="px-5 py-2.5 rounded-full bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleAudioToggle}
              className="p-2.5 rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button
              className="p-2.5 rounded-full border border-white/10 text-white bg-white/5"
              onClick={() => {
                playClickSound();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0b0d14]/98 backdrop-blur-2xl border-t border-white/10 p-6 space-y-4 text-left">
          <nav className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  playClickSound();
                  setIsMobileMenuOpen(false);
                }}
                className="block text-lg font-heading font-bold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
