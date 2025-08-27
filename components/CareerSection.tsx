'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ArrowUpRight, User, Briefcase, Award } from 'lucide-react'

export default function CareerSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companies = [
    { name: 'securityMETRICS', logo: 'securityMETRICS' },
    { name: 'Synack', logo: 'Synack' },
    { name: 'Lufthansa', logo: 'Lufthansa' },
    { name: 'BOOKING HOLDINGS', logo: 'BOOKING HOLDINGS' }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Clear career path programs and retention strategies fighting burnout, fatigue, or skill gaps.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
                Find a job
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                For business
              </button>
            </div>
          </div>

          {/* Three Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Available candidates */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-lime-500/50 transition-all duration-300"
            >
              <h3 className="text-gray-300 text-lg font-semibold mb-4">
                Available candidates
              </h3>
              <div className="text-6xl md:text-7xl font-bold text-lime-500">
                870k+
              </div>
            </motion.div>

            {/* Card 2: Onboarding & retention */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-lime-500/50 transition-all duration-300 relative"
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-gray-300 text-lg font-semibold mb-4">
                Onboarding & retention
              </h3>
              <p className="text-white leading-relaxed">
                A blueprint for onboarding cybersecurity professionals: hire & retain!
              </p>
            </motion.div>

            {/* Card 3: Success story */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-lime-500/50 transition-all duration-300 relative"
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-gray-300 text-lg font-semibold mb-4">
                Success story
              </h3>
              <p className="text-white leading-relaxed mb-6">
                From Military Operator to Head of Cyber Threat Intelligence: Gary's story
              </p>

              {/* Gary's Image */}
              <div className="flex justify-end">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-orange-500/20 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  {/* Orange/red glow effect */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-orange-500/30 rounded-full blur-sm"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Companies Hiring Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Companies hiring on Hack The Box
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-center p-4"
                >
                  <div className="text-white/70 hover:text-white transition-colors font-semibold text-sm md:text-base text-center">
                    {company.logo}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
