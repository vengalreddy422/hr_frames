import COLLECTIONS from './collections';
import FRAME_SIZES from './sizes';

// Religious
import ayyaImg from '../assets/images/collections/lord_ayya.png';
import ganeshPoojaImg from '../assets/images/collections/lord_ganesh_pooja.png';
import krishnaImg from '../assets/images/collections/lord_krishna.jpg';
import krishna2Img from '../assets/images/collections/lord_krishna2.png';
import shivaImg from '../assets/images/collections/lord_shiva.png';
import ganeshImg from '../assets/images/collections/lors_ganesh.png';

// Family & Wedding
import familyPicImg from '../assets/images/collections/family_pic.png';
import giblicFamilyImg from '../assets/images/collections/giblic_family.png';
import loversImg from '../assets/images/collections/lovers.png';
import weddingThaliImg from '../assets/images/collections/wedding_thali.png';
import wedding1Img from '../assets/images/collections/wedding1.jpg';
import wedding2Img from '../assets/images/collections/wedding2.jpg';
import wedding3Img from '../assets/images/collections/Wedding3-jpg.webp';
import extraImg from '../assets/images/collections/images.jpg';

// Gifts
import gift1Img from '../assets/images/collections/gift1.jpg';
import gift2Img from '../assets/images/collections/gift2.jpg';
import gift3Img from '../assets/images/collections/gift3.jpg';
import gift4Img from '../assets/images/collections/gift4.jpg';
import gift5Img from '../assets/images/collections/gift5.jpg';

// Festivals
import festival1Img from '../assets/images/collections/festival1.jpg';
import festival2Img from '../assets/images/collections/festival2.jpg';
import festival3Img from '../assets/images/collections/festival3.png';
import festival4Img from '../assets/images/collections/festival4.png';

// Trending
import trending1Img from '../assets/images/collections/trending1.png';
import trending2Img from '../assets/images/collections/trending2.png';
import trending3Img from '../assets/images/collections/trendin3.png';
import trending4Img from '../assets/images/collections/trending4.png';
import trending5Img from '../assets/images/collections/trending5.png';

// Best Sellers
import selling1Img from '../assets/images/collections/selling1.jpg';
import selling2Img from '../assets/images/collections/selling2.jpg';
import selling3Img from '../assets/images/collections/selling3.jpg';

// Customized
import custom1Img from '../assets/images/collections/cutomisted1.png';

const RELIGIOUS_PRODUCTS = [
  { id: 'rel-1', name: 'Lord Ayyappa Frame', slug: 'lord-ayyappa', category_name: 'Religious Collection', category_slug: 'religious-collection', description: 'Beautiful framed picture of Lord Ayyappa. Perfect for your pooja room.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: true, images: [{ id: 'img-r1', is_cover: true, url: ayyaImg }] },
  { id: 'rel-2', name: 'Ganesh Pooja Frame', slug: 'ganesh-pooja', category_name: 'Religious Collection', category_slug: 'religious-collection', description: 'Divine Ganesh Pooja framed art.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-r2', is_cover: true, url: ganeshPoojaImg }] },
  { id: 'rel-3', name: 'Lord Krishna Portrait', slug: 'lord-krishna', category_name: 'Religious Collection', category_slug: 'religious-collection', description: 'Stunning portrait of Lord Krishna.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-r3', is_cover: true, url: krishnaImg }] },
  { id: 'rel-4', name: 'Lord Krishna Art', slug: 'lord-krishna-art', category_name: 'Religious Collection', category_slug: 'religious-collection', description: 'Beautiful artistic representation of Lord Krishna.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-r4', is_cover: true, url: krishna2Img }] },
  { id: 'rel-5', name: 'Lord Shiva Frame', slug: 'lord-shiva', category_name: 'Religious Collection', category_slug: 'religious-collection', description: 'Majestic Lord Shiva frame.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-r5', is_cover: true, url: shivaImg }] },
  { id: 'rel-6', name: 'Lord Ganesha Frame', slug: 'lord-ganesha', category_name: 'Religious Collection', category_slug: 'religious-collection', description: 'Classic Lord Ganesha framed picture.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-r6', is_cover: true, url: ganeshImg }] },
];

const FAMILY_PRODUCTS = [
  { id: 'fam-1', name: 'Family Portrait Frame', slug: 'family-portrait-1', category_name: 'Family Collection', category_slug: 'family-collection', description: 'Keep your loved ones close with this warm family portrait frame.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Brown'], customization: 'Available upon request.', is_featured: true, images: [{ id: 'img-f1', is_cover: true, url: familyPicImg }] },
  { id: 'fam-2', name: 'Studio Family Frame', slug: 'studio-family', category_name: 'Family Collection', category_slug: 'family-collection', description: 'Beautifully crafted frame for studio family photos.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-f2', is_cover: true, url: giblicFamilyImg }] },
  { id: 'fam-3', name: 'Classic Memory Frame', slug: 'classic-memory', category_name: 'Family Collection', category_slug: 'family-collection', description: 'A classic frame to preserve your best moments.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-f3', is_cover: true, url: extraImg }] },
];

const WEDDING_PRODUCTS = [
  { id: 'wed-1', name: 'Wedding Thali Frame', slug: 'wedding-thali', category_name: 'Wedding Collection', category_slug: 'wedding-collection', description: 'Preserve the most important moment of your wedding day.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: true, images: [{ id: 'img-w1', is_cover: true, url: weddingThaliImg }] },
  { id: 'wed-2', name: 'Couples Portrait Frame', slug: 'couples-portrait', category_name: 'Wedding Collection', category_slug: 'wedding-collection', description: 'Elegant frame for romantic couple portraits.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-w2', is_cover: true, url: loversImg }] },
  { id: 'wed-3', name: 'Wedding Moments', slug: 'wedding-moments-1', category_name: 'Wedding Collection', category_slug: 'wedding-collection', description: 'Capture the magic of your special day.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-w3', is_cover: true, url: wedding1Img }] },
  { id: 'wed-4', name: 'Wedding Memories', slug: 'wedding-moments-2', category_name: 'Wedding Collection', category_slug: 'wedding-collection', description: 'Beautiful wedding memory frame.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-w4', is_cover: true, url: wedding2Img }] },
  { id: 'wed-5', name: 'Classic Wedding Portrait', slug: 'wedding-moments-3', category_name: 'Wedding Collection', category_slug: 'wedding-collection', description: 'A timeless frame for your wedding portrait.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-w5', is_cover: true, url: wedding3Img }] },
];

const GIFT_PRODUCTS = [
  { id: 'gift-1', name: 'Premium Gift Frame', slug: 'gift-frame-1', category_name: 'Gift Collection', category_slug: 'gift-collection', description: 'The perfect frame to gift to someone special.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: true, images: [{ id: 'img-g1', is_cover: true, url: gift1Img }] },
  { id: 'gift-2', name: 'Special Memory Frame', slug: 'gift-frame-2', category_name: 'Gift Collection', category_slug: 'gift-collection', description: 'Gift a memory that lasts forever.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-g2', is_cover: true, url: gift2Img }] },
  { id: 'gift-3', name: 'Celebration Frame', slug: 'gift-frame-3', category_name: 'Gift Collection', category_slug: 'gift-collection', description: 'A beautiful frame for gifting.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-g3', is_cover: true, url: gift3Img }] },
  { id: 'gift-4', name: 'Classic Gift Frame', slug: 'gift-frame-4', category_name: 'Gift Collection', category_slug: 'gift-collection', description: 'Elegant gifting frame for all occasions.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-g4', is_cover: true, url: gift4Img }] },
  { id: 'gift-5', name: 'Occasion Frame', slug: 'gift-frame-5', category_name: 'Gift Collection', category_slug: 'gift-collection', description: 'Perfect present for birthdays and anniversaries.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'White', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-g5', is_cover: true, url: gift5Img }] },
];

const FESTIVAL_PRODUCTS = [
  { id: 'fest-1', name: 'Diwali Special Frame', slug: 'festival-frame-1', category_name: 'Festival Collection', category_slug: 'festival-collection', description: 'Brighten your home with our festive collection.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: true, images: [{ id: 'img-fs1', is_cover: true, url: festival1Img }] },
  { id: 'fest-2', name: 'Festive Celebration Frame', slug: 'festival-frame-2', category_name: 'Festival Collection', category_slug: 'festival-collection', description: 'Perfect for seasonal gifting and decoration.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-fs2', is_cover: true, url: festival2Img }] },
  { id: 'fest-3', name: 'Traditional Festival Art', slug: 'festival-frame-3', category_name: 'Festival Collection', category_slug: 'festival-collection', description: 'Traditional frame for festival season.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-fs3', is_cover: true, url: festival3Img }] },
  { id: 'fest-4', name: 'Auspicious Frame', slug: 'festival-frame-4', category_name: 'Festival Collection', category_slug: 'festival-collection', description: 'Auspicious frame to mark the special festival.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Brown'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-fs4', is_cover: true, url: festival4Img }] },
];

const TRENDING_PRODUCTS = [
  { id: 'trend-1', name: 'Trending Frame Design', slug: 'trending-frame-1', category_name: 'Trending Collections', category_slug: 'trending-collections', description: 'Our most popular trending frame right now.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Gold'], customization: 'Available upon request.', is_featured: true, images: [{ id: 'img-t1', is_cover: true, url: trending1Img }] },
  { id: 'trend-2', name: 'Modern Trending Art', slug: 'trending-frame-2', category_name: 'Trending Collections', category_slug: 'trending-collections', description: 'A modern trending frame that everyone loves.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Gold'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-t2', is_cover: true, url: trending2Img }] },
  { id: 'trend-3', name: 'Viral Frame Style', slug: 'trending-frame-3', category_name: 'Trending Collections', category_slug: 'trending-collections', description: 'Catch the latest trends with this frame.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Gold'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-t3', is_cover: true, url: trending3Img }] },
  { id: 'trend-4', name: 'Must-Have Frame', slug: 'trending-frame-4', category_name: 'Trending Collections', category_slug: 'trending-collections', description: 'The frame style that is taking over social media.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Gold'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-t4', is_cover: true, url: trending4Img }] },
  { id: 'trend-5', name: 'Popular Showcase Frame', slug: 'trending-frame-5', category_name: 'Trending Collections', category_slug: 'trending-collections', description: 'Showcase your memories with this trending frame.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Gold'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-t5', is_cover: true, url: trending5Img }] },
];

const BEST_SELLERS_PRODUCTS = [
  { id: 'sell-1', name: 'Top Seller Frame', slug: 'best-seller-1', category_name: 'Best Sellers', category_slug: 'best-sellers', description: 'Our highest rated frame by customers.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Black'], customization: 'Available upon request.', is_featured: true, images: [{ id: 'img-s1', is_cover: true, url: selling1Img }] },
  { id: 'sell-2', name: 'Customer Favorite', slug: 'best-seller-2', category_name: 'Best Sellers', category_slug: 'best-sellers', description: 'Consistently ordered classic design.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-s2', is_cover: true, url: selling2Img }] },
  { id: 'sell-3', name: 'Premium Best Seller', slug: 'best-seller-3', category_name: 'Best Sellers', category_slug: 'best-sellers', description: 'A reliable choice for any memory.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Gold', 'Black'], customization: 'Available upon request.', is_featured: false, images: [{ id: 'img-s3', is_cover: true, url: selling3Img }] },
];

const CUSTOMIZED_PRODUCTS = [
  { id: 'cust-1', name: 'Your Custom Frame', slug: 'customized-frame-1', category_name: 'Customized Frames', category_slug: 'customized-frames', description: 'Send us your own photo, and we will beautifully frame it for you.', material: 'Premium Wood & Glass', ready_time: '3-5 Days', sizes_details: FRAME_SIZES, colors: ['Black', 'White', 'Brown', 'Gold'], customization: 'Fully Custom.', is_featured: true, images: [{ id: 'img-c1', is_cover: true, url: custom1Img }] },
];

const generateProducts = () => {
  const products = [...RELIGIOUS_PRODUCTS, ...FAMILY_PRODUCTS, ...WEDDING_PRODUCTS, ...GIFT_PRODUCTS, ...FESTIVAL_PRODUCTS, ...TRENDING_PRODUCTS, ...BEST_SELLERS_PRODUCTS, ...CUSTOMIZED_PRODUCTS];
  let idCounter = 1;

  COLLECTIONS.forEach((collection) => {
    // Skip the collections we have custom hand-made products for above
    if (['religious-collection', 'family-collection', 'wedding-collection', 'gift-collection', 'festival-collection', 'trending-collections', 'best-sellers', 'customized-frames'].includes(collection.slug)) {
      return; 
    }

    for (let i = 1; i <= 3; i++) {
      products.push({
        id: idCounter++,
        name: `${collection.name} Frame ${i}`,
        slug: `${collection.slug}-frame-${i}`,
        category_name: collection.name,
        category_slug: collection.slug,
        description: `This is a beautiful frame from our ${collection.name}. Perfect for your home or as a gift. It features premium materials and exceptional build quality.`,
        material: 'Premium Wood & Glass',
        ready_time: '3-5 Days',
        sizes_details: FRAME_SIZES,
        colors: ['Black', 'Brown', 'White', 'Gold'],
        customization: 'Available upon request via WhatsApp.',
        is_featured: i === 1,
        images: [
          {
            id: `img-${idCounter}-1`,
            is_cover: true,
            url: `/assets/images/products/${collection.slug}-${i}-1.jpg`,
          }
        ]
      });
    }
  });

  return products;
};

export const PRODUCTS = generateProducts();
export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.is_featured);

export default PRODUCTS;
