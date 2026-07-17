import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HR Frames Nellore — Premium Photo Frame Studio
 * Splash Screen with frame studio branding
 */
export default function SplashScreen({ onComplete }) {
  const [percentage, setPercentage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return Math.min(prev + Math.floor(Math.random() * 4) + 1, 100);
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 1200);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [percentage, onComplete]);

  const containerVariants = {
    initial: { y: 0 },
    exit: { y: '-100vh', transition: { duration: 1.2, ease: [0.85, 0, 0.15, 1] } }
  };

  const logoVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1, transition: { duration: 2.2, ease: "easeOut" } }
  };

  const textVariants = {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.8, duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="splash-container"
          variants={containerVariants}
          initial="initial"
          exit="exit"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(135deg, #050508 0%, #0a0a14 50%, #050508 100%)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Ambient glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>

            {/* Photo Frame SVG Logo — animates with pathLength */}
            <svg viewBox="0 0 120 100" style={{ width: '90px', height: '90px', fill: 'none', stroke: '#818cf8', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              {/* Outer frame border */}
              <motion.rect
                x="8" y="8" width="104" height="84" rx="6"
                variants={logoVariants}
                initial="initial"
                animate="animate"
              />
              {/* Inner mat border */}
              <motion.rect
                x="18" y="18" width="84" height="64" rx="3"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                style={{ stroke: 'rgba(129,140,248,0.4)' }}
              />
              {/* Photo circle placeholder */}
              <motion.circle
                cx="60" cy="50" r="18"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                style={{ stroke: '#fbbf24' }}
              />
            </svg>

            {/* Brand Name */}
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                color: '#a1a1aa'
              }}
            >
              HR Frames Nellore
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: '#52525b',
                letterSpacing: '0.05em'
              }}
            >
              Custom Photo Frames · Nellore
            </motion.div>

            {/* Percentage Counter */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#f5f5f7',
              margin: '8px 0',
              opacity: 0.95
            }}>
              {percentage < 10 ? `0${percentage}` : percentage}
            </div>

            {/* Progress Bar */}
            <div style={{ width: '220px', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #a855f7 0%, #6366f1 50%, #06b6d4 100%)',
                  width: `${percentage}%`
                }}
                initial={{ width: '0%' }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
