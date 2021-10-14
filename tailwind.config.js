module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-red': '#31302B',
        'gray-red-sec': '#58564F'
      }
    },
    fontFamily: {
      'serif': ['Merriweather'],
      'sans': ['Open\\ Sans']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
