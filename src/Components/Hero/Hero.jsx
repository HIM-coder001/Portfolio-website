import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="hero-image" src={profile_img} alt="Joseph Maina profile photo" />
      <h1 className="hero-title">
        <span>I'm Alex</span>, a frontend developer based in Kenya.
      </h1>
      <p className="hero-subtitle">
        A passionate frontend developer from Kenya with hands-on experience building modern, responsive web applications.
      </p>
      <div className="hero-action">
        <AnchorLink className="hero-button hero-connect" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
        <a
          className="hero-button hero-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my resume (opens in new tab)"
        >
          My Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
