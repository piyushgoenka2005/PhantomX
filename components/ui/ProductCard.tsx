'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import type { ProductCardProps } from '@/types';
import { ANIMATION_CONFIGS } from '@/constants';

export default function ProductCard({ product, onAction }: ProductCardProps) {
  const { icon: Icon, title, description, features, cta, color } = product;

  const colorClasses = {
    blue: 'border-blue-500/50 hover:border-blue-400',
    green: 'border-green-500/50 hover:border-green-400',
    red: 'border-red-500/50 hover:border-red-400',
    orange: 'border-orange-500/50 hover:border-orange-400'
  };

  const buttonClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    red: 'bg-red-600 hover:bg-red-700',
    orange: 'bg-orange-600 hover:bg-orange-700'
  };

  return (
    <motion.div
      {...ANIMATION_CONFIGS.fadeIn}
      className={`bg-gray-800/50 border border-gray-700 rounded-xl p-8 transition-all duration-300 group ${colorClasses[color]}`}
    >
      <div className="text-center mb-8">
        {Icon && (
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-600 transition-colors">
            <Icon className="w-8 h-8 text-blue-400" />
          </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
          Features
        </h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onAction}
        className={`w-full ${buttonClasses[color]} text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center group-hover:scale-105 transform`}
      >
        {cta}
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </motion.div>
  );
}
