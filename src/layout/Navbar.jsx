import React, { useState } from 'react'
import { SearchIcon, UserIcon, CartIcon } from '../components/Icons'
import ShopDropdown from './ShopDropdown'
import './Navbar.css'

function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false)

  return (
    <nav className="navbar" onMouseLeave={() => setIsShopOpen(false)}>
      <a href="#" className="navbar__logo" aria-label="Raghav Fans">
        <img
          src="https://raghav-fans.s3.ap-southeast-1.amazonaws.com/logo/logo_without_categories.png"
          alt="Raghav Fans"
          className="navbar__logo-img"
        />
      </a>
      <div className="navbar__nav">
        <button 
          className={`navbar__nav-btn ${isShopOpen ? 'active' : ''}`} 
          onClick={() => setIsShopOpen(!isShopOpen)}
          onMouseEnter={() => setIsShopOpen(true)}
        >
          SHOP
        </button>
        <a href="#gifting" className="navbar__nav-link" id="nav-gifting">CORPORATE GIFTING</a>
        <a href="#support" className="navbar__nav-link" id="nav-support">SUPPORT HUB</a>
        <a href="#store" className="navbar__nav-link" id="nav-store">FIND A STORE</a>
        <a href="#recipes" className="navbar__nav-link" id="nav-recipes">BROWSE RECIPES</a>
      </div>
      <div className="navbar__icons">
        <button className="navbar__icon-btn" id="btn-search" aria-label="Search"><SearchIcon /></button>
        <button className="navbar__icon-btn" id="btn-account" aria-label="Account"><UserIcon /></button>
        <button className="navbar__icon-btn" id="btn-cart" aria-label="Cart"><CartIcon /></button>
      </div>

      {isShopOpen && <ShopDropdown />}
    </nav>
  )
}

export default Navbar