import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-container" style={{ minHeight: '80vh', textAlign: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card"
        style={{ maxWidth: '800px', width: '100%', padding: '4rem 2rem' }}
      >
        <h3 className="heading-section" style={{ fontSize: '3rem', margin: 0 }}>Initiate Transmission</h3>
        <p className="text-body" style={{ fontSize: '1.2rem', margin: '2rem auto', maxWidth: '600px' }}>
          Whether you're building the next chart-topping mobile hit or pioneering spatial computing, I'm ready to bring heavy technical execution to your team.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
          <a href="mailto:rameshwar.ghanekar05@gmail.com" className="btn-primary">
            Contact Me
          </a>
          <a href="https://in.linkedin.com/in/rameshwar-ghanekar-9a037523a" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '1rem 2.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 600,
            fontSize: '1.1rem',
            textDecoration: 'none',
            border: '1px solid var(--glass-border)',
            borderRadius: '40px',
            background: 'rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
          onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.borderColor = 'var(--glass-border)' }}
          >
            LinkedIn Profile
          </a>
        </div>
      </motion.div>

      <footer style={{ marginTop: '5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Rameshwar Ghanekar. Engineering Impossible Realities.</p>
      </footer>
    </section>
  );
};

export default Contact;
