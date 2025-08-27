'use client'

import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'blue' | 'gray';
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'white', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    white: 'text-white',
    blue: 'text-blue-500',
    gray: 'text-gray-400'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 
        className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`} 
      />
      {text && (
        <p className={`mt-2 text-sm ${colorClasses[color]}`}>
          {text}
        </p>
      )}
    </div>
  );
}
