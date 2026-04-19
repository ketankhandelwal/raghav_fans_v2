import React from 'react'
import { PRODUCTS } from '../data/constants'
import ProductCard from '../components/ProductCard'
import './SeasonSection.css'

function SeasonSection() {
  return (
    <section id="season" className="season-section">
      <h2 className="section-label">Bestsellers this season</h2>
      <div className="product-scroll-wrapper">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} showPrice={false} />
        ))}
      </div>
    </section>
  )
}

export default SeasonSection