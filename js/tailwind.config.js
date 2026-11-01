/** @type {import('tailwindcss').Config} */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chaos: '#0F0F0F',    // RGB: 15, 15, 15    | CMYK: 0%, 0%, 0%, 94%
        shoewax: '#2B2B2B',  // RGB: 43, 43, 43    | CMYK: 0%, 0%, 0%, 83%
        thunder: '#4D4D4D',  // RGB: 77, 77, 77    | CMYK: 0%, 0%, 0%, 70%
        dull: '#717171',     // RGB: 113, 113, 113 | CMYK: 0%, 0%, 0%, 56%
        spanish: '#979797',  // RGB: 151, 151, 151 | CMYK: 0%, 0%, 0%, 41%
        dust: '#BCBCBC',     // RGB: 188, 188, 188 | CMYK: 0%, 0%, 0%, 26%
        kingly: '#DEDEDE',   // RGB: 222, 222, 222 | CMYK: 0%, 0%, 0%, 13%
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'serif-editorial': ['Playfair Display', 'serif'],
        script: ['Pinyon Script', 'cursive'],
      },
      backgroundImage: {
        'card-surface': 'linear-gradient(180deg, rgba(43, 43, 43, 0.45) 0%, rgba(15, 15, 15, 0.85) 100%)',
        'row-sweep': 'linear-gradient(90deg, #2B2B2B 0%, #4D4D4D 50%, #2B2B2B 100%)',
      }
    }
  }
};
