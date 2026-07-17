import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Home             = React.lazy(() => import('./pages/Home'));
const CollectionsIndex = React.lazy(() => import('./pages/CollectionsIndex'));
const CollectionPage   = React.lazy(() => import('./pages/CollectionPage'));
const ProductDetail    = React.lazy(() => import('./pages/ProductDetail'));
const SizesPage        = React.lazy(() => import('./pages/SizesPage'));
const GalleryPage      = React.lazy(() => import('./pages/GalleryPage'));
const AboutPage        = React.lazy(() => import('./pages/AboutPage'));
const ContactPage      = React.lazy(() => import('./pages/ContactPage'));
const AdminLogin       = React.lazy(() => import('./pages/AdminLogin'));
const AdminDashboard   = React.lazy(() => import('./pages/AdminDashboard'));

const LuxuryLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#030305',
    color: '#f5f5f7',
    fontFamily: 'sans-serif'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '2px solid rgba(255, 255, 255, 0.05)',
        borderTopColor: '#818cf8',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px'
      }} />
      <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8 }}>Loading HR Frames...</span>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

export default function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Suspense fallback={<LuxuryLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsIndex />} />
          <Route path="/collection/:slug" element={<CollectionPage />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/sizes" element={<SizesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Hidden admin entry */}
          <Route
            path="/admin/login"
            element={
              isAdminAuthenticated ? (
                <Navigate to="/admin/dashboard" replace />
              ) : (
                <AdminLogin onLoginSuccess={() => setIsAdminAuthenticated(true)} />
              )
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              isAdminAuthenticated ? (
                <AdminDashboard onLogout={() => setIsAdminAuthenticated(false)} />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
