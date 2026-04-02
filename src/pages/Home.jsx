import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import RoomCard from '../components/RoomCard'
import TestimonialSlider from '../components/TestimonialSlider'
import GalleryGrid from '../components/GalleryGrid'
import { rooms } from '../data/rooms'
import { homeGalleryImages, foodItems } from '../data/gallery'
import { attractions } from '../data/attractions'

const AMENITY_IMGS = [
  { src:'/assets/images/amenities/new/hotel/1.png', label:'Access to farming' },
  { src:'/assets/images/amenities/new/hotel/2.png', label:'Book a pottery session with host' },
  { src:'/assets/images/amenities/new/hotel/3.png', label:'Workshops Hall' },
  { src:'/assets/images/amenities/new/hotel/4.png', label:'Yoga Hall' },
  { src:'/assets/images/amenities/new/hotel/5.png', label:'Dance Hall' },
  { src:'/assets/images/amenities/new/hotel/6.png', label:'Private Parties' },
]

const highlights = attractions.slice(0, 3)

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <HeroSlider />

      {/* ── WELCOME TO / ABOUT ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-4">
            <p className="eyebrow mb-2">WELCOME TO</p>
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Byool Farmstay</h2>
            <Divider />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-10 space-y-4 font-body text-body text-base leading-[30px] leading-relaxed font-light">
            <p>Experience the magic of Byool Farm in Dharamshala! Our cozy cottage, crafted from earth bags, blends modern comforts with rustic charm for a truly unique stay. Explore our dairy, farm, and pottery studio, or join us for hands-on activities like planting, harvesting, and milking. Feel the thrill of adventure in the nearby Himalayan foothills with trekking and temple visits. Savour delicious farm-to-table cuisine, brimming with the flavours of Himachal Pradesh.</p>
            <p>Our BnB offers three bedrooms with attached bathrooms, each with dual air conditioning for a perfect mix of local charm and luxury. Whether you crave peace and quiet or outdoor excitement, Byool Farmstay promises an unforgettable getaway in nature's embrace.</p>
          </div>

          {/* Amenity icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 pt-10 border-t border-border">
            {AMENITY_IMGS.map(a => (
              <div key={a.label} className="flex flex-col items-center text-center gap-3">
                <img src={a.src} alt={a.label} className="w-14 h-14 object-contain"
                     onError={e => { e.target.style.display='none' }}/>
                <span className="font-body text-[0.7rem] text-body leading-tight">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENJOY A LUXURY EXPERIENCE ── */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">ENJOY A LUXURY EXPERIENCE</h2>
            <Divider />
            <p className="font-body text-body text-base leading-[30px] font-light max-w-lg mx-auto mb-8">
              Book now the most awesome offer, and secure your summer vacations on time.
            </p>
            <Link to="/rooms" className="btn-dark">VIEW OUR ROOMS</Link>
          </div>
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} showBookButton={false}/>
          ))}
        </div>
      </section>

      {/* ── FOOD / BYOOL CAFE ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Food/Byool Cafe</h2>
            <Divider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foodItems.slice(0,3).map(c => (
              <Link to="/food" key={c.id}
                    className="block bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="overflow-hidden h-52">
                  <img src={c.image} alt={c.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-dark text-[18px] font-semibold uppercase mb-3">{c.title}</h3>
                  <div className="h-px w-8 bg-gold mb-3"/>
                  <p className="font-body text-body text-base leading-[30px] leading-relaxed font-light">{c.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/food" className="btn-dark">VIEW ALL</Link>
          </div>
        </div>
      </section>

      {/* ── OUR GALLERY ── */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Our Gallery</h2>
            <Divider />
          </div>
          <GalleryGrid images={homeGalleryImages}/>
        </div>
      </section>

      {/* ── THINGS TO DO ── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-dark text-[28px] md:text-[40px] font-bold uppercase tracking-wide tracking-wide mb-4">Things to do around</h2>
            <p className="font-body text-body text-base leading-[30px] font-light max-w-3xl mx-auto leading-relaxed">
              <strong className="font-medium">Best Places To Visit In Dharamshala.</strong> Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile. The Thekchen Chöling Temple Complex is a spiritual center for Tibetan Buddhism, while the Library of Tibetan Works and Archives houses thousands of precious manuscripts.
            </p>
            <Divider />
          </div>

          {/* 3 highlights alternating */}
          {highlights.map((attr, i) => {
            const even = i % 2 === 0
            return (
              <div key={attr.id}
                className={`flex flex-col ${even ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white shadow-sm mb-8 overflow-hidden`}>
                <div className="md:w-5/12 h-60 md:h-72 img-zoom shrink-0">
                  <img src={attr.image} alt={attr.name} className="w-full h-full object-cover"
                       onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-dark text-[24px] md:text-[36px] font-semibold uppercase tracking-wide mb-2">{attr.name}</h3>
                  <div className="h-px w-8 bg-gold mb-4"/>
                  <p className="font-body text-body text-base leading-[30px] leading-relaxed font-light mb-6">{attr.description}</p>
                  <Link to="/things-to-do" className="btn-dark self-start text-[0.65rem]">Read More</Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSlider />
    </div>
  )
}
