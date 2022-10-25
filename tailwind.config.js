module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      roboto: ['roboto', 'ui-sans-serif', 'system-ui'],
      spectral: ['spectral', 'san-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gold: '#B78628',
      main: '#1A1A1A',
      green: '#00843E',
      content: '#515151',
      marble: 'radial-gradient(50% 50% at 50% 50%, #1A1A1A 0%, #363333 100%',
      primary: '#39B755',
      theme: '#F8F8F8',
      alerts: {
        success: {
          color: '#20a020',
          bgColor: '#E0FFE0'
        },
        info: {
          color: '#FFFFFF',
          bgColor: '#4299e1'
        },
        error: {
          color: '#C5302E',
          bgColor: '#fff5f5',
          border: '#cbd5e0'
        }
      }
    },
    screens: {
      sm: '512px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    maxWidth: {
      forms: '28rem'
    },
    extend: {
      colors: {
        gold: '#B78628',
        main: '#1A1A1A',
        green: '#00843E',
        neutral: '#000000',
        primary: {
          100: '#39B755',
          200: '#AAF7C3',
          300: '#50C878',
          400: '#58CC7E'
        },
        gray: {
          100: '#F3F4F6',
          200: '#E5E5E5',
          300: '#D4D7DB',
          400: '#69778C',
          500: '#302E2E',
          600: '#C4C4C4'
        }
      },
      spacing: {
        '25vh': '25vh',
        '30vh': '30vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '75vh': '75vh',
        '90vh': '90vh'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')]
};
