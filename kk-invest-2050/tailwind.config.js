module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'kk-cyan': '#00ffe1',
        'kk-blue': '#0066ff',
        'kk-gold': '#ffd166',
        'kk-rose': '#ff6b6b'
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px,0px) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,30px) scale(0.95)' },
          '100%': { transform: 'translate(0px,0px) scale(1)' }
        }
      },
      animation: {
        'blob': 'blob 9s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}