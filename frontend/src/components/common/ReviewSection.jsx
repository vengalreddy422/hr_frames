import React from 'react';
import { motion } from 'framer-motion';
import REVIEWS from '../../data/reviews';

export default function ReviewSection() {
  if (!REVIEWS.length) return null;

  return (
    <section id="reviews" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <span className="eyebrow">Customer Love</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            What Our Customers Say
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.id}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <div
                  style={{
                    width: 42, height: 42, borderRadius: '50%', background: 'var(--gradient-aurora)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem',
                  }}
                >
                  {r.initials || r.customer_name?.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{r.customer_name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{r.product_type}</div>
                </div>
              </div>
              <div style={{ color: 'var(--accent-warning)', marginBottom: 8, fontSize: '0.85rem' }}>
                {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{r.review_text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
