import React, { useState } from 'react'
import { FAM_TABS, PRODUCTS } from '../data/constants'
import './ShopDropdown.css'

function ShopDropdown() {
  const [activeSubCat, setActiveSubCat] = useState(FAM_TABS[0])

  // Get up to 3 products for the sub-view + "View All"
  const subProducts = PRODUCTS.filter(p => p.category === activeSubCat).slice(0, 3)

  return (
    <div className="shop-dropdown" id="shop-mega-menu">
      <div className="shop-dropdown__container">
        {/* Sub-Tabs Row */}
        <div className="sub-nav-row">
          <button className="sub-nav-link">NEW</button>
          {FAM_TABS.map((tab) => (
            <button 
              key={tab} 
              className={`sub-nav-link ${activeSubCat === tab ? 'active' : ''}`}
              onClick={() => setActiveSubCat(tab)}
            >
              {tab}
            </button>
          ))}
          <button className="sub-nav-link">ALL PRODUCTS</button>
        </div>

        {/* Product Grid */}
        <div className="sub-product-grid">
          {subProducts.map((p) => (
            <div key={p.id} className="sub-product-card">
              <h4 className="sub-product-title">{p.name}</h4>
              <div className="sub-product-img-wrap">
                <img src={p.image} alt={p.name} />
              </div>
            </div>
          ))}
          <div className="sub-product-card sub-product-card--view-all">
            <h4 className="sub-product-title">VIEW ALL</h4>
            <div className="sub-product-img-wrap empty" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopDropdown
