import React from 'react';
import HeaderNav from '../layouts/HeaderNav';
import Footer from '../components/common/Footer';
import SizeCard from '../components/common/SizeCard';
import FRAME_SIZES from '../config/sizes';

export default function SizesPage() {
  return (
    <>
      <HeaderNav />
      <section className="section" style={{ paddingTop: 'calc(var(--space-4xl) + 60px)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <span className="eyebrow">Frame Sizes</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>Pick Your Perfect Size</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '10px auto 0' }}>
              Every size below is available across all collections. Not sure what fits your wall? Send us a photo of the space on WhatsApp and we'll recommend one.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-lg)' }}>
            {FRAME_SIZES.map((s, i) => (
              <SizeCard key={s.label} size={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
