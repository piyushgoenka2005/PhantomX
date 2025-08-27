'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Settings } from 'lucide-react'

interface CookieConsentProps {
  onAcceptAll: () => void
  onAcceptSelected: (cookies: string[]) => void
  onDecline: () => void
}

export default function CookieConsent({ onAcceptAll, onAcceptSelected, onDecline }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedCookies, setSelectedCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setIsVisible(false)
    onAcceptAll()
  }

  const handleAcceptSelected = () => {
    const selected = Object.entries(selectedCookies)
      .filter(([_, value]) => value)
      .map(([key, _]) => key)
    
    localStorage.setItem('cookieConsent', JSON.stringify(selected))
    setIsVisible(false)
    onAcceptSelected(selected)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'none')
    setIsVisible(false)
    onDecline()
  }

  const toggleCookie = (type: keyof typeof selectedCookies) => {
    if (type === 'necessary') return // Necessary cookies cannot be disabled
    setSelectedCookies(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-700 shadow-2xl"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">
                We use cookies to enhance your experience
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies and similar technologies to help personalize content, tailor and measure ads, 
                and provide a better experience. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 space-y-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium text-sm">Necessary</h4>
                    <p className="text-gray-400 text-xs">Essential for website functionality</p>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium text-sm">Analytics</h4>
                    <p className="text-gray-400 text-xs">Help us improve our website</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCookies.analytics}
                      onChange={() => toggleCookie('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium text-sm">Marketing</h4>
                    <p className="text-gray-400 text-xs">Used for personalized advertising</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCookies.marketing}
                      onChange={() => toggleCookie('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="text-white font-medium text-sm">Preferences</h4>
                    <p className="text-gray-400 text-xs">Remember your settings</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCookies.preferences}
                      onChange={() => toggleCookie('preferences')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Accept All
            </button>
            
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-center px-4 py-3 text-gray-300 hover:text-white transition-colors"
            >
              <Settings className="w-4 h-4 mr-2" />
              {showDetails ? 'Hide Details' : 'Customize'}
            </button>

            {showDetails && (
              <>
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Accept Selected
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Decline All
                </button>
              </>
            )}
          </div>

          <div className="mt-3 text-center">
            <p className="text-gray-400 text-xs">
              By continuing to use our site, you agree to our{' '}
              <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
