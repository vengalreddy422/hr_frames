import React from 'react';
import HeaderNav from '../layouts/HeaderNav';
import Footer from '../components/common/Footer';
import AboutSection from '../components/common/AboutSection';

export default function AboutPage() {
  return (
    <>
      <HeaderNav />
      <div style={{ paddingTop: 'calc(var(--space-4xl) + 40px)' }}>
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}
