'use client'

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { TestimonialCardProps } from '@/types';
import { ANIMATION_CONFIGS } from '@/constants';

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { quote, author, position, company, logo } = testimonial;

  return (
    <motion.div
      {...ANIMATION_CONFIGS.fadeIn}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
    >
      <div className="mb-6">
        <Quote className="w-8 h-8 text-blue-400 mb-4" />
        <blockquote className="text-gray-300 leading-relaxed italic">
          "{quote}"
        </blockquote>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
          <span className="text-blue-400 font-semibold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
            {author}
          </h4>
          <p className="text-gray-400 text-sm">
            {position}
          </p>
          <p className="text-blue-400 text-sm font-medium">
            {company}
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 uppercase tracking-wide">
            {logo}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
