import React from 'react'
import './FullWidthBanner.css'

function FullWidthBanner({ 
  image = "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/switches_range.png",
  subtitle = "Experience the next generation of SWITCHING.",
  buttonText = "Explore the Collection"
}) {
  return (
    <section className="full-width-banner">
      <div className="full-width-banner__overlay">
        <p className="full-width-banner__subtitle">{subtitle}</p>
        {/* <button className="full-width-banner__btn">{buttonText}</button> */}
      </div>
      <img 
        className="full-width-banner__image"
        src={image} 
        alt="RAGHAV FANS Banner"
      />
    </section>
  )
}

export default FullWidthBanner
