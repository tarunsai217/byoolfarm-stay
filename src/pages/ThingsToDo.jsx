import PageBanner from '../components/PageBanner'
import { attractions } from '../data/attractions'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function ThingsToDo() {
  return (
    <div>
      <PageBanner title="Attractions"
        image="/assets/images/gallery/gallery-14.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'Things To Do'}]}/>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="font-body text-body text-base leading-[30px] md:text-base font-light leading-relaxed">
            <strong className="font-medium text-dark">Best Places To Visit In Dharamshala.</strong>{' '}
            Dharamshala is a city in the Indian state of Himachal Pradesh. Surrounded by cedar forests on the edge of the Himalayas, this hillside city is home to the Dalai Lama and the Tibetan government-in-exile. The Thekchen Chöling Temple Complex is a spiritual center for Tibetan Buddhism, while the Library of Tibetan Works and Archives houses thousands of precious manuscripts.
          </p>
          <Divider />
        </div>

        <div className="max-w-7xl mx-auto pb-10">
          {attractions.map((attr, i) => {
            const even = i % 2 === 0
            return (
              <div key={attr.id}
                className={`flex flex-col ${even ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white shadow-sm mb-8 overflow-hidden`}>
                <div className="md:w-5/12 h-60 md:h-72 img-zoom shrink-0">
                  <img src={attr.image} alt={attr.name} className="w-full h-full object-cover" loading="lazy"
                       onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
                </div>
                <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="font-display text-dark text-[24px] md:text-[36px] font-semibold uppercase tracking-wide mb-2">{attr.name}</h3>
                  <div className="h-px w-8 bg-gold mb-5"/>
                  <p className="font-body text-body text-base leading-[30px] leading-relaxed font-light">{attr.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
