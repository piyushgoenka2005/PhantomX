'use client'

import { useState } from 'react'
import { Products, Header, MobileMenu, Footer } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function ProductsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(true)
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header 
        isScrolled={isScrolled} 
        onMobileMenuToggle={handleMobileMenuToggle} 
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={handleMobileMenuClose} 
      />

      <div className="pt-16">
        <Products />
      </div>
      
      <Footer />
    </main>
  )
}
