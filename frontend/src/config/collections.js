// ============================================================================
// COLLECTIONS — the 12 official HR Frames collections.
// `slug` MUST match the FrameCategory.slug value in the Django backend
// (apps/catalog/models.py -> FrameCategory). Create these categories in
// Django Admin (or load backend/apps/catalog/fixtures/initial_data.json)
// with the exact same slugs so products filter correctly.
// ============================================================================

const COLLECTIONS = [
  {
    slug: 'trending-collections',
    name: 'Trending Collections',
    icon: '🔥',
    blurb: 'What everyone is ordering right now',
  },
  {
    slug: 'new-arrivals',
    name: 'New Arrivals',
    icon: '✨',
    blurb: 'Freshly added designs, straight off the studio floor',
  },
  {
    slug: 'best-sellers',
    name: 'Best Sellers',
    icon: '⭐',
    blurb: 'Our most-loved frames, ordered again and again',
  },
  {
    slug: 'premium-collection',
    name: 'Premium Collection',
    icon: '💎',
    blurb: 'Luxury materials, gold filigree, museum-grade finishing',
  },
  {
    slug: 'wedding-collection',
    name: 'Wedding Collection',
    icon: '💍',
    blurb: 'Timeless frames for your big day and anniversaries',
  },
  {
    slug: 'family-collection',
    name: 'Family Collection',
    icon: '👨‍👩‍👧‍👦',
    blurb: 'Warm, collage-style frames for family portraits',
  },
  {
    slug: 'religious-collection',
    name: 'Religious Collection',
    icon: '🙏',
    blurb: 'God & temple frames crafted with devotion',
  },
  {
    slug: 'customized-frames',
    name: 'Customized Frames',
    icon: '🎨',
    blurb: 'Send your own photo — we design it your way',
  },
  {
    slug: 'home-decor-collection',
    name: 'Home Decor Collection',
    icon: '🏠',
    blurb: 'Statement pieces to elevate your living space',
  },
  {
    slug: 'festival-collection',
    name: 'Festival Collection',
    icon: '🪔',
    blurb: 'Seasonal designs for festive gifting',
  },
  {
    slug: 'gift-collection',
    name: 'Gift Collection',
    icon: '🎁',
    blurb: 'Ready-to-gift frames for every occasion',
  },
  {
    slug: 'customer-favorite',
    name: 'Customer Favorite',
    icon: '❤️',
    blurb: 'Top-rated by real HR Frames customers',
  },
];

export default COLLECTIONS;
