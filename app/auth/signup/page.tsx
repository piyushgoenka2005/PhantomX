'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header, MobileMenu } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function SignupPage() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(true)
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('') // Clear error when user starts typing
  }

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    return {
      minLength,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar,
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar
    }
  }

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      // Validate form
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
        throw new Error('Please fill in all fields')
      }

      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid email address')
      }

      const passwordValidation = validatePassword(formData.password)
      if (!passwordValidation.isValid) {
        throw new Error('Password does not meet requirements')
      }

      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match')
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically make an API call to register the user
      console.log('Signup attempt:', formData)
      
      setSuccess('Account created successfully! Please check your email to verify your account.')
      
      // Clear form after successful signup
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      
      // Redirect to home page after successful signup
      setTimeout(() => {
        router.push('/')
      }, 2000) // Wait 2 seconds to show success message
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = async () => {
    setIsLoading(true)
    setError('')

    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Google signup initiated')
      
      // Here you would typically integrate with Google OAuth
      // window.location.href = '/api/auth/google'
      
      // Redirect to home page after successful Google signup
      router.push('/')
      
    } catch (err) {
      setError('Google signup failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const passwordValidation = validatePassword(formData.password)

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

      {/* Back to Home Link */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Signup Form */}
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
              <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
              <p className="text-gray-400">Join thousands of cybersecurity professionals</p>
            </div>

            {/* Success Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-green-400 text-sm">{success}</span>
              </motion.div>
            )}

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

            {/* Google Signup Button */}
            <button
              onClick={handleGoogleSignup}
              disabled={isLoading}
              className="w-full mb-6 p-3 bg-white hover:bg-gray-100 text-gray-900 rounded-xl font-semibold transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">Or continue with email</span>
              </div>
            </div>

            {/* Email Signup Form */}
            <form onSubmit={handleEmailSignup} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>

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
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-3 p-3 bg-gray-700/30 rounded-lg">
                    <p className="text-sm text-gray-300 mb-2">Password requirements:</p>
                    <div className="space-y-1 text-xs">
                      <div className={`flex items-center gap-2 ${passwordValidation.minLength ? 'text-green-400' : 'text-gray-500'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${passwordValidation.minLength ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                        At least 8 characters
                      </div>
                      <div className={`flex items-center gap-2 ${passwordValidation.hasUpperCase ? 'text-green-400' : 'text-gray-500'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${passwordValidation.hasUpperCase ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                        One uppercase letter
                      </div>
                      <div className={`flex items-center gap-2 ${passwordValidation.hasLowerCase ? 'text-green-400' : 'text-gray-500'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${passwordValidation.hasLowerCase ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                        One lowercase letter
                      </div>
                      <div className={`flex items-center gap-2 ${passwordValidation.hasNumbers ? 'text-green-400' : 'text-gray-500'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${passwordValidation.hasNumbers ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                        One number
                      </div>
                      <div className={`flex items-center gap-2 ${passwordValidation.hasSpecialChar ? 'text-green-400' : 'text-gray-500'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${passwordValidation.hasSpecialChar ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                        One special character
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="mt-1 text-sm text-red-400">Passwords do not match</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-lime-500 bg-gray-700 border-gray-600 rounded focus:ring-lime-500 focus:ring-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-lime-400 hover:text-lime-300">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-lime-400 hover:text-lime-300">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link 
                  href="/auth/login"
                  className="text-lime-400 hover:text-lime-300 font-semibold transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
