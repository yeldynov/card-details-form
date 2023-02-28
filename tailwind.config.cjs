/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-white': 'hsl(0, 0%, 100%)',
        'c-light-grayish-violet': 'hsl(270, 3%, 87%)',
        'c-dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'c-very-dark-violet': 'hsl(278, 68%, 11%)',
        'c-input-gradient-1': 'hsl(249, 99%, 64%)',
        'c-input-gradient-2': 'hsl(278, 94%, 30%)',
        'c-red-errors': 'hsl(0, 100%, 66%)',
      },
      screens: {
        desk: '375px',
      },
      backgroundImage: (theme) => ({
        'mobile-main': 'url(./assets/bg-main-mobile.png)',
        'desktop-main': 'url(./assets/bg-main-desktop.png)',
        'card-front': 'url(./assets/bg-card-front.png)',
        'card-back': 'url(./assets/bg-card-back.png)',
      }),
    },
  },
  plugins: [],
};
