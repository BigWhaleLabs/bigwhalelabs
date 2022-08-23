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
        'large-menu': '7.735rem',
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
      minWidth: {
        xs: '18.75rem',
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
        orb: 'var(--orb)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        'formal-accent': 'var(--formal-accent)',

        'tertiary-dark': 'var(--tertiary-dark)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'primary-dimmed': 'var(--primary-dimmed)',
        'primary-semi-dimmed': 'var(--primary-semi-dimmed)',

        navbar: 'var(--navbar)',
        card: 'var(--card)',
      },
      boxShadow: {
        lg: '0rem 0rem 1rem 0rem rgb(0 0 0 / 0.25)',
        button: '0rem 0rem 1.625rem rgb(0 0 0 / 1)',
        card: '0rem 1rem 11rem var(--card-shadow)',
      },
      dropShadow: {
        accent: '0rem 0rem 0.625rem var(--accent)',
        secondary: '0rem 0rem 0.625rem var(--secondary)',
        primary: '0rem 0rem 1.5rem var(--primary)',
        'formal-accent': '0rem 0rem 0.625rem var(--formal-accent)',
        retro: '0 0 4rem var(--retro-shadow)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      backgroundImage: {
        retro:
          'linear-gradient(180deg, var(--secondary) 20.43%, var(--formal-accent) 25.48%, var(--formal-accent) 41.4%, var(--retro-1) 46.3%, var(--retro-2) 61.69%, var(--primary) 77.42%)',
        metallic:
          'linear-gradient(180deg, var(--metallic-1) 0%, var(--metallic-2) 15.1%, var(--metallic-3) 34.9%, var(--metallic-4) 50%, var(--metallic-5) 66.15%, var(--metallic-6) 100%) ',
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
