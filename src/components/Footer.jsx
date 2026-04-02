import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'

// Exact footer links from real site
const FOOTER_LINKS = [
  { label: 'About Us',      to: '/about' },
  { label: 'Rooms',         to: '/rooms' },
  { label: 'Food/Byool Cafe', to: '/food' },
  { label: 'Blog',          to: '/blog' },
  { label: 'Tariff',        to: '/tariff' },
  { label: 'Contact Us',    to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <img src="/assets/images/logo.png" alt="Byool Farmstay Logo" className="h-16 w-auto object-contain" />
            </div>
            <h4 className="font-display text-white text-lg font-light mb-2">About Byool Farmstay</h4>
            <p className="font-body text-white/55 text-base leading-[30px] leading-relaxed font-light">
              Escape to serenity at Byool Farmstay in Dharamshala, where rustic charm meets modern comfort amidst the breathtaking Himalayan landscape.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-lg font-light mb-5">Contact</h4>
            <div className="h-px w-8 bg-gold mb-5"/>
            <ul className="space-y-4">
              <li>
                <a href="tel:+918626823139"
                   className="flex items-start gap-3 text-white/55 hover:text-gold transition-colors text-base leading-[30px] font-body font-light">
                  <Phone size={14} className="mt-0.5 shrink-0 text-gold"/> +91 8626823139
                </a>
              </li>
              <li>
                <a href="mailto:byoolfarm@gmail.com"
                   className="flex items-start gap-3 text-white/55 hover:text-gold transition-colors text-base leading-[30px] font-body font-light">
                  <Mail size={14} className="mt-0.5 shrink-0 text-gold"/> byoolfarm@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/55 text-base leading-[30px] font-body font-light">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold"/>
                Uprehr, VPO Ramerh, Nagrota Bagwan, DHaramshala, 176052
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-lg font-light mb-5">Quick Links</h4>
            <div className="h-px w-8 bg-gold mb-5"/>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map(l => (
                <li key={l.label}>
                  <Link to={l.to}
                    className="text-white/55 hover:text-gold transition-colors text-base leading-[30px] font-body font-light
                               flex items-center gap-2 group">
                    <span className="w-2 h-px bg-gold/40 group-hover:w-4 group-hover:bg-gold transition-all duration-300"/>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="font-display text-white text-lg font-light mb-5">Book Your Stay</h4>
            <div className="h-px w-8 bg-gold mb-5"/>
            <p className="font-body text-white/55 text-base leading-[30px] font-light leading-relaxed mb-5">
              Book directly on Airbnb for instant confirmation.
            </p>
            <a href="https://www.airbnb.co.in/rooms/48947262" target="_blank" rel="noopener noreferrer"
               className="btn-gold-outline text-[0.65rem] py-2.5 px-5">
              Book on Airbnb
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/35 font-body text-xs font-light">
            Copyright © 2024 All Rights Reserved Byool Farmstay
          </p>
          <p className="text-white/25 font-body text-xs font-light">
            Designed and Maintained by Asiatech.in
          </p>
        </div>
      </div>
    </footer>
  )
}
