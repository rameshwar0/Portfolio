import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - (isHovering ? 30 : 6));
      cursorY.set(e.clientY - (isHovering ? 30 : 6));

      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isHovering, cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: smoothX,
        y: smoothY,
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: '1rem',
        overflow: 'hidden'
      }}
      animate={{
        width: isHovering ? 50 : 12,
        height: isHovering ? 50 : 12,
        backgroundColor: isHovering ? 'var(--accent)' : '#FFFFFF',
        borderRadius: isHovering ? '25px' : '6px',
        mixBlendMode: isHovering ? 'normal' : 'difference'
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.25 }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        ↗
      </motion.span>
    </motion.div>
  );
};

export default Cursor;
