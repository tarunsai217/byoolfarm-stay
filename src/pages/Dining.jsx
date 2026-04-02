import PageBanner from '../components/PageBanner'
import GalleryGrid from '../components/GalleryGrid'
import { diningImages } from '../data/gallery'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function Dining() {
  return (
    <div>
      <PageBanner title="The Dining Room"
        image="/assets/images/dining/din5.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'The Dining Room'}]}/>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-dark text-[24px] md:text-[36px] font-semibold uppercase leading-relaxed text-center mb-8">
            Welcome to The Dining Room at Byool farm! We're thrilled to introduce our new cafe, offering a unique culinary experience right here on the tranquil Byool Farm.
          </h3>
          <div className="space-y-5 font-body text-body text-base leading-[30px] md:text-base leading-relaxed font-light">
            <p>Step into a space designed for comfort and connection, where every meal is a celebration of fresh, local flavours. Our menu embraces the bounty of the season, with a special focus on seasonal produce to ensure a truly fresh and vibrant dining experience with every visit. Whether you're a guest staying with us or simply seeking a peaceful escape, The Dining Room offers delicious food and a warm, inviting atmosphere.</p>
            <p>Beyond delightful dining, The Dining Room is also set to be a vibrant events venue. Get ready for unique culinary events with our exclusive chef pop-ups, featuring specialists in both Indian and international cuisines. Plus, unwind and enjoy our regular live music events, adding another layer of charm to your Byool farm experience. We can't wait to share our table and our vibrant atmosphere with you!</p>
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-dark text-[28px] md:text-[40px] font-bold uppercase tracking-wide tracking-wide mb-4">The Dining Room</h2>
          <div className="h-px w-8 bg-gold mx-auto mb-6"/>
          <p className="font-body text-body text-base leading-[30px] font-light leading-relaxed">
            Nestled within the serene surroundings of Laugh Tale Hostel, our in-house restaurant offers a cozy, vibrant space to unwind and refuel. Whether you're starting your morning with a hearty breakfast or winding down with drinks.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-dark text-[28px] md:text-[40px] font-bold uppercase tracking-wide tracking-wide">The Dining Gallery</h2>
            <Divider />
          </div>
          <GalleryGrid images={diningImages}/>
        </div>
      </section>
    </div>
  )
}
