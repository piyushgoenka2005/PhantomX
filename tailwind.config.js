/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          deep: '#1e3a8a',      // Very deep, rich royal blue
          bright: '#3b82f6',    // Bright, saturated medium blue
          sky: '#60a5fa',       // Softer, slightly desaturated sky blue
          cerulean: '#93c5fd',  // Lighter, more pastel cerulean blue
          pale: '#dbeafe',      // Very pale, almost lavender-tinged light blue
        },
        // Remap greens/limes to blue palette to make entire site blue-toned
        lime: {
          400: '#60a5fa', // blue.sky
          500: '#3b82f6', // blue.bright
          600: '#1e3a8a', // blue.deep
        },
        green: {
          100: '#dbeafe', // blue.pale
          400: '#60a5fa', // blue.sky
          500: '#3b82f6', // blue.bright
          800: '#1e3a8a', // blue.deep
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
}
