import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SearchIcon } from '../components/Icons'
import ShopDropdown from './ShopDropdown'
import './Navbar.css'

const SHOP_CATS = [
  { label: 'Ceiling Fans',       slug: 'fans' },
  { label: 'Pedestal Fans',      slug: 'pedestal-fans' },
  { label: 'Home Appliances',    slug: 'home-appliances' },
  { label: 'Heaters',            slug: 'heaters' },
  { label: 'Coolers',            slug: 'coolers' },
  { label: 'Series',             slug: 'series' },
  { label: 'Switches & Sockets', slug: 'switches-sockets' },
]

function Navbar() {
  const [isShopOpen,  setIsShopOpen]  = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [shopExpanded, setShopExpanded] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const onContact = location.pathname === '/contact'

  const closeAll = () => {
    setMenuOpen(false)
    setShopExpanded(false)
    setIsShopOpen(false)
  }

  const goTo = (path) => {
    closeAll()
    navigate(path)
    window.scrollTo(0, 0)
  }

  const goToCatalogue = () => {
    closeAll()
    if (location.pathname !== '/') {
      navigate('/')
      // give React + router time to mount the home page sections
      setTimeout(() => {
        document.getElementById('catalogs')?.scrollIntoView({ behavior: 'smooth' })
      }, 350)
    } else {
      // small delay so the mobile menu unmounts before scroll
      setTimeout(() => {
        document.getElementById('catalogs')?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  return (
    <>
      <nav className="navbar" onMouseLeave={() => setIsShopOpen(false)}>
        {/* Logo */}
        <a
          href="/"
          className="navbar__logo"
          aria-label="Raghav Fans"
          onClick={(e) => { e.preventDefault(); goTo('/') }}
        >
          <img
            src="https://raghav-fans.s3.ap-southeast-1.amazonaws.com/logo/logo_without_categories.png"
            alt="Raghav Fans"
            className="navbar__logo-img"
          />
        </a>

        {/* Desktop nav */}
        <div className="navbar__nav">
          <button
            className={`navbar__nav-btn ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => goTo('/')}
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
          <button className="navbar__nav-btn" onClick={goToCatalogue}>
            CATALOGUE
          </button>
          <button
            className={`navbar__nav-btn navbar__nav-btn--contact ${onContact ? 'active' : ''}`}
            onClick={() => goTo('/contact')}
          >
            CONTACT US
          </button>
        </div>

        {/* Icons row */}
        <div className="navbar__icons">
          <button className="navbar__icon-btn" id="btn-search" aria-label="Search">
            <SearchIcon />
          </button>
          {/* Hamburger — mobile only */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => { setMenuOpen(!menuOpen); setShopExpanded(false) }}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Desktop Shop dropdown */}
        {isShopOpen && <ShopDropdown onClose={() => setIsShopOpen(false)} />}
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          <button
            className={`navbar__mobile-btn ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => goTo('/')}
          >
            HOME
          </button>

          {/* SHOP — expandable category list */}
          <button
            className={`navbar__mobile-btn navbar__mobile-btn--shop ${shopExpanded ? 'active' : ''}`}
            onClick={() => setShopExpanded(!shopExpanded)}
          >
            SHOP
            <span className={`navbar__mobile-arrow ${shopExpanded ? 'open' : ''}`}>▾</span>
          </button>

          {shopExpanded && (
            <div className="navbar__mobile-shop-list">
              {SHOP_CATS.map((cat) => (
                <button
                  key={cat.slug}
                  className="navbar__mobile-cat-btn"
                  onClick={() => { closeAll(); navigate(`/shop/${cat.slug}`); window.scrollTo(0, 0) }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          <button className="navbar__mobile-btn" onClick={goToCatalogue}>
            CATALOGUE
          </button>
          <button
            className={`navbar__mobile-btn navbar__mobile-btn--contact ${onContact ? 'active' : ''}`}
            onClick={() => goTo('/contact')}
          >
            CONTACT US
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar
