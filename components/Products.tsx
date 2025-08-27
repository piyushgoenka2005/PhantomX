'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/constants'
import { ANIMATION_CONFIGS } from '@/constants'

export default function Products() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleProductAction = (productTitle: string) => {
    console.log(`Action triggered for ${productTitle}`);
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
            Choose your path to cybersecurity excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're an individual looking to start your cybersecurity journey, 
            a team building defensive capabilities, or an educational institution 
            preparing the next generation of security professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <ProductCard
                product={product}
                onAction={() => handleProductAction(product.title)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
