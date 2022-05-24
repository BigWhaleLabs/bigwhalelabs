/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        primary: ['"Space Grotesk"', 'sans-serif'],
        secondary: ['"JetBrains Mono"', 'sans-serif'],
      },
      colors: {
        tertiary: '#01feb6',
        'formal-accent': '#efecd6',
        'primary-dark': '#0d0030',
      },
      boxShadow: {
        button: '0px 0px 26px 0px rgba(1, 254, 182, 1)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
}
