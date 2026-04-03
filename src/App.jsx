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

// Components
import FloatingButtons from './components/FloatingButtons'

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
      <CatalogSection />
      <QuoteSection />
      <MeetTheFam />
      <Testimonials />
      <StudioSection />
      <NuukInsiders />
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App
