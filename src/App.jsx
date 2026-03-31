import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

function App() {
  return (
    <>
      
      {/* 3D Starfield Background */}
      <Background3D />

      {/* Borea AI Radiant Glows */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'var(--accent-peach)', filter: 'blur(120px)', opacity: 0.15, borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '60vw', height: '60vw', background: 'var(--accent-blue)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
