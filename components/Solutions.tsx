'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, CheckCircle, Target, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Solutions() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      title: 'Red Teams',
      icon: Target,
      description: 'Test and grow your skills in all penetration testing and adversarial domains, from information gathering to documentation and reporting.',
      features: [
        'Industry-recognized certifications',
        'Hands-on penetration testing labs',
        'Corporate red team scenarios',
        'MITRE ATT&CK framework mapping'
      ],
      cta: 'See more'
    },
    {
      title: 'Blue Teams',
      icon: Shield,
      description: 'Stay connected to the threat landscape and learn how to detect techniques, tactics, and procedures used by real adversaries.',
      features: [
        'Market-connected courses',
        'Hands-on investigation labs',
        'Gamified blue team assessments',
        'NIST/NICE framework mapping'
      ],
      cta: 'See more'
    },
    {
      title: 'Purple Approach',
      icon: Zap,
      description: 'Master offensive strategies to enable effective defensive operations. For modern, 360° cyber professionals and organizations.',
      features: [
        'CVE-based vulnerable labs',
        'Real-time attack & defense simulation',
        'Realistic enterprise scenarios',
        'Extensive mapping and reporting'
      ],
      cta: 'See more'
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solutions for all cybersecurity domains
          </h2>
          <p className="text-xl text-blue-cerulean max-w-3xl mx-auto">
            Comprehensive training and assessment solutions for every aspect of cybersecurity, 
            from offensive testing to defensive operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-bright/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-bright rounded-lg flex items-center justify-center mr-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
              </div>

              <p className="text-blue-cerulean mb-6 leading-relaxed">
                {solution.description}
              </p>

              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-blue-bright mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/products" className="blue-button-secondary flex items-center">
                {solution.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800 rounded-2xl p-8 border border-gray-700 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Create a workforce development plan and take control of your cyber readiness
          </h3>
          <p className="text-blue-cerulean mb-6 max-w-2xl mx-auto">
            Build attack-ready teams with enterprise-grade training and assessment tools designed 
            to accelerate your cybersecurity journey.
          </p>
          <Link href="/products" className="blue-button text-lg px-8 py-4 flex items-center mx-auto">
            View all customer stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
