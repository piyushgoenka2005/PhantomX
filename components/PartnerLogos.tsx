'use client'

import { motion } from 'framer-motion'

interface Partner {
  id: string;
  name: string;
  logo?: string;
  url?: string;
}

const PARTNERS: Partner[] = [
  // Logo only partners
  { id: '1', name: 'Microsoft', logo: 'MS' },
  { id: '2', name: 'Cisco', logo: 'CS' },
  { id: '3', name: 'IBM', logo: 'IBM' },
  { id: '4', name: 'Oracle', logo: 'OR' },
  { id: '5', name: 'VMware', logo: 'VM' },
  { id: '6', name: 'FireEye', logo: 'FE' },
  { id: '7', name: 'McAfee', logo: 'MC' },
  { id: '8', name: 'Malwarebytes', logo: 'MB' },
  { id: '9', name: 'Splunk', logo: 'SP' },
];

export default function PartnerLogos() {

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Sliding container */}
          <motion.div
            className="flex items-center space-x-16"
            animate={{
              x: [0, -50 * PARTNERS.length],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 space-x-3 px-6 py-4 bg-gray-800/30 rounded-lg transition-all duration-400 min-w-[200px]">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-sm">
                        {partner.logo}
                      </span>
                    </div>
                    {partner.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
