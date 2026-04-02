import PageBanner from '../components/PageBanner'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

const ROOM_RATES = [
  { room: 'Celadon Standard Room',  rate: 'Rs. 7000/-' },
  { room: 'Shino Queen Room',       rate: 'Rs. 7500/-' },
  { room: 'Tenmoku Deluxe Room',    rate: 'Rs. 8500/-' },
  { room: 'Farm Cottages',          rate: 'Rs. 8500/-' },
  { room: 'Extra Adult And Extra Child Rates', rate: 'Rs. 3500/-' },
]

const MEAL_PLANS = [
  { desc: 'Complimentary breakfast Veg meal',     rate: 'Rs. 250 per person per meal' },
  { desc: 'Complimentary breakfast Non-veg meal', rate: 'Rs. 350 per person per meal' },
]

const CANCELLATION = [
  'To receive a full refund, guests must cancel within 48 hours of booking, and the cancellation must occur at least 14 days before check-in.',
  'If guests cancel 14 or more days before check-in but not within 48 hours of booking, refund is 50% for all nights.',
  'If guests cancel between 7 and 14 days before check-in, Refund is 50% for all nights.',
  'If guests cancel after that, refund is 0% for all nights.',
]

export default function Tariff() {
  return (
    <div>
      <PageBanner title="Tariff"
        image="/assets/images/rooms/room-2.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'Tariff'}]}/>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Tariff</h2>
            <Divider />
          </div>

          {/* Room Rates Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm text-base leading-[30px] font-body">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-4 font-medium tracking-wide">ROOM CATEGORY</th>
                  <th className="text-left px-6 py-4 font-medium tracking-wide">RATES</th>
                </tr>
              </thead>
              <tbody>
                {ROOM_RATES.map((r, i) => (
                  <tr key={r.room} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                    <td className="px-6 py-4 font-body text-dark font-light border-b border-border">{r.room}</td>
                    <td className="px-6 py-4 font-body text-dark font-medium border-b border-border">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Meal Plans */}
          <div className="mb-12 overflow-x-auto">
            <h3 className="font-display text-dark text-2xl font-light tracking-wide mb-4">Meal Plans</h3>
            <div className="h-px w-8 bg-gold mb-6"/>
            <table className="w-full border-collapse bg-white shadow-sm text-base leading-[30px] font-body">
              <tbody>
                {MEAL_PLANS.map((m, i) => (
                  <tr key={m.desc} className={i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}>
                    <td className="px-6 py-4 font-body text-dark font-light border-b border-border">{m.desc}</td>
                    <td className="px-6 py-4 font-body text-dark font-medium border-b border-border">{m.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-offwhite border border-border p-8">
            <h3 className="font-display text-dark text-2xl font-light tracking-wide mb-4">Cancellation policy</h3>
            <div className="h-px w-8 bg-gold mb-6"/>
            <ul className="space-y-3">
              {CANCELLATION.map((c, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-body text-base leading-[30px] font-light">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gold rounded-full shrink-0"/>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
