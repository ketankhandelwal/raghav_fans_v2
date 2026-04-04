import React, { useState } from 'react'
import { PRODUCTS, FAM_TABS, FAM_TABS_DATA } from '../data/constants'
import ProductCard from '../components/ProductCard'
import './MeetTheFam.css'

function MeetTheFam() {
  const [activeCategory, setActiveCategory] = useState(FAM_TABS[0])

  // Filter products for the sidebar
  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory)
  
  // Get hero images for the current category
  const activeHeroes = FAM_TABS_DATA.find(t => t.category === activeCategory)?.heroes || []

  return (
    <section className="meet-fam-section" id="meet-fam">
      <div className="meet-fam-container">
        {/* Left Side: Headline and Tabs */}
        <div className="meet-fam-left">
          <h2 className="meet-fam-headline">
            Meet the <span className="highlight">RAGHAV FANS</span><br />
            <span className="highlight">fam!</span>
          </h2>

          <div className="meet-fam-tabs">
            {FAM_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`fam-tab-v2${tab === activeCategory ? ' active' : ''}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Vertical Scroll Section */}
        <div className="meet-fam-sidebar">

          <div className="sidebar-scroll-wrapper">
            {activeHeroes.length > 0 ? (
              activeHeroes.map((hero, idx) => (
                <ProductCard 
                  key={`${activeCategory}-hero-card-${idx}`} 
                  product={{
                    id: `hero-${idx}-${activeCategory}`,
                    name: `${activeCategory} Special Edition`,
                    subtitle: "Limited Premium Design",
                    tagline: "Experience the pinnacle of RAGHAV FANS craftsmanship.",
                    image: hero,
                    badges: ['new'],
                    rating: '4.9',
                    ratingCount: '12',
                    colors: ['#111', '#eee'],
                    price: 'On Request',
                    emi: null
                  }} 
                />
              ))
            ) : (
              <div className="no-products">Discovery items coming soon!</div>
            )}
          </div>
        </div>
      </div>

      {/* Hero images — absolute to section, not to left column */}
      <div className="meet-fam-visuals">
        {activeHeroes.map((hero, idx) => (
          <img
            key={`${activeCategory}-hero-${idx}`}
            src={hero}
            alt={`${activeCategory} Hero ${idx + 1}`}
            className="hero-cutout anim-fade-in"
          />
        ))}
      </div>
    </section>
  )
}

export default MeetTheFam
