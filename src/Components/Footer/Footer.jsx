import { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubStatus('Please enter a valid email address.')
      return
    }
    // Placeholder — hook up to a real service when ready
    setSubStatus('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <footer id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Joseph Maina" className='footer-logo' />
          <p>Frontend developer passionate about crafting clean, responsive, and engaging web experiences.</p>
        </div>

        <form className="footer-top-right" onSubmit={handleSubscribe} noValidate>
          <div className="footer-email-input">
            <img src={user_icon} alt="" aria-hidden="true" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for newsletter"
              name="subscriber-email"
            />
          </div>
          <button type="submit" className="footer-subscribe">Subscribe</button>
          {subStatus && <p className="footer-sub-status" role="alert">{subStatus}</p>}
        </form>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Joseph Maina. All rights reserved.</p>
        <nav className="footer-bottom-right" aria-label="Footer navigation">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
