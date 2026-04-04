import React from 'react'
import './FullWidthBanner.css'

function FullWidthBanner() {
  return (
    <section className="full-width-banner">
      <div className="full-width-banner__overlay">
        <p className="full-width-banner__subtitle">Experience the next generation of air circulation.</p>
        <button className="full-width-banner__btn">Explore the Collection</button>
      </div>
      <img 
        className="full-width-banner__image"
        src="https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/switches_range.png" 
        alt="RAGHAV FANS Lifestyle"
      />
    </section>
  )
}

export default FullWidthBanner
