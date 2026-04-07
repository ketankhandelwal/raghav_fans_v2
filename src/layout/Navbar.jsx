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
  const [searchOpen,  setSearchOpen]  = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate  = useNavigate()
  const location  = useLocation()
  const onContact = location.pathname === '/contact'

  const closeAll = () => {
    setMenuOpen(false)
    setShopExpanded(false)
    setIsShopOpen(false)
    setSearchOpen(false)
  }

  const goTo = (path) => {
    closeAll()
    navigate(path)
    window.scrollTo(0, 0)
  }

  const scrollToSection = (id) => {
    closeAll()
    if (location.pathname !== '/') {
      navigate('/')
      // Give time for home page to mount
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 400)
    } else {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      closeAll()
      navigate(`/shop/all-products?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const SITE_SECTIONS = [
    { label: 'CATALOGUE', action: () => scrollToSection('catalogs') },
    { label: 'CONTACT US', action: () => goTo('/contact') },
    { label: 'TESTIMONIALS', action: () => scrollToSection('testimonials') },
    { label: 'SHOWROOM', action: () => scrollToSection('studio') },
    { label: 'SEASON SELECTIONS', action: () => scrollToSection('season') },
  ]

  const getFilteredSuggestions = () => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return { categories: SHOP_CATS, sections: SITE_SECTIONS }

    const filteredCats = SHOP_CATS.filter(cat => cat.label.toLowerCase().includes(query))
    const filteredSections = SITE_SECTIONS.filter(sec => sec.label.toLowerCase().includes(query))

    // Sort to put exact matches or start-of-string matches first
    const sortByMatch = (a, b) => {
      const aLower = (a.label || '').toLowerCase()
      const bLower = (b.label || '').toLowerCase()
      const aStarts = aLower.startsWith(query)
      const bStarts = bLower.startsWith(query)
      if (aStarts && !bStarts) return -1
      if (!aStarts && bStarts) return 1
      return aLower.localeCompare(bLower)
    }

    return {
      categories: filteredCats.sort(sortByMatch),
      sections: filteredSections.sort(sortByMatch)
    }
  }

  const { categories: sugCats, sections: sugSections } = getFilteredSuggestions()

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
          <button className="navbar__nav-btn" onClick={() => scrollToSection('catalogs')}>
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
          <button 
            className={`navbar__icon-btn ${searchOpen ? 'active' : ''}`} 
            id="btn-search" 
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <SearchIcon />
          </button>
          {/* Hamburger — mobile only */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => { setMenuOpen(!menuOpen); setShopExpanded(false); setSearchOpen(false) }}
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

      {/* Search Overlay */}
      <div className={`navbar__search-overlay ${searchOpen ? 'open' : ''}`}>
        <div className="search-container">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <div className="search-input-wrap">
              <SearchIcon className="search-field-icon" />
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="search-input"
                autoFocus={searchOpen}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="search-close" onClick={() => setSearchOpen(false)}>
                ✕
              </button>
            </div>
          </form>
          <div className="search-suggestions">
            {sugSections.length > 0 && (
              <div className="suggestion-group">
                <p className="suggestion-label">Site Sections</p>
                <div className="suggestion-tags">
                  {sugSections.map(sec => (
                    <button key={sec.label} onClick={sec.action}>{sec.label}</button>
                  ))}
                </div>
              </div>
            )}

            {sugCats.length > 0 && (
              <div className="suggestion-group">
                <p className="suggestion-label">Categories</p>
                <div className="suggestion-tags">
                  {sugCats.map(cat => (
                    <button 
                      key={cat.slug} 
                      onClick={() => { closeAll(); navigate(`/shop/${cat.slug}`); window.scrollTo(0, 0) }}
                    >
                      {cat.label.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!searchQuery && (
              <div className="suggestion-group">
                <p className="suggestion-label">Quick Links</p>
                <div className="suggestion-tags">
                  <button onClick={() => { closeAll(); navigate('/shop/all-products'); window.scrollTo(0, 0) }}>
                    ALL PRODUCTS
                  </button>
                </div>
              </div>
            )}

            {sugCats.length === 0 && sugSections.length === 0 && searchQuery && (
              <div className="no-results">
                <p>No matches found for "{searchQuery}"</p>
                <button 
                  className="search-all-btn"
                  onClick={handleSearchSubmit}
                >
                  Search all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

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

          <button className="navbar__mobile-btn" onClick={() => scrollToSection('catalogs')}>
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
