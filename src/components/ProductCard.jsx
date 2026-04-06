import React from 'react'
import { badgeLabel } from '../data/constants'
import './ProductCard.css'

const waUrl = (name) =>
  `https://wa.me/917983881769?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(name)}!`

function ProductCard({ product }) {
  const hasHover = !!product.imageHover

  return (
    <div className={`product-card ${hasHover ? 'product-card--has-hover' : ''}`} id={`product-${product.id}`}>
      {/* Product Image & Badges */}
      <div className="product-card__image-container">
        <div className="product-card__image-wrap">
          <img className="product-img-base" src={product.image} alt={product.name} />
          {product.imageHover && <img className="product-img-hover" src={product.imageHover} alt={`${product.name} Hover`} />}
        </div>
        <div className="product-card__badge">
          {product.badges.map((b) => (
            <span key={b} className={`badge badge--${b}`}>
              {b === 'award' && (
                <span className="badge-award-icon">
                  ★<br />2025
                </span>
              )}
              {badgeLabel(b)}
            </span>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="product-card__rating">
        <span className="rating-star">★ {product.rating}</span>
        <span className="rating-count">({product.ratingCount})</span>
      </div>

      {/* Name & Description */}
      <div className="product-card__name">{product.name}</div>
      <div className="product-card__subtitle">{product.subtitle}</div>
      <div className="product-card__tagline">{product.tagline}</div>

      {/* Color Swatches */}
      {product.colors.length > 0 && (
        <div className="product-card__colors">
          {product.colors.slice(0, 4).map((c, i) => (
            <span key={i} className="color-dot" style={{ background: c }} />
          ))}
          {product.colors.length > 4 && <span className="color-more">+{product.colors.length - 4}</span>}
        </div>
      )}

      {/* Pricing & CTA Row */}
      <div className="product-card__footer">
        <div className="product-card__pricing">
          {product.priceOld && <div className="product-card__price-old">{product.priceOld}</div>}
          <div className="product-card__price">{product.price}</div>
        </div>
        <a
          href={waUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card__add-btn"
          id={`add-to-cart-${product.id}`}
        >
          ENQUIRE NOW
        </a>
      </div>

      {/* EMI Below Footer Row */}
      {product.emi && (
        <div className="product-card__emi">
          {product.emi}
          <span className="emi-tag-pill">Buy on EMI ▶</span>
        </div>
      )}
    </div>
  )
}

export default ProductCard