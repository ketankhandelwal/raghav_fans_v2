import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <span className="hero__text-that">THAT</span>
        <span className="hero__text-rises">RISES</span>
      </div>
      <div className="hero__text-right">
        <span className="hero__text-to-every">TO EVERY</span>
        <span className="hero__text-occasion">OCASSION</span>
      </div>
      <img
        className="hero__image"
        src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=700&q=80"
        alt="RAGHAV FANS Fan"
      />
      <a href="#shop" className="hero__shop-btn" id="hero-shop-now">SHOP NOW</a>
    </section>
  )
}

export default Hero
