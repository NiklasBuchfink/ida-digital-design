module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Urbanist', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],

  "tailwindCSS.includeLanguages": {
    "plaintext": "html,js,ts,jsx,tsx"
  }
}
