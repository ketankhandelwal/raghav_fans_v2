import { useEffect, useRef, useState } from 'react'

const CATALOGS = [
  {
    id: 1,
    title: 'Fans',
    accentWord: '2026',
    year: '2026 Edition',
    tag: 'New Arrivals',
    description: 'Cinematic ceiling fans, pedestal fans, and silent air circulators built for modern living.',
    url: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/catalouge/Raghav+Fan+2025_+(1).pdf',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/ceiling_fans/CEILING+FANS/BUGATTI+BLUE.png',
    color: '#E8271C',
    cardBg: 'linear-gradient(135deg,#FFFFFF 0%,#FFF4F2 60%,#FFE8E5 100%)',
    badgeBg: '#FFE8E6',
    badgeColor: '#C0190F',
    glowColor: 'rgba(232,39,28,0.6)',
    shadowColor: 'rgba(232,39,28,0.15)',
    stripeColor: '#E8271C',
  },
  {
    id: 2,
    title: 'Home',
    accentWord: 'Appliances',
    year: '2026 Edition',
    tag: '2026 Edition',
    description: 'Premium kitchen, laundry, and heating solutions that transform everyday living.',
    url: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/catalouge/Raghav+Home+Appliances+2024_.pdf',
    image: 'https://raghav-fans.s3.ap-southeast-1.amazonaws.com/HOME+APPLIANCES/AMAZE+MG.png',
    color: '#3B5CE8',
    cardBg: 'linear-gradient(135deg,#FFFFFF 0%,#F0F4FF 60%,#E3EBFF 100%)',
    badgeBg: '#E3EBFF',
    badgeColor: '#2B4FC0',
    glowColor: 'rgba(59,92,232,0.6)',
    shadowColor: 'rgba(59,92,232,0.15)',
    stripeColor: '#3B5CE8',
  },
]

const STATS = [
  { id: 's1', value: 200, suffix: '+', label: 'Products' },
  { id: 's2', value: 25, suffix: '+', label: 'Years of Trust' },
  { id: 's3', value: 50, suffix: '+', label: 'Cities Served' },
  { id: 's4', value: 10, suffix: 'K+', label: 'Happy Homes' },
]

function CatalogCard({ item }) {
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        background: item.cardBg,
        borderRadius: '28px',
        padding: '48px 44px 44px',
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1.5px solid rgba(0,0,0,0.07)',
        transition: 'transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s cubic-bezier(0.23,1,0.32,1)',
        transform: hovered
          ? `translateY(-10px) scale(1.01) rotateX(${-tilt.y * 10}deg) rotateY(${tilt.x * 10}deg)`
          : 'translateY(0) scale(1) rotateX(0) rotateY(0)',
        boxShadow: hovered
          ? `0 32px 72px ${item.shadowColor}`
          : '0 2px 16px rgba(0,0,0,0.06)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Year tag */}
      <span style={{
        position: 'absolute', top: '22px', right: '22px',
        fontSize: '10px', fontWeight: 600, letterSpacing: '2px',
        color: 'rgba(0,0,0,0.25)', textTransform: 'uppercase',
      }}>
        {item.year}
      </span>

      {/* Decorative stripe */}
      <svg
        style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '100%', opacity: 0.06, pointerEvents: 'none' }}
        viewBox="0 0 160 400"
      >
        {[20, 40, 60, 80, 100, 120, 140].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="400" stroke={item.stripeColor} strokeWidth="1" fill="none" />
        ))}
      </svg>

      {/* Info */}
      <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: item.badgeBg, borderRadius: '100px',
          padding: '5px 14px', marginBottom: '16px',
        }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: item.color, flexShrink: 0,
            animation: 'rg-pulse 2s infinite',
          }} />
          <span style={{ color: item.badgeColor, fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {item.tag}
          </span>
        </div>

        {/* Title */}
        <div style={{
          fontFamily:"'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
          fontSize: 'clamp(32px, 4vw, 46px)',
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-1.5px',
          textTransform: 'uppercase',
          marginBottom: '16px',
          color: '#0D0D1A',
          transition: 'transform 0.4s ease',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        }}>
          {item.title}
          <span style={{ display: 'block', color: item.color }}>{item.accentWord}</span>
        </div>

        <p style={{
          fontSize: '14px', lineHeight: 1.65, color: '#666',
          marginBottom: '28px', maxWidth: '280px',
        }}>
          {item.description}
        </p>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: item.color, color: '#fff',
            borderRadius: '100px', padding: '13px 26px',
            fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            boxShadow: hovered ? `0 8px 28px ${item.shadowColor}` : 'none',
          }}
        >
          Download
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'transform 0.3s', transform: hovered ? 'translateY(2px)' : 'translateY(0)' }}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>

      {/* Visual */}
      <div style={{
        width: '240px', height: '240px', flexShrink: 0,
        position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          border: '1px dashed rgba(0,0,0,0.08)',
          animation: 'rg-spin 18s linear infinite',
        }} />
        <div style={{
          position: 'absolute', inset: '20px', borderRadius: '50%',
          border: '1px dashed rgba(0,0,0,0.06)',
          animation: 'rg-spin 11s linear infinite reverse',
        }} />
        <div style={{
          position: 'absolute', width: '70%', height: '70%', borderRadius: '50%',
          background: item.glowColor, filter: 'blur(30px)',
          opacity: hovered ? 0.45 : 0.25, bottom: 0, left: '50%',
          transform: 'translateX(-50%)', transition: 'opacity 0.5s',
        }} />
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '88%', height: '88%', objectFit: 'contain', position: 'relative', zIndex: 2,
            transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1), filter 0.4s ease',
            transform: hovered ? 'scale(1.12) translateY(-6px) rotate(-4deg)' : 'scale(1) translateY(0) rotate(0)',
            filter: hovered ? `drop-shadow(0 12px 24px ${item.glowColor})` : 'none',
          }}
        />
      </div>
    </div>
  )
}

function StatCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        let n = 0
        const step = () => {
          n += value / 55
          if (n < value) { setCount(Math.floor(n)); requestAnimationFrame(step) }
          else setCount(value)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif", fontSize: '42px', fontWeight: 800,
        letterSpacing: '-2px', color: '#0D0D1A', lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '11px', color: '#aaa', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '6px' }}>
        {label}
      </div>
    </div>
  )
}

export default function CatalogSection() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,600;1,400&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    const style = document.createElement('style')
    style.id = 'rg-catalog-keyframes'
    style.textContent = `
      @keyframes rg-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.6)} }
      @keyframes rg-spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
    `
    document.head.appendChild(style)

    return () => {
      try { document.head.removeChild(link) } catch(e) {}
      const s = document.getElementById('rg-catalog-keyframes')
      if (s) document.head.removeChild(s)
    }
  }, [])

  return (
    <section
      id="catalogs"
      style={{
        background: 'linear-gradient(160deg,#FFF9F5 0%,#F5F0FF 50%,#EFF8FF 100%)',
        padding: '72px 32px 88px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
      }}
    >
      {/* Background blobs */}
      {[
        { w: 500, h: 500, bg: '#FFD6D3', top: '-100px', right: '-80px', left: 'auto', bottom: 'auto' },
        { w: 400, h: 400, bg: '#D6E8FF', bottom: '-80px', left: '-60px', top: 'auto', right: 'auto' },
        { w: 280, h: 280, bg: '#E8D6FF', top: '40%', left: '30%', right: 'auto', bottom: 'auto' },
      ].map((b, i) => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(70px)', opacity: 0.55, pointerEvents: 'none',
          width: b.w, height: b.h, background: b.bg,
          top: b.top, right: b.right, bottom: b.bottom, left: b.left,
        }} />
      ))}

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1320px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8271C', animation: 'rg-pulse 2s infinite' }} />
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#E8271C' }}>
              The Digital Archive
            </span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8271C', animation: 'rg-pulse 2s infinite' }} />
          </div>

          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
            fontSize: 'clamp(48px, 7vw, 80px)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-3px',
            color: '#0D0D1A',
            margin: '0 0 12px',
          }}>
            Our <em style={{ fontStyle: 'italic', color: '#E8271C' }}>Catalogs</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#888', maxWidth: '400px' }}>
            Every product, every detail — at your fingertips.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: '20px',
          marginBottom: '20px',
        }}>
          {CATALOGS.map(item => <CatalogCard key={item.id} item={item} />)}
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 'clamp(32px, 6vw, 80px)', justifyContent: 'center',
          paddingTop: '56px', borderTop: '1px solid rgba(0,0,0,0.07)', flexWrap: 'wrap',
        }}>
          {STATS.map(s => <StatCounter key={s.id} value={s.value} suffix={s.suffix} label={s.label} />)}
        </div>
      </div>
    </section>
  )
}