/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        orange: {
          400: '#FF6B35',
          500: '#FF6B35',
          600: '#E55A2B',
          700: '#CC4E21',
        },
        yellow: {
          400: '#FFD700',
          500: '#FFD700',
        },
        gray: {
          800: '#1F2937',
          900: '#111827',
        }
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
};