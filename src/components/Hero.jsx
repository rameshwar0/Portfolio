import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 2rem' }}>
      <div className="grid-2" style={{ alignItems: 'center' }}>
        
        {/* Left Col - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ zIndex: 10 }}
        >
          <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '40px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-blue)', fontSize: '0.85rem', marginBottom: '2rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
            Senior Architect
          </div>
          
          <h1 className="heading-hero">
            Rameshwar<br/>Ghanekar.
          </h1>
          
          <p className="text-body" style={{ maxWidth: '500px', fontSize: '1.25rem', marginBottom: '3rem', marginTop: '1rem' }}>
            A Senior Unity & Unreal Developer specializing in high-performance gameplay, spatial computing, and scalable architectures.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#projects" className="btn-primary" style={{ background: 'var(--text-primary)', color: '#000', borderColor: 'var(--text-primary)' }}>
              Explore Work
            </a>
            <a 
              href="https://in.linkedin.com/in/rameshwar-ghanekar-9a037523a" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Col - Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          style={{ position: 'relative', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}
        >
          <motion.img 
            src="/hero-portrait.png" 
            alt="Rameshwar Ghanekar"
            style={{ 
              y: y1,
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
              filter: 'contrast(1.1) brightness(0.9)'
            }} 
          />
          
          {/* Edge shadow overlay for blending into black background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            background: 'linear-gradient(to top, var(--bg-deep) 0%, transparent 40%), linear-gradient(to right, var(--bg-deep) 0%, transparent 30%), linear-gradient(to left, var(--bg-deep) 0%, transparent 30%)',
            pointerEvents: 'none'
          }}></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
