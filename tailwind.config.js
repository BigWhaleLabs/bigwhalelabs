/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['"Space Grotesk"', 'sans-serif'],
    },
    extend: {
      animation: {
        float: 'float 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      transitionProperty: {
        letters: 'transform 0.32s ease, box-shadow 0.32s ease',
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
        'screen-80': '80vh',
      },
      width: {
        114: '28.5rem',
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
        '6xl': '3.5rem',
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
        se: '23.75rem',
        s: '27.5rem',
        tablet: '31.25rem',
        md: '37.5rem',
        sm: '42.1875rem',
        lg: '64rem',
        xl: '80rem',
      },
      colors: {
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-background': 'var(--primary-background)',
        navbar: 'var(--navbar)',
      },
      boxShadow: {
        lg: '0 0 1rem 0 rgb(0 0 0 / 0.25)',
        button: '0px 0px 2.25rem 0px rgba(191, 254, 143, 0.50)',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '22xl': '11rem',
      },
      strokeWidth: {
        1.5: 1.5,
        2.5: 2.5,
        4: 4,
      },
      margin: {
        136: '34rem',
        116: '29rem',
        84: '21rem',
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
        '-2': '-0.5rem',
        '-6': '-1.5rem',
        '-9': '-2.25rem',
        '-11': '-2.75rem',
        '-20': '-5rem',
        '-28': '-7rem',
        '-36': '-9rem',
        '-44': '-11rem',
        '-60': '-15rem',
        '-96': '-24rem',
        '-full-125': '-125%',
        '-full-180': '-180%',
        '-1/5': '-20%',
        '1/5': '20%',
        58.5: '3.66rem',
        76: '4.75rem',
      },
      zIndex: {
        '-10': '-10',
      },
      translate: {
        '-0.5': '-0.25rem',
        '-3': '-0.75rem',
        '-7': '-1.75rem',
      },
      willChange: {
        opacity: 'opacity',
      },
    },
  },
}
