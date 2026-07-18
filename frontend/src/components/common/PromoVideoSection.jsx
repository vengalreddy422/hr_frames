import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import '../../styles/components/promo-video.css';
export default function PromoVideoSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Play at 0.75x speed
    }
  }, []);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };
  return (
    <section className="section" style={{ padding: '0 0 var(--space-3xl) 0' }}>
      <div className="container">
        <div className="promo-video-wrapper">
          
          {/* Left Side: Text and Order Button */}
          <div className="promo-video-content">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1, margin: 0 }}
            >
              All Frames Available
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', margin: '0 0 var(--space-md) 0' }}
            >
              Premium Custom Framing • Fast Door Delivery in Nellore
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <WhatsAppButton label="Order Now" className="btn btn-gradient" />
            </motion.div>
          </div>

          {/* Right Side: Video */}
          <div className="promo-video-container">
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted={isMuted} 
              playsInline 
              className="promo-video-element"
            >
              <source src="/promo.mp4" type="video/mp4" />
            </video>
            
            {/* Sound Toggle Button */}
            <button 
              onClick={toggleSound}
              className="promo-video-mute-btn"
              title={isMuted ? "Unmute Video" : "Mute Video"}
            >
              {isMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              )}
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
