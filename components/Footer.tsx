'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Teams', href: '#' },
        { name: 'Individuals', href: '#' },
        { name: 'Schools', href: '#' },
        { name: 'View all products', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Job Roles', href: '#' },
        { name: 'Industries', href: '#' },
        { name: 'Use Cases', href: '#' },
        { name: 'Customer Stories', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Community', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Resource Hub', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact us', href: '#' },
        { name: 'Partners', href: '#' }
      ]
    }
  ];

  const certifications = [
    { name: 'Forrester wave leader', icon: '🏆' },
    { name: 'ISO 27001', icon: '🔒' },
    { name: 'ISO 27701', icon: '🔒' },
    { name: 'ISO 9001', icon: '🔒' },
    { name: 'G2 rating', icon: '⭐' },
    { name: 'Capterra rating', icon: '⭐' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-blue-cerulean hover:text-blue-sky transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications and Ratings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="flex flex-wrap items-center justify-center gap-6">
              {certifications.map((cert, index) => (
                <div key={cert.name} className="flex items-center text-blue-cerulean text-sm">
                  <span className="mr-2">{cert.icon}</span>
                  {cert.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-6 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-bright rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">HTB</span>
              </div>
              <span className="text-white font-bold text-lg">Hack The Box</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="text-blue-cerulean hover:text-blue-sky text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-cerulean hover:text-blue-sky text-sm">
                User Agreement
              </a>
              <span className="text-gray-500 text-sm">
                © 2025 Hack The Box
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
