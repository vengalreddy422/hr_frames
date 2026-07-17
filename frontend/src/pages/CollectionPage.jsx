import React, { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import HeaderNav from '../layouts/HeaderNav';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';
import COLLECTIONS from '../data/collections';
import PRODUCTS from '../data/products';
import CustomFrameBuilder from '../components/gallery/CustomFrameBuilder';

export default function CollectionPage() {
  const { slug } = useParams();
  const collection = COLLECTIONS.find((c) => c.slug === slug);
  const products = PRODUCTS.filter((p) => p.category_slug === slug);
  
  const [materialFilter, setMaterialFilter] = useState('ALL');
  const [sort, setSort] = useState('default');

  const materials = useMemo(() => {
    const set = new Set(products.map((p) => p.material).filter(Boolean));
    return ['ALL', ...set];
  }, [products]);

  const visible = useMemo(() => {
    let list = materialFilter === 'ALL' ? products : products.filter((p) => p.material === materialFilter);
    if (sort === 'name-asc') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'name-desc') list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [products, materialFilter, sort]);

  if (!collection) return <Navigate to="/collections" replace />;

  return (
    <>
      <HeaderNav />

      {/* Collection banner */}
      <section className="section" style={{ paddingTop: 'calc(var(--space-4xl) + 60px)', paddingBottom: 'var(--space-xl)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '2.2rem' }}>{collection.icon}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', margin: '8px 0' }}>{collection.name}</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto' }}>{collection.blurb}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="container" style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-xl)' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setMaterialFilter(m)}
              className={materialFilter === m ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
            >
              {m === 'ALL' ? 'All Materials' : m}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{ padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
        >
          <option value="default">Sort: Featured</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </section>

      {/* Product grid or Custom Builder */}
      {slug === 'customized-frames' ? (
        <CustomFrameBuilder />
      ) : (
        <section className="container" style={{ paddingBottom: 'var(--space-3xl)' }}>
          {visible.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                No frames uploaded in this collection yet — message us and we'll design one for you.
              </p>
              <Link to="/collections" className="btn btn-secondary">Browse Other Collections</Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
              {visible.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Other collections */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h3 style={{ fontFamily: 'var(--font-display)', textAlign: 'center', marginBottom: 'var(--space-lg)' }}>Explore More Collections</h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {COLLECTIONS.filter((c) => c.slug !== collection.slug).slice(0, 6).map((c) => (
              <Link key={c.slug} to={`/collection/${c.slug}`} className="btn btn-secondary btn-sm" style={{ textDecoration: 'none' }}>
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
