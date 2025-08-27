'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

export default function BlogSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: "LLMs adversarial testing with HackerOne: Join the CTF!",
      category: "Artificial Intelligence",
      date: "2025",
      excerpt: "Join us for an exciting CTF event focused on LLM adversarial testing in collaboration with HackerOne.",
      image: "AI"
    },
    {
      title: "From bug bounty to broader impact: Introducing the Certified Web Exploitation Specialist (HTB CWES)",
      category: "Red Teaming",
      date: "2025",
      excerpt: "Discover our new certification program designed to bridge the gap between bug bounty skills and professional red teaming.",
      image: "RedTeam"
    },
    {
      title: "AI, shadow AI, and phishing: 5 takeaways from IBM 2025 Data Breach Report",
      category: "Artificial Intelligence",
      date: "2025",
      excerpt: "Key insights from IBM's latest data breach report and what they mean for cybersecurity professionals.",
      image: "AI"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest from our blog
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-bright/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-bright/20 to-blue-sky/20 flex items-center justify-center">
                <div className="text-blue-bright font-bold text-lg">{post.image}</div>
              </div>

              <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-blue-cerulean text-sm">
                    <Tag className="w-4 h-4 mr-2" />
                    {post.category}
                  </div>
                  <div className="flex items-center text-blue-cerulean text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-blue-cerulean mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <button className="text-blue-bright hover:text-blue-sky font-semibold flex items-center transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="blue-button-secondary text-lg px-8 py-4 flex items-center mx-auto">
            Read more articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
