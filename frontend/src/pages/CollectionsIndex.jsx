import React from 'react';
import HeaderNav from '../layouts/HeaderNav';
import Footer from '../components/common/Footer';
import CollectionCard from '../components/common/CollectionCard';
import COLLECTIONS from '../data/collections';

export default function CollectionsIndex() {
  return (
    <>
      <HeaderNav />
      <section className="section" style={{ paddingTop: 'calc(var(--space-4xl) + 60px)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <span className="eyebrow">All Collections</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>Shop Every Collection</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '10px auto 0' }}>
              Twelve curated collections — from wedding portraits to festival gifting — each ready to be customized with your own photo.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
            {COLLECTIONS.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
