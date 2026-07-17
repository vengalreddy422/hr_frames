import React from 'react';
import { motion } from 'framer-motion';
import SITE from '../../config/site';

// HR Frames Nellore — Two branch locations
const BRANCHES = [
  {
    id: 1,
    name: "Trunk Road Studio",
    tag: "Main Store",
    address: "D.No.23-7-65, Beside KLM Shopping Mall, Rayaji Street, Trunk Road, Nellore-524001, Andhra Pradesh",
    hours: "9:00 AM – 9:00 PM (Daily)",
    phone: "+91 95735 00194",
    mapUrl: "https://maps.google.com/?q=KLM+Shopping+Mall,+Trunk+Road,+Nellore"
  },
  {
    id: 2,
    name: "Stonehousepeta Studio",
    tag: "Branch Store",
    address: "hdfc Road, Near Rtc bus Stand, Nellore, Andhra Pradesh — 524002.",
    hours: "10:00 AM – 9:30 PM (Daily)",
    phone: "+91 95735 00194",
    mapUrl: "https://maps.google.com/?q=RTC+Bus+Stand,+Stonehousepeta,+Nellore"
  }
];

const WHATSAPP_NUMBER = SITE.whatsappNumber;
const WHATSAPP_DEFAULT_MSG = `Hello ${SITE.name} Nellore! I'd like to order a custom photo frame.`;

export default function ContactSection() {
  const openWhatsApp = (msg = WHATSAPP_DEFAULT_MSG) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handlePhoneClick = (e, phone) => {
    // If the user is on a desktop/laptop, clicking 'tel:' often fails. 
    // We copy the number to clipboard and alert them instead.
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      e.preventDefault();
      navigator.clipboard.writeText(phone);
      alert(`Phone number ${phone} copied to clipboard! You can paste it in your phone.`);
    }
  };

  return (
    <section className="section">
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <span className="eyebrow text-gradient">Reach Us</span>
          <h2 className="text-h1" style={{ margin: '8px 0 16px' }}>Contact & Branches</h2>
          <p className="text-body-large" style={{ maxWidth: '560px', margin: '0 auto' }}>
            Visit our Nellore studios or simply send your photo on WhatsApp — we'll design and deliver your custom frame.
          </p>
        </div>

        <div className="contact-split-layout">

          {/* LEFT: Contact Options & Branches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quick Contact Cards */}
            <div className="contact-cards-grid">

              {/* WhatsApp — Primary CTA */}
              <div
                onClick={() => openWhatsApp()}
                className="contact-info-card"
                style={{ cursor: 'pointer' }}
              >
                <div className="contact-card-icon-circle" style={{ color: '#25D366' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163C.703 16.033.156 13.988.157 11.891.16 5.348 5.497.01 12.108.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.019 14.113 1.01 11.5 1.01c-5.436 0-9.86 4.37-9.864 9.8 0 1.639.428 3.24 1.24 4.675l-1.02 3.721 3.82-1.002z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">Order on WhatsApp</div>
                  <div className="contact-card-value">+91 95735 00194</div>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+919573500194" onClick={(e) => handlePhoneClick(e, "+91 95735 00194")} className="contact-info-card" style={{ textDecoration: 'none' }}>
                <div className="contact-card-icon-circle" style={{ color: 'var(--accent-primary)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">Call the Studio</div>
                  <div className="contact-card-value">+91 95735 00194</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:orders@hrframes.in" className="contact-info-card" style={{ textDecoration: 'none' }}>
                <div className="contact-card-icon-circle" style={{ color: 'var(--accent-secondary)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">Email Orders</div>
                  <div className="contact-card-value">orders@hrframes.in</div>
                </div>
              </a>

            </div>

            {/* Branch Cards */}
            <h3 className="text-h3" style={{ marginBottom: 'var(--space-sm)', fontSize: '1.125rem' }}>
              Our Nellore Studios
            </h3>
            <div className="contact-branches-grid">
              {BRANCHES.map(branch => (
                <div key={branch.id} className="contact-branch-card">
                  <div className="contact-branch-header">
                    <span>{branch.name}</span>
                    <span className="text-caps" style={{
                      color: branch.id === 1 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                      fontSize: '0.6875rem'
                    }}>
                      {branch.tag}
                    </span>
                  </div>
                  <p className="contact-branch-address">{branch.address}</p>
                  <div className="contact-branch-hours">{branch.hours}</div>
                  <div style={{ display: 'flex', gap: 'var(--space-xs)', marginTop: 'var(--space-sm)', flexWrap: 'wrap' }}>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-glass btn-sm"
                      style={{ textDecoration: 'none', fontSize: '0.75rem' }}
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      onClick={(e) => handlePhoneClick(e, branch.phone)}
                      className="btn btn-secondary btn-sm"
                      style={{ textDecoration: 'none', fontSize: '0.75rem' }}
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-map-wrapper"
          >
            <iframe
              title="HR Frames Nellore Studio Locations"
              className="contact-map-iframe"
              src="https://maps.google.com/maps?q=KLM%20Shopping%20Mall,%20Trunk%20Road,%20Nellore&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* WhatsApp floating action below map */}
            <div style={{ marginTop: 'var(--space-md)', textAlign: 'center' }}>
              <button
                onClick={() => openWhatsApp()}
                className="btn btn-gradient"
                style={{ width: '100%' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px', display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}>
                  <path d="M.057 24l1.687-6.163C.703 16.033.156 13.988.157 11.891.16 5.348 5.497.01 12.108.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24z"/>
                </svg>
                Send Photo on WhatsApp & Order Now
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
