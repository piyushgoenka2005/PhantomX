'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { SOLUTIONS } from '@/constants'
import { ANIMATION_CONFIGS } from '@/constants'

export default function Solutions() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSolutionAction = (solutionTitle: string) => {
    console.log(`Solution action triggered for ${solutionTitle}`);
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
            Comprehensive cybersecurity solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From offensive security training to defensive strategies, we provide 
            comprehensive solutions for every aspect of cybersecurity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSolutionAction(solution.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group-hover:scale-105 transform"
                >
                  {solution.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}
