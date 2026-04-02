import PageBanner from '../components/PageBanner'
import { foodItems } from '../data/gallery'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function Food() {
  return (
    <div>
      <PageBanner title="Food/Byool Cafe"
        image="/assets/images/amenities/1.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'Food/Byool Cafe'}]}/>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">What We Offer</h2>
            <p className="font-display text-muted italic text-xl mt-2">Comforting Solace</p>
            <Divider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {foodItems.map(item => (
              <div key={item.id} className="bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="overflow-hidden h-56">
                  <img src={item.image} alt={item.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-dark text-[18px] font-semibold uppercase tracking-wide mb-3">{item.title}</h3>
                  <div className="h-px w-8 bg-gold mb-4"/>
                  <p className="font-body text-body text-base leading-[30px] leading-relaxed font-light">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
