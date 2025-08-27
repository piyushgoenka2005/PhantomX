'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FeatureCard from '@/components/ui/FeatureCard'
import { FEATURES } from '@/constants'

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleFeatureAction = (featureTitle: string) => {
    console.log(`Feature action triggered for ${featureTitle}`);
    // Add your action logic here
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Comprehensive cybersecurity training platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access cutting-edge labs, industry-recognized certifications, and real-world 
            scenarios designed to build practical skills and advance your cybersecurity career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <FeatureCard
                feature={feature}
                onAction={() => handleFeatureAction(feature.title)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
