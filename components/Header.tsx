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
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/logo.jpg" alt="PhantomX Logo" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl object-cover shadow-sm" />
            <span className="text-white font-bold text-lg sm:text-xl">PhantomX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-lime-400 transition-colors font-medium text-sm lg:text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <a
              href="#login"
              className="text-white hover:text-lime-400 transition-colors font-medium text-sm lg:text-base"
            >
              Login
            </a>
            <a
              href="#get-started"
              className="bg-lime-500 hover:bg-lime-600 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-colors flex items-center text-sm lg:text-base"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-white hover:text-lime-400 transition-all duration-200"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
