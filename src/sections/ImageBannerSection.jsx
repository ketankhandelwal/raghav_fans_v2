import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ImageBannerSection.css'

const PRODUCT_TILES = [
  {
    label: 'Ceiling Fans',
    tagline: 'Style meets airflow',
    slug: 'fans',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/BUGATTI+BLUE.png',
    gradient: 'linear-gradient(135deg, #1a2f5e 0%, #3d5aa8 100%)',
  },
  {
    label: 'Pedestal',
    tagline: 'Powerful & portable',
    slug: 'pedestal-fans',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/PEDESTAL+FANS/THUNDER.png',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
  },
  {
    label: 'Home Appliances',
    tagline: 'Smart everyday living',
    slug: 'home-appliances',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/MAGIC+2.png',
    gradient: 'linear-gradient(135deg, #c0111f 0%, #f43f5e 100%)',
  },
  {
    label: 'Series',
    tagline: 'Premium switch range',
    slug: 'series',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/SERIES/1.png',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)',
  },
  {
    label: 'Geyser',
    tagline: 'Instant hot water',
    slug: 'heaters',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/WARMER+GAS+GEYSER.png',
    gradient: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
  },
  {
    label: 'Coolers',
    tagline: 'Beat the summer',
    slug: 'coolers',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/COOLERS/6.1.png',
    gradient: 'linear-gradient(135deg, #0369a1 0%, #38bdf8 100%)',
  },
]

function ImageBannerSection() {
  const navigate = useNavigate()

  return (
    <section id="brands" className="ib-section">
      <h2 className="ib-section__title">Discover Our Products</h2>

      <div className="ib-grid">
        {PRODUCT_TILES.map((tile) => (
          <button
            key={tile.slug}
            type="button"
            className="ib-card"
            style={{ background: tile.gradient }}
            onClick={() => navigate(`/shop/${tile.slug}`)}
          >
            <div className="ib-card__text">
              <span className="ib-card__label">{tile.label}</span>
              <span className="ib-card__tagline">{tile.tagline}</span>
              <span className="ib-card__cta">Shop now →</span>
            </div>
            <div className="ib-card__image-wrap">
              <img src={tile.image} alt={tile.label} />
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ImageBannerSection
