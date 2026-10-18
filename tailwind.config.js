/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070709',
          900: '#0D0D11',
          850: '#131318',
          800: '#1A1A22',
          750: '#22222D',
          700: '#2C2C39',
        },
        gold: {
          50: '#FCF9F2',
          100: '#F6EED8',
          200: '#EEDCB2',
          300: '#E4C684',
          400: '#DCB35C',
          500: '#D4AF37', // Polished Royal Gold
          600: '#BF9829',
          700: '#9A771B',
          800: '#755815',
          900: '#4D380B',
        },
        amber: {
          candle: '#FFB259',
          warm: '#F59E0B',
          deep: '#B45309',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        script: ['"Alex Brush"', 'cursive'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #FFF4D0 0%, #D4AF37 35%, #F7E7B4 60%, #AA820A 100%)',
        'gold-subtle': 'linear-gradient(180deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.02) 100%)',
        'radial-candle': 'radial-gradient(circle at center, rgba(255, 178, 89, 0.15) 0%, rgba(13, 13, 17, 0) 70%)',
        'radial-glow': 'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.18) 0%, rgba(8, 8, 10, 0) 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'gold-subtle': '0 4px 20px -2px rgba(212, 175, 55, 0.1)',
        'candle-glow': '0 0 50px 10px rgba(255, 178, 89, 0.15)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'kenburns': 'kenburns 25s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.08) translate(-1%, -1%)' },
          '100%': { transform: 'scale(1.04) translate(1%, 0%)' },
        }
      }
    },
  },
  plugins: [],
}
