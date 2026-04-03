import React from 'react'
import { VideoIcon, WhatsAppIcon } from './Icons'
import './FloatingButtons.css'

function FloatingButtons() {
  return (
    <div className="floating-btns">
      <button className="float-btn float-btn--video" id="btn-video-float" aria-label="Book Live Demo">
        <VideoIcon />
      </button>
      <button className="float-btn float-btn--whatsapp" id="btn-whatsapp-float" aria-label="WhatsApp">
        <WhatsAppIcon />
      </button>
    </div>
  )
}

export default FloatingButtons
