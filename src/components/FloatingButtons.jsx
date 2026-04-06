import React from 'react'
import { WhatsAppIcon } from './Icons'
import './FloatingButtons.css'

const WA_URL = 'https://wa.me/917983881769?text=Hi%2C%20I%27m%20interested%20in%20your%20products!'

function FloatingButtons() {
  return (
    <div className="floating-btns">
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
