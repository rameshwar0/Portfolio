import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container" style={{ alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ textAlign: 'center', maxWidth: '900px' }}
      >
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 3.5rem)', 
          fontWeight: 700, 
          color: 'var(--text-primary)',
          lineHeight: 1.4,
          letterSpacing: '-1px'
        }}>
          Game Developer with <span style={{ color: 'var(--accent-blue)' }}>3 years of experience</span> architecting Immersive Realities. I don't just write code; <span style={{ color: 'var(--accent-peach)' }}>I build game ecosystems.</span> A great game must run as beautifully under the hood as it looks on the screen.
        </h2>
      </motion.div>
    </section>
  );
};

export default About;
