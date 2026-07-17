import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MasonryGallery({ items = [] }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="masonry-grid">
        {items.map((item, i) => {
          const borderStyles = ['12px', '30px 4px 30px 4px', '4px 30px 4px 30px', '24px 24px 4px 4px'];
          const isEven = i % 2 === 0;

          return (
            <motion.button
              key={item.id}
              className="masonry-item"
              initial={{ opacity: 0, y: 40, scale: 0.9, rotate: isEven ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.1, type: 'spring', bounce: 0.3 }}
              whileHover={{ scale: 1.04, rotate: isEven ? 1.5 : -1.5, zIndex: 10 }}
              onClick={() => setLightbox(item)}
              style={{ borderRadius: borderStyles[i % 4] }}
            >
              <img src={item.url} alt={item.title} loading="lazy" style={{ borderRadius: 'inherit' }} />
              <div className="masonry-caption" style={{ borderRadius: '0 0 inherit inherit' }}>
                <strong>{item.title}</strong>
                {item.caption && <small>{item.caption}</small>}
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.url}
              alt={lightbox.title}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .masonry-grid {
          columns: 4 280px;
          column-gap: var(--space-2xl);
        }
        .masonry-item {
          display: block;
          width: 100%;
          margin-bottom: var(--space-2xl);
          break-inside: avoid;
          border: none;
          padding: 0;
          background: none;
          cursor: pointer;
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-sm);
        }
        .masonry-item img {
          width: 100%;
          display: block;
          transition: transform 500ms var(--ease-out-quint);
        }
        .masonry-item:hover img {
          transform: scale(1.08);
        }
        .masonry-caption {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: var(--space-md);
          background: linear-gradient(0deg, rgba(0,0,0,0.75), transparent);
          color: #fff;
          text-align: left;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }
        .masonry-item:hover .masonry-caption { opacity: 1; }
        .masonry-caption strong { display: block; font-size: 0.85rem; }
        .masonry-caption small { font-size: 0.7rem; opacity: 0.8; }
        .lightbox-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(5,5,8,0.9);
          display: flex; align-items: center; justify-content: center;
          padding: var(--space-xl);
          backdrop-filter: blur(8px);
        }
        .lightbox-overlay img {
          max-width: 90vw; 
          max-height: 60vh; /* Reduced from 85vh to fit better */
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xl);
          object-fit: contain;
        }
      `}</style>
    </>
  );
}
