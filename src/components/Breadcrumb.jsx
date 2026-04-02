import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ crumbs }) {
  return (
    <nav className="flex items-center gap-2 font-body text-[0.7rem] text-muted uppercase tracking-widest font-medium">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight size={11} className="text-muted/40"/>}
          {c.to
            ? <Link to={c.to} className="hover:text-gold transition-colors">{c.label}</Link>
            : <span className="text-dark font-semibold">{c.label}</span>}
        </span>
      ))}
    </nav>
  )
}
