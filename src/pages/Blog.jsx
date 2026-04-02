import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'

const POSTS = [
  {
    id: 1,
    title: 'A day on Byool Farm Stay',
    image: '/assets/images/blog/blog-1.jpg',
    excerpt: "Ah, the charm of a stay at a farm BnB – where each day unfolds like a page from a country novel and the pleasures of rural living are not just observed but experienced firsthand. Imagine a getaway that begins with the crowing of roosters and mooing of cows and ends with nights under a star-spattered sky. Let's take a leisurely stroll through what a typical day might look like when you book a stay at our delightful Byool Farm Stay Bed and Breakfast.",
    link: 'https://byoolfarmstay.com/blog1.php',
  },
  {
    id: 2,
    title: 'Sustainable Serenity: Building an Earth Bag Cottage in Harmony with Nature',
    image: '/assets/images/blog/blog-2.jpg',
    excerpt: 'In a world where sustainability and eco-consciousness are becoming increasingly essential, the construction of homes and retreats that tread lightly on the Earth is gaining momentum. Imagine a cottage nestled amidst lush greenery, built with materials sourced from the land itself, echoing the traditional architecture of the region while embracing modern ecological principles. Welcome to the Byool Farm Stay BnB, where mud, wood, and slate converge to create spaces that are not only aesthetically pleasing but also environmentally friendly.',
    link: 'https://byoolfarmstay.com/blog2.php',
  },
  {
    id: 3,
    title: 'Things to do in and around the Byool Farm Stay BnB!',
    image: '/assets/images/blog/blog-3.jpg',
    excerpt: "Hey there, adventurous souls! If you're craving an escape from the hustle and bustle of city life, look no further than Byool Farm Stay BnB. Nestled amidst the picturesque landscapes of Himachal Pradesh, our farm offers a perfect blend of relaxation and excitement for nature lovers and thrill-seekers alike. Get ready to embark on a journey of discovery as we unveil the top things to do in and around our farm.",
    link: 'https://byoolfarmstay.com/blog3.php',
  },
]

export default function Blog() {
  return (
    <div>
      <PageBanner title="BLOG"
        image="/assets/images/blog/blog-1.jpg"
        crumbs={[{label:'HOME',to:'/'},{label:'BLOG'}]}/>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {POSTS.map((post, i) => (
            <div key={post.id}>
              <div className="flex flex-col md:flex-row gap-0 bg-white shadow-sm overflow-hidden mb-10">
                <div className="md:w-2/5 h-56 md:h-auto img-zoom shrink-0">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <img src={post.image} alt={post.title}
                         className="w-full h-full object-cover"
                         onError={e => { if (!e.currentTarget.src.includes('placeholder-1.jpg')) { e.currentTarget.src='/assets/images/placeholders/placeholder-1.jpg'; } }}/>
                  </a>
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <a href={post.link} target="_blank" rel="noopener noreferrer"
                     className="font-display text-dark text-[24px] md:text-[36px] font-semibold uppercase tracking-wide hover:text-gold transition-colors mb-4 block">
                    {post.title}
                  </a>
                  <div className="h-px w-8 bg-gold mb-4"/>
                  <p className="font-body text-body text-base leading-[30px] leading-relaxed font-light mb-6">{post.excerpt}</p>
                  <a href={post.link} target="_blank" rel="noopener noreferrer"
                     className="btn-dark self-start text-[0.65rem]">Read More</a>
                </div>
              </div>
              {i < POSTS.length - 1 && <hr className="border-border mb-10"/>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
