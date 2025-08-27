'use client'

import { useState } from 'react'
import { ErrorBoundary, Header, MobileMenu, Hero, FeaturesSection, VideoSection, CareerSection, CommunitySection, PartnerLogos, NewsSection, Testimonials, BlogSection, Contact, Footer, CookieConsent } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(true)
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false)

  const handleAcceptAllCookies = () => {
    // Enable all cookies
    console.log('All cookies accepted')
    // Here you would typically enable analytics, marketing, etc.
  }

  const handleAcceptSelectedCookies = (cookies: string[]) => {
    // Enable only selected cookies
    console.log('Selected cookies:', cookies)
    // Here you would enable only the selected cookie types
  }

  const handleDeclineCookies = () => {
    // Disable non-essential cookies
    console.log('Cookies declined')
    // Here you would disable analytics, marketing, etc.
  }

  return (
    <ErrorBoundary>
      <main className="min-h-screen overflow-x-hidden">
        <Header 
          isScrolled={isScrolled} 
          onMobileMenuToggle={handleMobileMenuToggle} 
        />
        
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={handleMobileMenuClose} 
        />

        <Hero />
        <PartnerLogos />
        <NewsSection />
        <FeaturesSection />        
        <VideoSection />         
        <CareerSection />        
        <CommunitySection />       
        <Testimonials />   
        <BlogSection />       
        <Contact />

        {/* Cookie Consent Popup */}
        <CookieConsent
          onAcceptAll={handleAcceptAllCookies}
          onAcceptSelected={handleAcceptSelectedCookies}
          onDecline={handleDeclineCookies}
        />
      </main>
    </ErrorBoundary>
  )
}
