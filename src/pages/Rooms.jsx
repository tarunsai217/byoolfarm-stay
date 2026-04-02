import PageBanner from '../components/PageBanner'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-5">
      <span className="h-px w-12 bg-gold/40"/><span className="text-gold text-xs">✦</span><span className="h-px w-12 bg-gold/40"/>
    </div>
  )
}

export default function Rooms() {
  return (
    <div>
      <PageBanner title="Rooms"
        image="/assets/images/rooms/room-2.jpg"
        crumbs={[{label:'HOME',to:'/'},{label:'ROOMS'}]}/>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-dark text-[32px] md:text-[56px] font-bold uppercase tracking-wide tracking-wide">Our Rooms</h2>
            <p className="font-display text-muted italic text-lg mt-2">
              The elegant and luxurious rooms make your stay comfortable and reminiscent.
            </p>
            <Divider />
            <p className="font-body text-body text-base leading-[30px] font-light max-w-3xl mx-auto leading-relaxed">
              Byool Farmstay Dharamshala boasts charming rooms that blend rustic elegance with modern comfort. Each room offers a cozy sanctuary amidst nature's embrace, featuring tasteful décor and picturesque views of the surrounding greenery. With ample space and thoughtful amenities, including plush bedding and en-suite bathrooms, guests are ensured a restful stay. Whether you're seeking solitude or a romantic getaway, these inviting rooms provide the perfect setting for relaxation and rejuvenation. Immerse yourself in the tranquility of the countryside while enjoying the convenience of modern amenities, creating cherished memories of your stay in the serene Kangra Valley.
            </p>
          </div>
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} showBookButton={true}/>
          ))}
        </div>
      </section>
    </div>
  )
}
