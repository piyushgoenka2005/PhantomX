'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Play, Maximize2, Volume2, RefreshCw, ExternalLink, User, Search, Book, ArrowUpRight } from 'lucide-react'

export default function VideoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='mb-12'
        >
          <h1 className="text-xl md:text-5xl lg:text-4xl font-bold text-white mb-8 leading-tight">
            Cyber workforce development plans baked <br /> into the fabric and objectives of your organization.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
              Get a demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start free trial
            </button>
          </div>
        </motion.div>

        {/* Video Player Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          {/* Browser Window */}
          <div className="bg-gray-800 rounded-t-lg border border-gray-700 h-screen w-full">
            {/* Browser Header */}
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-t-lg">
              {/* Left - Window Controls */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>

              {/* Center - Address Bar */}
              <div className="flex items-center space-x-3 text-white">
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">HTB Enterprise Platform | ...</span>
                <RefreshCw className="w-4 h-4" />
              </div>

              {/* Right - Controls */}
              <div className="flex items-center space-x-3">
                <Volume2 className="w-4 h-4 text-white" />
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Video Content Area */}
            <div className="relative h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
              {/* Background Glowing Shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-lime-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-lime-500/15 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-lime-500/10 rounded-full blur-3xl"></div>
              </div>

              {/* Overlay Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
                {/* Title with Icon */}
                <div className="flex items-center justify-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    A preview into HTB workforce development
                  </h2>
                  <div className="ml-4 w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-400 rounded-sm"></div>
                  </div>
                </div>

                <p className="text-white/80 text-lg mb-8 max-w-2xl">
                  Develop and measure all aspects of your cyber readiness on a single cloud-based platform.
                </p>

                {/* CTA Buttons - Stacked Vertically */}
                <div className="flex flex-col gap-4">
                  <button className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors">
                    See it in action
                  </button>
                  <button className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book a demo
                  </button>
                </div>
              </div>

              {/* Feedback Pop-up */}
              <div className="absolute bottom-6 right-6">
                <div className="bg-gray-800/90 backdrop-blur-md border border-gray-600 rounded-lg px-4 py-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-lime-500 rotate-90" />
                    <span className="text-white text-sm font-medium">
                      How likely are you to recomme...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
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
    </section>
  )
}
