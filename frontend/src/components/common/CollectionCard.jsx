import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CollectionCard({ collection }) {
  return (
    <motion.div 
      initial="rest" 
      whileHover="hover" 
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -10 }
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{ display: 'block' }}
    >
      <Link
        to={`/collection/${collection.slug}`}
        className="card-gradient-glow"
        style={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 280, // Increased size for luxury feel
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        {/* Background Image with Cinematic Zoom Animation */}
        <motion.div
          variants={{
            rest: { scale: 1, filter: 'brightness(0.65)' },
            hover: { scale: 1.08, filter: 'brightness(0.9)' }
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${collection.cover_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Card Content Overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 'var(--space-xl)',
            minHeight: 280,
            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)'
          }}
        >
          <motion.span 
            variants={{
              rest: { y: 0, scale: 1 },
              hover: { y: -5, scale: 1.1 }
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            style={{ fontSize: '2.5rem', marginBottom: '12px', display: 'inline-block' }}
          >
            {collection.icon}
          </motion.span>
          <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.4rem', margin: '0 0 6px 0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            {collection.name}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', margin: 0, textShadow: '0 1px 5px rgba(0,0,0,0.5)', lineHeight: 1.5 }}>
            {collection.blurb}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
