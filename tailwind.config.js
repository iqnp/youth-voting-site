/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F0B1E',
          light: '#1A1432',
          dark: '#080614',
        },
        secondary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        accent: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neuromorphic: '5px 5px 10px rgba(0,0,0,0.3), -5px -5px 10px rgba(255,255,255,0.05)',
        'neuromorphic-inset': 'inset 2px 2px 5px rgba(0,0,0,0.2), inset -2px -2px 5px rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
};
