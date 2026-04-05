import React from 'react'
import './index.css'

// Layout
import AnnouncementBar from './layout/AnnouncementBar'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

// Sections
import Hero from './sections/Hero'
import ImageBannerSection from './sections/ImageBannerSection'
import SeasonSection from './sections/SeasonSection'
import FullWidthBanner from './sections/FullWidthBanner'
import ShopByCategorySection from './sections/ShopByCategorySection'
import QuoteSection from './sections/QuoteSection'
import MeetTheFam from './sections/MeetTheFam'
import Testimonials from './sections/Testimonials'
import CatalogSection from './sections/CatalogSection'
import StudioSection from './sections/StudioSection'
import NuukInsiders from './sections/NuukInsiders'
import LocationSection from './sections/LocationSection'

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <ImageBannerSection />
      <SeasonSection />
      <FullWidthBanner />
      <ShopByCategorySection />
      <FullWidthBanner 
        image="https://raghav-fans.s3.ap-southeast-1.amazonaws.com/AI+Images/har_pal_switch.png"
      />
      <CatalogSection />
      <MeetTheFam />
      <Testimonials />
      <LocationSection />
      <StudioSection />
      {/* <NuukInsiders /> */}
      <Footer />
    </>
  )
}

export default App
