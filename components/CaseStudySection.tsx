'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Book, ArrowUpRight } from 'lucide-react'

export default function CaseStudySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Progress Indicator and Cube Button */}
          <div className="flex items-center justify-between mb-12">
            {/* Progress Bar */}
            <div className="flex space-x-2">
              <div className="w-16 h-1 bg-lime-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* Cube Icon Button */}
            <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 hover:border-lime-500 transition-colors">
              <div className="w-6 h-6 bg-lime-500 rounded-sm"></div>
            </button>
          </div>

          {/* Two Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Card: Case Study TOYOTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-lime-500/50 transition-all duration-300 relative"
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="text-gray-400 text-sm font-medium">
                  Case study
                </div>
                <h3 className="text-3xl font-bold text-white">
                  TOYOTA
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Discover how to bridge the knowledge gap between teams and prepare for any cyber incident.
                </p>
              </div>
            </motion.div>

            {/* Right Card: Why Hack The Box? */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-lime-500/50 transition-all duration-300 relative"
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="text-gray-400 text-sm font-medium">
                  Why Hack The Box?
                </div>
                
                {/* Book Icon */}
                <div className="flex justify-center py-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Book className="w-6 h-6 text-white" />
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed">
                  High-performing cyber teams need to continuously adapt to new threats, benchmark skills, and retain talent.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Feedback Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-colors">
          <span className="text-sm font-medium">How likely are you to recomme...</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
