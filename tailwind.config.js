/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body:    ['Lato', 'sans-serif'],
        sans:    ['Lato', 'sans-serif'],
      },
      colors: {
        primary:   { DEFAULT: '#4353ff', light: '#6b78ff', dark: '#2e3fe0' },
        lavender:  { DEFAULT: '#d5c9f8', dark: '#b8a8f0' },
        mint:      { DEFAULT: '#ccf6ea', dark: '#a0edd4' },
        peach:     { DEFAULT: '#ffd5bf', dark: '#ffbf9a' },
        amber:     { DEFAULT: '#f69c20' },
        dark:      { DEFAULT: '#0e0e0e', 2: '#222222', 3: '#333333', muted: '#9a9a9a' },
        light:     { DEFAULT: '#ffffff', grey: '#fafafa', border: '#eaeaea' },
      },
      borderRadius: {
        pill: '50px',
        card: '16px',
        badge: '4px',
      },
      boxShadow: {
        card:  '0 5px 25px rgba(0,0,0,0.25)',
        modal: '0 0px 30px rgba(0,0,0,0.33)',
        soft:  '0 0px 35px rgba(0,0,0,0.05)',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'section': '100px',
      },
      animation: {
        'float':     'float 7s ease-in-out infinite',
        'float-alt': 'float 9s ease-in-out infinite reverse',
        'pulse-dot': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
      },
      transitionDuration: { DEFAULT: '300ms' },
    },
  },
  plugins: [],
}
