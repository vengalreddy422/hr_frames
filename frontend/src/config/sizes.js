// ============================================================================
// FRAME SIZES — shown as premium cards on the /sizes page.
// `startingPrice` is a display fallback only; real prices should come from
// FrameSize.price in the backend (matched here by `label`) when available.
// ============================================================================

const FRAME_SIZES = [
  { label: '4 × 6 Inches',   tag: 'Mini',        startingPrice: 249 },
  { label: '5 × 7 Inches',   tag: 'Classic',      startingPrice: 349 },
  { label: '6 × 8 Inches',   tag: 'Popular',      startingPrice: 449 },
  { label: '8 × 10 Inches',  tag: 'Best Seller',  startingPrice: 599 },
  { label: '10 × 12 Inches', tag: 'Wall Favorite', startingPrice: 799 },
  { label: '12 × 18 Inches', tag: 'Statement',    startingPrice: 1099 },
  { label: '16 × 20 Inches', tag: 'Gallery',      startingPrice: 1499 },
  { label: '18 × 24 Inches', tag: 'Grand',        startingPrice: 1899 },
  { label: '20 × 30 Inches', tag: 'Showpiece',    startingPrice: 2499 },
  { label: '24 × 36 Inches', tag: 'Mural',        startingPrice: 3499 },
  { label: '30 × 40 Inches', tag: 'Monarch',      startingPrice: 4999 },
  { label: 'Custom Size',    tag: 'Made For You', startingPrice: null },
];

export default FRAME_SIZES;
