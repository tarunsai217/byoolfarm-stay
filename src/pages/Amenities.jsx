import PageBanner from '../components/PageBanner'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

const GROUPS = [
  {
    title: 'Bedroom and laundry',
    items: ['Washing machine', 'Dryer'],
  },
  {
    title: 'Family',
    items: ["Children's books and toys"],
  },
  {
    title: 'Heating and cooling',
    items: ['Air conditioning', 'Indoor fireplace', 'Heating'],
  },
  {
    title: 'Home safety',
    items: ['First aid kit'],
  },
  {
    title: 'Internet and office',
    items: ['Wifi'],
  },
  {
    title: 'Outdoor',
    items: ['Shared patio or balcony'],
  },
  {
    title: 'Parking and facilities',
    items: ['Free parking on premises'],
  },
  {
    title: 'Other Amenities',
    items: [
      'Kitchen access (upon request)',
      'High-speed WiFi across the farm',
      'On-site parking (Note: Access road is narrow)',
      'Daily room cleaning & linen change every fourth day',
      'Laundry services are available at an extra charge',
    ],
  },
]

export default function Amenities() {
  return (
    <div>
      <PageBanner title="Amenities"
        image="/assets/images/rooms/room-1.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'Amenities'}]}/>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Amenities</h2>
            <p className="font-display text-muted italic text-lg mt-2">
              Where Comfort Meets Convenience: Discover Our Array of Thoughtful Amenities at Byool Farmstay!
            </p>
            <Divider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {GROUPS.map(g => (
              <div key={g.title} className="bg-white border border-border p-7">
                <h3 className="font-display text-dark text-[18px] font-semibold uppercase tracking-wide mb-3">{g.title}</h3>
                <div className="h-px w-8 bg-gold mb-4"/>
                <ul className="space-y-2">
                  {g.items.map(item => (
                    <li key={item} className="flex items-start gap-2 font-body text-body text-base leading-[30px] font-light">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-gold rounded-full shrink-0"/>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
