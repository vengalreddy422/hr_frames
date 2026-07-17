import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

// Parse physical dimensions to calculate relative visual size on screen
function parseFrameStats(label) {
  // Support both '8x10' and '8×10' formats
  const match = label.match(/(\d+)\s*[xX×]\s*(\d+)/);
  
  // Default values for Custom Size or unrecognized formats
  if (!match) return { aspect: 1, heightPx: 90, widthPx: 90 }; 
  
  const w = Number(match[1]);
  const h = Number(match[2]);
  
  const maxSide = Math.max(w, h);
  const aspect = w / h; 
  
  // Map the longest physical side (e.g. 8 inches to 36 inches) 
  // to a visual pixel range (70px to 130px) for realistic UI scaling.
  const minSide = 8;
  const maxMaxSide = 36;
  const minPx = 70;
  const maxPx = 130;
  
  let clampedSide = Math.max(minSide, Math.min(maxMaxSide, maxSide));
  let maxDimensionPx = minPx + ((clampedSide - minSide) / (maxMaxSide - minSide)) * (maxPx - minPx);
  
  let widthPx, heightPx;
  if (h > w) {
    // Portrait
    heightPx = maxDimensionPx;
    widthPx = maxDimensionPx * aspect;
  } else {
    // Landscape or Square
    widthPx = maxDimensionPx;
    heightPx = maxDimensionPx / aspect;
  }
  
  return { aspect, widthPx, heightPx };
}

export default function SizeCard({ size, index }) {
  const { widthPx, heightPx, aspect } = parseFrameStats(size.label);
  const isCustom = size.label === 'Custom Size';

  return (
    <motion.div
      className="card-apple"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -8, rotate: -0.3 }}
      style={{ textAlign: 'center', padding: 'var(--space-xl) var(--space-lg)' }}
    >
      {/* Frame Icon Container (fixed height so card layout doesn't break) */}
      <div style={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-md)' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: widthPx,
            height: heightPx,
            background: isCustom ? 'var(--gradient-aurora)' : '#f8f8f8',
            border: isCustom ? '4px solid #fff' : '8px ridge #c5a059',
            borderRadius: 2,
            boxShadow: '4px 4px 15px rgba(0,0,0,0.4), inset 2px 2px 6px rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.3s ease'
          }}
        >
          {isCustom ? (
            <span style={{ fontSize: '1.8rem' }}>📐</span>
          ) : (
            <div style={{
              position: 'absolute',
              inset: Math.max(4, widthPx * 0.08), // Inner border scales slightly with frame size
              background: '#ffffff',
              boxShadow: 'inset 1px 1px 4px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '60%',
                height: '60%',
                background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
                boxShadow: '1px 1px 3px rgba(0,0,0,0.1)',
                borderRadius: 1
              }} />
            </div>
          )}
        </motion.div>
      </div>
      
      <span
        style={{
          display: 'inline-block',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--accent-primary)',
          background: 'var(--interactive-hover)',
          padding: '2px 10px',
          borderRadius: 'var(--radius-full)',
          marginBottom: 8,
        }}
      >
        {size.tag}
      </span>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', margin: '4px 0 6px' }}>{size.label}</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
        {isCustom ? 'Tell us your dimensions' : 'Standard Frame Size'}
      </p>
      <WhatsAppButton
        size={size.label}
        label={isCustom ? 'Request Custom Size' : 'Enquire Now'}
        className="btn btn-secondary btn-sm"
        fullWidth
      />
    </motion.div>
  );
}
