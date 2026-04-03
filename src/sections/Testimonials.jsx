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

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-pretitle">Customer Stories</span>
        <h2 className="testimonials-title">Don't just take our word for it</h2>
      </div>

      <div className="testimonials-grid">
        {REVIEWS.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <p className="testimonial-text">"{review.text}"</p>
            <div className="testimonial-author">
              <img src={review.avatar} alt={review.name} className="author-avatar" />
              <div className="author-info">
                <span className="author-name">{review.name}</span>
                <span className="author-role">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
