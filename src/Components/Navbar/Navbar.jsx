import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

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

      {/* Nav links drawer */}
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home" onClick={() => handleNavLinkClick("home")}>
            Home
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" aria-hidden="true" className="nav-underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => handleNavLinkClick("about")}>
            About Me
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" aria-hidden="true" className="nav-underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => handleNavLinkClick("services")}>
            Services
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" aria-hidden="true" className="nav-underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio" onClick={() => handleNavLinkClick("portfolio")}>
            Portfolio
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="" aria-hidden="true" className="nav-underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => handleNavLinkClick("contact")}>
            Contact
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" aria-hidden="true" className="nav-underline" />}
        </li>
      </ul>

      {/* Desktop connect button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>

      {/* Single animated hamburger ↔ X toggle */}
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
