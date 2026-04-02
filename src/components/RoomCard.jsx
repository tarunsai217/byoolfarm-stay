import { Wifi, AirVent, Coffee, Shirt, Monitor, ShowerHead, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const ICONS = {
  Wifi:   { Icon: Wifi,       label: 'Wifi' },
  AC:     { Icon: AirVent,    label: 'AC' },
  Kettle: { Icon: Coffee,     label: 'Electric Kettle' },
  Hanger: { Icon: Shirt,      label: 'Clothes Hanger' },
  Desk:   { Icon: Monitor,    label: 'Work Desk' },
  Shower: { Icon: ShowerHead, label: 'Bathroom' },
}

export default function RoomCard({ room, index, showBookButton }) {
  const isEven = index % 2 === 0
  return (
    <div className={`flex flex-col ${isEven?'lg:flex-row':'lg:flex-row-reverse'} bg-white mb-10 shadow-sm overflow-hidden`}>
      {/* Image */}
      <div className="lg:w-[48%] h-64 md:h-80 lg:h-auto img-zoom shrink-0">
        <img src={room.image} alt={room.name} className="w-full h-full object-cover"
             onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
        <h2 className="font-display text-dark text-[24px] md:text-[36px] font-semibold uppercase tracking-wide mb-4">
          {room.name}
        </h2>
        {/* Amenity icons */}
        <div className="flex gap-3 mb-5 flex-wrap">
          {room.amenities.map(key => {
            const a = ICONS[key]; if (!a) return null
            return (
              <div key={key} title={`This room has ${a.label}`}
                   className="w-9 h-9 border border-border flex items-center justify-center
                              hover:border-gold hover:bg-gold/5 transition-colors group">
                <a.Icon size={15} className="text-body group-hover:text-gold transition-colors"/>
              </div>
            )
          })}
        </div>
        <p className="font-body text-body text-base leading-[30px] leading-relaxed font-light mb-6">{room.description}</p>
        {showBookButton ? (
          <a href={room.airbnbLink} target="_blank" rel="noopener noreferrer"
             className="btn-black self-start inline-flex items-center gap-2">
            BOOK HERE <ExternalLink size={11}/>
          </a>
        ) : (
          <Link to="/rooms" className="btn-dark self-start">READ MORE</Link>
        )}
      </div>
    </div>
  )
}
