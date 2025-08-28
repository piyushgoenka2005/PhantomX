'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Shield, Users, Zap, Target, GraduationCap, User } from 'lucide-react'
import { Header, MobileMenu, Footer } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  icon: React.ComponentType<{ className?: string }>
  color: string
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individuals starting their cybersecurity journey',
    features: [
      'Access to 50+ basic labs',
      '5 courses per month',
      'Community forum access',
      'Basic progress tracking',
      'Email support'
    ],
    icon: User,
    color: 'blue',
    cta: 'Get Started Free'
  },
  {
    name: 'Professional',
    price: '$19',
    period: 'per month',
    description: 'For serious learners and professionals',
    features: [
      'Access to 200+ labs',
      'Unlimited courses',
      'Advanced learning paths',
      'Certification preparation',
      'Priority support',
      'Progress analytics',
      'Downloadable content'
    ],
    popular: true,
    icon: Shield,
    color: 'lime',
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per year',
    description: 'For teams and organizations',
    features: [
      'Everything in Professional',
      'Team management tools',
      'Custom learning paths',
      'Advanced analytics & reporting',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'On-premise deployment options'
    ],
    icon: Users,
    color: 'purple',
    cta: 'Contact Sales'
  }
]

export default function PricingPage() {
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose Your
              <span className="text-lime-400"> Security</span> Path
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From free starter plans to enterprise solutions, find the perfect fit for your cybersecurity journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-lime-500/10 to-lime-600/10 border-2 border-lime-500/50' 
                    : 'bg-gray-800/50 border border-gray-700'
                } hover:scale-105 transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lime-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${
                    tier.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    tier.color === 'lime' ? 'bg-lime-500/20 text-lime-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-lime-500 hover:bg-lime-600 text-black'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-gray-300">
              See what's included in each plan
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Starter</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Professional</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 text-gray-300">Labs Access</td>
                  <td className="text-center py-4 px-6 text-gray-300">50+</td>
                  <td className="text-center py-4 px-6 text-lime-400 font-semibold">200+</td>
                  <td className="text-center py-4 px-6 text-lime-400 font-semibold">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 text-gray-300">Courses</td>
                  <td className="text-center py-4 px-6 text-gray-300">5/month</td>
                  <td className="text-center py-4 px-6 text-lime-400 font-semibold">Unlimited</td>
                  <td className="text-center py-4 px-6 text-lime-400 font-semibold">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 text-gray-300">Certifications</td>
                  <td className="text-center py-4 px-6 text-gray-400">✗</td>
                  <td className="text-center py-4 px-6 text-lime-400">✓</td>
                  <td className="text-center py-4 px-6 text-lime-400">✓</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 text-gray-300">Team Management</td>
                  <td className="text-center py-4 px-6 text-gray-400">✗</td>
                  <td className="text-center py-4 px-6 text-gray-400">✗</td>
                  <td className="text-center py-4 px-6 text-lime-400">✓</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 text-gray-300">API Access</td>
                  <td className="text-center py-4 px-6 text-gray-400">✗</td>
                  <td className="text-center py-4 px-6 text-gray-400">✗</td>
                  <td className="text-center py-4 px-6 text-lime-400">✓</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-4 px-6 text-gray-300">Support</td>
                  <td className="text-center py-4 px-6 text-gray-300">Email</td>
                  <td className="text-center py-4 px-6 text-lime-400">Priority</td>
                  <td className="text-center py-4 px-6 text-lime-400">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I switch plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees."
              },
              {
                question: "Do you offer discounts for students?",
                answer: "Yes, we offer special pricing for students and educational institutions. Contact us for more details."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Security Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of cybersecurity professionals who trust PhantomX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lime-500 hover:bg-lime-600 text-black px-8 py-3 rounded-xl font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
