import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  { id:1, image:'/assets/images/rooms/room-1.jpg',
    top:'WELCOME TO', heading:'Byool Farmstay' },
  { id:2, image:'/assets/images/rooms/room-3.jpg',
    top:'INDOOR & OUTDOOR', heading:'LUXURY EXPERIENCE' },
  { id:3, image:'/assets/images/rooms/room-4.jpg',
    top:'WELCOME TO', heading:'Byool Farmstay' },
]

export default function HeroSlider() {
  const [cur, setCur] = useState(0)
  const [key, setKey] = useState(0)

  const goTo = (i) => { setCur(i); setKey(k => k+1) }
  const next = () => goTo((cur+1) % SLIDES.length)
  const prev = () => goTo((cur-1+SLIDES.length) % SLIDES.length)

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [cur])

  return (
    <div className="relative h-screen min-h-[560px] overflow-hidden">
      {SLIDES.map((s, i) => (
        <div key={s.id} className={`hero-slide ${i===cur?'active':''}`}>
          <img src={s.image} alt={s.heading}
               className="absolute inset-0 w-full h-full object-cover"
               onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
          <div className="absolute inset-0 bg-black/50"/>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div key={key} className="fade-in-up">
          <p className="font-body text-gold text-xs tracking-[0.5em] uppercase font-medium mb-4">
            {SLIDES[cur].top}
          </p>
          <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-wide mb-5">
            {SLIDES[cur].heading}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold/60"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/60"/>
          </div>
          <a href="https://www.airbnb.co.in/rooms/48947262" target="_blank" rel="noopener noreferrer"
             className="btn-black">BOOK YOUR STAY</a>
        </div>
      </div>

      <button onClick={prev} aria-label="Prev"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 border border-white/30 text-white/70 hover:text-gold hover:border-gold
                   flex items-center justify-center transition-all backdrop-blur-sm">
        <ChevronLeft size={20}/>
      </button>
      <button onClick={next} aria-label="Next"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 border border-white/30 text-white/70 hover:text-gold hover:border-gold
                   flex items-center justify-center transition-all backdrop-blur-sm">
        <ChevronRight size={20}/>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 items-center">
        {SLIDES.map((_,i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i+1}`}
            className={`transition-all duration-300 ${i===cur ? 'w-7 h-1.5 bg-gold' : 'w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/70'}`}/>
        ))}
      </div>
    </div>
  )
}
