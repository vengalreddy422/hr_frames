import React from 'react';
import waLink from '../../utils/whatsapp';

export default function WhatsAppButton({ product, size, price, collection, label = 'Order on WhatsApp', className = 'btn btn-gradient', fullWidth = false }) {
  return (
    <a
      href={waLink({ product, size, price, collection })}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ textDecoration: 'none', width: fullWidth ? '100%' : undefined }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14, marginRight: 6, verticalAlign: 'middle' }}>
        <path d="M.057 24l1.687-6.163C.703 16.033.156 13.988.157 11.891.16 5.348 5.497.01 12.108.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24z" />
      </svg>
      {label}
    </a>
  );
}
