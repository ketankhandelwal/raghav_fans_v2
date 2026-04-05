import React from 'react'
import { useNavigate } from 'react-router-dom'
import './StudioSection.css'

function StudioSection() {
  const navigate = useNavigate()

  return (
    <section className="studio-section" id="studio">
      <div className="studio-section__content">
        <span className="studio-section__badge">MASTER-PIECES</span>
        <h2 className="studio-section__headline">
          Live from the<br />RAGHAV <em>Showroom</em>
        </h2>
        <p className="studio-section__body">
          Experience the perfect blend of innovation and design with our latest collection.
        </p>

        <div className="studio-section__actions">
          <button 
            className="studio-section__btn" 
            id="btn-book-demo"
            onClick={() => {
              window.scrollTo(0, 0)
              navigate('/contact')
            }}
          >
            CONTACT US
          </button>
          <button 
          className="studio-section__btn-outline"
          onClick={() => {
            window.scrollTo(0, 0)
            navigate('/contact')
          }}
          >VISIT SHOWROOM</button>
        </div>
      </div>

      <div className="studio-section__image-wrap">
        <div className="studio-image-overlay">
          {/* Added the play icon so your CSS transitions work */}
           
        </div>
        <img
          src="https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/combine_ss.png"
          alt="RAGHAV FANS Studio Demo"
        />
      </div>
    </section>
  )
}

export default StudioSection