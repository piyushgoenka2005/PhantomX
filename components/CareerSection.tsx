'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ArrowUpRight, User } from 'lucide-react'

export default function CareerSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const logos = [
    { src: "https://skyje.com/wp-content/uploads/2019/04/3-1-800x515.png", alt: "Security Metrics" },
    { src: "https://i.forbesimg.com/media/lists/companies/ibm_416x416.jpg", alt: "Synack" },
    { src: "https://logomak.com/blog/wp-content/uploads/2023/09/ConocoPhillips-Logo-500x313-min.png", alt: "Lufthansa" },
    { src: "https://www.vandelaydesign.com/wp-content/uploads/amazon.jpg", alt: "Booking Holdings" },
];

  return (
    <section className="py-12 sm:py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="md:text-5xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              Clear career path programs and retention <br />strategies fighting burnout, fatigue, or skill gaps.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
                Find a job
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                For business
              </button>
            </div>
          </div>

          {/* Hiring Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Available Candidates & Onboarding Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-[#1a1f2c] rounded-xl p-8 lg:col-span-2 flex flex-col md:flex-row gap-8"
              >
                {/* Left side: Available Candidates */}
                <div className="flex-1">
                  <h3 className="text-gray-400 text-sm">Available candidates</h3>
                  <p className="text-7xl font-bold text-[#3b82f6] mt-4">870k+</p>
                </div>
                {/* Right side: Onboarding & Retention */}
                <div className="flex-1">
                   <div className="flex justify-between items-start">
                      <h3 className="text-gray-400 text-sm">Onboarding & retention</h3>
                      <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-xl text-white mt-4 leading-relaxed">
                      A blueprint for onboarding cybersecurity professionals: hire & retain!
                  </p>
                </div>
              </motion.div>

              {/* Success Story Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#1a1f2c] rounded-xl p-8 flex"
              >
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-gray-400 text-sm">Success story</h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-xl text-white mt-4">
                    From Military Operator to Head of Cyber Threat Intelligence: Gary's story
                  </p>
                </div>
                <div className="ml-4 items-center">
                  <img src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="Gary's story" className="w-24 h-24 rounded-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Companies Hiring Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-[#1a1f2c] rounded-xl p-8"
            >
              <h3 className="text-gray-400 text-sm mb-6">Companies hiring on PhantomX</h3>
              <div className="flex flex-wrap items-center justify-around gap-8">
                {logos.map((logo, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 object-contain"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
