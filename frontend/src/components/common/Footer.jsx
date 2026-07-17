import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SITE from '../../config/site';
import COLLECTIONS from '../../config/collections';
import waLink from '../../utils/whatsapp';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer-luxury">
      <div className="footer-glow-backdrop"></div>

      <div className="container">
        <div className="footer-grid">

          {/* Column 1: Brand */}
          <div className="footer-brand-side">
            <Link to="/" className="footer-logo-wrapper">
              <img src="/logo.jpg" alt="HR Frames Logo" style={{ width: 56, height: 56, borderRadius: 12, objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.03em' }}>{SITE.name.toUpperCase()}</span>
            </Link>
            <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '260px', marginTop: 'var(--space-xs)', marginBottom: 0 }}>
              Premium custom photo frame studio in Nellore. We craft wedding frames, god frames, LED frames, and personalized gifts — delivered to your door.
            </p>
            <div className="footer-social-wrapper">
              {SITE.facebook && (
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              )}
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}><path d="M.057 24l1.687-6.163C.703 16.033.156 13.988.157 11.891.16 5.348 5.497.01 12.108.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h4 className="footer-heading">Our Collections</h4>
            <ul className="footer-links-list">
              {COLLECTIONS.slice(0, 6).map((c) => (
                <li className="footer-link-item" key={c.slug}>
                  <Link to={`/collection/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="footer-heading">Quick Info</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/sizes">Frame Sizes & Pricing</Link></li>
              <li className="footer-link-item"><Link to="/gallery">Studio Gallery</Link></li>
              <li className="footer-link-item"><Link to="/about">About Us</Link></li>
              <li className="footer-link-item"><Link to="/contact">Contact & Locations</Link></li>
              <li className="footer-link-item"><a href={waLink()} target="_blank" rel="noopener noreferrer">Order on WhatsApp</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-newsletter-wrapper">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="text-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 'var(--space-xs)', marginTop: 0 }}>
              Get notified about new frame designs, festival offers, and exclusive discounts.
            </p>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <div className="footer-input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-input"
                  placeholder="Your email address"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ padding: '0 16px' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '16px', height: '16px', display: 'block' }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </form>
            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  style={{ color: 'var(--accent-success)', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 600, marginTop: '6px' }}
                >
                  ✓ Subscribed! We'll send you our latest offers.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} {SITE.name} Nellore. All rights reserved. {SITE.tagline}.
          </span>
          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span>Delivery Policy</span>
            <span>Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
