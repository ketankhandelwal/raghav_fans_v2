import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const navigate = useNavigate()

  const goTo = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer-v2">
      <div className="footer-top">

        {/* Logo */}
        <div className="footer-logo-wrap">
          <div className="footer-logo-box">
            <img
              src="https://raghav-fans.s3.ap-southeast-1.amazonaws.com/logo/logo_without_categories.png"
              alt="Raghav Fans"
              className="footer-logo-img"
              onClick={() => goTo('/')}
            />
          </div>
          <p className="footer-tagline">Cooling India Since 2018 · Aligarh, U.P.</p>
        </div>

        {/* Grid */}
        <div className="footer-content">
          <div className="footer-grid">

            {/* Products */}
            <div className="footer-col">
              <h4 className="footer-head">Our Products</h4>
              <ul className="footer-links">
                <li><button onClick={() => goTo('/shop/fans')}>Ceiling Fans</button></li>
                <li><button onClick={() => goTo('/shop/pedestal-fans')}>Pedestal Fans</button></li>
                <li><button onClick={() => goTo('/shop/heaters')}>Room Heaters</button></li>
                <li><button onClick={() => goTo('/shop/coolers')}>Air Coolers</button></li>
                <li><button onClick={() => goTo('/shop/home-appliances')}>Home Appliances</button></li>
                <li><button onClick={() => goTo('/shop/switches-sockets')}>Switches &amp; Sockets</button></li>
                <li><button onClick={() => goTo('/shop/series')}>Series</button></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-head">Quick Links</h4>
              <ul className="footer-links">
                <li><button onClick={() => goTo('/')}>Home</button></li>
                <li><button onClick={() => { goTo('/'); setTimeout(() => scrollTo('catalogs'), 150) }}>Catalogue</button></li>
                <li><button onClick={() => goTo('/shop/all-products')}>All Products</button></li>
                <li><button onClick={() => goTo('/contact')}>Contact Us</button></li>
                <li><button onClick={() => { goTo('/'); setTimeout(() => scrollTo('hero'), 150) }}>Book Live Demo</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-head">Get In Touch</h4>
              <ul className="footer-links footer-links--contact">
                <li>
                  <span className="fc-icon">📍</span>
                  <span>Agra Road, Surendra Nagar,<br />Aligarh – 202001, U.P.</span>
                </li>
                <li>
                  <span className="fc-icon">📞</span>
                  <a href="tel:+919999999999">+917983881769</a>
                </li>
                <li>
                  <span className="fc-icon">✉️</span>
                  <a href="mailto:khandelwalgaurang2004@gmail.com">khandelwalgaurang2004@gmail.com</a>
                </li>
                <li>
                  <span className="fc-icon">🕐</span>
                  <span>Mon – Sat: 10:30 AM – 7:30 PM</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="footer-col">
              <h4 className="footer-head">Follow Us</h4>
              <ul className="footer-links footer-links--social">
                <li><a href="https://www.instagram.com/ketan.khandelwal.1/" target="_blank" rel="noreferrer">
                  <span className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </span>
                  Instagram
                </a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <span className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </span>
                  Facebook
                </a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <span className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                  </span>
                  YouTube
                </a></li>
                <li><a href="https://wa.me/917983881769" target="_blank" rel="noreferrer">
                  <span className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </span>
                  WhatsApp
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-info">
          © {new Date().getFullYear()} RAGHAV FANS · All rights reserved · Aligarh, Uttar Pradesh
        </div>
        <div className="footer-credit">
          Designed &amp; Developed by{' '}
          <a
            href="https://www.instagram.com/ketan.khandelwal.1/"
            target="_blank"
            rel="noreferrer"
            className="footer-credit-link"
          >
            Ketan Khandelwal ✦
          </a>
        </div>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>

      {/* Giant Background Text */}
      <div className="footer-giant-text">RAGHAV</div>
    </footer>
  )
}

export default Footer
