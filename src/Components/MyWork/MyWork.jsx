import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='portfolio' className="mywork">
      <div className="mywork-title">
        <h2>My Latest Work</h2>
        <img src={theme_pattern} alt="" aria-hidden="true" className="theme-pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work) => (
          <div key={work.w_no} className="mywork-item">
            {work.w_url ? (
              <a href={work.w_url} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${work.w_name}`}>
                <img src={work.w_img} alt={work.w_name} />
              </a>
            ) : (
              <img src={work.w_img} alt={work.w_name} />
            )}
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <button>
          Show more <img src={arrow_icon} alt="" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default MyWork
