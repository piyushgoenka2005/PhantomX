'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'

// Typing Effect Component
interface TypingEffectProps {
  words: string[];
  speed?: number;
  delay?: number;
  trigger?: boolean;
}

const TypingEffect = ({ words, speed = 100, delay = 0, trigger = false }: TypingEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'typing' | 'pause_after_type' | 'deleting' | 'pause_after_delete'>('idle')

  // Reset when coming into view
  useEffect(() => {
    if (!trigger) return
    setPhase('idle')
    setCurrentWordIndex(0)
    setCurrentCharIndex(0)
  }, [trigger])

  // Drive the typing/deleting with a single timeout
  useEffect(() => {
    if (!trigger) return
    const currentWord = words[currentWordIndex]
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    switch (phase) {
      case 'idle':
        timeoutId = setTimeout(() => setPhase('typing'), delay)
        break
      case 'typing':
        if (currentCharIndex < currentWord.length) {
          timeoutId = setTimeout(() => setCurrentCharIndex(i => i + 1), speed)
        } else {
          timeoutId = setTimeout(() => setPhase('deleting'), 1000)
        }
        break
      case 'deleting':
        if (currentCharIndex > 0) {
          timeoutId = setTimeout(() => setCurrentCharIndex(i => i - 1), Math.max(30, Math.floor(speed / 2)))
        } else {
          timeoutId = setTimeout(() => {
            setCurrentWordIndex(i => (i + 1) % words.length)
            setPhase('typing')
          }, 1000)
        }
        break
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [trigger, phase, currentCharIndex, currentWordIndex, words, speed, delay])

  const visible = words[currentWordIndex].slice(0, currentCharIndex)
  return <span>{visible}</span>
}

export default function CommunitySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 bg-[#0e1018] relative overflow-hidden mx-auto max-w-7xl mb-16">
      {/* Enhanced Geometric Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radar waves / Concentric circles */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] border border-gray-800 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-800 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-800 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-gray-800 rounded-full opacity-10"></div>
        </div>

        {/* Geometric shapes with connections */}
        {/* Top left area */}
        <div className="absolute top-16 left-16">
          <div className="w-3 h-3 bg-lime-400 rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute top-4 left-4 w-4 h-4 bg-lime-400 transform rotate-45 opacity-70"></div>
          <svg className="absolute top-2 left-2 w-8 h-8" viewBox="0 0 32 32">
            <path d="M 8 8 Q 16 4 24 8" stroke="#c5ff68" strokeWidth="1" fill="none" opacity="0.6"/>
          </svg>
        </div>

        {/* Far left area */}
        <div className="absolute top-1/3 left-8">
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-lime-400 opacity-80"></div>
          <svg className="absolute top-4 left-2 w-12 h-12" viewBox="0 0 48 48">
            <path d="M 4 4 Q 24 8 44 4" stroke="#c5ff68" strokeWidth="1" fill="none" opacity="0.5"/>
          </svg>
        </div>

        {/* Bottom left area */}
        <div className="absolute bottom-20 left-12">
          <div className="w-6 h-6 bg-lime-400 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-2 left-2 w-3 h-3 bg-lime-400 transform rotate-45 opacity-80"></div>
          <svg className="absolute top-1 left-1 w-10 h-10" viewBox="0 0 40 40">
            <path d="M 8 8 Q 20 4 32 8" stroke="#c5ff68" strokeWidth="1" fill="none" opacity="0.6"/>
          </svg>
        </div>

        {/* Top right area */}
        <div className="absolute top-12 right-20">
          <div className="w-4 h-4 bg-lime-400 transform rotate-45 opacity-80"></div>
          <div className="absolute top-6 right-6 w-2 h-2 bg-lime-400 rounded-full opacity-90"></div>
          <svg className="absolute top-2 right-2 w-8 h-8" viewBox="0 0 32 32">
            <path d="M 4 4 Q 16 8 28 4" stroke="#c5ff68" strokeWidth="1" fill="none" opacity="0.5"/>
          </svg>
        </div>

        {/* Mid right area */}
        <div className="absolute top-1/2 right-16">
          <div className="w-5 h-5 bg-lime-400 opacity-80">
            <div className="w-full h-full bg-lime-400 transform rotate-45"></div>
          </div>
          <svg className="absolute top-1 right-1 w-10 h-10" viewBox="0 0 40 40">
            <path d="M 4 4 Q 20 8 36 4" stroke="#c5ff68" strokeWidth="1" fill="none" opacity="0.6"/>
          </svg>
        </div>

        {/* Bottom right area */}
        <div className="absolute bottom-24 right-12">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-lime-400 opacity-80"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-lime-400 rounded-full opacity-70"></div>
          <svg className="absolute top-2 right-2 w-8 h-8" viewBox="0 0 32 32">
            <path d="M 4 4 Q 16 8 28 4" stroke="#c5ff68" strokeWidth="1" fill="none" opacity="0.5"/>
          </svg>
        </div>

        {/* Additional connecting lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <path d="M 15 20 Q 30 15 45 20" stroke="#c5ff68" strokeWidth="0.5" fill="none" opacity="0.4"/>
          <path d="M 55 25 Q 70 20 85 25" stroke="#c5ff68" strokeWidth="0.5" fill="none" opacity="0.4"/>
          <path d="M 10 60 Q 25 55 40 60" stroke="#c5ff68" strokeWidth="0.5" fill="none" opacity="0.4"/>
          <path d="M 60 65 Q 75 60 90 65" stroke="#c5ff68" strokeWidth="0.5" fill="none" opacity="0.4"/>
          <path d="M 20 80 Q 35 75 50 80" stroke="#c5ff68" strokeWidth="0.5" fill="none" opacity="0.4"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
                     {/* Main Headline with Typing Effect */}
           <motion.h1
             initial={{ opacity: 0, scale: 0.8 }}
             animate={inView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-6xl md:text-7xl lg:text-8xl font-bold text-lime-400 mb-8"
           >
             3.7m+ <TypingEffect 
               words={["members", "hackers", "learners"]} 
               speed={150} 
               delay={800}
               trigger={inView}
             />
             <span className="text-lime-500">|</span>
           </motion.h1>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-2 mb-8"
          >
            <p className="text-xl text-white">
              Chat about labs, share resources and jobs.
            </p>
            <p className="text-xl text-white">
              Connect with 200k+ hackers from all over the world.
            </p>
          </motion.div>

          {/* Discord Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center mx-auto shadow-lg"
          >
            {/* Discord Icon */}
            <div className="w-6 h-6 mr-3">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            Join Discord
          </motion.button>

          {/* G2 Rating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center space-x-3 mt-8"
          >
            {/* G2 Logo */}
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <div className="text-red-500 font-bold text-sm">G</div>
              <div className="text-white font-bold text-xs">2</div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">4.8</span>
            </div>
            
            {/* Source Text */}
            <span className="text-gray-400 text-sm">
              Rating by G2 users
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}