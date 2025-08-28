'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowLeft, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Header, MobileMenu } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function ForgotPasswordPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()
  
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(true)
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError('') // Clear error when user starts typing
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Validate email
      if (!email) {
        throw new Error('Please enter your email address')
      }

      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically make an API call to send reset email
      console.log('Password reset requested for:', email)
      
      setSuccess(true)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

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

      {/* Back to Login Link */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Link 
            href="/auth/login"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sign in
          </Link>
        </div>
      </div>

      {/* Forgot Password Form */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <img src="/logo.jpg" alt="PhantomX Logo" className="w-12 h-12 rounded-xl object-cover" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Reset your password</h1>
              <p className="text-gray-400">
                {success 
                  ? 'Check your email for reset instructions'
                  : 'Enter your email address and we\'ll send you a link to reset your password'
                }
              </p>
            </div>

            {!success ? (
              <>
                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-red-400 text-sm">{error}</span>
                  </motion.div>
                )}

                {/* Reset Password Form */}
                <form onSubmit={handleResetPassword} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send reset link'}
                  </button>
                </form>

                {/* Additional Help */}
                <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
                  <h3 className="text-sm font-medium text-white mb-2">Need help?</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    If you're still having trouble, contact our support team.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-sm text-lime-400 hover:text-lime-300 transition-colors"
                  >
                    Contact Support
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-medium">Reset email sent!</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    We've sent a password reset link to <span className="text-white font-medium">{email}</span>
                  </p>
                  
                  <div className="p-4 bg-gray-700/30 rounded-lg">
                    <h3 className="text-sm font-medium text-white mb-2">What's next?</h3>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Check your email inbox (and spam folder)</li>
                      <li>• Click the reset link in the email</li>
                      <li>• Create a new password</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        setSuccess(false)
                        setEmail('')
                      }}
                      className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                      Send another email
                    </button>
                    
                    <Link 
                      href="/auth/login"
                      className="block w-full text-center text-gray-400 hover:text-white transition-colors py-2"
                    >
                      Back to sign in
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link 
                  href="/auth/signup"
                  className="text-lime-400 hover:text-lime-300 font-semibold transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
