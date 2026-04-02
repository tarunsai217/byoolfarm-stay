// Real images from byoolfarmstay.com — use actual URLs, fall back to picsum if broken
export const galleryImages = Array.from({ length: 77 }, (_, i) => ({
  id: i + 1,
  src: `/assets/images/gallery/gallery-${i + 1}.jpg`,
  alt: `Byool Farmstay Gallery ${i + 1}`,
}))

export const diningImages = [
  { id: 1,  src: '/assets/images/dining/din5.jpg',  alt: 'Dining 1' },
  { id: 2,  src: '/assets/images/dining/din2.jpg',  alt: 'Dining 2' },
  { id: 3,  src: '/assets/images/dining/din14.jpg', alt: 'Dining 3' },
  { id: 4,  src: '/assets/images/dining/din6.jpg',  alt: 'Dining 4' },
  { id: 5,  src: '/assets/images/dining/din7.jpg',  alt: 'Dining 5' },
  { id: 6,  src: '/assets/images/dining/din8.jpg',  alt: 'Dining 6' },
  { id: 7,  src: '/assets/images/dining/din11.jpg', alt: 'Dining 7' },
  { id: 8,  src: '/assets/images/dining/din12.jpg', alt: 'Dining 8' },
  { id: 9,  src: '/assets/images/dining/din13.jpg', alt: 'Dining 9' },
  { id: 10, src: '/assets/images/dining/din1.jpg',  alt: 'Dining 10' },
  { id: 11, src: '/assets/images/dining/din9.jpg',  alt: 'Dining 11' },
  { id: 12, src: '/assets/images/dining/din10.jpg', alt: 'Dining 12' },
  { id: 13, src: '/assets/images/dining/din3.jpg',  alt: 'Dining 13' },
]

export const homeGalleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/assets/images/gallery/gallery-${i + 1}.jpg`,
  alt: `Byool Farmstay ${i + 1}`,
}))

export const foodItems = [
  {
    id: 1,
    title: 'Farm to table concept',
    text: 'Experience the freshest flavors straight from the fields to your plate with our farm-to-table dining concept at Byool Farmstay Dharamshala.',
    image: '/assets/images/amenities/1.jpg',
  },
  {
    id: 2,
    title: 'Hyperlocal produce',
    text: "Savor the freshness of the region with Byool Farmstay Dharamshala's hyperlocal produce, bringing the essence of the Kangra Valley directly to your plate.",
    image: '/assets/images/amenities/2.jpg',
  },
  {
    id: 3,
    title: 'BBQ nights',
    text: 'Savor the flavor of the outdoors under the stars with our unforgettable BBQ nights at Byool Farmstay Dharamshala.',
    image: '/assets/images/amenities/3.jpg',
  },
  {
    id: 4,
    title: 'Himachali dham',
    text: "Himachali Dham: A culinary delight featuring a vibrant array of traditional dishes from Himachal Pradesh, served in a festive feast celebrating the region's rich culture and flavors.",
    image: '/assets/images/amenities/4.jpg',
  },
  {
    id: 5,
    title: 'Authentic italian food',
    text: 'Savor the true taste of Italy with our authentic Italian cuisine, crafted with passion and tradition for an unforgettable culinary experience.',
    image: '/assets/images/amenities/5.jpg',
  },
  {
    id: 6,
    title: 'theme menu',
    text: "Embark on a culinary journey through Himachal Pradesh's rich flavors with our farm-to-table theme menu.",
    image: '/assets/images/amenities/6.jpg',
  },
]
