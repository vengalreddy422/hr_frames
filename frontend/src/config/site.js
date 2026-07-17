// ============================================================================
// SITE CONFIG — single source of truth
// Change these via .env (see .env.example) — never hardcode inside components.
// ============================================================================

export const SITE = {
  name: import.meta.env.VITE_SITE_NAME || 'HR Frames',
  tagline: 'Premium Custom Photo Frame Studio',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919573500194', // digits only, country code first
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api',
  cloudinaryCloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || '',
  facebook: import.meta.env.VITE_FACEBOOK_URL || '',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'orders@hrframes.in',
};

export default SITE;
