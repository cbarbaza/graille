module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html'],
  theme: {
    fontFamily: {
      heading: ['Fira Sans', 'system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      sans: ['Roboto', 'system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'sans-serif'],
    },
    fontSize: {
      10: '1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      22: '2.2rem',
      28: '2.8rem',
    },
    extend: {
      colors: {
        primary: '#c29a6a',
        secondary: '#4a5568',
      },
    },
  },
  variants: {},
  plugins: [],
};
