/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Lavender pastel design system
        canvas: '#F5F0FF', // main background
        ivory: '#FFFDFB', // secondary background
        lavender: '#E6D9FF',
        lilac: '#B99AEF', // pastel purple (decorative: fills, borders, glows)
        blush: '#F9E6F0',
        plum: { DEFAULT: '#383047', soft: '#766C83' }, // text
        line: '#E9E0F4', // borders
        // Deeper purples reserved for text/icons so they meet WCAG contrast on light surfaces
        iris: { DEFAULT: '#7A5BC7', deep: '#5E43A8' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(56,48,71,0.04), 0 8px 24px -12px rgba(122,91,199,0.18)',
        lift: '0 2px 4px rgba(56,48,71,0.04), 0 22px 44px -18px rgba(122,91,199,0.32)',
        pill: '0 1px 2px rgba(56,48,71,0.05), 0 10px 30px -12px rgba(122,91,199,0.25)',
      },
      maxWidth: { content: '72rem' },
    },
  },
  plugins: [],
};
