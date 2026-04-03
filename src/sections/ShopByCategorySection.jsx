import React from 'react'
import { CATEGORIES } from '../data/constants'
import './ShopByCategorySection.css'

function ShopByCategorySection() {
  return (
    <section className="shop-by-section" id="categories">
      <h2 className="shop-by-section__title">Shop by Function<br />and Category</h2>
      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div className="category-card" key={cat.id} id={`category-${cat.id}`}>
            <h3 className="category-card__name">{cat.name}</h3>
            <div className="category-card__count"><span>{cat.count}</span> Products</div>
            <img className="category-card__image" src={cat.image} alt={cat.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ShopByCategorySection
