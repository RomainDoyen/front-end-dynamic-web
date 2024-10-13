/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      '8xl': [
        '120px', {
          lineHeight: '120px',
          letterSpacing: '-6px',
          fontWeight: '500',
        }
      ],
      '7xl': [
        '72px', {
          lineHeight: '80px',
          letterSpacing: '-4.5px',
          fontWeight: '600',
        }
      ],
      '6xl': [
        '55px', {
          lineHeight: '60px',
          letterSpacing: '-2.5px',
          fontWeight: '500',
        }
      ],
      '5xl': [
        '48px', {
          lineHeight: '54px',
          letterSpacing: '-1.6px',
          fontWeight: '500',
        }
      ],
      '4xl': [
        '36px', {
          lineHeight: '44px',
          letterSpacing: '-1.2px',
          fontWeight: '500',
        }
      ],
      '3xl': [
        '28px', {
          lineHeight: '34px',
          letterSpacing: '-0.8px',
          fontWeight: '500',
        }
      ],
      '2xl': [
        '24px', {
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }
      ],
      xl: [
        '24px', {
          lineHeight: '30px',
          letterSpacing: '-1px',
          fontWeight: '400',
        }
      ],
      lg: [
        '21px', {
          lineHeight: '30px',
          letterSpacing: '-0.8px',
          fontWeight: '400',
        }
      ],
      base: [
        '17px', {
          lineHeight: '25px',
          letterSpacing: '-0.69px',
          fontWeight: '400',
        }
      ],
      sm: [
        '15px', {
          lineHeight: '23px',
          letterSpacing: '-0.68px',
          fontWeight: '400',
        }
      ],
      caption1: [
        '20px', {
          lineHeight: '24px',
          letterSpacing: '-0.60px',
          fontWeight: '400',
        }
      ],
      caption2: [
        '18px', {
          lineHeight: '20px',
          letterSpacing: '-0.60px',
          fontWeight: '400',
        }
      ],
      caption3: [
        '16px', {
          lineHeight: '18px',
          letterSpacing: '-0.5px',
          fontWeight: '400',
        }
      ],
      caption4: [
        '13px', {
          lineHeight: '15px',
          letterSpacing: '-0.2px',
          fontWeight: '400',
        }
      ],
    },
  },
  plugins: [],
}