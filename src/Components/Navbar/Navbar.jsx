import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NAV_SECTIONS = ['home', 'about', 'services', 'portfolio', 'contact']

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll detection for navbar colour change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver — updates active link as sections scroll into view
  useEffect(() => {
    const observers = []

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setMenu(id)
        },
        { threshold: 0.35 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const handleNavLinkClick = (link) => {
    setMenu(link)
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <img src={logo} alt="Joseph Maina Logo" className="nav-logo" />

      {/* Overlay */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Nav links */}
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {[
          { id: 'home',      label: 'Home' },
          { id: 'about',     label: 'About Me' },
          { id: 'services',  label: 'Services' },
          { id: 'portfolio', label: 'Portfolio' },
          { id: 'contact',   label: 'Contact' },
        ].map(({ id, label }) => (
          <li key={id}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${id}`}
              onClick={() => handleNavLinkClick(id)}
            >
              {label}
            </AnchorLink>
            {menu === id && (
              <img src={underline} alt="" aria-hidden="true" className="nav-underline" />
            )}
          </li>
        ))}
      </ul>

      {/* Desktop connect button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>

      {/* Animated hamburger ↔ X */}
      <button
        className={`nav-hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}

export default Navbar
