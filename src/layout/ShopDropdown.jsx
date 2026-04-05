import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS } from '../data/constants'
import { catalog } from '../pages/CategoryPage'
import './ShopDropdown.css'

const SHOP_CATEGORIES = [
  'FANS',
  'HEATERS',
  'PEDESTAL FANS',
  'HOME APPLIANCES',
  'SERIES',
  'SWITCHES & SOCKETS',
  'COOLERS',

]

const tabToSlug = {
  'FANS': 'fans',
  'HEATERS': 'heaters',
  'PEDESTAL FANS': 'pedestal-fans',
  'HOME APPLIANCES': 'home-appliances',
  'SERIES': 'series',
  'SWITCHES & SOCKETS': 'switches-sockets',
  'COOLERS': 'coolers',

}

function ShopDropdown({ onClose }) {
  const [activeSubCat, setActiveSubCat] = useState(SHOP_CATEGORIES[0])
  const navigate = useNavigate()

  // Determine which items to show directly from the massive catalog file
  const activeSlug = tabToSlug[activeSubCat] ?? 'fans'
  const subProducts = (catalog[activeSlug]?.products || []).slice(0, 4)

  return (
    <div className="shop-dropdown" id="shop-mega-menu">
      <div className="shop-dropdown__container">
        {/* Sub-Tabs Row */}
        <div className="sub-nav-row" style={{ flexWrap: 'wrap' }}>
    
          {SHOP_CATEGORIES.map((tab) => (
            <button
              key={tab}
              className={`sub-nav-link ${activeSubCat === tab ? 'active' : ''}`}
              onClick={() => setActiveSubCat(tab)}
            >
              {tab}
            </button>
          ))}
          <button
            className="sub-nav-link"
            onClick={() => { navigate('/shop/all-products'); onClose?.() }}
          >
            ALL PRODUCTS
          </button>
        </div>

        <div className="sub-product-grid">
          {subProducts.map((p, i) => (
            <div
              key={i}
              className="sub-product-card"
              onClick={() => { navigate(`/shop/${tabToSlug[activeSubCat] ?? 'fans'}`); onClose?.() }}
              style={{ cursor: 'pointer' }}
            >
              <h4 className="sub-product-title">{p.name}</h4>
              <div className="sub-product-img-wrap">
                <img src={p.img || p.image} alt={p.name} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="sub-view-all-btn-wrap">
          <button 
            className="sub-view-all-btn"
            onClick={() => { navigate(`/shop/${tabToSlug[activeSubCat] ?? 'fans'}`); onClose?.() }}
          >
            VIEW ALL IN {activeSubCat}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopDropdown
