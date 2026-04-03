import React from 'react'
import './StudioSection.css'

function StudioSection() {
  return (
    <section className="studio-section" id="studio">
      <div className="studio-section__content">
        <h2 className="studio-section__headline">Live<br />from the<br />RAGHAV FANS Studio</h2>
        <p className="studio-section__body">
          Join our product demos to see how form meets function with our latest launch REN PRO
        </p>
        <button className="studio-section__btn" id="btn-book-demo">Book Live Demo</button>
      </div>
      <div className="studio-section__image-wrap">
        <img
          src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80"
          alt="RAGHAV FANS Studio Demo"
        />
      </div>
    </section>
  )
}

export default StudioSection
