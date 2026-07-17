import SITE from '../config/site';

/**
 * Build a wa.me deep link, optionally with a prefilled order message.
 */
export function waLink({ product, size, price, collection } = {}) {
  let text = `Hello ${SITE.name}! I'd like to order a custom photo frame.`;

  if (product) {
    text = `Hello ${SITE.name}! I'm interested in *${product}*`;
    if (size) text += ` (Size: ${size})`;
    if (price) text += ` — ₹${price}`;
    if (collection) text += `\nCollection: ${collection}`;
    text += `\nCould you share more details and confirm availability?`;
  }

  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default waLink;
