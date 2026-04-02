import { useState } from 'react'
import Lightbox from './Lightbox'

export default function GalleryGrid({ images }) {
  const [idx, setIdx] = useState(null)
  return (
    <>
      <div className="masonry-grid">
        {images.map((img, i) => (
          <div key={img.id} onClick={() => setIdx(i)}
               className="masonry-item cursor-pointer group overflow-hidden relative">
            <img src={img.src} alt={img.alt} loading="lazy"
                 className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                 onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300
                            flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 border border-gold
                              flex items-center justify-center">
                <span className="text-gold text-lg leading-none">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {idx !== null && (
        <Lightbox images={images} currentIndex={idx}
          onClose={() => setIdx(null)}
          onPrev={() => setIdx(i => (i-1+images.length) % images.length)}
          onNext={() => setIdx(i => (i+1) % images.length)}/>
      )}
    </>
  )
}
