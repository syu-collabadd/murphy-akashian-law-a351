/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F1D3D',
        'primary-light': '#1A3360',
        accent: '#C8A44E',
        'accent-hover': '#B8933D',
        canvas: '#FFFFFF',
        surface: '#F7F5F0',
        'surface-alt': '#F0EDE5',
        text: '#1A1A1A',
        'text-muted': '#5C5C5C',
        'text-on-dark': '#FFFFFF',
        border: '#E0DCD3',
        divider: '#EDE9E0',
        success: '#2D6A4F',
        error: '#9B2226',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '64px',
        section: '96px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 29, 61, 0.06), 0 1px 2px rgba(15, 29, 61, 0.04)',
        elevated: '0 4px 12px rgba(15, 29, 61, 0.08)',
      },
      fontSize: {
        hero: ['52px', { lineHeight: '1.15', letterSpacing: '-0.5px', fontWeight: '700' }],
        h1: ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['22px', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['19px', { lineHeight: '1.7', fontWeight: '400' }],
        body: ['17px', { lineHeight: '1.65', fontWeight: '400' }],
        caption: ['13px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
