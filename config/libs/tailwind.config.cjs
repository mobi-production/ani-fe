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
      spacing: {
        '4r': '1rem',
        '8r': '2rem',
        '12r': '3rem',
        '16r': '4rem',
        '20r': '5rem',
        '24r': '6rem',
        '28r': '7rem',
        '32r': '8rem',
        '36r': '9rem',
        '40r': '10rem',
        '44r': '11rem',
        '48r': '12rem',
        '64r': '16rem'
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
      colors: {
        common0: '#000000',
        common100: '#ffffff',
        'blue-10': '#001536',
        'blue-20': '#002966',
        'blue-30': '#003e9c',
        'blue-40': '#0054d1',
        'blue-45': '#005eeb',
        'blue-50': '#0066ff',
        'blue-55': '#1a75ff',
        'blue-60': '#3385ff',
        'blue-70': '#69a5ff',
        'blue-80': '#9ec5ff',
        'blue-90': '#c9defe',
        'blue-95': '#eaf2fe',
        'blue-99': '#f7fbff',
        'cool-neutral-10': '#171719',
        'cool-neutral-15': '#1b1c1e',
        'cool-neutral-17': '#212225',
        'cool-neutral-20': '#292a2d',
        'cool-neutral-22': '#2e2f33',
        'cool-neutral-23': '#333438',
        'cool-neutral-25': '#37383c',
        'cool-neutral-30': '#46474c',
        'cool-neutral-40': '#5a5c63',
        'cool-neutral-5': '#0f0f10',
        'cool-neutral-50': '#70737c',
        'cool-neutral-60': '#878a93',
        'cool-neutral-7': '#141415',
        'cool-neutral-70': '#989ba2',
        'cool-neutral-80': '#aeb0b6',
        'cool-neutral-90': '#c2c4c8',
        'cool-neutral-95': '#dbdcdf',
        'cool-neutral-96': '#e1e2e4',
        'cool-neutral-97': '#eaebec',
        'cool-neutral-98': '#f4f4f5',
        'cool-neutral-99': '#f7f7f8',
        'cyan-10': '#00252b',
        'cyan-20': '#004854',
        'cyan-30': '#006f82',
        'cyan-40': '#0098b2',
        'cyan-50': '#00bdde',
        'cyan-60': '#28d0ed',
        'cyan-70': '#57dff7',
        'cyan-80': '#8aedff',
        'cyan-90': '#b5f4ff',
        'cyan-95': '#defaff',
        'cyan-99': '#f7feff',
        'green-10': '#00240c',
        'green-20': '#004517',
        'green-30': '#006e25',
        'green-40': '#009632',
        'green-50': '#00bf40',
        'green-60': '#1ed45a',
        'green-70': '#49e57d',
        'green-80': '#7df5a5',
        'green-90': '#acfcc7',
        'green-95': '#d9ffe6',
        'green-99': '#f2fff6',
        'light-blue-10': '#002130',
        'light-blue-20': '#004261',
        'light-blue-30': '#006796',
        'light-blue-40': '#008dcf',
        'light-blue-50': '#00aeff',
        'light-blue-60': '#3dc2ff',
        'light-blue-70': '#70d2ff',
        'light-blue-80': '#a1e1ff',
        'light-blue-90': '#c4ecfe',
        'light-blue-95': '#e5f6fe',
        'light-blue-99': '#f7fdff',
        'neutral-10': '#171717',
        'neutral-15': '#1c1c1c',
        'neutral-20': '#2a2a2a',
        'neutral-22': '#303030',
        'neutral-30': '#474747',
        'neutral-40': '#5c5c5c',
        'neutral-5': '#0f0f0f',
        'neutral-50': '#737373',
        'neutral-60': '#8a8a8a',
        'neutral-70': '#9b9b9b',
        'neutral-80': '#b0b0b0',
        'neutral-90': '#c4c4c4',
        'neutral-95': '#dcdcdc',
        'neutral-99': '#f7f7f7',
        'orange-10': '#361e00',
        'orange-20': '#663a00',
        'orange-30': '#9c5800',
        'orange-40': '#d47800',
        'orange-50': '#ff9200',
        'orange-60': '#ffa938',
        'orange-70': '#ffc06e',
        'orange-80': '#ffd49c',
        'orange-90': '#fee6c6',
        'orange-95': '#fef4e6',
        'orange-99': '#fffcf7',
        'pink-10': '#3d0133',
        'pink-20': '#730560',
        'pink-30': '#a81690',
        'pink-40': '#d331b8',
        'pink-50': '#f553da',
        'pink-60': '#fa73e3',
        'pink-70': '#ff94ed',
        'pink-80': '#ffb8f3',
        'pink-90': '#fed3f7',
        'pink-95': '#feecfb',
        'pink-99': '#fffafe',
        'purple-10': '#290247',
        'purple-20': '#580a7d',
        'purple-30': '#861cb8',
        'purple-40': '#ad36e3',
        'purple-50': '#cb59ff',
        'purple-60': '#d478ff',
        'purple-70': '#de96ff',
        'purple-80': '#e9baff',
        'purple-90': '#f2d6ff',
        'purple-95': '#f9edff',
        'purple-99': '#fefbff',
        'red-10': '#3b0101',
        'red-20': '#730303',
        'red-30': '#b00c0c',
        'red-40': '#e52222',
        'red-50': '#ff4242',
        'red-60': '#ff6363',
        'red-70': '#ff8c8c',
        'red-80': '#ffb5b5',
        'red-90': '#fed5d5',
        'red-95': '#feecec',
        'red-99': '#fffafa',
        'red-orange-10': '#290f00',
        'red-orange-20': '#592100',
        'red-orange-30': '#913500',
        'red-orange-40': '#c94a00',
        'red-orange-50': '#ff5e00',
        'red-orange-60': '#ff7b2e',
        'red-orange-70': '#ff9b61',
        'red-orange-80': '#ffbd96',
        'red-orange-90': '#fed9c4',
        'red-orange-95': '#feeee5',
        'red-orange-99': '#fffaf7',
        'violet-10': '#11024d',
        'violet-20': '#23098f',
        'violet-30': '#3a16c9',
        'violet-40': '#4f29e5',
        'violet-50': '#6541f2',
        'violet-60': '#7d5ef7',
        'violet-70': '#9e86fc',
        'violet-80': '#c0b0ff',
        'violet-90': '#dbd3fe',
        'violet-95': '#f0ecfe',
        'violet-99': '#fbfaff',

        'primary-normal': '#00BD9A',
        'primary-strong': '#00E2B9',

        'label-normal': '#171719',
        'label-strong': '#000000',
        'label-neutral': '#46474C',
        'label-alternative': '#878A93',
        'label-assistive': '#C2C4C8',
        'label-disable': '#DBDCDF',

        'background-normal': '#FFFFFF',
        'background-alternative': '#F7F7F8',

        'interaction-inactive': '#989BA2',
        'interaction-disabled': '#F7F7F8',

        'line-normal': '#17171726',
        'line-neutral': '#1717170D',
        'line-alternative': '#17171708',
        'line-strong': '#0F0F0F',

        'status-success': '#00BF40',
        'status-error': '#FF4242',
        'status-warning': '#0066FF',

        'accent-red-orange': '#FF5E00',
        'accent-cyan': '#00BDDE',
        'accent-light-blue': '#00AEFF',
        'accent-violet': '#4F29E5',
        'accent-purple': '#CB59FF',
        'accent-pink': '#F553DA',

        'fill-normal': '#F4F4F5',
        'fill-strong': '#E8E8EA',
        'fill-alternative': '#F8F8F8',

        'material-dimmer': '#17171985'
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
        'l-normal': [
          '14px',
          {
            lineHeight: '1.429',
            letterSpacing: '0.014em'
          }
        ],
        'l-reading': [
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
