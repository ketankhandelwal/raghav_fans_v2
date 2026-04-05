import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const REVIEWS = [
  {
    id: 1,
    name: 'Vikram Mehta',
    role: 'Architect, Delhi',
    product: 'Bugatti Blue Fan',
    short: '"Genuinely silent. My studio has never felt this premium."',
    text: 'The Bugatti Blue is unlike any ceiling fan I have owned. Whisper-silent at full speed, and the finish is immaculate. It completely elevated the aesthetic of my design studio. Every client asks about it.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    color: '#e8192c',
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    role: 'Home Maker, Pune',
    product: 'Flora Ivory Gold',
    short: '"Looks like a piece of art hanging from the ceiling."',
    text: 'The Flora Ivory Gold is absolutely gorgeous. It matches my living room decor perfectly. The airflow is strong and surprisingly quiet. My guests always notice it first — best purchase this year.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    color: '#1a1a1a',
  },
  {
    id: 3,
    name: 'Rahul Khanna',
    role: 'Tech Lead, Bengaluru',
    product: 'Halcyon Room Heater',
    short: '"Heats my room in under 3 minutes. Absolute game changer."',
    text: 'The Halcyon heater is compact but incredibly powerful. I use it every morning and it warms my bedroom faster than any heater I have tried before. The safety cut-off gives me full peace of mind.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    color: '#e8192c',
  },
  {
    id: 4,
    name: 'Priya Nair',
    role: 'Interior Designer, Mumbai',
    product: 'Fortune Copper Fan',
    short: '"The copper finish is breathtaking in warm lighting."',
    text: 'I specified the Fortune Copper for a client project and the result was stunning. Raghav Fans really understand that a ceiling fan is not just functional — it is the crown jewel of a room.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    color: '#1a1a1a',
  },
  {
    id: 5,
    name: 'Suresh Patel',
    role: 'Business Owner, Ahmedabad',
    product: 'Amaze MG Mixer',
    short: '"Used it daily for 2 years. Not a single issue."',
    text: 'The Amaze MG is a workhorse. My wife runs it at least twice a day and it has never skipped a beat. The build quality is solid and the motor is impressively powerful for its price point.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    color: '#e8192c',
  },
  {
    id: 6,
    name: 'Meera Iyer',
    role: 'Professor, Chennai',
    product: 'Polo Brown Fan',
    short: '"Classic look, modern performance. Perfect combination."',
    text: 'I was skeptical about ordering online but Raghav Fans delivered beyond expectations. The Polo Brown looks exactly as described and runs so smoothly. Excellent after-sales support too.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80',
    color: '#1a1a1a',
  },
]

function StarRow({ rating }) {
  return (
    <div className="ts2-stars">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`ts2-star ${i <= rating ? 'ts2-star--on' : ''}`}>★</span>
      ))}
    </div>
  )
}

function FlipCard({ review, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    gsap.fromTo(el,
      { y: 60, opacity: 0, rotateY: -8 },
      {
        y: 0, opacity: 1, rotateY: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }
    )
  }, [index])

  return (
    <div className="ts2-flip-scene" ref={cardRef}>
      <div className="ts2-flip-card">

        {/* ── FRONT ── */}
        <div className="ts2-face ts2-face--front">
          <div className="ts2-face-deco" style={{ background: review.color }} />

          <div className="ts2-front-top">
            <StarRow rating={review.rating} />
            <span className="ts2-product-chip">{review.product}</span>
          </div>

          <blockquote className="ts2-short">{review.short}</blockquote>

          <div className="ts2-author-row">
            <img src={review.avatar} alt={review.name} className="ts2-avatar" />
            <div>
              <p className="ts2-name">{review.name}</p>
              <p className="ts2-role">{review.role}</p>
            </div>
          </div>

          <span className="ts2-flip-hint">Hover to read more →</span>
        </div>

        {/* ── BACK ── */}
        <div className="ts2-face ts2-face--back" style={{ '--accent': review.color }}>
          <span className="ts2-back-quote">"</span>
          <p className="ts2-full-text">{review.text}</p>

          <div className="ts2-back-author">
            <img src={review.avatar} alt={review.name} className="ts2-avatar ts2-avatar--sm" />
            <div>
              <p className="ts2-name ts2-name--dark">{review.name}</p>
              <p className="ts2-role ts2-role--dark">{review.role}</p>
            </div>
            <span className="ts2-verified">✓ Verified</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Testimonials() {
  const headRef = useRef(null)

  useEffect(() => {
    const el = headRef.current
    gsap.fromTo(el.querySelectorAll('.ts2-anim'),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      }
    )
  }, [])

  return (
    <section className="ts2-section">

      {/* ── decorative large cursive bg text ── */}
      <div className="ts2-bg-word" aria-hidden>Reviews</div>

      <div className="ts2-inner">

        {/* ── Header ── */}
        <div className="ts2-header" ref={headRef}>
          <div className="ts2-eyebrow ts2-anim">
            <span className="ts2-eyebrow-line" />
            Customer Stories
            <span className="ts2-eyebrow-line" />
          </div>

          <h2 className="ts2-heading ts2-anim">
            What our customers
            <span className="ts2-heading-cursive"><em> say about us</em></span>
          </h2>

          <p className="ts2-sub ts2-anim">
            Over 50,000 happy homes across India trust Raghav Fans for quality,
            style, and after-sales care.
          </p>

          <div className="ts2-rating-pill ts2-anim">
            <span className="ts2-big-star">★</span>
            <span className="ts2-big-score">4.9</span>
            <span className="ts2-big-label">from 12,000+ reviews</span>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="ts2-grid">
          {REVIEWS.map((r, i) => (
            <FlipCard key={r.id} review={r} index={i} />
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <div className="ts2-strip">
          <span className="ts2-strip-text">Trusted by 50,000+ homes across India</span>
          <div className="ts2-strip-dots">
            {[...Array(5)].map((_, i) => <span key={i} className="ts2-strip-dot" />)}
          </div>
          <span className="ts2-strip-brand">Raghav Fans®</span>
        </div>

      </div>
    </section>
  )
}
