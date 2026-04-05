import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SearchIcon, UserIcon, CartIcon } from '../components/Icons'
import ShopDropdown from './ShopDropdown'
import './Navbar.css'

function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const onContact = location.pathname === '/contact'

  return (
    <nav className="navbar" onMouseLeave={() => setIsShopOpen(false)}>
      <a 
        href="/" 
        className="navbar__logo" 
        aria-label="Raghav Fans"
        onClick={(e) => {
          e.preventDefault()
          navigate('/')
          window.scrollTo(0, 0)
        }}
      >
        <img
          src="https://raghav-fans.s3.ap-southeast-1.amazonaws.com/logo/logo_without_categories.png"
          alt="Raghav Fans"
          className="navbar__logo-img"
        />
      </a>
      <div className="navbar__nav">
        <button 
          className={`navbar__nav-btn ${location.pathname === '/' ? 'active' : ''}`} 
          onClick={() => navigate('/')}
        >
          HOME
        </button>
        <button 
          className={`navbar__nav-btn ${isShopOpen ? 'active' : ''}`} 
          onClick={() => setIsShopOpen(!isShopOpen)}
          onMouseEnter={() => setIsShopOpen(true)}
        >
          SHOP
        </button>
        <button 
          className="navbar__nav-btn"
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/')
              setTimeout(() => {
                document.getElementById('catalogs')?.scrollIntoView({ behavior: 'smooth' })
              }, 100)
            } else {
              document.getElementById('catalogs')?.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          CATALOGUE
        </button>
        <button
          className={`navbar__nav-btn navbar__nav-btn--contact ${onContact ? 'active' : ''}`}
          onClick={() => navigate('/contact')}
        >
          CONTACT US
        </button>
      </div>
      <div className="navbar__icons">
        <button className="navbar__icon-btn" id="btn-search" aria-label="Search"><SearchIcon /></button>
        <button className="navbar__icon-btn" id="btn-account" aria-label="Account"><UserIcon /></button>
        <button className="navbar__icon-btn" id="btn-cart" aria-label="Cart"><CartIcon /></button>
      </div>

      {isShopOpen && <ShopDropdown onClose={() => setIsShopOpen(false)} />}
    </nav>
  )
}

export default Navbar