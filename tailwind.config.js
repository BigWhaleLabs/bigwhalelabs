/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['"Space Grotesk"', 'sans-serif'],
    },
    extend: {
      animation: {
        expand: 'expand 1s ease-in-out',
      },
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      transitionDuration: {
        2000: '2000ms',
      },
      space: {
        '-2': '-0.5rem',
        '-11': '-2.75rem',
        '-48': '-12rem',
      },
      height: {
        'tiny-menu': '3.656rem',
        15: '4.688rem',
        70: '17.5rem',
        88: '22.19rem',
        suit: '41.1rem',
        'suit-mobile': '28.6rem',
      },
      maxWidth: {
        270: '16.875rem',
        400: '25rem',
      },
      fontSize: {
        '2.5xl': '1.625rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '2.875rem',
        '7xl': '4.75rem',
        '8xl': '5.625rem',
      },
      letterSpacing: {
        extra: '0.21em',
      },
      lineHeight: {
        6: '1.313rem',
        8: '1.938rem',
        10: '2.688rem',
        11: '3.188rem',
        12: '5.938rem',
        15: '10.438rem',
      },
      screens: {
        tiny: '22.75rem',
        se: '23.5rem',
        tablet: '31.25rem',
        md: '37.5rem',
        sm: '40rem',
        lg: '64rem',
        xl: '80rem',
      },
      colors: {
        orb: '#ffffff',
        accent: '#fed823',
        primary: '#15a1fc',
        secondary: '#ff7bed',
        tertiary: '#01feb6',

        'formal-accent': '#efecd6',
        'tertiary-dark': '#00cb91',
        'primary-dark': '#0d0030',
        'primary-light': '#bff5fa',
        'primary-dimmed': '#3a00d6',
        'primary-semi-dimmed': '#4b61d5',

        navbar: 'rgba(13, 0, 48, 0.3)',
        card: 'rgba(13, 0, 48, 0.8)',
      },
      boxShadow: {
        lg: '0rem 0rem 1rem 0rem rgb(0 0 0 / 0.25)',
        button: '0rem 0rem 1.625rem rgb(0 0 0 / 1)',
        card: '0rem 1rem 11rem rgba(21, 161, 252, 0.15)',
      },
      dropShadow: {
        accent: '0rem 0rem 0.625rem #fed823',
        secondary: '0rem 0rem 0.625rem #ff7bed',
        primary: '0rem 0rem 1.5rem #15A1FC',
        'formal-accent': '0rem 0rem 0.625rem #efecd6',
        retro: '0 0 4rem rgba(10, 132, 255, 0.7)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      backgroundImage: {
        retro:
          'linear-gradient(180deg, #FF7BED 20.43%, #E0E5CE 25.48%, #E0E5CE 41.4%, #4300F5 46.3%, #263DB4 61.69%, #15A1FC 77.42%)',
        metallic:
          'linear-gradient(180deg, #26306e 0%, #cce5e4 15.1%, #25306a 34.9%, #a9cbd2 50%, #36426c 66.15%, #cad9e3 100%) ',
      },
      strokeWidth: {
        1.5: '0.09375rem',
        4: '0.25rem',
      },
      margin: {
        116: '29rem',
        '-4': '-1rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-18': '-4.5rem',
        '-24': '-6rem',
        '-80': '-20rem',
        '-96': '-24rem',
      },
      padding: {
        25: '6.125rem',
      },
      inset: {
        '-6': '-1.5rem',
        '-9': '-2.25rem',
        '-11': '-2.75rem',
        '-20': '-5rem',
        '-28': '-7rem',
        '-44': '-11rem',
        '-60': '-15rem',
        '-96': '-24rem',
        '-1/5': '-20%',
        '1/5': '20%',
        58.5: '3.66rem',
        76: '4.75rem',
      },
      scale: {
        175: '1.75',
      },
      zIndex: {
        '-10': '-10',
      },
      content: {
        retro: 'attr(data-text)',
      },
      translate: {
        '-0.5': '-0.25rem',
        '-7': '-1.75rem',
      },
      transitionProperty: {
        letters: 'transform 0.32s ease, box-shadow 0.32s ease',
      },
    },
  },
}
