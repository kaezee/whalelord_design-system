// COMPASS DESIGN SYSTEM - TAILWIND CONFIGURATION (HYBRID v2.0)
// Add this to your project's tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Kelp (Blues)
        kelp: {
          50: '#E6F2F8',
          100: '#CCE5F1',
          200: '#99CBE3',
          300: '#66B1D5',
          400: '#3397C7',
          500: '#025E96',
          600: '#024B78',
          700: '#01385A',
          800: '#01253C',
          900: '#01121E',
        },
        // Surfaces (Semantic Whites) - NEW
        surface: {
          base: '#F7FAFC',
          ice: '#D9F0F2',
          sand: '#EDE6D8',
          kelp: '#E6F2F8',
        },
        // Borders - NEW
        border: {
          default: '#E2E8F0',
          neutral: '#CBD5E0',
          hover: '#A0AEC0',
        },
        // Semantic Signals (Micro-use only) - UPDATED
        success: '#48BB78',
        error: '#C24E3A',
        warning: '#F59E0B',
        info: '#025E96',
        // Legacy Semantic (Deprecated - use flat colors above)
        coral: {
          500: '#48BB78',
        },
        // Neutral - Pearl
        pearl: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
      },
      fontFamily: {
        heading: ['DM Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.1)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
