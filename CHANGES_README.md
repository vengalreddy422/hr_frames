# HR Frames — Fixes & New Build

## What was wrong before
- Navbar links were scroll-anchors on a single page (`#collections`, `#pricing`…). Nothing was a real, shareable route — collections, sizes, and products had no dedicated pages.
- Product/gallery images were hardcoded Unsplash URLs baked into the JSX (`ProductDetails.jsx`, `MasonryGallery.jsx`) instead of coming from Cloudinary via the API.
- Only one fake product existed (`Royal Wedding Monarch`) — no real collection browsing.
- Frame sizes were never shown on the site at all.
- WhatsApp number (`919999999999`) and business copy were duplicated in 4+ files, and some `<meta>` tags in `index.html` still described an "Eyewear & Diagnostics" business from an old template.
- Product API response didn't expose `category_slug`, so the frontend had no reliable way to link a product back to its collection or fetch "related" items.
- No `.env` — API base URL, WhatsApp number, and Cloudinary cloud name were never configurable.

## What's new
- **Navbar**: real routes (`/`, `/collections`, `/collection/:slug`, `/sizes`, `/gallery`, `/about`, `/contact`) + a hover mega-menu listing all 12 collections, plus a mobile drawer with the same links.
- **12 Collections** (`src/config/collections.js`) — Trending, New Arrivals, Best Sellers, Premium, Wedding, Family, Religious, Customized, Home Decor, Festival, Gift, Customer Favorite. Each collection page (`/collection/:slug`) shows a filterable/sortable grid of that collection's products — image, description, price, material/type, size, and a WhatsApp order button per card.
- **Product page** (`/product/:slug`) — image gallery, size & color selectors, live price, a WhatsApp deep link prefilled with the product/size/price, and a "More from this Collection" related-products strip at the bottom.
- **Frame Sizes page** (`/sizes`) — the 12 requested sizes as premium cards (not plain text), each with a starting price and an "Enquire" WhatsApp button.
- **Gallery page** (`/gallery`) — animated masonry (Framer Motion stagger + lightbox) pulling images straight from Cloudinary via the API, plus a **Frame Visualizer**: pick a photo, tap between 6 frame styles (gold/black/walnut/silver/rose gold/LED) and watch the border swap instantly — this is the "change one frame to another" preview you asked for.
- **No static images anywhere.** Every image call goes through `src/utils/cloudinary.js`, which either re-transforms a Cloudinary URL already stored in the backend or builds one from a bare `public_id` + your `VITE_CLOUDINARY_CLOUD_NAME`. The only fallback is Cloudinary's own public "demo" cloud, used solely so the UI isn't blank before you've uploaded anything.
- **Backend**: added `category_slug` to `FrameProductSerializer` and made `slug` filterable, so the frontend can always link a product to its collection and fetch related items. Added `backend/apps/catalog/fixtures/initial_data.json` with the 12 collections + 11 fixed sizes ready to load.

## Setup

### 1. Backend (Django)
```bash
cd backend
pip install -r requirements/base.txt   # or requirements.txt, check the folder
python manage.py migrate
python manage.py loaddata initial_data   # loads the 12 collections + sizes
python manage.py createsuperuser
python manage.py runserver
```
Set `CLOUDINARY_URL` in your environment (Django reads it in `apps/catalog/media_service.py`) so uploads go to Cloudinary. Then add products per collection from `/admin/` — upload cover + gallery images, they land in Cloudinary automatically.

> Note: the backend folder also contains leftover apps (`prescriptions`, `appointments`, `orders`, `products`, `categories`, `users`) from an unrelated eyewear-store template — they are **not used** by this photo-frame storefront (only `apps/catalog` is). You can safely remove them from `INSTALLED_APPS` / delete the folders once you confirm nothing else references them.

### 2. Frontend (React + Vite)
```bash
cd frontend
cp .env.example .env       # then fill in your real values
npm install
npm run dev
```
Fill in `.env`:
- `VITE_API_BASE_URL` → your Django API, e.g. `https://api.yoursite.com/api`
- `VITE_WHATSAPP_NUMBER` → your real WhatsApp Business number (digits only, country code first)
- `VITE_CLOUDINARY_CLOUD_NAME` → from your Cloudinary dashboard

The site renders with graceful demo/placeholder content if the API isn't reachable yet, so you can preview the design before the backend is fully seeded — once real data is added, it takes over automatically (see `src/api/client.js`).

### 3. Collection slugs must match
The 12 slugs used by the frontend (`src/config/collections.js`) must exactly match the `FrameCategory.slug` values in Django — loading `initial_data.json` sets this up correctly out of the box.
