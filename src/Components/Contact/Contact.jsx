import { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    const formData = new FormData(event.target)
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "4312bd60-1c5a-4e37-80ef-5a1572431bc3")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData))
      }).then((r) => r.json())

      if (res.success) {
        setStatus({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' })
        event.target.reset()
      } else {
        setStatus({ type: 'error', message: res.message || 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h2>Get In Touch</h2>
        <img src={theme_pattern} alt="" aria-hidden="true" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's Talk</h3>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything you'd like me to work on. You can contact me anytime.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>josekamaemaina2005@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Eldoret, Kenya</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+254 768-232-443</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right' noValidate>
          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder='Enter your name'
            name='name'
            required
            autoComplete="name"
          />

          <label htmlFor="contact-email">Your Email</label>
          <input
            id="contact-email"
            type="email"
            placeholder='Enter your email'
            name='email'
            required
            autoComplete="email"
          />

          <label htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="8"
            placeholder='Enter your message'
            required
          />

          {status.message && (
            <p className={`contact-status contact-status--${status.type}`} role="alert">
              {status.message}
            </p>
          )}

          <button type='submit' className='contact-submit' disabled={loading}>
            {loading ? 'Sending...' : 'Submit Now'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
