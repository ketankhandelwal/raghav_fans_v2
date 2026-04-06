import React from 'react'
import './AnnouncementBar.css'

const ANNOUNCEMENTS = [
  "RAGHAV FANS — EXPERIENCE THE SILENT INNOVATION",
  "FREE SHIPPING ON ORDERS OVER ₹4,999",
  "SHOP OUR LATEST 2026 CEILING FAN COLLECTION",
  "2 YEARS COMPREHENSIVE WARRANTY ON ALL PRODUCTS",
  "COOLING INDIA SINCE 2018 · ALIGARH, U.P.",
  "GRAB THE NEW BUGATTI BLUE — BEST SELLER 2026"
]

function AnnouncementBar() {
  const items = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS]
  
  return (
    <div className="announcement-bar">
      <div className="announcement-bar__track">
        {items.map((item, i) => (
          <span key={i} className="announcement-bar__item">
            <span className="announcement-bar__dot" />
            {item}
          </span>
        ))}
        {/* Secondary track for infinite loop */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="announcement-bar__item">
            <span className="announcement-bar__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AnnouncementBar
