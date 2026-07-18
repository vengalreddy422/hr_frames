import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import COLLECTIONS from '../config/collections';
import WhatsAppButton from '../components/common/WhatsAppButton';
import './HeaderNav.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Frame Sizes', to: '/sizes' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Custom Frames', to: '/collection/customized-frames' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={`nav-luxury ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container flex-between" style={{ height: '100%' }}>
        {/* Brand */}
        <Link to="/" className="nav-brand">
          <img src="/logo.jpg" alt="HR Frames Logo" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              HR FRAMES
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 500, color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Nellore
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav>
          <ul className="nav-menu">
            {NAV_LINKS.map((link) => (
              <li
                key={link.to}
                className="nav-item"
              >
                <Link
                  to={link.to}
                  className={`nav-link ${location.pathname === link.to ? 'active-link' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <Link to="/admin/login" className="nav-link" style={{ fontWeight: 600, color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>
                Admin
              </Link>
            </li>

            <li className="nav-item">
              <WhatsAppButton label="Order Now" className="btn btn-gradient btn-sm" />
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`nav-hamburger ${isMobileOpen ? 'active' : ''}`}
          aria-label="Toggle Navigation Menu"
        >
          <span></span><span></span><span></span>
        </button>

        {/* Mobile drawer */}
        <div className={`nav-mobile-overlay ${isMobileOpen ? 'active' : ''}`}>
          <ul className="nav-mobile-menu">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="nav-mobile-link">{link.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/admin/login" className="nav-mobile-link" style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                Admin Login
              </Link>
            </li>
            <li style={{ marginTop: 'var(--space-md)' }}>
              <WhatsAppButton label="Order on WhatsApp" className="btn btn-gradient" fullWidth />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
