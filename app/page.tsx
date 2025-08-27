'use client'

import { useState } from 'react'
import { ErrorBoundary, Header, MobileMenu, Hero, FeaturesSection, VideoSection, CareerSection, CommunitySection, PartnerLogos, NewsSection, Products, Solutions, Stats, Features, Testimonials, BlogSection, Footer } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(true)
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false)

  return (
    <ErrorBoundary>
      <main className="min-h-screen">
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
        {/* <CommunitySection />           */}
        {/* <Products />        */}
        {/* <Solutions />        */}
        {/* <Stats />         */}
        {/* <Features />     */}
        {/* <Testimonials />        */}
        {/* <BlogSection /> */}
        <Footer />
      </main>
    </ErrorBoundary>
  )
}
