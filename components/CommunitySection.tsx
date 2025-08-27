'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

export default function CommunitySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left circle */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-lime-400 rounded-full opacity-60 animate-pulse"></div>
        
        {/* Mid-left triangle with curved line */}
        <div className="absolute top-1/3 left-16">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-lime-400 opacity-60"></div>
          <div className="absolute top-5 left-1/2 w-16 h-0.5 bg-gray-600 transform -translate-x-1/2 rounded-full"></div>
        </div>
        
        {/* Mid-left diamond */}
        <div className="absolute top-1/2 left-24 w-6 h-6 bg-lime-400 transform rotate-45 opacity-60"></div>
        
        {/* Top right square */}
        <div className="absolute top-16 right-20 w-5 h-5 bg-lime-400 opacity-60"></div>
        
        {/* Mid-right star */}
        <div className="absolute top-1/3 right-16 w-6 h-6 bg-lime-400 opacity-60 transform rotate-45">
          <div className="absolute inset-0 bg-lime-400 transform rotate-45"></div>
        </div>
        
        {/* Bottom right triangle */}
        <div className="absolute bottom-32 right-20 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-lime-400 opacity-60"></div>
        
        {/* Bottom left circle */}
        <div className="absolute bottom-20 left-16 w-8 h-8 bg-lime-400 rounded-full opacity-60 animate-pulse"></div>
        
        {/* Curved lines emanating from center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-gray-700 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gray-700 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gray-700 rounded-full opacity-20"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-lime-400 mb-8"
          >
            3.7m+ members|
          </motion.h1>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-2 mb-8"
          >
            <p className="text-xl text-white">
              Chat about labs, share resources and jobs.
            </p>
            <p className="text-xl text-white">
              Connect with 200k+ hackers from all over the world.
            </p>
          </motion.div>

          {/* Discord Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center mx-auto shadow-lg"
          >
            {/* Discord Icon */}
            <div className="w-6 h-6 mr-3">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            Join Discord
          </motion.button>

          {/* G2 Rating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center space-x-3 mt-8"
          >
            {/* G2 Logo */}
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <div className="text-red-500 font-bold text-sm">G</div>
              <div className="text-white font-bold text-xs">2</div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">4.8</span>
            </div>
            
            {/* Source Text */}
            <span className="text-gray-400 text-sm">
              Rating by G2 users
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
