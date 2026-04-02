import { useState } from 'react'
import { Send, CheckCircle, Navigation } from 'lucide-react'
import PageBanner from '../components/PageBanner'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const inp = field =>
    `w-full font-body text-base leading-[30px] px-4 py-3 border bg-white focus:outline-none focus:border-dark transition-colors ${errors[field] ? 'border-red-400' : 'border-border'}`

  return (
    <div>
      <PageBanner title="Contact Us"
        image="/assets/images/rooms/room-4.jpg"
        crumbs={[{label:'HOME',to:'/'},{label:'CONTACT'}]}/>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left */}
            <div>
              <h2 className="font-display text-dark text-[28px] md:text-[40px] font-bold uppercase tracking-wide tracking-wide mb-2">
                Byool Farmstay Location
              </h2>
              <div className="h-px w-8 bg-gold mb-6"/>
              <p className="font-body text-body text-base leading-[30px] font-light leading-relaxed mb-8">
                Experience serenity at Byool Farmstay Dharamshala, where lush greenery meets cozy cottages nestled in the Himalayan foothills. Unwind in nature's embrace and relish farm-fresh delights amidst breathtaking mountain vistas.
              </p>
              <a href="https://maps.app.goo.gl/dbW62MCgvLD2UYfX6" target="_blank" rel="noopener noreferrer"
                 className="btn-black inline-flex items-center gap-2 mb-10">
                <Navigation size={13}/> GET DIRECTIONS
              </a>

              <div className="space-y-6">
                <div>
                  <p className="font-body text-[0.65rem] text-gold tracking-[0.3em] uppercase font-medium mb-1">PHONE</p>
                  <a href="tel:+918626823139" className="font-body text-dark text-base hover:text-gold transition-colors">
                    +91 8626823139
                  </a>
                </div>
                <div>
                  <p className="font-body text-[0.65rem] text-gold tracking-[0.3em] uppercase font-medium mb-1">E-MAIL</p>
                  <a href="mailto:byoolfarm@gmail.com" className="font-body text-dark text-base hover:text-gold transition-colors">
                    byoolfarm@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-body text-[0.65rem] text-gold tracking-[0.3em] uppercase font-medium mb-1">ADDRESS</p>
                  <p className="font-body text-dark text-base leading-relaxed">
                    Uprehr, VPO Ramerh, Nagrota Bagwan, Dharamshala, 176052
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 bg-offwhite px-8 h-full border border-border">
                  <CheckCircle size={52} className="text-gold mb-5"/>
                  <h3 className="font-display text-dark text-2xl font-light mb-3">Message Sent!</h3>
                  <p className="font-body text-body text-base leading-[30px] font-light leading-relaxed max-w-sm">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({name:'',email:'',phone:'',message:''}) }}
                    className="btn-dark mt-8">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-offwhite border border-border p-8 md:p-10">
                  <h3 className="font-display text-dark text-2xl font-light tracking-wide mb-8">Contact form</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="font-body text-[0.65rem] text-muted uppercase tracking-widest block mb-2">
                        Name <span className="text-gold">*</span>
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                             placeholder="Your Name" className={inp('name')}/>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="font-body text-[0.65rem] text-muted uppercase tracking-widest block mb-2">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                             placeholder="Your Email" className={inp('email')}/>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="font-body text-[0.65rem] text-muted uppercase tracking-widest block mb-2">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                           placeholder="Your Phone Number" className={inp('phone')}/>
                  </div>
                  <div className="mb-8">
                    <label className="font-body text-[0.65rem] text-muted uppercase tracking-widest block mb-2">
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                              placeholder="Your Message" rows={5}
                              className={`${inp('message')} resize-none`}/>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-black inline-flex items-center gap-2">
                    Send Message <Send size={12}/>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto border border-border overflow-hidden">
          <iframe
            title="Byool Farmstay Location"
            src="https://maps.google.com/maps?q=Uprehr,+VPO+Ramerh,+Nagrota+Bagwan,+Dharamshala,+176052&output=embed"
            width="100%" height="420" style={{border:0}}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>
      </section>
    </div>
  )
}
