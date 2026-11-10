import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h2>My Services</h2>
        <img src={theme_pattern} alt="" aria-hidden="true" />
      </div>

      <div className="services-container">
        {Services_Data.map((service) => (
          <div key={service.s_no} className="services-format">
            <h3>{service.s_no}</h3>
            <h4>{service.s_name}</h4>
            <p>{service.s_desc}</p>
            <button className="services-readmore" aria-label={`Read more about ${service.s_name}`}>
              <span>Read More</span>
              <img src={arrow_icon} alt="" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
