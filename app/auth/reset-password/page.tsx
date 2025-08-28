'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Header, MobileMenu } from '@/components'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function ResetPasswordPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()
  
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

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

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Validate form
      if (!formData.password || !formData.confirmPassword) {
        throw new Error('Please fill in all fields')
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
      
      // Here you would typically make an API call to reset the password
      console.log('Password reset:', formData)
      
      setSuccess(true)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reset password. Please try again.')
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

      {/* Reset Password Form */}
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
              <h1 className="text-2xl font-bold text-white mb-2">Create new password</h1>
              <p className="text-gray-400">
                {success 
                  ? 'Your password has been reset successfully!'
                  : 'Enter your new password below'
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
                  {/* New Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      New password
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
                        placeholder="Enter new password"
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
                      Confirm new password
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
                        placeholder="Confirm new password"
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Resetting password...' : 'Reset password'}
                  </button>
                </form>
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
                  <span className="text-green-400 font-medium">Password reset successful!</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Your password has been updated successfully. You can now sign in with your new password.
                  </p>
                  
                  <Link 
                    href="/auth/login"
                    className="block w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-3 px-4 rounded-lg transition-colors text-center"
                  >
                    Sign in with new password
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Help Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Having trouble?{' '}
                <Link 
                  href="/contact"
                  className="text-lime-400 hover:text-lime-300 font-semibold transition-colors"
                >
                  Contact support
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
