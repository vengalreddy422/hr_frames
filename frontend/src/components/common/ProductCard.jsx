import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

export default function ProductCard({ product }) {
  const cover = product.images?.find((i) => i.is_cover) || product.images?.[0];
  const smallestSize = product.sizes_details?.[0];

  return (
    <motion.div
      className="card-apple"
      style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <Link to={`/product/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative', width: '100%', paddingTop: '100%', overflow: 'hidden', background: 'radial-gradient(circle, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}>
          
          {/* Wall light cast */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)', zIndex: 0 }}></div>

          {/* The Frame Container */}
          <motion.div 
            style={{ 
              position: 'absolute',
              top: '12%', left: '12%', right: '12%', bottom: '12%',
              background: '#f8f8f8', /* Off-white matboard */
              border: 'clamp(8px, 2vw, 14px) solid #151515', /* Black wooden frame */
              borderRadius: '2px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6), inset 0 2px 10px rgba(255,255,255,0.05)', /* Cast shadow on the wall */
              padding: '8%', /* Matboard width */
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%', boxShadow: 'inset 0 3px 8px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.1)' /* Inner shadow from matboard */ }}>
              <img
                src={cover?.url}
                alt={cover?.alt_text || product.name}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Glass Reflection */}
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.05) 100%)', 
                pointerEvents: 'none'
              }}></div>
            </div>
          </motion.div>
        </div>
        <div style={{ padding: 'var(--space-lg)' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-primary)', fontWeight: 700 }}>
            {product.category_name}
          </span>
          <h3 style={{ margin: '6px 0 4px', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>{product.name}</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0 0 10px', lineHeight: 1.4 }}>
            {product.material} {smallestSize ? `· ${smallestSize.label}` : ''}
          </p>
        </div>
      </Link>
      <div style={{ padding: '0 var(--space-lg) var(--space-lg)' }}>
        <WhatsAppButton
          product={product.name}
          size={smallestSize?.label}
          collection={product.category_name}
          label="Order Now"
          className="btn btn-gradient btn-sm"
          fullWidth
        />
      </div>
    </motion.div>
  );
}
