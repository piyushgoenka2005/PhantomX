'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Users, GraduationCap, User } from 'lucide-react'
import Link from 'next/link'

export default function Products() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const productCategories = [
    {
      title: 'Teams',
      icon: Users,
      description: 'Build attack-ready teams with enterprise-grade training and assessment tools.',
      features: [
        'Courses & Certifications',
        'Cyber Ranges',
        'Enterprise Attack Simulations',
        'Gamified Team Assessments',
        'Talent Sourcing'
      ],
      cta: 'Start free trial',
      color: 'blue'
    },
    {
      title: 'Schools',
      icon: GraduationCap,
      description: 'Empower the next generation of cybersecurity professionals.',
      features: [
        'Courses & Learning Paths',
        'Hands-on Labs',
        'Gamified Team Exercises',
        'Industry Certifications',
        'Student Programs'
      ],
      cta: 'Get a demo',
      color: 'blue'
    },
    {
      title: 'Individuals',
      icon: User,
      description: 'Start your cybersecurity journey with comprehensive courses and hands-on labs.',
      features: [
        'Courses & Learning Paths',
        'Hacking Labs',
        'Capture The Flag',
        'Industry Certifications',
        'Job Board'
      ],
      cta: 'Get started for free',
      color: 'blue'
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
            Whether you're an individual learner, building a team, or educating the next generation, 
            we have the tools and resources to accelerate your cybersecurity journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-bright/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-bright rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <p className="text-blue-cerulean mb-6 leading-relaxed">
                {category.description}
              </p>

              <ul className="space-y-3 mb-8">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white">
                    <span className="text-blue-bright mr-3">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/solutions" className="w-full blue-button flex items-center justify-center">
                {category.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-bright mb-2">3.7M+</div>
            <div className="text-blue-cerulean">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-bright mb-2">500+</div>
            <div className="text-blue-cerulean">Labs Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-bright mb-2">50+</div>
            <div className="text-blue-cerulean">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-bright mb-2">200+</div>
            <div className="text-blue-cerulean">Courses</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
