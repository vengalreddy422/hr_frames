import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// HR Frames Nellore — Photo Frame Studio Milestones
const MILESTONES = [
  {
    year: "2012",
    title: "Studio Founded",
    desc: "HR Frames Nellore opens its first photo frame studio on Trunk Road, starting with handcrafted wooden and acrylic frames for local families."
  },
  {
    year: "2016",
    title: "God Frame Collection",
    desc: "We launch our signature spiritual collection — temple-quality Krishna, Shiva, Ganesh, and Ayyappa frames with premium gold border finishes."
  },
  {
    year: "2020",
    title: "LED Frame Innovation",
    desc: "Introducing illuminated LED photo frames and acrylic standees. Our glow-border wedding frames become the most gifted item in Nellore."
  },
  {
    year: "2024",
    title: "WhatsApp Delivery Model",
    desc: "Customers across Andhra Pradesh send photos on WhatsApp. We design, print, and deliver premium custom frames within 24–48 hours."
  }
];

function useCounter(target, duration = 1500, enabled = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let start = 0;
    const end = parseFloat(target);
    const stepTime = Math.abs(Math.floor(duration / 60));
    const increment = end / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration, enabled]);
  return count;
}

export default function AboutSection() {
  const [countersEnabled, setCountersEnabled] = useState(false);
  const countersTriggerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCountersEnabled(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (countersTriggerRef.current) observer.observe(countersTriggerRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const yearsVal   = useCounter(12,   1500, countersEnabled);
  const framesVal  = useCounter(50000, 2000, countersEnabled);
  const designsVal = useCounter(300,  1500, countersEnabled);

  return (
    <section ref={containerRef} className="section">
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <span className="eyebrow text-gradient">Our Story</span>
          <h2 className="text-h1" style={{ margin: '8px 0 16px' }}>Nellore's Trusted Frame Studio</h2>
          <p className="text-body-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Over a decade of crafting memories into premium photo frames — from wedding portraits to sacred god frames, each piece is made with love.
          </p>
        </div>

        <div className="about-split-layout">

          {/* LEFT: Stats + Workshop Visual */}
          <div ref={countersTriggerRef}>
            <div className="about-video-showcase">
              {/* Workshop showcase gradient visual — replace with real video when available */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg viewBox="0 0 200 160" style={{ width: '120px', opacity: 0.4, fill: 'none', stroke: '#818cf8', strokeWidth: 1.5 }}>
                  <rect x="20" y="20" width="160" height="120" rx="8"/>
                  <rect x="30" y="30" width="140" height="100" rx="4"/>
                  <circle cx="100" cy="80" r="25"/>
                  <rect x="85" y="65" width="30" height="30" rx="2" stroke="#fbbf24"/>
                </svg>
              </div>
              <div className="about-video-gradient-mask"></div>
              <div className="about-video-content-box">
                <span className="text-caps" style={{ color: 'var(--accent-secondary)', fontSize: '0.75rem' }}>Our Workshop</span>
                <h3 className="text-h3" style={{ color: '#fff', marginTop: '4px', marginBottom: '8px' }}>Handcrafted with Precision</h3>
                <p className="text-small" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, margin: 0 }}>
                  Every frame is crafted in our Nellore studio — cut, printed, assembled, and quality-checked before delivery.
                </p>
              </div>
            </div>

            {/* Stats Counters */}
            <div className="about-counters-matrix">
              <div className="about-counter-panel">
                <div className="about-counter-num">{Math.floor(yearsVal)}+</div>
                <div className="about-counter-lbl">Years in Nellore</div>
              </div>
              <div className="about-counter-panel">
                <div className="about-counter-num">{Math.floor(framesVal / 1000)}K+</div>
                <div className="about-counter-lbl">Frames Delivered</div>
              </div>
              <div className="about-counter-panel">
                <div className="about-counter-num">{Math.floor(designsVal)}+</div>
                <div className="about-counter-lbl">Frame Designs</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Timeline */}
          <div style={{ paddingTop: '8px' }}>
            <h3 className="text-h3" style={{ marginBottom: 'var(--space-md)', borderLeft: '3px solid var(--accent-primary)', paddingLeft: 'var(--space-xs)' }}>
              Our Journey
            </h3>

            <div className="about-timeline-container">
              <div className="about-timeline-line-bar"></div>
              <motion.div className="about-timeline-fill-bar" style={{ height: lineHeight }} />

              {MILESTONES.map((stone, idx) => (
                <TimelineItem
                  key={idx}
                  stone={stone}
                  index={idx}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ stone, index, scrollYProgress }) {
  const [active, setActive] = useState(index === 0);

  useEffect(() => {
    const threshold = (index + 0.5) / MILESTONES.length;
    return scrollYProgress.on("change", (latest) => {
      if (latest > threshold) setActive(true);
      else if (index > 0) setActive(false);
    });
  }, [index, scrollYProgress]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`about-timeline-milestone ${active ? 'active' : ''}`}
    >
      <div className="about-timeline-bullet-point" />
      <div className="about-timeline-info-panel">
        <div className="about-timeline-year-tag">{stone.year}</div>
        <h4 className="about-timeline-title">{stone.title}</h4>
        <p className="about-timeline-body">{stone.desc}</p>
      </div>
    </motion.div>
  );
}
