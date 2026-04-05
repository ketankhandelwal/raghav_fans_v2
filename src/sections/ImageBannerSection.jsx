import React from 'react'
import { IMAGE_BANNERS } from '../data/constants'
import './ImageBannerSection.css'

function ImageBannerSection() {
  const [top1, top2, bot1, bot2, bot3] = IMAGE_BANNERS

  return (
    <section id="brands" className="ib-section">
      <h2 className="ib-section__title">Discover Our Brands</h2>

      {/* Top Row: 3/4 + 1/4 */}
      <div className="ib-top-row">
        {top1 && (
          <div className="ib-card">
            <img src={top1.image} alt={top1.brand} />
          </div>
        )}
        {top2 && (
          <div className="ib-card">
            <img src={top2.image} alt={top2.brand} />
          </div>
        )}
      </div>

      {/* Bottom Row: 1/3 + 1/3 + 1/3 */}
      <div className="ib-bottom-row">
        {[bot1, bot2, bot3].filter(Boolean).map((b) => (
          <div key={b.id} className="ib-card">
            <img src={b.image} alt={b.brand} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageBannerSection
