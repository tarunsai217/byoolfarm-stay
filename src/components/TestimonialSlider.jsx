import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function TestimonialSlider() {
  const [cur, setCur] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setCur(c => (c+1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [paused, cur])

  const go = (d) => { setPaused(true); setCur(c => (c+d+testimonials.length) % testimonials.length) }
  const t = testimonials[cur]

  return (
    <section className="bg-navy py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-white text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">TESTIMONIALS</h2>
        <p className="font-body text-white/50 text-base leading-[30px] tracking-[0.3em] uppercase mt-2 mb-3">
          LOVELY PEOPLE - LOVELY EXPERIENCES
        </p>
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
        </div>

        <div key={cur} className="fade-in-up">
          <div className="text-gold/20 font-display text-[8rem] leading-none select-none mb-[-2rem]">"</div>
          <div className="bg-white/5 border border-white/10 px-8 md:px-14 py-10">
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({length: t.stars}).map((_,i) => (
                <Star key={i} size={14} className="fill-gold text-gold"/>
              ))}
            </div>
            <p className="font-body text-gold text-[0.65rem] tracking-[0.3em] uppercase font-medium mb-6">
              OVERALL EXPERIENCE: {t.rating}
            </p>
            <p className="font-display text-white/85 text-lg md:text-[18px] font-semibold uppercase italic leading-relaxed mb-7">
              {t.text}
            </p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-6 bg-gold/40"/><span className="text-gold text-[8px]">✦</span><span className="h-px w-6 bg-gold/40"/>
            </div>
            <p className="font-body text-white font-medium tracking-widest text-base leading-[30px]">{t.name}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={() => go(-1)} aria-label="Prev"
            className="w-9 h-9 border border-white/15 text-white/45 hover:text-gold hover:border-gold
                       flex items-center justify-center transition-all">
            <ChevronLeft size={17}/>
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_,i) => (
              <button key={i} onClick={() => { setPaused(true); setCur(i) }}
                className={`transition-all duration-300 ${i===cur ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full'}`}/>
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next"
            className="w-9 h-9 border border-white/15 text-white/45 hover:text-gold hover:border-gold
                       flex items-center justify-center transition-all">
            <ChevronRight size={17}/>
          </button>
        </div>
      </div>
    </section>
  )
}
