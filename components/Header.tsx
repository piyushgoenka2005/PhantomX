'use client'

import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import type { HeaderProps } from '@/types'
import { NAV_ITEMS } from '@/constants'

export default function Header({ isScrolled, onMobileMenuToggle }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-700' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HTB</span>
            </div>
            <span className="text-white font-bold text-xl">HACK<span className='font-normal'>THE</span>BOX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-lime-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="text-white hover:text-lime-400 transition-colors font-medium"
            >
              Login
            </a>
            <a
              href="#get-started"
              className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden text-white hover:text-lime-400 transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
