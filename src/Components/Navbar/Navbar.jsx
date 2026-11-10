import { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  const handleNavLinkClick = (link) => {
    setMenu(link)
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <img src={logo} alt="Joseph Maina Logo" className="nav-logo" />

      {/* Hamburger open button — always rendered, visibility via CSS */}
      <button
        className="nav-mob-open"
        onClick={openMenu}
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
      >
        <img src={menu_open} alt="" />
      </button>

      {/* Overlay behind menu */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} role="list">
        <button
          className="nav-mob-close"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          <img src={menu_close} alt="" />
        </button>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home" onClick={() => handleNavLinkClick("home")}>
            Home
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" aria-hidden="true" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => handleNavLinkClick("about")}>
            About Me
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" aria-hidden="true" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => handleNavLinkClick("services")}>
            Services
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" aria-hidden="true" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio" onClick={() => handleNavLinkClick("portfolio")}>
            Portfolio
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt="" aria-hidden="true" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => handleNavLinkClick("contact")}>
            Contact
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" aria-hidden="true" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  )
}

export default Navbar
