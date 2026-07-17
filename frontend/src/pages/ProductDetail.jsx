import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderNav from '../layouts/HeaderNav';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';
import WhatsAppButton from '../components/common/WhatsAppButton';
import PRODUCTS from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(undefined); // undefined = loading, null = not found
  const [related, setRelated] = useState([]);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes_details?.[0] || null);
      setSelectedColor(foundProduct.colors?.[0] || null);
      setActiveImg(0);
      setRelated(PRODUCTS.filter(p => p.category_slug === foundProduct.category_slug && p.slug !== slug));
    } else {
      setProduct(null);
    }
  }, [slug]);

  if (product === null) return <Navigate to="/collections" replace />;

  return (
    <>
      <HeaderNav />

      <section className="container" style={{ paddingTop: 'calc(var(--space-4xl) + 60px)', paddingBottom: 'var(--space-3xl)' }}>
        {product === undefined ? (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading frame details…</p>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)' }}>
              {/* Gallery */}
              {/* Luxury Frame Showcase Gallery */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  paddingTop: '100%', 
                  overflow: 'hidden', 
                  background: 'radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-md)' 
                }}>
                  {/* Cinematic Spotlights */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '70%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)', zIndex: 0 }}></div>
                  <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 60%)', filter: 'blur(30px)', zIndex: 0 }}></div>

                  {/* The Massive Frame */}
                  <motion.div 
                    style={{ 
                      position: 'absolute',
                      top: '10%', left: '10%', right: '10%', bottom: '10%',
                      background: '#f8f8f8', /* Off-white matboard */
                      border: 'clamp(10px, 2.5vw, 20px) solid #151515', /* Black wooden frame */
                      borderRadius: '2px',
                      boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 2px 15px rgba(255,255,255,0.05)', /* Heavy cast shadow */
                      padding: '10%', /* Matboard width */
                      zIndex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '100%', boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.1)' }}>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeImg}
                          src={product.images?.[activeImg]?.url}
                          alt={product.name}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          whileHover={{ scale: 1.15 }} /* Image zoom on hover */
                          style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'zoom-in' }}
                        />
                      </AnimatePresence>
                      {/* Premium Glass Reflection */}
                      <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.08) 100%)', 
                        pointerEvents: 'none',
                        zIndex: 2
                      }}></div>
                    </div>
                  </motion.div>
                </div>

                {/* Thumbnails */}
                {product.images?.length > 1 && (
                  <div style={{ display: 'flex', gap: 12, marginTop: 10, overflowX: 'auto', paddingBottom: 8 }}>
                    {product.images.map((img, i) => (
                      <button
                        key={img.id}
                        onClick={() => setActiveImg(i)}
                        style={{
                          width: 80, height: 80, borderRadius: 12, overflow: 'hidden', padding: 0, cursor: 'pointer',
                          border: i === activeImg ? '2px solid var(--accent-warning)' : '2px solid transparent',
                          boxShadow: 'var(--shadow-sm)',
                          flexShrink: 0,
                          transition: 'all 0.3s'
                        }}
                      >
                        <img src={img.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: i === activeImg ? 1 : 0.6 }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-primary)' }}>
                  <Link to={`/collection/${product.category_slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {product.category_name}
                  </Link>
                </span>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: '8px 0' }}>{product.name}</h1>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-lg)', marginTop: 'var(--space-md)' }}>{product.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                  <InfoRow label="Material / Type" value={product.material} />
                  <InfoRow label="Ready Time" value={product.ready_time} />
                </div>

                {product.sizes_details?.length > 0 && (
                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <p className="eyebrow" style={{ marginBottom: 8 }}>Frame Size</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {product.sizes_details.map((s) => (
                        <button
                          key={s.label}
                          onClick={() => setSelectedSize(s)}
                          className={selectedSize?.label === s.label ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {product.colors?.length > 0 && (
                  <div style={{ marginBottom: 'var(--space-xl)' }}>
                    <p className="eyebrow" style={{ marginBottom: 8 }}>Frame Color</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {product.colors.map((c) => (
                        <button
                          key={c}
                          onClick={() => setSelectedColor(c)}
                          className={selectedColor === c ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <WhatsAppButton
                  product={`${product.name}${selectedColor ? ` (${selectedColor})` : ''}`}
                  size={selectedSize?.label}
                  collection={product.category_name}
                  label="Order This Frame on WhatsApp"
                  className="btn btn-gradient"
                  fullWidth
                />

                {product.customization && (
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: 10 }}>
                    Customization available: {product.customization}
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </section>

      {/* Related products from the same collection */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <h3 style={{ fontFamily: 'var(--font-display)', textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
              More from {product.category_name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-lg)' }}>
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

function InfoRow({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
      <div style={{ fontWeight: 600 }}>{value}</div>
    </div>
  );
}
