import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FRAME_STYLES = [
  { id: 'gold', name: 'Imperial Gold', border: '14px solid #d4af37', matte: '#fdfaf3' },
  { id: 'black', name: 'Obsidian Black', border: '12px solid #101012', matte: '#f4f4f5' },
  { id: 'walnut', name: 'Walnut Wood', border: '14px solid #6b3f1d', matte: '#f7f1e8' },
  { id: 'silver', name: 'Brushed Silver', border: '10px solid #c7cbd1', matte: '#ffffff' },
  { id: 'rosegold', name: 'Rose Gold', border: '12px solid #b76e79', matte: '#fff6f4' },
  { id: 'led', name: 'LED Glow', border: '10px solid #0ea5e9', matte: '#0b1220' },
];

export default function FrameVisualizer({ images = [] }) {
  const [activeImg, setActiveImg] = useState(0);
  const [activeFrame, setActiveFrame] = useState(FRAME_STYLES[0]);

  const source = images[activeImg];

  return (
    <div className="card-apple" style={{ padding: 'var(--space-xl)' }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: 4 }}>
        Visualize Your Frame
      </h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--space-lg)' }}>
        Pick a photo, then tap a frame style to see it change instantly.
      </p>

      <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap', alignItems: 'center' }}>
        {/* Live preview */}
        <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFrame.id + activeImg}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              style={{
                background: activeFrame.matte,
                padding: 18,
                border: activeFrame.border,
                borderRadius: 6,
                boxShadow: 'var(--shadow-xl)',
                maxWidth: 320,
              }}
            >
              <img
                src={source}
                alt="Frame preview"
                style={{ width: '100%', display: 'block', borderRadius: 2 }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div style={{ flex: '1 1 260px' }}>
          {images.length > 1 && (
            <>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 8 }}>
                Photo
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'var(--space-lg)' }}>
                <button
                  onClick={() => setActiveImg(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                  style={{
                    width: 32, height: 48, borderRadius: 8, border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)'
                  }}
                >
                  ◀
                </button>

                <div style={{ display: 'flex', gap: 8, flex: 1, overflow: 'hidden', justifyContent: 'center' }}>
                  {(() => {
                    // Calculate a sliding window of 5 images centered around activeImg (if possible)
                    let start = Math.max(0, activeImg - 2);
                    let end = start + 5;
                    if (end > images.length) {
                      end = images.length;
                      start = Math.max(0, end - 5);
                    }
                    
                    return images.slice(start, end).map((img, idx) => {
                      const originalIndex = start + idx;
                      return (
                        <button
                          key={originalIndex}
                          onClick={() => setActiveImg(originalIndex)}
                          style={{
                            width: 48, height: 48, borderRadius: 8, overflow: 'hidden', padding: 0, cursor: 'pointer', flexShrink: 0,
                            border: originalIndex === activeImg ? '2px solid var(--accent-primary)' : '2px solid transparent',
                            opacity: originalIndex === activeImg ? 1 : 0.6,
                          }}
                        >
                          <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </button>
                      );
                    });
                  })()}
                </div>

                <button
                  onClick={() => setActiveImg(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                  style={{
                    width: 32, height: 48, borderRadius: 8, border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)'
                  }}
                >
                  ▶
                </button>
              </div>
            </>
          )}

          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 8 }}>
            Frame Style
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {FRAME_STYLES.map((style) => (
              <button
                key={style.id}
                onClick={() => setActiveFrame(style)}
                title={style.name}
                style={{
                  cursor: 'pointer',
                  padding: 8,
                  borderRadius: 10,
                  border: activeFrame.id === style.id ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 24,
                    borderRadius: 4,
                    border: style.border.replace(/^\d+px/, '6px'),
                    background: style.matte,
                    marginBottom: 6,
                  }}
                />
                <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>{style.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
