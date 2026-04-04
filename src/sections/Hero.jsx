import React, { useState, useEffect, useRef } from 'react'
import './Hero.css'

const carouselItems = [
  { type: 'video', src: "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/fan_video.mp4" },
  { type: 'image', src: "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/appliances_range.png" },
  { type: 'image', src: "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/fan_range.png" },
    { type: 'image', src: "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/cooler_range.png" },

  { type: 'image', src: "https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/heater_range.png" }
]
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef(null)

  // Auto-advance: for video, wait for it to end; for images, use 5s timer
  useEffect(() => {
    const current = carouselItems[currentSlide]

    if (current.type === 'video') {
      // Let the video's onEnded handle the slide change
      return
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [currentSlide])

  // Play video whenever its slide becomes active
  useEffect(() => {
    if (carouselItems[currentSlide].type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }, [currentSlide])

  const handleVideoEnded = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__carousel">
        {carouselItems.map((item, index) =>
          item.type === 'video' ? (
            <video
              key={index}
              ref={index === currentSlide ? videoRef : null}
              className={`hero__carousel-img ${index === currentSlide ? 'active' : ''}`}
              src={item.src}
              muted
              playsInline
              onEnded={handleVideoEnded}
            />
          ) : (
            <img
              key={index}
              className={`hero__carousel-img ${index === currentSlide ? 'active' : ''}`}
              src={item.src}
              alt={`Hero Banner ${index + 1}`}
            />
          )
        )}
      </div>

      <div className="hero__controls">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero