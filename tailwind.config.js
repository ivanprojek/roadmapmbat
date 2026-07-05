/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode palette
        'warm-white': '#FAF9F6',
        'cream-beige': '#F5F1E8',
        'dusty-pink': '#E8D5D1',
        'rose': '#D4A5A5',
        'sage': '#A8C3A6',
        'sage-dark': '#8BA888',
        'accent': '#4A4A48',
        
        // Dark mode palette
        'dark-bg': '#1A1A1A',
        'dark-card': '#252525',
        'dark-border': '#3A3A3A',
        'dark-text': '#E8E8E8',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '12px',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'neumorphic': 'inset 0 2px 4px rgba(255, 255, 255, 0.7), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
        'neumorphic-dark': 'inset 0 2px 4px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      spacing: {
        'gutter': '1.5rem',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ addUtilities, theme }) {
      addUtilities({
        '.glass': {
          '@apply bg-white/30 dark:bg-white/10 backdrop-blur-glass border border-white/40 dark:border-white/10': {},
        },
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #D4A5A5, #A8C3A6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.btn-primary': {
          '@apply px-6 py-2 bg-rose text-warm-white rounded-lg font-medium transition-all duration-200 hover:bg-opacity-90 hover:shadow-soft-md': {},
        },
        '.btn-secondary': {
          '@apply px-6 py-2 bg-sage text-white rounded-lg font-medium transition-all duration-200 hover:bg-sage-dark hover:shadow-soft-md': {},
        },
        '.btn-outline': {
          '@apply px-3 py-2 border border-rose text-rose rounded-lg text-xs font-medium transition-all duration-200 hover:bg-rose hover:text-white': {},
        },
        '.btn-disabled': {
          '@apply px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-xs cursor-not-allowed': {},
        },
        '.card-base': {
          '@apply bg-warm-white dark:bg-dark-card rounded-2xl border border-cream-beige dark:border-dark-border shadow-soft-md transition-all duration-300': {},
        },
      });
    }),
  ],
};
