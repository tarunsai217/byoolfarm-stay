import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ExternalLink, ChevronRight } from 'lucide-react'

// Primary top bar (desktop)
const PRIMARY = [
  { label: 'About Us',                   to: '/about' },
  { label: 'Stay',                        to: '/rooms' },
  { label: 'The Dining Room',             to: '/dining' },
  { label: 'Gallery',                     to: '/gallery' },
  { label: 'Things To Do',               to: '/things-to-do' },
  { label: 'Cold Mountain Pottery Studio',to: 'https://www.thecoldmountainstudio.com/', ext: true },
  { label: 'Contact Us',                  to: '/contact' },
]

// Secondary sidebar — exactly as on the real site hamburger
const SIDEBAR = [
  { label: 'Home',                        to: '/' },
  { label: 'About Us',                    to: '/about' },
  { label: 'Stay',                         to: '/rooms' },
  { label: 'Amenities',                   to: '/amenities' },
  { label: 'Cold Mountain Pottery Studio',to: 'https://www.thecoldmountainstudio.com/', ext: true },
  { label: 'Gallery',                     to: '/gallery' },
  { label: 'Things To Do',               to: '/things-to-do' },
  { label: 'Blog',                        to: '/blog' },
  { label: 'Experiential Packages',       to: '/packages' },
  { label: 'Contact Us',                  to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const solid = 'bg-navy shadow-md'
  const trans = 'bg-navy/90 backdrop-blur-sm'
  const cls   = isHome ? (scrolled ? solid : trans) : solid

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${cls}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none shrink-0">
              <img src="/assets/images/logo.png" alt="Byool Farmstay Logo" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center">
              {PRIMARY.map(l => l.ext ? (
                <a key={l.label} href={l.to} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-1 text-white/70 hover:text-gold font-body
                              text-[14px] tracking-widest uppercase px-4 py-3 transition-colors font-medium">
                  {l.label} <ExternalLink size={9}/>
                </a>
              ) : (
                <NavLink key={l.label} to={l.to}
                  className={({isActive}) =>
                    `font-body text-[14px] tracking-widest uppercase px-4 py-3 transition-colors font-medium
                     relative group ${isActive ? 'text-gold' : 'text-white/70 hover:text-gold'}`}>
                  {({isActive}) => (<>
                    {l.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold transition-all duration-300
                                      ${isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'}`}/>
                  </>)}
                </NavLink>
              ))}
            </div>

            {/* Hamburger */}
            <button onClick={() => setOpen(v => !v)} aria-label="Menu"
              className="lg:hidden text-white hover:text-gold transition-colors p-1">
              {open ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {open && <div className="fixed inset-0 bg-black/60 z-40 lg:hidden fade-in" onClick={() => setOpen(false)}/>}

      {/* Sidebar drawer */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-navy z-50 flex flex-col
                       transform transition-transform duration-300 ease-in-out lg:hidden
                       ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <img src="/assets/images/logo.png" alt="Byool Farmstay Logo" className="h-10 w-auto object-contain" />
          </div>
          <button onClick={() => setOpen(false)} className="text-white/50 hover:text-white">
            <X size={20}/>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {SIDEBAR.map(l => l.ext ? (
            <a key={l.label} href={l.to} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-between px-6 py-4 text-white/65 hover:text-gold
                          hover:bg-white/5 font-body text-[14px] tracking-widest uppercase font-medium
                          border-b border-white/5 transition-colors">
              {l.label} <ExternalLink size={11} className="opacity-50 shrink-0"/>
            </a>
          ) : (
            <NavLink key={l.label} to={l.to}
              className={({isActive}) =>
                `flex items-center justify-between px-6 py-4 font-body text-[14px] tracking-widest uppercase
                 font-medium border-b border-white/5 transition-colors
                 ${isActive ? 'text-gold bg-white/5' : 'text-white/65 hover:text-gold hover:bg-white/5'}`}>
              {l.label} <ChevronRight size={13} className="opacity-30 shrink-0"/>
            </NavLink>
          ))}
        </nav>

        <div className="px-6 py-4 border-t border-white/10">
          <a href="tel:+918626823139" className="font-body text-gold/80 text-xs tracking-wider">+91 8626823139</a>
          <p className="font-body text-white/30 text-[0.6rem] mt-1">© 2024 Byool Farmstay</p>
        </div>
      </div>
    </>
  )
}
