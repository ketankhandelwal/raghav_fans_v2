import React from 'react'
import './AnnouncementBar.css'

function AnnouncementBar() {
  const msg = "BRĪSKWorld's 1st ILAG® certified ceramic Air Fryer | Shop Now"
  const items = Array(8).fill(msg)
  return (
    <div className="announcement-bar">
      <div className="announcement-bar__track">
        {items.map((item, i) => (
          <span key={i} className="announcement-bar__item">
            <span className="announcement-bar__dot" />
            {item}
          </span>
        ))}
        {items.map((item, i) => (
          <span key={`b${i}`} className="announcement-bar__item">
            <span className="announcement-bar__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AnnouncementBar
