const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        mobile: {
          max: '479px'
        },
        mobileAndTablet: {
          min: '480px',
          max: '767px'
        },
        tablet: {
          min: '768px',
          max: '1023px'
        },
        tabletAndLaptop: {
          min: '1024px',
          max: '1279px'
        },
        desktop: {
          min: '1280px'
        }
      },
      fontSize: {
        // Display
        d1: [
          '56px',
          {
            lineHeight: '1.286',
            letterSpacing: '-0.032em'
          }
        ],
        d2: [
          '40px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.028em'
          }
        ],

        // Title
        t1: [
          '36px',
          {
            lineHeight: '1.334',
            letterSpacing: '-0.024em'
          }
        ],
        t2: [
          '28px',
          {
            lineHeight: '1.358',
            letterSpacing: '-0.023em'
          }
        ],
        t3: [
          '24px',
          {
            lineHeight: '1.334',
            letterSpacing: '-0.02em'
          }
        ],

        // Heading
        h1: [
          '22px',
          {
            lineHeight: '1.364',
            letterSpacing: '-0.02em'
          }
        ],
        h2: [
          '18px',
          {
            lineHeight: '1.445',
            letterSpacing: '-0.002em'
          }
        ],

        // Body
        'b1-normal': [
          '16px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.005em'
          }
        ],
        'b1-reading': [
          '16px',
          {
            lineHeight: '1.625',
            letterSpacing: '0.006em'
          }
        ],
        'b2-normal': [
          '15px',
          {
            lineHeight: '1.467',
            letterSpacing: '0.01em'
          }
        ],
        'b2-reading': [
          '15px',
          {
            lineHeight: '1.6',
            letterSpacing: '0.01em'
          }
        ],

        // Label
        'l1-normal': [
          '14px',
          {
            lineHeight: '1.429',
            letterSpacing: '0.014em'
          }
        ],
        'l1-reading': [
          '14px',
          {
            lineHeight: '1.571',
            letterSpacing: '0.014em'
          }
        ],

        // Caption
        c1: [
          '12px',
          {
            lineHeight: '1.334',
            letterSpacing: '0.025em'
          }
        ],
        c2: [
          '10px',
          {
            lineHeight: '1.273',
            letterSpacing: '0.031em'
          }
        ]
      }
    }
  },
  plugins: []
}
