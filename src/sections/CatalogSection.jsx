import React from 'react'
import './CatalogSection.css'

const CATALOGS = [
  {
    id: 1,
    title: 'FANS',
    year: '2025',
    description: 'Explore our latest collection of cinematic ceiling fans, pedestal fans, and silent air circulators.',
    url: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/catalouge/Raghav+Fan+2025_+(1).pdf',
    accent: '#e52222',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/BUGATTI+BLUE.png'
  },
  {
    id: 2,
    title: 'HOME APPLIANCES',
    year: '2024',
    description: 'Discover the future of home living with our premium kitchen, laundry, and heating solutions.',
    url: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/catalouge/Raghav+Home+Appliances+2024_.pdf',
    accent: '#111',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/AMAZE+MG.png'
  }
]

function CatalogSection() {
  return (
    <section className="catalog-section" id="catalogs">
      <div className="catalog-header">
        <span className="catalog-pretitle">The Archive</span>
        <h2 className="catalog-main-title">Digital <em>Catalogs</em></h2>
      </div>

      <div className="catalog-container">
        {CATALOGS.map((item) => (
          <div key={item.id} className="catalog-card">
            <div className="catalog-card__info">
              <div className="catalog-year">{item.year} EDITION</div>
              <h3 className="catalog-title">{item.title}</h3>
              <p className="catalog-desc">{item.description}</p>
              
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="catalog-btn"
                style={{ '--btn-accent': item.accent }}
              >
                <span>Download Catalog</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
            
            <div className="catalog-card__visual">
              <div className="catalog-visual-blob" style={{ background: item.accent }} />
              <img src={item.image} alt={item.title} className="catalog-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CatalogSection
