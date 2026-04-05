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
            <h3 className="category-card__name">
              {cat.name.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
            <div className="category-card__count"><span>{cat.count}</span> Products</div>
            <img className="category-card__image" src={cat.image} alt={cat.name} />
          </div>
        ))}
      </div>
      <div className="shop-by-section__footer">
        <button className="shop-by-section__btn">Show All Categories</button>
      </div>
    </section>
  )
}

export default ShopByCategorySection
