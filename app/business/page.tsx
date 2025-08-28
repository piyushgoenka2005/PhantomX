'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, Building, Globe, Award, CheckCircle, ArrowRight, Star, Zap, Target, Lock, BarChart3 } from 'lucide-react'
import { Header, MobileMenu } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

interface BusinessTier {
  name: string
  description: string
  price: string
  features: string[]
  icon: React.ComponentType<{ className?: string }>
  color: string
  popular?: boolean
}

interface CaseStudy {
  id: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  logo: string
}

const businessTiers: BusinessTier[] = [
  {
    name: 'Enterprise',
    description: 'Complete cybersecurity suite for large organizations',
    price: 'Custom',
    features: [
      'Advanced Threat Detection & Response',
      '24/7 Security Operations Center',
      'Custom Security Policies',
      'Dedicated Security Team',
      'Compliance Management',
      'Incident Response Services',
      'Security Training Programs',
      'Custom Integrations',
      'Priority Support',
      'Quarterly Security Reviews'
    ],
    icon: Building,
    color: 'from-purple-600 to-purple-800',
    popular: true
  },
  {
    name: 'Professional',
    description: 'Comprehensive security for growing businesses',
    price: '$2,999/month',
    features: [
      'Threat Detection & Response',
      'Security Monitoring',
      'Vulnerability Management',
      'Compliance Reporting',
      'Security Training',
      'Incident Response',
      'API Access',
      'Email Support'
    ],
    icon: Shield,
    color: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Business',
    description: 'Essential security for small to medium businesses',
    price: '$999/month',
    features: [
      'Basic Threat Detection',
      'Security Monitoring',
      'Vulnerability Scanning',
      'Compliance Reports',
      'Security Training',
      'Email Support',
      'Dashboard Access'
    ],
    icon: Users,
    color: 'from-green-600 to-green-800'
  }
]

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    company: 'TechCorp Global',
    industry: 'Technology',
    challenge: 'Facing sophisticated cyber attacks and compliance requirements across multiple regions',
    solution: 'Implemented PhantomX Enterprise with custom security policies and 24/7 monitoring',
    results: [
      '99.9% threat detection rate',
      '60% reduction in security incidents',
      'Full GDPR and SOC2 compliance',
      '$2M annual cost savings'
    ],
    logo: '/api/placeholder/120/60'
  },
  {
    id: '2',
    company: 'FinSecure Bank',
    industry: 'Financial Services',
    challenge: 'Need for real-time fraud detection and regulatory compliance',
    solution: 'Deployed advanced threat detection with AI-powered analytics',
    results: [
      'Real-time fraud detection',
      '100% regulatory compliance',
      '50% faster incident response',
      'Enhanced customer trust'
    ],
    logo: '/api/placeholder/120/60'
  },
  {
    id: '3',
    company: 'HealthCare Plus',
    industry: 'Healthcare',
    challenge: 'Protecting sensitive patient data and meeting HIPAA requirements',
    solution: 'Comprehensive security suite with healthcare-specific compliance',
    results: [
      'Zero data breaches',
      'HIPAA compliance achieved',
      'Improved patient data security',
      'Streamlined audit processes'
    ],
    logo: '/api/placeholder/120/60'
  }
]

const enterpriseFeatures = [
  {
    title: 'Advanced Threat Detection',
    description: 'AI-powered threat detection with machine learning algorithms',
    icon: Shield,
    color: 'text-blue-400'
  },
  {
    title: '24/7 Security Operations',
    description: 'Round-the-clock monitoring and incident response',
    icon: Globe,
    color: 'text-green-400'
  },
  {
    title: 'Compliance Management',
    description: 'Automated compliance reporting for all major regulations',
    icon: Award,
    color: 'text-purple-400'
  },
  {
    title: 'Custom Integrations',
    description: 'Seamless integration with your existing security stack',
    icon: Zap,
    color: 'text-orange-400'
  },
  {
    title: 'Dedicated Support',
    description: 'Direct access to security experts and account managers',
    icon: Users,
    color: 'text-red-400'
  },
  {
    title: 'Security Analytics',
    description: 'Advanced analytics and reporting for security insights',
    icon: BarChart3,
    color: 'text-lime-400'
  }
]

export default function BusinessPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(true)
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header 
        isScrolled={isScrolled} 
        onMobileMenuToggle={handleMobileMenuToggle} 
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={handleMobileMenuClose} 
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise Cybersecurity
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with enterprise-grade security solutions designed for scale, compliance, and advanced threat protection
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                Get Enterprise Demo
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Business Plan
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From growing businesses to enterprise organizations, we have the right security solution for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessTiers.map((tier, index) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`relative bg-gray-800/50 border rounded-2xl p-8 ${
                    tier.popular 
                      ? 'border-lime-500 shadow-lg shadow-lime-500/20' 
                      : 'border-gray-700'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-lime-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="text-3xl font-bold text-white mb-2">{tier.price}</div>
                    {tier.price !== 'Custom' && (
                      <p className="text-gray-400 text-sm">per month</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-lime-500 hover:bg-lime-600 text-black'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}>
                    {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Advanced security capabilities designed for large organizations with complex security requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
                >
                  <div className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how leading organizations are protecting their business with PhantomX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Building className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.company}</h3>
                    <p className="text-gray-400 text-sm">{study.industry}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that trust PhantomX to protect their digital assets and maintain compliance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Target className="w-5 h-5" />
                Schedule Demo
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Lock className="w-5 h-5" />
                Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
