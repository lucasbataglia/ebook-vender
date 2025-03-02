/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shimmer-slow': 'shimmer 3s ease-in-out infinite',
        'shimmer-fast': 'shimmer 2s ease-in-out infinite',
        'pulse-subtle': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #976a2f, #cda658, #f3d78e, #cda658, #976a2f)',
        'gold-radial': 'radial-gradient(ellipse at center, #f3d78e 0%, #cda658 40%, #976a2f 100%)',
        'gold-shine': 'linear-gradient(135deg, rgba(243,215,142,0.4) 0%, rgba(243,215,142,0) 50%, rgba(243,215,142,0.4) 100%)',
      },
      rotate: {
        'y-5': 'rotateY(5deg)',
      }
    },
  },
  plugins: [],
}
