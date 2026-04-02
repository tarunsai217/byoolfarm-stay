# Byool Farmstay — React Website

A pixel-faithful React SPA replicating byoolfarmstay.com, built with **React 18 + React Router v6 + Tailwind CSS + Lucide React**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🗺️ Routes

| Route | Page |
|-------|------|
| `/` | Home (Hero, Rooms, Cafe, Gallery, Attractions, Testimonials) |
| `/about` | About Us |
| `/rooms` | Stay / Rooms |
| `/dining` | The Dining Room |
| `/gallery` | Gallery (77 images + lightbox) |
| `/things-to-do` | Attractions (16 listings) |
| `/contact` | Contact Form + Map |
| `/blog` | Blog |
| `/amenities` | Amenities |
| `/packages` | Experiential Packages |
| `/tariff` | Tariff / Room Rates |

## 🏗️ File Structure

```
src/
├── App.jsx                   ← All 11 routes
├── index.css                 ← Tailwind + custom CSS
├── main.jsx
├── components/
│   ├── Navbar.jsx            ← Sticky nav + mobile drawer
│   ├── Footer.jsx
│   ├── HeroSlider.jsx        ← Auto-advancing carousel
│   ├── RoomCard.jsx          ← Alternating image-left/right
│   ├── TestimonialSlider.jsx ← 7 testimonials with auto-play
│   ├── GalleryGrid.jsx       ← Masonry grid
│   ├── Lightbox.jsx          ← Keyboard-navigable modal
│   └── Breadcrumb.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Rooms.jsx
│   ├── Dining.jsx
│   ├── Gallery.jsx
│   ├── ThingsToDo.jsx
│   ├── Contact.jsx
│   ├── Blog.jsx
│   ├── Amenities.jsx
│   ├── Packages.jsx
│   └── Tariff.jsx
└── data/
    ├── rooms.js              ← 4 rooms
    ├── testimonials.js       ← 7 reviews
    ├── attractions.js        ← 16 attractions
    └── gallery.js            ← 77 gallery + 13 dining images
```

## 🖼️ Swapping Placeholder Images

All images use `https://picsum.photos/` placeholders.
To use real images, update the `src` fields in `src/data/rooms.js`, `src/data/attractions.js`, `src/data/gallery.js`, and the inline `url()` strings in page banner divs.

## 📞 Contact Details (Live)

- Phone: +91 8626823139
- Email: byoolfarm@gmail.com
- Address: Uprehr, VPO Ramerh, Nagrota Bagwan, Dharamshala, 176052

## 🔗 External Links (Live)

- Airbnb booking: https://www.airbnb.co.in
- Cold Mountain Pottery Studio: https://www.thecoldmountainstudio.com/
