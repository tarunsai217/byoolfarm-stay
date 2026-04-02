import PageBanner from '../components/PageBanner'
import GalleryGrid from '../components/GalleryGrid'
import { galleryImages } from '../data/gallery'

export default function Gallery() {
  return (
    <div>
      <PageBanner title="Gallery"
        image="/assets/images/gallery/gallery-1.jpg"
        crumbs={[{label:'Home',to:'/'},{label:'Gallery'}]}/>
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={galleryImages}/>
        </div>
      </section>
    </div>
  )
}
