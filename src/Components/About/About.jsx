import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <img src={theme_pattern} alt="" aria-hidden="true" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Joseph Maina" className="about-image" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a frontend developer with a strong passion for building clean, responsive, and user-friendly web experiences. I work with modern tools like React, JavaScript, HTML, and CSS to bring ideas to life.
            </p>
            <p>
              I'm constantly growing my skills and love taking on new challenges — from crafting pixel-perfect UIs to solving complex frontend problems.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <div
                className="about-skill-bar"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="HTML & CSS proficiency 85%"
              >
                <div className="about-skill-fill" style={{ width: '85%' }} />
              </div>
            </div>
            <div className="about-skill">
              <p>React & JS</p>
              <div
                className="about-skill-bar"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="React & JS proficiency 75%"
              >
                <div className="about-skill-fill" style={{ width: '75%' }} />
              </div>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <div
                className="about-skill-bar"
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="JavaScript proficiency 70%"
              >
                <div className="about-skill-fill" style={{ width: '70%' }} />
              </div>
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <div
                className="about-skill-bar"
                role="progressbar"
                aria-valuenow={55}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Node JS proficiency 55%"
              >
                <div className="about-skill-fill" style={{ width: '55%' }} />
              </div>
            </div>
          </div>

          <div className="about-achievements">
            <div className="about-achievement">
              <h3>2+</h3>
              <p>YEARS OF EXPERIENCE</p>
            </div>

            <div className="about-achievement-divider" aria-hidden="true" />

            <div className="about-achievement">
              <h3>20+</h3>
              <p>PROJECTS COMPLETED</p>
            </div>

            <div className="about-achievement-divider" aria-hidden="true" />

            <div className="about-achievement">
              <h3>5+</h3>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
