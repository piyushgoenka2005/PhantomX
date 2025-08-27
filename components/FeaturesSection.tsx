"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { FEATURE_SECTIONS } from "@/constants";

export default function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 sm:py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="text-xl md:text-5xl lg:text-4xl font-bold text-white mb-8 leading-tight">
            Gamified, hands-on upskilling from
            <br />
            cybersecurity fundamentals to advanced scenarios.
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center">
              Get started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              For teams
            </button>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {FEATURE_SECTIONS.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group w-full max-w-sm"
            >
              {/* Character Avatar */}
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {feature.character.name}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Image */}
              <div className="p-2">
                <img
                  src="/image.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
