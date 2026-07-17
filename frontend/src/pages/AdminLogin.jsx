import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      // Custom credentials validation
      if (email === 'admin@hrframes.com' && password === 'admin123') {
        onLoginSuccess();
      } else {
        setError('Invalid admin credentials. Access denied.');
        setLoading(false);
      }
    }, 1200);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
    shake: {
      x: [-10, 10, -10, 10, -5, 5, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      padding: 'var(--space-md)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background neon glow */}
      <div style={{
        position: 'absolute',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.08) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
        zIndex: 1
      }} />

      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate={error ? "shake" : "visible"}
        whileHover={{ scale: 1.01, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
        className="card-apple"
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: 'var(--space-xl)',
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-xl)',
          position: 'relative',
          zIndex: 2,
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
          <span className="text-caps text-gradient" style={{ fontSize: '0.75rem' }}>Management Console</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '6px 0', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>Admin Login</h2>
          <p className="text-small" style={{ color: 'var(--text-secondary)' }}>Sign in to access the HR Frames Nellore dashboard</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-md)' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '6px' }}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@hrframes.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'border-color 0.20s'
              }}
              required 
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '6px' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'border-color 0.20s'
              }}
              required 
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                style={{ color: 'var(--accent-error)', fontSize: '0.8125rem', fontWeight: 600, textAlign: 'center' }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '14px', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.2)', borderTopColor: '#fff', borderRadius: '50%' }}
                />
                Securing Access...
              </>
            ) : 'Secure Access'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
