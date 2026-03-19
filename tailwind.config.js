/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3D7A4F',
          dark: '#2A5A38',
          light: '#5A9E6F',
        },
        accent: {
          DEFAULT: '#A8C957',
          dark: '#8BAF3A',
          light: '#C5E07A',
        },
        bg: {
          DEFAULT: '#F4FAF0',
          card: '#FFFFFF',
          dark: '#0D1F12',
          dark2: '#162B1C',
        },
        foreground: {
          DEFAULT: '#0D1F12',
          muted: '#3A5A42',
          subtle: '#6B8F72',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '10px': '10px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        display: '-0.02em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'green-sm': '0 4px 16px rgba(61, 122, 79, 0.15)',
        'green-md': '0 8px 32px rgba(61, 122, 79, 0.2)',
        'green-lg': '0 24px 64px rgba(61, 122, 79, 0.25)',
        'accent-sm': '0 4px 16px rgba(168, 201, 87, 0.25)',
        'accent-md': '0 8px 32px rgba(168, 201, 87, 0.35)',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #3D7A4F 0%, #A8C957 100%)',
        'gradient-green-dark': 'linear-gradient(135deg, #0D1F12 0%, #2A5A38 50%, #162B1C 100%)',
        'gradient-radial-green': 'radial-gradient(ellipse at center, rgba(168, 201, 87, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'orbFloat 22s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};