'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
      'Hacking Labs',
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
    <footer className="bg-transparent">
      <div className="max-w-6xl mx-auto my-6 px-5 lg:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-gray-700 rounded-2xl p-6 lg:p-8 max-h-screen overflow-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Left brand and badges */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.05 }} className="md:col-span-3 lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-9 h-9 bg-blue-bright rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">HTB</span>
                </div>
                <span className="text-white font-bold text-base">Hack The Box</span>
              </div>
              <p className="text-gray-300 text-xs mb-3">The #1 platform to build attack-ready teams and organizations.</p>
              <button className="bg-[#3b82f6] hover:bg-[#60a5fa] text-white font-semibold px-4 py-1.5 rounded-lg text-xs transition-colors">Get a demo</button>
              <div className="mt-6 space-y-3">
                <div className="h-px bg-gray-700" />
                <img src="https://placehold.co/220x40/111827/ffffff?text=Forrester" alt="Forrester Wave Leader" className="h-10" />
                <img src="https://placehold.co/220x40/111827/ffffff?text=Cyber+Essentials" alt="Cyber Essentials" className="h-10" />
                <div className="flex gap-3">
                  <img src="https://placehold.co/90x32/111827/ffffff?text=ISO+27001" alt="ISO 27001" className="h-8" />
                  <img src="https://placehold.co/90x32/111827/ffffff?text=ISO+27701" alt="ISO 27701" className="h-8" />
                  <img src="https://placehold.co/90x32/111827/ffffff?text=ISO+9001" alt="ISO 9001" className="h-8" />
                </div>
              </div>
            </motion.div>

            {/* Products */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-1">
              <h3 className="text-white font-semibold text-sm mb-3">Products</h3>
              <ul className="space-y-1.5 text-xs text-blue-cerulean">
                {links.products.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-1">
              <h3 className="text-white font-semibold text-sm mb-3">Solutions</h3>
              <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                {links.solutions.map((name) => (
                  <li key={name}><span className="text-gray-300 font-semibold">{name}</span></li>
                ))}
              </ul>
              <h4 className="text-white font-semibold text-sm mb-2">Job Roles</h4>
              <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                {links.jobRoles.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
              <h4 className="text-white font-semibold text-sm mb-2">Industries</h4>
              <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                {links.industries.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
              <h4 className="text-white font-semibold text-sm mb-2">Use Cases</h4>
              <ul className="space-y-1.5 text-xs text-blue-cerulean">
                {links.useCases.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-1">
              <h3 className="text-white font-semibold text-sm mb-3">Resources</h3>
              <ul className="space-y-1.5 text-xs text-blue-cerulean">
                {links.resources.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
            </motion.div>

            {/* Company & Contact */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="lg:col-span-1">
              <h3 className="text-white font-semibold text-sm mb-3">Company</h3>
              <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                {links.company.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
              <h3 className="text-white font-semibold text-sm mb-2">Contact Us</h3>
              <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                {links.contact.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
              <h3 className="text-white font-semibold text-sm mb-2">Partners</h3>
              <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                {links.partners.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
              <h3 className="text-white font-semibold text-sm mb-2">Programs</h3>
              <ul className="space-y-1.5 text-xs text-blue-cerulean mb-4">
                {links.programs.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
              <h3 className="text-white font-semibold text-sm mb-2">Store</h3>
              <ul className="space-y-1.5 text-xs text-blue-cerulean">
                {links.store.map((name) => (
                  <li key={name}><a className="hover:text-blue-sky" href="#">{name}</a></li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 pt-5 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="flex items-center gap-4 text-xs text-blue-cerulean mb-4 md:mb-0">
              <a href="#" className="hover:text-blue-sky">Cookie Settings</a>
              <a href="#" className="hover:text-blue-sky">Privacy Policy</a>
              <a href="#" className="hover:text-blue-sky">User Agreement</a>
            </div>
            <span className="text-gray-400 text-xs">© 2025 Hack The Box</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
