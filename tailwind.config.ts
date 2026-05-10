import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          300: '#f5df89',
          400: '#edc84a',
          500: '#d4a017',
          600: '#b8860b',
          700: '#8b6508',
          800: '#5c4205',
          900: '#3a2903',
        },
        dark: {
          700: '#0c1a30',
          800: '#081223',
          900: '#050d1a',
        },
        navy: {
          500: '#1a3560',
          600: '#112240',
          700: '#0c1a30',
          800: '#081223',
          900: '#050d1a',
          950: '#030711',
        },
        gold: {
          100: '#fef9ec',
          200: '#faefc7',
          300: '#f5df89',
          400: '#edc84a',
          500: '#d4a017',
          600: '#b8860b',
          700: '#8b6508',
          800: '#5c4205',
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #d4a017 0%, #f5df89 50%, #b8860b 100%)',
        'gradient-navy': 'linear-gradient(135deg, #030711 0%, #050d1a 60%, #081223 100%)',
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'shimmer':  'shimmer 4s linear infinite',
        'fade-in':  'fadeIn 0.8s ease both',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float:       { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer:     { '0%': { backgroundPosition: '0% center' }, '100%': { backgroundPosition: '200% center' } },
        fadeIn:      { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'pulse-gold':{ '0%,100%': { boxShadow: '0 0 0 0 rgba(212,160,23,0.3)' }, '50%': { boxShadow: '0 0 0 8px rgba(212,160,23,0)' } },
      },
      boxShadow: {
        'gold':    '0 0 40px rgba(212,160,23,0.25)',
        'gold-lg': '0 0 80px rgba(212,160,23,0.35)',
        'navy':    '0 20px 60px rgba(3,7,17,0.8)',
      },
    },
  },
  plugins: [],
}

export default config
