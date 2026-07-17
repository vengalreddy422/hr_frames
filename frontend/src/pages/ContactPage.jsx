import React from 'react';
import HeaderNav from '../layouts/HeaderNav';
import Footer from '../components/common/Footer';
import ContactSection from '../components/common/ContactSection';

export default function ContactPage() {
  return (
    <>
      <HeaderNav />
      <div style={{ paddingTop: 'calc(var(--space-4xl) + 40px)' }}>
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
