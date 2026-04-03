import React from 'react'
import './FullWidthBanner.css'

function FullWidthBanner() {
  return (
    <section className="full-width-banner">
      <div className="full-width-banner__overlay">
        <h2 className="full-width-banner__title">Silent. Powerful. RAGHAV FANS.</h2>
        <p className="full-width-banner__subtitle">Experience the next generation of air circulation.</p>
        <button className="full-width-banner__btn">Explore the Collection</button>
      </div>
      <img 
        className="full-width-banner__image"
        src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=1600&q=80" 
        alt="RAGHAV FANS Lifestyle"
      />
    </section>
  )
}

export default FullWidthBanner
