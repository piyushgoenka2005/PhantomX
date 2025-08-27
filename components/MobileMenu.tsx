'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, User, Shield, ArrowRight, ChevronDown } from 'lucide-react'
import type { MobileMenuProps } from '@/types'
import { NAV_ITEMS } from '@/constants'
import { useState } from 'react'

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  const footerNavItems = [
    {
      name: 'Products',
      items: [
        'Teams',
        'Courses & Certifications', 
        'Cyber Ranges',
        'Enterprise Attack Simulations',
        'Cloud Infrastructure Simulations',
        'Capture The Flag',
        'Tabletop Exercises',
        'Talent Sourcing',
        'Individuals',
        'PhantomX Labs',
        'Defensive Labs'
      ]
    },
    {
      name: 'Solutions',
      items: [
        'Job Roles',
        'Industries', 
        'Use Cases',
        'Red Teams',
        'Blue Teams',
        'Purple Teams',
        'Government',
        'Higher Education',
        'Finance',
        'Professional Services',
        'Technical Onboarding',
        'Team Benchmarking',
        'Candidate Assessment',
        'Threat Management',
        'Code Vulnerability',
        'Crisis Simulation',
        'Governance & Compliance'
      ]
    },
    {
      name: 'Resources',
      items: [
        'Community',
        'Blog',
        'Industry Reports',
        'Webinars',
        'AMAs',
        'Learn with HTB',
        'Customer Stories',
        'Cheat Sheets',
        'Compliance Sheets',
        'Glossary',
        'Guides & Templates',
        'Parrot OS',
        'Help Center'
      ]
    },
    {
      name: 'Company',
      items: [
        'About us',
        'Careers',
        'Brand Guidelines',
        'Certificate Validation',
        'Trust Center',
        'Product Updates',
        'Status',
        'Press',
        'Support',
        'Enterprise Sales',
        'Become a Partner',
        'Register a Deal',
        'Channel & Resellers',
        'Ambassador Program',
        'Affiliate Program',
        'SME Program',
        'HTB Swag',
        'Buy Gift Cards'
      ]
    }
  ];

  const socialMediaIcons = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'X (Twitter)', icon: '𝕏', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'TikTok', icon: '♪', href: '#' },
    { name: 'YouTube', icon: '▶️', href: '#' },
    { name: 'GitHub', icon: '🐙', href: '#' },
    { name: 'Discord', icon: '🎮', href: '#' },
    { name: 'RSS', icon: '📡', href: '#' }
  ];

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 z-50 md:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex-shrink-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-3">
                  <img src="/logo.jpg" alt="PhantomX Logo" className="w-10 h-10 rounded-xl object-cover shadow-lg" />
                  <div>
                    <span className="text-white font-bold text-xl">PhantomX</span>
                    <p className="text-gray-400 text-xs">Cybersecurity Platform</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                {/* Main Navigation */}
                <nav className="space-y-2">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group"
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/60 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200 group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                            <Shield className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-base">{item.name}</h3>
                            <p className="text-gray-400 text-sm">Explore {item.name.toLowerCase()}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-gray-300 font-semibold text-sm uppercase tracking-wider">Quick Actions</h3>
                  <div className="space-y-2">
                    <a
                      href="#login"
                      onClick={onClose}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/60 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-white font-medium">Login</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </a>
                    
                    <a
                      href="#get-started"
                      onClick={onClose}
                      className="flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

                {/* Contact */}
                <div className="space-y-3">
                  <h3 className="text-gray-300 font-semibold text-sm uppercase tracking-wider">Contact</h3>
                  <div className="space-y-2">
                    <a
                      href="mailto:contact@phantomx.com"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">contact@phantomx.com</span>
                    </a>
                    <a
                      href="tel:+1-555-0123"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">+1 (555) 0123</span>
                    </a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-4 border-t border-gray-700">
                  <span className="text-gray-400 text-xs">© 2025 PhantomX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
