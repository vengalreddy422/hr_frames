import React from 'react';
import HeaderNav from '../layouts/HeaderNav';
import Footer from '../components/common/Footer';
import MasonryGallery from '../components/common/MasonryGallery';
import FrameVisualizer from '../components/gallery/FrameVisualizer';
import GALLERY_ITEMS from '../data/gallery';

export default function GalleryPage() {
  const visualizerImages = GALLERY_ITEMS.map((i) => i.url);

  return (
    <>
      <HeaderNav />

      <section className="section" style={{ paddingTop: 'calc(var(--space-4xl) + 60px)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <span className="eyebrow">Studio Gallery</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>From Our Studio Floor</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '10px auto 0' }}>
              A look at recent work — updated by our team as new frames are finished.
            </p>
          </div>

          <MasonryGallery items={GALLERY_ITEMS} />
        </div>
      </section>

      {visualizerImages.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <FrameVisualizer images={visualizerImages} />
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
