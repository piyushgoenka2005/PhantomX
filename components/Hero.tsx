"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen bg-gray-900 bg-cover bg-center overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-900/90"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight"
          >
            The #1 platform to build{" "}
            <span className="blue-gradient">attack-ready</span> teams and
            organizations
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-cerulean mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto sm:mx-0"
          >
            Maximum curriculum management flexibility, enhanced skills
            reporting, and engaging gamification features. Book a demo to see
            PhantomX in action.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start mb-12 sm:mb-16"
          >
            <button className="blue-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center w-full sm:w-auto">
              Get a demo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
            <button className="blue-button-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center w-full sm:w-auto">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Watch demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 mb-8"
          >
            <span className="bg-lime-500 text-white text-xs font-bold px-2 py-1 rounded-full mr-3">
              NEW
            </span>
            <span className="text-gray-300 text-sm">
              Start a 14-day business trial FOR FREE
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 ml-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
