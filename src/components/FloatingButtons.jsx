import React from 'react'
import { VideoIcon, WhatsAppIcon } from './Icons'
import './FloatingButtons.css'

const WA_URL = 'https://wa.me/917983881769?text=Hi%2C%20I%27m%20interested%20in%20your%20products!'

function FloatingButtons() {
  return (
    <div className="floating-btns">
      <button className="float-btn float-btn--video" id="btn-video-float" aria-label="Book Live Demo">
        <VideoIcon />
      </button>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-btn--whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}

export default FloatingButtons
