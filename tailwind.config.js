/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['"Space Grotesk"', 'sans-serif'],
    },
    extend: {
      screens: {
        fold: '20rem',
        md: '37.5rem',
      },
      space: {
        '-2': '-0.5rem',
        '-44': '-11rem',
      },
      width: {
        286: '17.875rem',
        300: '18.75rem',
        334: '20.875rem',
        500: '31.25rem',
        'mobile-card': '92%',
      },
      height: {
        500: '31.25rem',
        'mobile-card': '22.813rem',
      },
      maxWidth: {
        358: '22.375rem',
        400: '25rem',
        535: '33.5rem',
        758: '47.375rem',
      },
      maxHeight: {
        298: '18.625rem',
        620: '38.75rem',
      },
      fontSize: {
        '2.5xl': '1.625rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '2.875rem',
        '7xl': '4.75rem',
        '8xl': '5.625rem',
        '10xl': '9.125rem',
      },
      letterSpacing: {
        extra: '0.21em',
      },
      lineHeight: {
        5: '1.125rem',
        6: '1.313rem',
        8: '1.938rem',
        10: '2.688rem',
        11: '3.188rem',
        11.5: '4.5rem',
        12: '5.938rem',
        13: '6.061rem',
        14: '6.5rem',
        15: '10.438rem',
      },
      screens: {
        fold: '17.5rem',
        tiny: '22.5rem',
        sm: '28.125rem',
        md: '37.5rem',
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
        'primary-background': '#1a0259',
        'tertiary-dark': '#00cb91',
        'tertiary-light': '#01F5FF',

        'accent-semi-transparent': 'rgba(254, 216, 35, 0.4)',
        'primary-semi-transparent': 'rgba(21, 161, 252, 0.5)',
        'secondary-semi-transparent': 'rgba(255, 123, 237, 0.5)',
        'tertiary-semi-transparent': 'rgba(1, 254, 182, 0.4)',
        'formal-accent-semi-transparent': 'rgba(239, 236, 214, 0.4)',
        navbar: 'rgba(13, 0, 48, 0.3)',
        card: 'rgba(13, 0, 48, 0.8)',
      },
      boxShadow: {
        '2xl': '0rem 0.25rem 2.75rem 0rem rgb(0 0 0 / 0.25)',
        lg: '0rem 0rem 1rem 0rem rgb(0 0 0 / 0.25)',
        md: '0rem 0rem 0.375rem 0rem rgb(0 0 0 / 0.25)',
        button: '0rem 0rem 1.625rem rgba(1, 254, 182, 1)',
        card: '0rem 1rem 11rem rgba(21, 161, 252, 0.15)',
      },
      dropShadow: {
        'text-fill-primary': '0rem -1rem 0rem #15A1FC',
        accent: '0rem 0rem 0.625rem #fed823',
        secondary: '0rem 0rem 0.625rem #ff7bed',
        tertiary: '0rem 0rem 0.625rem #01fed6',
        primary: '0rem 0rem 1.5rem #15A1FC',
        'formal-accent': '0rem 0rem 0.625rem #efecd6',
        retro: '0 0 4rem rgba(10, 132, 255, 0.7)',
        orb: '0 0 11rem #FFFFFF',
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
      padding: {
        25: '6.125rem',
      },
      margin: {
        '-52': '-13rem',
        19.5: '4.875rem',
        22.5: '5.625rem',
        116: '29rem',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      strokeWidth: {
        1.5: '0.09375rem',
        '5/2': '0.15rem',
        4: '0.25rem',
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
      },
      scale: {
        300: '3.0',
      },
      zIndex: {
        '-10': '-10',
      },
      content: {
        retro: 'attr(data-text)',
      },
    },
  },
}
