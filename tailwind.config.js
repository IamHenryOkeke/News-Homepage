/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily : {
        body:['Inter']
      },colors: {
        blue: {
          950: 'hsl(240, 100%, 5%)',
          1000: '#8E8FE0',
        },
        softOrange : "hsl(35, 77%, 62%)",
        softRed : "hsl(5, 85%, 63%)"
      }, gridTemplateColumns : {
        "16":"0.6fr 1fr",
        "18" : "1fr 0.5fr"
      }
    },
  },
  plugins: [],
}
