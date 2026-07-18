import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeaderNav from '../layouts/HeaderNav';
import Footer from '../components/common/Footer';
import PromoVideoSection from '../components/common/PromoVideoSection';
import AboutSection from '../components/common/AboutSection';
import ContactSection from '../components/common/ContactSection';
import ReviewSection from '../components/common/ReviewSection';
import CollectionCard from '../components/common/CollectionCard';
import ProductCard from '../components/common/ProductCard';
import SizeCard from '../components/common/SizeCard';
import WhatsAppButton from '../components/common/WhatsAppButton';
import COLLECTIONS from '../data/collections';
import FRAME_SIZES from '../data/sizes';
import SITE from '../data/site';
import HERO_DATA from '../data/hero';
import { FEATURED_PRODUCTS } from '../data/products';

export default function Home() {
  return (
    <>
      <HeaderNav />

      {/* HERO */}
      <section id="home" style={{ 
        position: 'relative', 
        minHeight: 'max(90vh, 700px)', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '80px',
        background: 'var(--bg-primary)',
        overflow: 'hidden'
      }}>
        {/* Cinematic Lighting Background */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.08) 0%, rgba(0,0,0,0) 60%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(0,0,0,0) 60%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 'var(--space-4xl)', 
            alignItems: 'center',
            height: '100%'
          }} className="hero-grid">
            
            {/* Left: Typography & CTA */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ paddingTop: 'var(--space-2xl)' }}
            >
              <motion.span 
                className="eyebrow" 
                style={{ color: 'var(--accent-warning)', letterSpacing: '0.2em', fontSize: '0.85rem', fontWeight: 700, display: 'inline-block', marginBottom: 'var(--space-md)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                THE ART OF FRAMING
              </motion.span>
              
              <h1 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: 'clamp(3rem, 5vw, 5.5rem)', 
                fontWeight: 800, 
                letterSpacing: '-0.04em', 
                lineHeight: 1.05,
                margin: '0 0 var(--space-lg) 0'
              }}>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ color: 'var(--accent-warning)', display: 'inline-block', marginRight: '0.25em' }}
                >
                  HR
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ color: 'var(--text-primary)', display: 'inline-block', marginRight: '0.25em' }}
                >
                  FRAMES
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ 
                    background: 'var(--gradient-ocean)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  NELLORE
                </motion.span>
              </h1>

              <motion.p 
                style={{ 
                  color: 'var(--text-secondary)', 
                  fontFamily: 'var(--font-body)', 
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', 
                  lineHeight: 1.7, 
                  maxWidth: 500,
                  margin: '0 0 var(--space-2xl) 0'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Discover our exclusive collection of handcrafted photo frames designed to elevate your home décor and preserve your most precious moments.
              </motion.p>

              <motion.div 
                style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to="/collections" className="btn btn-gradient btn-lg">
                  Explore Collections
                </Link>
                <a href="#promo-video" className="btn btn-glass btn-lg">
                  Watch Video
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Floating Luxury Frame Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              {/* Continuous floating animation */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '460px',
                  aspectRatio: '3/4',
                  background: '#111', /* Black Frame */
                  padding: '16px', /* Frame Thickness */
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-xl), 0 60px 100px -20px rgba(0,0,0,0.8)',
                  transform: 'perspective(1000px) rotateY(-8deg) rotateX(4deg)'
                }}
              >
                {/* Matboard */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: '#f8f9fa',
                  padding: '12%', /* Matboard Width */
                  boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.3)',
                  position: 'relative'
                }}>
                  {/* Artwork Image */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}>
                    <img 
                      src="/collection-custom.jpg" 
                      alt="Premium Framed Artwork" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop' }}
                    />
                    {/* Glass Reflection */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.1) 100%)',
                      pointerEvents: 'none'
                    }}></div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements behind frame */}
              <div style={{
                position: 'absolute',
                top: '5%',
                right: '5%',
                width: '150px',
                height: '150px',
                background: 'var(--accent-warning)',
                filter: 'blur(100px)',
                opacity: 0.2,
                zIndex: -1
              }}></div>
            </motion.div>

          </div>
        </div>

        {/* Global CSS for Grid Responsiveness */}
        <style>{`
          @media (max-width: 992px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              text-align: center;
              padding-bottom: var(--space-4xl);
            }
            .hero-grid > div:first-child {
              padding-top: var(--space-4xl) !important;
            }
            .hero-grid p {
              margin: 0 auto var(--space-2xl) auto !important;
            }
            .hero-grid .btn-gradient, .hero-grid .btn-glass {
              margin: 0 auto;
            }
            .hero-grid > div:last-child {
              margin-top: var(--space-2xl);
            }
          }
        `}</style>
      </section>

      {/* PROMO VIDEO */}
      <PromoVideoSection />

      {/* COLLECTIONS */}
      <section id="collections" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <span className="eyebrow">Shop by Collection</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Our Collections</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
            {COLLECTIONS.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {FEATURED_PRODUCTS.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
              <span className="eyebrow">Handpicked</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Featured Frames</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
              {FEATURED_PRODUCTS.slice(0, 8).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SIZES PREVIEW */}
      <section id="pricing" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <span className="eyebrow">Frame Sizes</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Choose Your Size</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-lg)' }}>
            {FRAME_SIZES.slice(0, 6).map((s, i) => (
              <SizeCard key={s.label} size={s} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/sizes" className="btn btn-secondary">View All Sizes</Link>
          </div>
        </div>
      </section>

      <ReviewSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
