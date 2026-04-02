import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import Home         from './pages/Home'
import About        from './pages/About'
import Rooms        from './pages/Rooms'
import Dining       from './pages/Dining'
import Food         from './pages/Food'
import Gallery      from './pages/Gallery'
import ThingsToDo   from './pages/ThingsToDo'
import Contact      from './pages/Contact'
import Blog         from './pages/Blog'
import Amenities    from './pages/Amenities'
import Packages     from './pages/Packages'
import Tariff       from './pages/Tariff'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/about"         element={<About />} />
        <Route path="/rooms"         element={<Rooms />} />
        <Route path="/dining"        element={<Dining />} />
        <Route path="/food"          element={<Food />} />
        <Route path="/gallery"       element={<Gallery />} />
        <Route path="/things-to-do"  element={<ThingsToDo />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/blog"          element={<Blog />} />
        <Route path="/amenities"     element={<Amenities />} />
        <Route path="/packages"      element={<Packages />} />
        <Route path="/tariff"        element={<Tariff />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
