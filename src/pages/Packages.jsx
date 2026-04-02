import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function Packages() {
  return (
    <div>
      <PageBanner title="Experiential Packages"
        image="/assets/images/rooms/room-3.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'Experiential Packages'}]}/>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Experiential Packages</h2>
            <Divider />
          </div>

          <div className="bg-white border border-border p-8 md:p-12">
            <h3 className="font-display text-dark text-[28px] font-bold uppercase tracking-wide tracking-wide mb-4">Pottery Retreat</h3>
            <div className="h-px w-8 bg-gold mb-6"/>
            <div className="space-y-5 font-body text-body text-base leading-[30px] leading-relaxed font-light">
              <p>Unleash your creativity with our exclusive Pottery Retreat Package at Byool Farmstay, nestled in the picturesque landscape of Dharamshala. This special offer is designed for both beginners and experienced potters who wish to deepen their craft amidst the serene beauty of nature.</p>
              <p>During your stay, you'll enjoy daily pottery sessions led by skilled artisans in our fully equipped studio. Each workshop is tailored to help you explore your own creativity with the skills of moulding clay. Minimum of three days is required with four hours of daily pottery sessions.</p>
              <p>Your retreat includes a comfortable stay in our charming, eco-friendly earth bag cottage at Byool Farmstay. We have three meticulously designed ground-level bedrooms. Each room comes with attached bathroom and modern amenities, ensuring a restful experience. To complement your creative journey, we also serve delicious, farm-to-table meals prepared with fresh, organic ingredients harvested right from our farm.</p>
              <p>Apart from pottery, you can spend your free time exploring the farm, going for nature walks around the farm, participating in other farm activities, or simply relaxing in the lush surroundings. Our retreat is not just an opportunity to learn a new skill, but a chance to rejuvenate and reconnect with yourself in a peaceful setting.</p>
              <p>Join us at Byool Farmstay for a pottery retreat that promises creativity, relaxation, and an intimate connection with art and nature.</p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-body text-dark font-medium text-base leading-[30px] mb-3">Price:</p>
              <ul className="font-body text-body text-base leading-[30px] font-light space-y-1 mb-2">
                <li>Rs. 9,500/- night for single occupancy</li>
                <li>Rs. 16,000/- night for double occupancy</li>
              </ul>
              <p className="font-body text-body text-base leading-[30px] font-light mt-3">
                <strong className="font-medium text-dark">Included:</strong> Workshops, stay and all meals.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="btn-black">Enquire Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
