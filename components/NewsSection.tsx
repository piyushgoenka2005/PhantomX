"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUp } from "lucide-react";

export default function NewsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Main News Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Combined News Panel - Clickable Link */}
          <motion.a
            href="#news"
            className="block rounded-2xl relative overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-[#0b1530] text-white font-sans p-8 sm:p-12 rounded-2xl max-w-6xl my-10 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Column: Contains the news tag and the main heading */}
                <div className="flex flex-col gap-6">
                  {/* "LATEST NEWS" Tag */}
                  <div className="self-start">
                    <span className="bg-[#1e3a8a] text-[#93c5fd] text-sm font-bold px-4 py-2 rounded-full">
                      LATEST NEWS
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl lg:text-5xl text-[#dbeafe] leading-tight">
                    Hack The Box launches MCP: a new era of AI-driven
                    cybersecurity readiness
                  </h1>
                </div>

                {/* Right Column: Contains the descriptive paragraph and the image */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Description Paragraph */}
                  <p className="text-gray-300 text-base leading-relaxed md:w-2/3">
                    To meet the growing demand for AI-literate professionals,
                    Hack The Box released a{" "}
                    <span className="font-bold text-[#dbeafe]">
                      Model Context Protocol (MCP)
                    </span>{" "}
                    that integrates AI copilots into hands-on labs. From
                    beginners to seasoned practitioners, MCP transforms the way
                    people learn and interact with cybersecurity content,
                    reducing entry barriers while boosting real-world readiness.
                  </p>

                  {/* Image Section */}
                  <div className="md:w-1/3 flex-shrink-0">
                    <img
                      src="https://placehold.co/300x300/1a1a1a/dbeafe?text=AI+Security"
                      alt="AI Cybersecurity Graphic"
                      className="rounded-2xl w-full h-auto object-cover shadow-2xl shadow-[#3b82f6]/20"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/300x300/1a1a1a/dbeafe?text=Image+Error";
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Statistics and Performance Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Panel - Statistic */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="text-6xl md:text-7xl font-extrabold text-lime-400 mb-4">
              50%
            </div>
            <p className="text-white text-3xl leading-relaxed">
              and more of significant cyber incidents are caused by a lack of
              skills or human failure.
            </p>
          </div>

          {/* Right Panel - Call to Action with Graph */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Beat the odds.
              <br />
              Optimize your performance.
            </h3>

            {/* Lime Green Line Graph */}
            <div className="relative h-32 bg-gray-700 rounded-lg p-4">
              <svg
                className="w-full h-full"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,80 L30,60 L60,70 L90,40 L120,50 L150,30 L180,45 L210,25 L240,35 L270,20 L300,15"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Graph dots */}
                <circle cx="30" cy="60" r="3" fill="#3b82f6" />
                <circle cx="60" cy="70" r="3" fill="#3b82f6" />
                <circle cx="90" cy="40" r="3" fill="#3b82f6" />
                <circle cx="120" cy="50" r="3" fill="#3b82f6" />
                <circle cx="150" cy="30" r="3" fill="#3b82f6" />
                <circle cx="180" cy="45" r="3" fill="#3b82f6" />
                <circle cx="210" cy="25" r="3" fill="#3b82f6" />
                <circle cx="240" cy="35" r="3" fill="#3b82f6" />
                <circle cx="270" cy="20" r="3" fill="#3b82f6" />
                <circle cx="300" cy="15" r="3" fill="#3b82f6" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Sticky Feedback Element */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-lime-500 text-green-900 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 cursor-pointer hover:bg-lime-400 transition-colors">
          <span className="text-sm font-medium">
            How likely are you to recomme...
          </span>
          <ArrowUp className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
