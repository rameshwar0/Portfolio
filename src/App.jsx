import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCursor from './components/ParticleCursor';
import PlayableArcade from './components/PlayableArcade';
import ProjectModal from './components/ProjectModal';
import AiAvatarConsole from './components/AiAvatarConsole';
import { Bot, Sparkles } from 'lucide-react';
import { playClickSound } from './utils/soundEffects';

function App() {
  const [crtEnabled, setCrtEnabled] = useState(false);
  const [isArcadeOpen, setIsArcadeOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`App relative min-h-screen ${crtEnabled ? 'crt-scanlines' : ''}`}>
      {/* Particle Cursor Spark Trail */}
      <ParticleCursor />

      {/* Playable Arcade Mini-Game Modal */}
      <PlayableArcade
        isOpen={isArcadeOpen}
        onClose={() => setIsArcadeOpen(false)}
      />

      {/* Interactive Gemini AI Avatar Assistant Modal */}
      <AiAvatarConsole
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating AI Voice Assistant Trigger Button */}
      <button
        onClick={() => {
          playClickSound();
          setIsAiOpen(true);
        }}
        className="fixed bottom-6 right-6 z-[9990] p-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold shadow-[0_0_30px_rgba(0,240,255,0.7)] flex items-center gap-2 hover:scale-110 transition-all duration-300 animate-pulse"
        title="Talk to Rameshwar AI Voice Assistant"
      >
        <Bot size={22} />
        <span className="text-xs font-code hidden sm:inline">RAMESHWAR AI</span>
        <Sparkles size={14} className="text-amber-300" />
      </button>

      <div className="relative z-10">
        <Header crtEnabled={crtEnabled} setCrtEnabled={setCrtEnabled} />
        <Hero
          onOpenArcade={() => setIsArcadeOpen(true)}
          onOpenAi={() => setIsAiOpen(true)}
        />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
