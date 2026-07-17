import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock inventory data
const INITIAL_PRODUCTS = [
  { id: 1, name: "HR Monarch", brand: "HR Frames", category: "Wedding", sku: "HR-MON-GLD-M", size: "M", price: "₹4,999", stock: 12, status: "Active" },
  { id: 2, name: "Zeiss Focus", brand: "Zeiss Active", category: "Nature", sku: "ZEI-FOC-SLV-L", size: "L", price: "₹6,499", stock: 8, status: "Active" },
  { id: 3, name: "Bio Craft", brand: "HR Eco", category: "Festival", sku: "BIO-CRT-BRN-S", size: "S", price: "₹3,799", stock: 15, status: "Active" },
  { id: 4, name: "Baby Spec", brand: "HR Junior", category: "Baby", sku: "BAB-SPC-BLU-S", size: "S", price: "₹2,499", stock: 3, status: "Low Stock" },
  { id: 5, name: "Royal Vista", brand: "HR Gold", category: "God", sku: "ROY-VIS-GLD-M", size: "M", price: "₹8,999", stock: 0, status: "Out of Stock" }
];

export default function AdminDashboard({ onLogout }) {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Custom states for adding variant modal
  const [showModal, setShowModal] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdSku, setNewProdSku] = useState('');
  const [newProdPrice, setNewProdPrice] = useState('');
  const [newProdStock, setNewProdStock] = useState('');
  const [newProdCategory, setNewProdCategory] = useState('Wedding');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProdName && newProdSku) {
      const newProduct = {
        id: products.length + 1,
        name: newProdName,
        brand: "HR Custom",
        category: newProdCategory,
        sku: newProdSku.toUpperCase(),
        size: "M",
        price: `₹${parseFloat(newProdPrice).toLocaleString()}`,
        stock: parseInt(newProdStock) || 0,
        status: parseInt(newProdStock) > 0 ? "Active" : "Out of Stock"
      };
      setProducts([newProduct, ...products]);
      setShowModal(false);
      // Reset inputs
      setNewProdName('');
      setNewProdSku('');
      setNewProdPrice('');
      setNewProdStock('');
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Framer Motion Stagger Variants
  const tableContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const tableRowVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.3 } }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      display: 'flex',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }}>
      
      {/* 1. SIDEBAR NAVIGATION - Slides in from left */}
      <motion.aside 
        initial={{ x: -280, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 22, stiffness: 120 }}
        style={{
          width: '260px',
          borderRight: '1px solid var(--glass-border)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--space-lg)',
          zIndex: 10
        }}
      >
        {/* Sidebar Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-2xl)' }}>
          <svg style={{ width: '36px', height: 'auto', stroke: 'var(--accent-primary)', fill: 'none', strokeWidth: 2.2 }} viewBox="0 0 200 100">
            <path d="M 25,50 C 15,35 45,15 55,45 C 57,55 52,68 40,70 C 25,72 15,62 25,50 Z" />
            <path d="M 175,50 C 185,35 155,15 145,45 C 143,55 148,68 160,70 C 175,72 185,62 175,50 Z" />
            <path d="M 55,40 Q 100,32 145,40" />
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>HR ADMIN</span>
        </div>

        {/* Navigation List Items with Shared Layout Highlighter */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
          {['dashboard', 'catalog', 'bookings'].map((tab) => {
            const isTabActive = activeTab === tab;
            return (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="btn" 
                style={{ 
                  width: '100%', 
                  justifyContent: 'flex-start', 
                  padding: '12px 16px', 
                  position: 'relative',
                  background: 'transparent',
                  border: 'none',
                  color: isTabActive ? '#fff' : 'var(--text-secondary)'
                }}
              >
                <span style={{ zIndex: 2, position: 'relative', textTransform: 'capitalize' }}>
                  {tab === 'catalog' ? 'Product Catalog' : tab}
                </span>
                {isTabActive && (
                  <motion.span
                    layoutId="activeTabPill"
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: 'var(--accent-primary)',
                      borderRadius: 'var(--radius-md)',
                      zIndex: 1
                    }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Logout Control Trigger */}
        <button 
          onClick={onLogout}
          className="btn btn-secondary" 
          style={{ width: '100%', padding: '12px 16px', marginTop: 'auto' }}
        >
          Sign Out
        </button>
      </motion.aside>

      {/* 2. MAIN WORKSPACE CONTENT - Fades in */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ flexGrow: 1, padding: 'var(--space-xl)', overflowY: 'auto' }}
      >
        
        {/* Workspace Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
              {activeTab === 'dashboard' ? 'Analytics Overview' : activeTab === 'catalog' ? 'Inventory Catalog' : 'Optics Bookings'}
            </h1>
            <p className="text-small" style={{ color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Welcome back, Studio Director</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="text-caps" style={{ background: 'var(--interactive-hover)', padding: '6px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.6875rem' }}>
              Nellore Branch • Active
            </span>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            {/* A. STATISTICS CARDS MATRIX */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: 'var(--space-xl)' }}>
              
              {/* Sales Card */}
              <motion.div whileHover={{ y: -3 }} className="about-counter-panel" style={{ padding: 'var(--space-md)', textAlign: 'left' }}>
                <span className="text-caps" style={{ fontSize: '0.6875rem' }}>Total Sales</span>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, margin: '6px 0', color: 'var(--accent-secondary)' }}>₹1,84,500</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-success)' }}>+12.4% vs last week</div>
              </motion.div>

              {/* Fittings Card */}
              <motion.div whileHover={{ y: -3 }} className="about-counter-panel" style={{ padding: 'var(--space-md)', textAlign: 'left' }}>
                <span className="text-caps" style={{ fontSize: '0.6875rem' }}>Fittings Logged</span>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, margin: '6px 0', color: 'var(--accent-primary)' }}>1,240</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>99.8% precision ratings</div>
              </motion.div>

              {/* Bookings Card */}
              <motion.div whileHover={{ y: -3 }} className="about-counter-panel" style={{ padding: 'var(--space-md)', textAlign: 'left' }}>
                <span className="text-caps" style={{ fontSize: '0.6875rem' }}>WhatsApp Inquiries</span>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, margin: '6px 0', color: 'var(--accent-primary)' }}>42</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-error)' }}>15 consultations pending</div>
              </motion.div>

              {/* Materials Card */}
              <motion.div whileHover={{ y: -3 }} className="about-counter-panel" style={{ padding: 'var(--space-md)', textAlign: 'left' }}>
                <span className="text-caps" style={{ fontSize: '0.6875rem' }}>Stock Turnover</span>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, margin: '6px 0', color: 'var(--accent-secondary)' }}>88%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-success)' }}>Bio-Acetate leads</div>
              </motion.div>

            </div>

            {/* B. ANALYTICS CHARTS GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', marginBottom: 'var(--space-xl)' }}>
              
              {/* Chart 1: SVG Trend Line Chart */}
              <div className="about-counter-panel" style={{ padding: 'var(--space-md)' }}>
                <h3 class="text-h3" style={{ fontSize: '1rem', marginBottom: 'var(--space-md)' }}>Fittings Diagnostics Performance</h3>
                <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                  <svg style={{ width: '100%', height: '100%' }}>
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.25"/>
                        <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.0"/>
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="50" x2="100%" y2="50" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" y1="100" x2="100%" y2="100" stroke="rgba(255,255,255,0.05)" />
                    <line x1="0" y1="150" x2="100%" y2="150" stroke="rgba(255,255,255,0.05)" />
                    <path d="M 0,160 Q 100,80 200,120 T 400,60 T 600,30 L 600,200 L 0,200 Z" fill="url(#chartGrad)" />
                    <path d="M 0,160 Q 100,80 200,120 T 400,60 T 600,30" fill="none" stroke="var(--accent-primary)" strokeWidth="3" />
                    <circle cx="200" cy="120" r="5" fill="var(--accent-secondary)" />
                    <circle cx="400" cy="60" r="5" fill="var(--accent-secondary)" />
                  </svg>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>
                  <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                </div>
              </div>

              {/* Chart 2: SVG Category Bar Chart */}
              <div className="about-counter-panel" style={{ padding: 'var(--space-md)' }}>
                <h3 class="text-h3" style={{ fontSize: '1rem', marginBottom: 'var(--space-md)' }}>Sales by Collection Categories</h3>
                <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                  
                  {/* Wedding */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30px' }}>
                    <motion.div initial={{ height: 0 }} animate={{ height: '140px' }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ width: '100%', background: 'linear-gradient(to top, var(--accent-primary), var(--accent-secondary))', borderRadius: '4px' }}></motion.div>
                    <span style={{ fontSize: '0.6875rem', marginTop: '6px', color: 'var(--text-secondary)' }}>Wed</span>
                  </div>

                  {/* Nature */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30px' }}>
                    <motion.div initial={{ height: 0 }} animate={{ height: '90px' }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} style={{ width: '100%', background: 'linear-gradient(to top, var(--accent-primary), var(--accent-secondary))', borderRadius: '4px' }}></motion.div>
                    <span style={{ fontSize: '0.6875rem', marginTop: '6px', color: 'var(--text-secondary)' }}>Nat</span>
                  </div>

                  {/* Baby */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30px' }}>
                    <motion.div initial={{ height: 0 }} animate={{ height: '60px' }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} style={{ width: '100%', background: 'linear-gradient(to top, var(--accent-primary), var(--accent-secondary))', borderRadius: '4px' }}></motion.div>
                    <span style={{ fontSize: '0.6875rem', marginTop: '6px', color: 'var(--text-secondary)' }}>Bab</span>
                  </div>

                  {/* Festival */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30px' }}>
                    <motion.div initial={{ height: 0 }} animate={{ height: '120px' }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} style={{ width: '100%', background: 'linear-gradient(to top, var(--accent-primary), var(--accent-secondary))', borderRadius: '4px' }}></motion.div>
                    <span style={{ fontSize: '0.6875rem', marginTop: '6px', color: 'var(--text-secondary)' }}>Fest</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* C. INVENTORY CATALOG DATA TABLE */}
        {(activeTab === 'dashboard' || activeTab === 'catalog') && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: 0.15 }}
            className="about-counter-panel" 
            style={{ padding: 'var(--space-md)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
              <h3 class="text-h3" style={{ fontSize: '1.125rem' }}>Bespoke Store Inventory</h3>
              {activeTab === 'catalog' && (
                <button onClick={() => setShowModal(true)} className="btn btn-primary btn-sm">Add Product Variant</button>
              )}
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}>
                    <th style={{ padding: '12px' }}>Product Model</th>
                    <th style={{ padding: '12px' }}>Brand</th>
                    <th style={{ padding: '12px' }}>Category</th>
                    <th style={{ padding: '12px' }}>SKU Code</th>
                    <th style={{ padding: '12px' }}>Size</th>
                    <th style={{ padding: '12px' }}>Price</th>
                    <th style={{ padding: '12px' }}>Stock</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <motion.tbody 
                  variants={tableContainerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {products.map(prod => (
                    <motion.tr 
                      variants={tableRowVariants}
                      key={prod.id} 
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'var(--text-secondary)' }}
                    >
                      <td style={{ padding: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>{prod.name}</td>
                      <td style={{ padding: '12px' }}>{prod.brand}</td>
                      <td style={{ padding: '12px' }}>{prod.category}</td>
                      <td style={{ padding: '12px', fontFamily: 'monospace' }}>{prod.sku}</td>
                      <td style={{ padding: '12px' }}>{prod.size}</td>
                      <td style={{ padding: '12px', fontWeight: 600 }}>{prod.price}</td>
                      <td style={{ padding: '12px' }}>{prod.stock} units</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ 
                          fontSize: '0.75rem', 
                          padding: '2px 8px', 
                          borderRadius: '4px',
                          background: prod.status === 'Active' ? 'rgba(52, 211, 153, 0.1)' : prod.status === 'Low Stock' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                          color: prod.status === 'Active' ? 'var(--accent-success)' : prod.status === 'Low Stock' ? '#fbbf24' : 'var(--accent-error)'
                        }}>
                          {prod.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'right' }}>
                        <button 
                          onClick={() => handleDelete(prod.id)}
                          className="btn btn-glass btn-sm" 
                          style={{ padding: '4px 8px', color: 'var(--accent-error)', borderColor: 'rgba(239,68,68,0.2)' }}
                        >
                          Delete
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* D. APPOINTMENTS SCHEDULER VIEW */}
        {activeTab === 'bookings' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="about-counter-panel" style={{ padding: 'var(--space-md)' }}>
            <h3 class="text-h3" style={{ fontSize: '1.125rem', marginBottom: 'var(--space-md)' }}>Pending Diagnostic Consultations</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              <motion.div whileHover={{ x: 5 }} style={{ padding: '12px', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.9375rem' }}>Ramesh Kumar (OD prescription mapping)</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>July 18, 2026 • 10:30 AM • Trunk Road Branch</span>
                </div>
                <span style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24', borderRadius: '4px' }}>Pending</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} style={{ padding: '12px', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.9375rem' }}>Anitha S. (Diwali Special Wedding Frame Consultation)</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>July 18, 2026 • 2:00 PM • Mini Bypass Hub</span>
                </div>
                <span style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'rgba(52, 211, 153, 0.1)', color: 'var(--accent-success)', borderRadius: '4px' }}>Confirmed</span>
              </motion.div>
            </div>
          </motion.div>
        )}

      </motion.main>

      {/* 3. ADD VARIANT POPUP MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="about-counter-panel" 
              style={{ width: '400px', padding: 'var(--space-lg)', position: 'relative' }}
            >
              <button 
                onClick={() => setShowModal(false)}
                style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', color: '#fff', fontSize: '1.25rem', cursor: 'pointer' }}
              >
                &times;
              </button>
              <h3 style={{ marginTop: 0, marginBottom: 'var(--space-md)' }}>New Frame Variant</h3>
              
              <form onSubmit={handleAddProduct} style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '4px' }}>Frame Name</label>
                  <input 
                    type="text" 
                    value={newProdName}
                    onChange={(e) => setNewProdName(e.target.value)}
                    placeholder="e.g. HR Monarch"
                    style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }}
                    required
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '4px' }}>SKU Code</label>
                  <input 
                    type="text" 
                    value={newProdSku}
                    onChange={(e) => setNewProdSku(e.target.value)}
                    placeholder="e.g. HR-MON-GLD-M"
                    style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '4px' }}>Price (₹)</label>
                    <input 
                      type="number" 
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(e.target.value)}
                      placeholder="4999"
                      style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '4px' }}>Stock Quantity</label>
                    <input 
                      type="number" 
                      value={newProdStock}
                      onChange={(e) => setNewProdStock(e.target.value)}
                      placeholder="10"
                      style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '4px' }}>Collection Category</label>
                  <select 
                    value={newProdCategory}
                    onChange={(e) => setNewProdCategory(e.target.value)}
                    style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.8)', border: '1px solid var(--glass-border)', color: '#fff', borderRadius: '4px' }}
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Nature">Nature</option>
                    <option value="Baby">Baby</option>
                    <option value="Festival">Festival</option>
                    <option value="God">God</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '10px', marginTop: '8px' }}>
                  Add Variant
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
