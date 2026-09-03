import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Gamepad2, Sparkles, ArrowRight, Play, RotateCw, ShieldCheck, Bot, Volume2 } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import { personalInfo } from '../data/mock';
import { playHoverSound, playClickSound } from '../utils/soundEffects';
import devAvatarImg from '../assets/developer_avatar.png';

const Hero = ({ onOpenArcade, onOpenAi }) => {
  const [modelType, setModelType] = useState('visor');

  const stats = [
    { label: 'ENGINE MASTERY', val: '3+ YEARS', sub: 'Unity 3D & C#' },
    { label: 'TITLES PUBLISHED', val: '8+ GAMES', sub: 'Android & iOS' },
    { label: 'CORE ENGINES', val: 'UNITY & UNREAL', sub: 'C# & Blueprints' },
    { label: 'SPATIAL REALITY', val: 'AR / VR / MR', sub: 'Apple VisionOS' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
      {/* Background Neon Orbs */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Greeting, Title & AI Launcher */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Handle Tag Badge */}
            <div className="bento-badge shadow-[0_0_20px_rgba(0,240,255,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-code font-bold">@rameshwar.ghanekar05</span>
              <span className="text-gray-400 font-light">// SENIOR GAME DEV & AR/VR</span>
              <Sparkles size={14} className="text-amber-400" />
            </div>

            {/* Kinetic Title */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.02]">
                Crafting Immersive <br />
                <span className="gradient-text-figma">3D & Spatial</span> Realities
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 font-heading">
                {personalInfo.title}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-light max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  playClickSound();
                  onOpenAi();
                }}
                onMouseEnter={playHoverSound}
                className="figma-btn-primary shadow-[0_0_30px_rgba(0,240,255,0.6)] animate-bounce"
              >
                <Bot size={20} />
                <span>TALK TO RAMESHWAR AI</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  onOpenArcade();
                }}
                onMouseEnter={playHoverSound}
                className="figma-btn-secondary"
              >
                <Gamepad2 size={18} />
                <span>Play Mini-Game</span>
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((st, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={800}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  scale={1.02}
                  className="bento-card p-4 text-left"
                >
                  <div onMouseEnter={playHoverSound}>
                    <div className="text-[10px] font-code text-cyan-400 font-bold uppercase tracking-wider mb-1">
                      {st.label}
                    </div>
                    <div className="text-lg font-heading font-extrabold text-white">{st.val}</div>
                    <div className="text-xs text-slate-400 font-light mt-0.5">{st.sub}</div>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>

          {/* Right Column: Realistic 3D Avatar Holographic Viewport */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] w-full">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="w-full h-full bento-card rounded-3xl overflow-hidden relative shadow-[0_0_60px_rgba(0,240,255,0.25)] border-cyan-500/30 flex flex-col"
            >
              {/* 3D Canvas Atmosphere */}
              <Hero3DCanvas modelType={modelType} />

              {/* Realistic 3D Avatar Image Overlay */}
              <div className="relative w-full h-full z-10 flex items-center justify-center p-6 pointer-events-none">
                <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_40px_rgba(0,240,255,0.3)] bg-black/60 backdrop-blur-md">
                  <img
                    src={devAvatarImg}
                    alt="Rameshwar Ghanekar - Realistic 3D Game Dev Avatar"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Holographic Visor Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-cyan-500/40 flex items-center justify-between text-xs font-code pointer-events-auto">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <ShieldCheck size={14} /> @rameshwar.ghanekar05
                    </span>
                    <button
                      onClick={() => {
                        playClickSound();
                        onOpenAi();
                      }}
                      className="px-2.5 py-1 rounded bg-cyan-400 text-black font-bold text-[10px] hover:bg-cyan-300 transition-all flex items-center gap-1"
                    >
                      <Volume2 size={12} /> VOICE AI
                    </button>
                  </div>
                </div>
              </div>

              {/* Viewport Model Switcher Controls */}
              <div className="absolute top-4 left-4 right-4 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-2 z-20 pointer-events-auto">
                <div className="flex items-center gap-2 text-xs font-code text-cyan-400 font-bold uppercase tracking-wider">
                  <RotateCw size={14} className="animate-spin" />
                  <span>3D SPATIAL CANVAS</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      playClickSound();
                      setModelType('visor');
                    }}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-code font-bold uppercase transition-all ${
                      modelType === 'visor'
                        ? 'bg-cyan-400 text-black shadow-[0_0_10px_rgba(0,240,255,0.8)]'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    VR VISOR
                  </button>

                  <button
                    onClick={() => {
                      playClickSound();
                      setModelType('core');
                    }}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-code font-bold uppercase transition-all ${
                      modelType === 'core'
                        ? 'bg-amber-400 text-black shadow-[0_0_10px_rgba(255,170,0,0.8)]'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    UNREAL CORE
                  </button>

                  <button
                    onClick={() => {
                      playClickSound();
                      setModelType('artifact');
                    }}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-code font-bold uppercase transition-all ${
                      modelType === 'artifact'
                        ? 'bg-purple-400 text-black shadow-[0_0_10px_rgba(139,92,246,0.8)]'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    ARTIFACT
                  </button>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
