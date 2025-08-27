'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { MobileMenuProps } from '@/types'
import { NAV_ITEMS } from '@/constants'

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-700 z-50 md:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HTB</span>
                </div>
                <span className="text-white font-bold text-xl">HACKTHEBOX</span>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-lime-400 transition-colors"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="text-white hover:text-lime-400 transition-colors font-medium text-lg block py-2"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-700 space-y-4">
                <a
                  href="#login"
                  onClick={onClose}
                  className="text-white hover:text-lime-400 transition-colors font-medium block py-2"
                >
                  Login
                </a>
                <a
                  href="#get-started"
                  onClick={onClose}
                  className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block text-center"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
