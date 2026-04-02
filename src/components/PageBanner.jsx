import Breadcrumb from './Breadcrumb'

export default function PageBanner({ title, image, crumbs }) {
  return (
    <div className="relative pt-16 lg:pt-[72px]">
      <div className="relative h-52 md:h-72 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/55"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
            {title}
          </h1>
        </div>
      </div>
      {crumbs && (
        <div className="bg-offwhite border-b border-border px-4 py-3">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb crumbs={crumbs}/>
          </div>
        </div>
      )}
    </div>
  )
}
