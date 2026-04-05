import { StrictMode, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import SplashScreen from './components/SplashScreen.jsx'

function Root() {
  const [splashDone, setSplashDone] = useState(false)
  const onDone = useCallback(() => setSplashDone(true), [])

  return (
    <>
      {!splashDone && <SplashScreen onDone={onDone} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FloatingButtons />
      </BrowserRouter>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
