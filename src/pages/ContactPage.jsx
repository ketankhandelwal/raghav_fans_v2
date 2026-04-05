import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import './ContactPage.css'

gsap.registerPlugin(ScrollTrigger)

/* ── Three.js animated background canvas ── */
function ThreeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
    camera.position.z = 5

    // Floating particles
    const count = 120
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6
      scales[i] = Math.random()
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aScale',   new THREE.BufferAttribute(scales, 1))

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime:       { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uColor:      { value: new THREE.Color('#e8192c') },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aScale;
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(uTime * 0.6 + modelPosition.x * 0.8) * 0.18;
          modelPosition.x += cos(uTime * 0.4 + modelPosition.y * 0.6) * 0.1;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          gl_Position = projectedPosition;
          gl_PointSize = aScale * 4.0 * uPixelRatio * (1.0 / -viewPosition.z);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = 1.0 - (dist * 2.0);
          gl_FragColor = vec4(uColor, alpha * 0.55);
        }
      `,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Thin red ring
    const ringGeo = new THREE.TorusGeometry(2.2, 0.008, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({ color: '#e8192c', transparent: true, opacity: 0.18 })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 5
    scene.add(ring)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.4, 0.004, 16, 100),
      new THREE.MeshBasicMaterial({ color: '#e8192c', transparent: true, opacity: 0.09 })
    )
    ring2.rotation.x = -Math.PI / 4
    ring2.rotation.y = Math.PI / 6
    scene.add(ring2)

    const clock = new THREE.Clock()
    let raf

    const tick = () => {
      const t = clock.getElapsedTime()
      material.uniforms.uTime.value = t
      ring.rotation.z  = t * 0.12
      ring2.rotation.z = -t * 0.07
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="contact-canvas" />
}

/* ── Info cards on the left ── */
const INFO = [
  {
    icon: '📍',
    label: 'Visit Us',
    value: 'Agra Road, Surendra Nagar,\nAligarh-202001, Uttar Pradesh',
  },
  {
    icon: '📞',
    label: 'Call Us',
    value: '+917983881769\nOpen from 10:30 AM to 7:30 PM',
  },
  {
    icon: '✉️',
    label: 'Email Us',
    value: 'khandelwalgaurang2004@gmail.com\nWe reply within 24 hours',
  },
]

/* ── Main component ── */
export default function ContactPage() {
  const navigate = useNavigate()
  const heroRef  = useRef(null)
  const formRef  = useRef(null)
  const leftRef  = useRef(null)

  const [fields, setFields]   = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const [focused, setFocused] = useState(null)

  /* ── GSAP entrance animations ── */
  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      // Hero text
      gsap.from('.contact-hero__eyebrow', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.contact-hero__title span', {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.35,
      })
      gsap.from('.contact-hero__sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.8 })

      // Left info cards scroll-in
      gsap.from('.contact-info-card', {
        x: -50, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 80%', once: true },
      })

      // Form fields stagger
      gsap.from('.cf-field', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 82%', once: true },
      })
    })

    return () => ctx.revert()
  }, [])

  /* ── Input handler ── */
  const set = (k) => (e) => setFields(prev => ({ ...prev, [k]: e.target.value }))

  /* ── FormSpree submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Animate button
    gsap.to('.cf-submit', { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 })

    try {
      const res = await fetch('https://formspree.io/f/xdummyid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', phone: '', subject: '', message: '' })
        gsap.from('.cf-success', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="contact-hero" ref={heroRef}>
        <ThreeBackground />

        <div className="contact-hero__content">
          <p className="contact-hero__eyebrow">GET IN TOUCH</p>
          <h1 className="contact-hero__title">
            <span>Let's Build</span>
            <span>Something</span>
            <span className="contact-hero__title--red">Together.</span>
          </h1>
          <p className="contact-hero__sub">
            Whether it's a bulk order, corporate gifting, or a quick question —<br />
            our team is always ready to help.
          </p>
        </div>

        <div className="contact-hero__scroll">
          <span>Scroll</span>
          <div className="contact-hero__scroll-line" />
        </div>
      </section>

      {/* ── Body ── */}
      <section className="contact-body">
        <div className="contact-body__inner">

          {/* Left */}
          <div className="contact-left" ref={leftRef}>
            <p className="contact-left__label">CONTACT INFORMATION</p>
            <h2 className="contact-left__heading">
              We'd love to<br />hear from you.
            </h2>
            <p className="contact-left__desc">
              Reach out via the form or use any of the channels below. Our support team typically responds within a business day.
            </p>

            <div className="contact-info-cards">
              {INFO.map((item) => (
                <div className="contact-info-card" key={item.label}>
                  <span className="contact-info-card__icon">{item.icon}</span>
                  <div>
                    <p className="contact-info-card__label">{item.label}</p>
                    <p className="contact-info-card__value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social row */}
            <div className="contact-socials">
              {['Instagram', 'WhatsApp', 'LinkedIn'].map((s) => (
                <span key={s} className="contact-social-pill">{s}</span>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-right">
            <div className="contact-form-card" ref={formRef}>
              <div className="contact-form-card__header">
                <h3>Send us a message</h3>
                <p>Fill in the details and we'll get back to you shortly.</p>
              </div>

              {status === 'success' ? (
                <div className="cf-success">
                  <div className="cf-success__icon">✓</div>
                  <h4>Message sent!</h4>
                  <p>We've received your message and will reach out soon.</p>
                  <button className="cf-submit" onClick={() => setStatus('idle')}>Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="cf-row">
                    <div className={`cf-field ${focused === 'name' || fields.name ? 'cf-field--active' : ''}`}>
                      <label>Full Name *</label>
                      <input
                        type="text" required value={fields.name}
                        onChange={set('name')}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="Ketan Khandelwal"
                      />
                    </div>
                    <div className={`cf-field ${focused === 'email' || fields.email ? 'cf-field--active' : ''}`}>
                      <label>Email Address *</label>
                      <input
                        type="email" required value={fields.email}
                        onChange={set('email')}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="cf-row">
                    <div className={`cf-field ${focused === 'phone' || fields.phone ? 'cf-field--active' : ''}`}>
                      <label>Phone Number</label>
                      <input
                        type="tel" value={fields.phone}
                        onChange={set('phone')}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className={`cf-field ${focused === 'subject' || fields.subject ? 'cf-field--active' : ''}`}>
                      <label>Subject *</label>
                      <input
                        type="text" required value={fields.subject}
                        onChange={set('subject')}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        placeholder="Bulk order enquiry"
                      />
                    </div>
                  </div>

                  <div className={`cf-field cf-field--full ${focused === 'message' || fields.message ? 'cf-field--active' : ''}`}>
                    <label>Message *</label>
                    <textarea
                      required rows={5} value={fields.message}
                      onChange={set('message')}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="cf-error">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    className={`cf-submit ${status === 'sending' ? 'cf-submit--sending' : ''}`}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <><span className="cf-spinner" /> Sending…</>
                    ) : (
                      <>Send Message <span className="cf-arrow">→</span></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
