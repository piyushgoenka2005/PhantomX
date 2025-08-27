'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/constants'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // responsive slides per view (1 on mobile, 2 on md+)
  const [slidesPerView, setSlidesPerView] = useState(2)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    const update = () => setSlidesPerView(mql.matches ? 2 : 1)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  // index of the left-most visible testimonial
  const [startIdx, setStartIdx] = useState(0)
  const maxStart = Math.max(0, TESTIMONIALS.length - slidesPerView)

  useEffect(() => {
    // clamp when slidesPerView changes
    setStartIdx((i) => Math.min(i, maxStart))
  }, [maxStart])

  const handlePrev = () => setStartIdx((i) => Math.max(0, i - 1))
  const handleNext = () => setStartIdx((i) => Math.min(maxStart, i + 1))

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-between"
        >
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white leading-tight">
            Loved by hackers.<br />
            Trusted by organizations.
          </h2>

          <div className="flex items-center space-x-3 ml-6">
            <button onClick={handlePrev} aria-label="Previous" className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-md">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} aria-label="Next" className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-md">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: `-${startIdx * (100 / slidesPerView)}%` }}
            transition={{ type: 'spring', stiffness: 70, damping: 18 }}
            className="flex"
          >
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.author + idx}
                className="basis-full md:basis-1/2 shrink-0 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
