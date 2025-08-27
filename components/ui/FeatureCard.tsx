'use client'

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { FeatureCardProps } from '@/types';
import { ANIMATION_CONFIGS } from '@/constants';

export default function FeatureCard({ feature, onAction }: FeatureCardProps) {
  const { icon: Icon, title, description, benefits } = feature;

  return (
    <motion.div
      {...ANIMATION_CONFIGS.fadeIn}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
    >
      <div className="flex items-start space-x-4 mb-6">
        {Icon && (
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
              <Icon className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {benefits && benefits.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Key Benefits
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}

      {onAction && (
        <button
          onClick={onAction}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
        >
          Learn More
        </button>
      )}
    </motion.div>
  );
}
