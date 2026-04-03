import React from 'react'
import './Testimonials.css'

const REVIEWS = [
  {
    id: 1,
    name: "Vikram Mehta",
    role: "Architect",
    text: "The HĀLO v2 is unlike any fan I've owned. It's truly silent and the mood lighting adds a premium touch to my studio space. Highly recommend for minimalists.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Home Maker",
    text: "Finally, a fan that's easy to clean and works perfectly with my home decor. The BFF hand fan is a life-saver during my commute as well!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    id: 3,
    name: "Rahul Khanna",
    role: "Tech Enthusiast",
    text: "The suction power on the REN PRO is incredible. It handles pet hair like a charm. RAGHAV FANS products are definitely ahead of the curve in terms of design.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  }
]

const StarIcon = () => (
  <svg className="ts-star-svg" viewBox="0 0 14 14" fill="currentColor">
    <polygon points="7,1 9,5.5 14,6 10.5,9.5 11.5,14 7,11.5 2.5,14 3.5,9.5 0,6 5,5.5" />
  </svg>
)

const CheckIcon = ({ color }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6L5 9L10 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Testimonials() {
  return (
    <section className="ts-root">
      <div className="ts-bg-num">3★</div>

      <div className="ts-header">
        <div>
          <div className="ts-pretitle">
            <div className="ts-pretitle-line" />
            <span className="ts-pretitle-text">Customer Stories</span>
          </div>
          <h2 className="ts-title">
            Don't just take<br /><em>our word</em> for it
          </h2>
        </div>
        <div className="ts-stats">
          <div className="ts-stat-num">4.8★</div>
          <div className="ts-stat-label">Average Rating</div>
        </div>
      </div>

      <div className="ts-grid">
        {REVIEWS.map((review, index) => {
          const isFeatured = index === 0
          return (
            <div key={review.id} className={`ts-card ${isFeatured ? 'ts-card--featured' : ''}`}>
              <div className="ts-card-accent" />
              <span className="ts-quote-mark">"</span>

              <div className="ts-stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`ts-star ${i < review.rating ? 'ts-star--filled' : 'ts-star--empty'}`}
                  >
                    <StarIcon />
                  </span>
                ))}
              </div>

              <p className="ts-text">{review.text}</p>

              <div className="ts-author">
                <div className="ts-avatar-wrap">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="ts-avatar"
                  />
                  <div className="ts-avatar-ring" />
                </div>
                <div>
                  <div className="ts-name">{review.name}</div>
                  <div className="ts-role">{review.role}</div>
                </div>
                <div className="ts-verified">
                  <CheckIcon color={isFeatured ? 'rgba(0,0,0,0.6)' : '#e52222'} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="ts-bottom-strip">
        <div className="ts-bottom-label">Verified Buyers</div>
        <div className="ts-bottom-line" />
        <div className="ts-logo-badge">
          <div className="ts-logo-dot" />
          <span className="ts-logo-text">Raghav Fans</span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials