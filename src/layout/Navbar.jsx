import React from 'react'
import { SearchIcon, UserIcon, CartIcon } from '../components/Icons'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo" aria-label="Raghav Fans">
        <img
          src="https://raghav-fans.s3.ap-southeast-1.amazonaws.com/logo/logo_without_categories.png"
          alt="Raghav Fans"
          className="navbar__logo-img"
        />
      </a>
      <div className="navbar__nav">
        <a href="#shop" className="navbar__nav-link navbar__nav-link--active" id="nav-shop">SHOP</a>
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
    </nav>
  )
}

export default Navbar