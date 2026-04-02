import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <PageBanner title="About Us"
        image="/assets/images/rooms/room-3.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'About Us'}]}/>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-2">WELCOME TO</p>
          <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">
            Byool Farmstay Dharamshala
          </h2>
          <Divider />
          <div className="text-left space-y-5 font-body text-body text-base leading-[30px] md:text-base leading-relaxed font-light">
            <p>Byool Farmstay came about as a concept to create a sanctuary away from the fast paced living that humans have adapted today. It is a reminder to slow living, to how humans are part of nature and the interdependency that exists.</p>
            <p>Our cottage is one-of-a-kind, made in the local Himachali traditional vernacular architecture using earth bag construction style (the most earthquake resistant structure). Surrounded by lush green fields and orchards, we offer a peaceful atmosphere away from the hustle and bustle of city life. We are just 13 kms away from the main Dharamshala town, giving us a refuge just half an hour away from the heart of the town.</p>
            <p>You can immerse yourselves in the natural beauty of the surroundings by taking leisurely walks around the farm or simply relaxing in the tranquil environment, star gazing in the night. Being a functional farm, you could also participate in farm activities such as natural farming, tending to cows or goats, or harvesting fruits and vegetables. Or book yourself a pottery or yoga retreat, or invest in your well being with sessions with therapist or tarot reader… take a holistic vacation amidst a peaceful and serene farm environment.</p>
            <p>Enjoy the delicious, farm-to-table meals prepared with fresh ingredients harvested right from our farm or locally sourced. Be part of the nature that surrounds us, from the farm itself or the animals on the farm or the mighty mountains in our backdrop. Whether you're looking for a peaceful getaway amidst nature or an immersive experience of rural life, we offer the perfect retreat for travellers seeking tranquility and authenticity in the heart of the Himalayas.</p>
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">ENJOY A LUXURY EXPERIENCE</h2>
          <Divider />
          <p className="font-body text-body text-base leading-[30px] font-light mb-8">
            Book now the most awesome offer, and secure your summer vacations on time.
          </p>
          <Link to="/rooms" className="btn-dark">VIEW OUR ROOMS</Link>
        </div>
      </section>
    </div>
  )
}
