import React from 'react'
import './NuukInsiders.css'

const INSIDER_IMAGES = [
  "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?w=400&h=600&q=80",
  "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1521334885634-954770305845?w=400&h=600&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1626245970176-02e088d8b672?w=400&h=500&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&q=80",
]

function NuukInsiders() {
  return (
    <section className="insiders-section">
      <div className="insiders-container">
        {/* Left: Text Content */}
        <div className="insiders-text-col">
          <div className="insiders-header">
            <span className="insiders-pre">Meet the</span>
            <h2 className="insiders-RAGHAV FANS">RAGHAV FANS</h2>
            <div className="insiders-pill">
              <span className="insiders-main">Insiders</span>
            </div>
            <p className="insiders-tagline">Real people, real Nuuks</p>
          </div>
        </div>

        {/* Right: Image Collage */}
        <div className="insiders-visual-col">
          <div className="insiders-grid">
            {INSIDER_IMAGES.map((img, i) => (
              <div key={i} className={`insiders-item item-${i + 1}`}>
                <img src={img} alt={`Insider Lifestyle ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NuukInsiders
