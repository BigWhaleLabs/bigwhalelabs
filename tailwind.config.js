/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      padding: {
        25: '6.125rem',
      },
      fontFamily: {
        secondary: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        tertiary: '#01feb6',
        'formal-accent': '#efecd6',
        'primary-dark': '#0d0030',
        navbar: 'rgba(13, 0, 48, 0.3)',
      },
      boxShadow: {
        button: '0rem 0rem 1.625rem 0rem rgba(1, 254, 182, 1)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
}
