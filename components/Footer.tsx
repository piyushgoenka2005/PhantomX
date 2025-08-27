'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  const mobileNavItems = [
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

  const links = {
    products: [
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
      'Defensive Labs',
    ],
    solutions: ['Job Roles', 'Industries', 'Use Cases'],
    jobRoles: ['Red Teams', 'Blue Teams', 'Purple Teams'],
    industries: ['Government', 'Higher Education', 'Finance', 'Professional Services'],
    useCases: [
      'Technical Onboarding',
      'Team Benchmarking',
      'Candidate Assessment',
      'Threat Management',
      'Code Vulnerability',
      'Crisis Simulation',
      'Governance & Compliance',
    ],
    resources: [
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
      'Help Center',
    ],
    company: [
      'About us',
      'Careers',
      'Brand Guidelines',
      'Certificate Validation',
      'Trust Center',
      'Product Updates',
      'Status',
    ],
    contact: ['Press', 'Support', 'Enterprise Sales'],
    partners: ['Become a Partner', 'Register a Deal'],
    programs: ['Channel & Resellers', 'Ambassador Program', 'Affiliate Program', 'SME Program'],
    store: ['HTB Swag', 'Buy Gift Cards'],
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-transparent overflow-hidden">
      {/* Mobile Footer - Always Visible */}
      <div className="block md:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 overflow-hidden"
          >
            {/* Header with Logo */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <img src="/logo.jpg" alt="PhantomX Logo" className="w-8 h-8 rounded-lg object-cover" />
                <span className="text-white font-bold text-lg">PhantomX</span>
              </div>
            </div>

            {/* Trust Badges and Certifications */}
            <div className="mb-8">
              <div className="space-y-4">
                {/* Forrester Wave Leader */}
                <div className="flex items-center justify-center">
                  <div className="bg-gray-800/50 rounded-lg px-4 py-3 text-center">
                    <div className="text-white font-bold text-sm">FORRESTER</div>
                    <div className="text-gray-300 text-xs">WAVE LEADER</div>
                  </div>
                </div>

                {/* Cyber Essentials */}
                <div className="flex items-center justify-center">
                  <div className="bg-gray-800/50 rounded-lg px-4 py-3 flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white font-semibold text-sm">CYBER ESSENTIALS</span>
                  </div>
                </div>

                {/* ISO Certifications */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-gray-800/50 rounded-lg px-3 py-2 flex items-center space-x-2">
                    <span className="text-white text-lg">🌐</span>
                    <span className="text-white font-semibold text-sm">ISO 27001</span>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg px-3 py-2 flex items-center space-x-2">
                    <span className="text-white text-lg">🌐</span>
                    <span className="text-white font-semibold text-sm">ISO 27701</span>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg px-3 py-2 flex items-center space-x-2">
                    <span className="text-white text-lg">🌐</span>
                    <span className="text-white font-semibold text-sm">ISO 9001</span>
                  </div>
                </div>

                {/* Review Platform Ratings */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-gray-800/50 rounded-lg px-3 py-2 flex items-center space-x-2">
                    <span className="text-gray-400 font-bold text-sm">G2</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-white font-semibold text-sm">4.8</span>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg px-3 py-2 flex items-center space-x-2">
                    <span className="text-gray-400 font-semibold text-sm">Capterra</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-white font-semibold text-sm">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Categories */}
            <div className="space-y-3 mb-8">
              {mobileNavItems.map((item) => (
                <div key={item.name} className="bg-gray-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(item.name)}
                    className="w-full flex items-center justify-between p-4 text-white font-medium hover:bg-gray-700/50 transition-colors"
                  >
                    <span>{item.name}</span>
                    <motion.div
                      animate={{ rotate: expandedSection === item.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedSection === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 space-y-2">
                          {item.items.map((subItem, index) => (
                            <motion.a
                              key={subItem}
                              href="#"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                              className="block text-gray-300 text-sm hover:text-white transition-colors py-1"
                            >
                              {subItem}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="mb-8">
              <h3 className="text-gray-300 font-semibold text-sm mb-4 text-center">Follow Us</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialMediaIcons.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-center p-4 bg-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200 group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-3 mb-6">
              <h3 className="text-gray-300 font-semibold text-sm mb-3">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors py-1">
                  Cookie Settings
                </a>
                <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors py-1">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-300 text-sm hover:text-white transition-colors py-1">
                  User Agreement
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-4 border-t border-gray-700">
              <span className="text-gray-400 text-xs">© 2025 PhantomX</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto my-6 px-4 sm:px-5 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-h-screen overflow-auto overflow-x-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
              {/* Left brand and badges */}
              <motion.div variants={{}} transition={{ duration: 0.6, delay: 0.05 }} className="sm:col-span-2 lg:col-span-2">
                <div className="flex items-center mb-4">
                  <img src="/logo.jpg" alt="PhantomX Logo" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-cover mr-3" />
                  <span className="text-white font-bold text-base sm:text-lg">PhantomX</span>
                </div>
                <p className="text-gray-300 text-xs mb-3 sm:mb-4">The #1 platform to build attack-ready teams and organizations.</p>
                <button className="bg-[#3b82f6] hover:bg-[#60a5fa] text-white font-semibold px-3 sm:px-4 py-1.5 rounded-lg text-xs transition-colors">Get a demo</button>
                <div className="mt-6 space-y-3">
                  <div className="h-px bg-gray-700" />
                  <img src="https://placehold.co/220x40/111827/ffffff?text=Forrester" alt="Forrester Wave Leader" className="h-8 sm:h-10" />
                  <img src="https://placehold.co/220x40/111827/ffffff?text=Cyber+Essentials" alt="Cyber Essentials" className="h-8 sm:h-10" />
                  <div className="flex gap-2 sm:gap-3">
                    <img src="https://placehold.co/90x32/111827/ffffff?text=ISO+27001" alt="ISO 27001" className="h-6 sm:h-8" />
                    <img src="https://placehold.co/90x32/111827/ffffff?text=ISO+27701" alt="ISO 27701" className="h-6 sm:h-8" />
                    <img src="https://placehold.co/90x32/111827/ffffff?text=ISO+9001" alt="ISO 9001" className="h-6 sm:h-8" />
                  </div>
                </div>
              </motion.div>

              {/* Products */}
              <motion.div variants={{}} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-sm mb-3">Products</h3>
                <ul className="space-y-1.5 text-xs text-blue-cerulean">
                  {links.products.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
              </motion.div>

              {/* Solutions */}
              <motion.div variants={{}} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-sm mb-3">Solutions</h3>
                <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                  {links.solutions.map((name) => (
                    <li key={name}><span className="text-gray-300 font-semibold">{name}</span></li>
                  ))}
                </ul>
                <h4 className="text-white font-semibold text-sm mb-2">Job Roles</h4>
                <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                  {links.jobRoles.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
                <h4 className="text-white font-semibold text-sm mb-2">Industries</h4>
                <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                  {links.industries.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
                <h4 className="text-white font-semibold text-sm mb-2">Use Cases</h4>
                <ul className="space-y-1.5 text-xs text-blue-cerulean">
                  {links.useCases.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div variants={{}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-sm mb-3">Resources</h3>
                <ul className="space-y-1.5 text-xs text-blue-cerulean">
                  {links.resources.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
              </motion.div>

              {/* Company & Contact */}
              <motion.div variants={{}} transition={{ duration: 0.6, delay: 0.25 }} className="lg:col-span-1">
                <h3 className="text-white font-semibold text-sm mb-3">Company</h3>
                <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                  {links.company.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
                <h3 className="text-white font-semibold text-sm mb-2">Contact Us</h3>
                <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                  {links.contact.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
                <h3 className="text-white font-semibold text-sm mb-2">Partners</h3>
                <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                  {links.partners.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
                <h3 className="text-white font-semibold text-sm mb-2">Programs</h3>
                <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                  {links.programs.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
                <h3 className="text-white font-semibold text-sm mb-2">Store</h3>
                <ul className="space-y-1.5 text-xs text-blue-cerulean">
                  {links.store.map((name) => (
                    <li key={name}><a className="hover:text-blue-sky transition-colors" href="#">{name}</a></li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div
              variants={{}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 sm:gap-4 text-xs text-blue-cerulean">
                <a href="#" className="hover:text-blue-sky transition-colors">Cookie Settings</a>
                <a href="#" className="hover:text-blue-sky transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-sky transition-colors">User Agreement</a>
              </div>
              <span className="text-gray-400 text-xs">© 2025 PhantomX</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
