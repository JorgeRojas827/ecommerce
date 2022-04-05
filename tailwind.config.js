module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        morganite: ['Morganite'],
        montserrat: ['Montserrat'],
      },
      colors: {
        primary: '#303030',
        bkg: '#1E1E1E',
        letter: '#C4C4C4',
      },
      fontSize: {
        mainLetter: 288,
        titleSection: 200,
      },
    },
  },
  plugins: [],
}
