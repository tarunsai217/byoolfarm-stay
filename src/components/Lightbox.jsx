import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const fn = e => {
      if (e.key==='Escape') onClose()
      if (e.key==='ArrowLeft') onPrev()
      if (e.key==='ArrowRight') onNext()
    }
    window.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose, onPrev, onNext])

  if (currentIndex === null || !images[currentIndex]) return null
  return (
    <div className="lightbox-overlay fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
         onClick={onClose}>
      <div className="absolute top-4 left-4 font-body text-white/40 text-xs z-10">
        {currentIndex+1} / {images.length}
      </div>
      <button onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 border border-white/15 text-white/50
                   hover:text-gold hover:border-gold flex items-center justify-center transition-all z-10">
        <X size={17}/>
      </button>
      <button onClick={e=>{e.stopPropagation();onPrev()}}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 border border-white/15 text-white/50 hover:text-gold hover:border-gold
                   flex items-center justify-center transition-all">
        <ChevronLeft size={22}/>
      </button>
      <div className="max-w-5xl max-h-[88vh] px-16" onClick={e=>e.stopPropagation()}>
        <img key={currentIndex} src={images[currentIndex].src} alt={images[currentIndex].alt}
             className="max-w-full max-h-[88vh] object-contain fade-in-up"/>
      </div>
      <button onClick={e=>{e.stopPropagation();onNext()}}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 border border-white/15 text-white/50 hover:text-gold hover:border-gold
                   flex items-center justify-center transition-all">
        <ChevronRight size={22}/>
      </button>
    </div>
  )
}
