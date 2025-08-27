'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 bg-gray-900 bg-cover bg-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-left max-w-4xl"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight pt-20"
          >
            The #1 platform to build{' '}
            <span className="blue-gradient">attack-ready</span>{' '}
            teams and organizations
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-cerulean mb-8 leading-relaxed"
          >
            Maximum curriculum management flexibility, enhanced skills reporting, and engaging gamification features. 
            Book a demo to see Hack The Box in action.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center mb-12"
          >
            <button className="blue-button text-lg px-8 py-4 flex items-center">
              Get a demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="blue-button-secondary text-lg px-8 py-4 flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Watch demo
            </button>
          </motion.div>

          {/* Promotional Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 mb-8"
          >
            <span className="bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-3">
              NEW
            </span>
            <span className="text-gray-300 text-sm">
              Start a 14-day business trial FOR FREE
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 ml-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
