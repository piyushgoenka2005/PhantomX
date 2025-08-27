'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { STATS } from '@/constants'
import { ANIMATION_CONFIGS } from '@/constants'

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-blue-bright relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Join the global cybersecurity community
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Be part of the world's largest platform for cybersecurity training and skill development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-semibold mb-2">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}
