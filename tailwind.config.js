module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#09aee6",
          secondary: "#f6d860",
          accent: "#09aee6",
          neutral: "#242c2e",
          "base-100": "#ffffff",
        },
      },
     
    ],
  },
  plugins: [require("daisyui")],
}
