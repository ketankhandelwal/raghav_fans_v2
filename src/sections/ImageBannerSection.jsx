import React from 'react'
import { IMAGE_BANNERS } from '../data/constants'

function ImageBannerSection() {
  const [top1, top2, bot1, bot2, bot3] = IMAGE_BANNERS

  return (
    <section id="brands" style={{ padding: '48px 40px', background: '#f4f4f4' }}>
      <h2 style={{ fontSize: 26, fontWeight: 900, color: '#111', margin: '0 0 20px' }}>
        Discover Our Brands
      </h2>

      {/* Top Row: 3/4 + 1/4 */}
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 14, marginBottom: 14 }}>
        {top1 && (
          <div style={{ borderRadius: 18, overflow: 'hidden', cursor: 'pointer' }}>
            <img
              src={top1.image}
              alt={top1.brand}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
        {top2 && (
          <div style={{ borderRadius: 18, overflow: 'hidden', cursor: 'pointer' }}>
            <img
              src={top2.image}
              alt={top2.brand}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}
      </div>

      {/* Bottom Row: 1/3 + 1/3 + 1/3 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {[bot1, bot2, bot3].filter(Boolean).map((b) => (
          <div key={b.id} style={{ borderRadius: 18, overflow: 'hidden', cursor: 'pointer' }}>
            <img
              src={b.image}
              alt={b.brand}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageBannerSection