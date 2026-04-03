import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-top">
        <div className="footer-logo-wrap">
          <div className="footer-mini-logo">
            <span className="logo-dot"></span>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-grid">
            {/* Column 1 */}
            <div className="footer-col">
              <h4 className="footer-head">Blog</h4>
              <ul className="footer-links">
                <li><a href="#">AI Comparison</a></li>
                <li><a href="#">Top 7 automation tools</a></li>
                <li><a href="#">CRM for law firms</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="footer-col">
              <h4 className="footer-head">Resources</h4>
              <ul className="footer-links">
                <li><a href="#">AI consulting</a></li>
                <li><a href="#">200 AI Tools for your Marketing</a></li>
                <li><a href="#">Open AI Agent Kit Introduction</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-col">
              <h4 className="footer-head">Company</h4>
              <ul className="footer-links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Schedule a meeting</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-col">
              <h4 className="footer-head">Social</h4>
              <ul className="footer-links">
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="footer-newsletter">
            <h4 className="footer-head">Our newsletter on AI & automation</h4>
            <div className="newsletter-box">
              <input type="email" placeholder="Your email adress" className="newsletter-input" />
              <button className="newsletter-btn">Register now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-info">
          RAGHAV Ltd - New Delhi, 110001 India
        </div>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Legal notice</a>
        </div>
      </div>

      <div className="footer-giant-text">
        RAGHAV
      </div>
    </footer>
  )
}

export default Footer
