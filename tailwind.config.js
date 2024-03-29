/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        mainColor: "#263459",
        darkBlue: "rgb(38, 52, 89)",
        graygray: "rgb(129, 138, 145)",
        mainGray: "rgb(51, 51, 51)",
        darkGray: "rgb(52, 52, 52)",
      },
      backgroundColor: {
        mainColor: "#263459",
        blackColor: "rgb(30, 30, 28)",
        darkBlue: "rgb(38, 52, 89)",
        opacityColor: "rgba(0, 0, 0, 0.7)",
        opacityGray: "rgba(0, 0, 0, 0.5)",
        graygray: "rgb(129, 138, 145)",
        linkColor: "rgb(136, 136, 136)",
        greenColor: "rgb(40, 167, 69)",
        coralColor: "rgb(255, 116, 107)",
        sideColor: "rgb(248, 249, 250)",
      },
      textColor: {
        mainColor: "#263459",
        grayColor: "rgba(255, 255, 255, 0.8)",
        footerGray: "rgb(255, 255, 255)",
        blackColor: "rgb(30, 30, 28)",
        mainGray: "rgb(51, 51, 51)",
        darkBlue: "rgb(38, 52, 89)",
        linkColor: "rgb(136, 136, 136)",
        darkGray: "rgb(52, 52, 52)",
        yellowColor: "rgb(245, 161, 0)",
        opacityColor: "rgba(0, 0, 0, 0.7)",
        opacityGray: "rgba(0, 0, 0, 0.5)",
        darkColor: "rgb(17, 17, 17)",
        graygray: "rgb(129, 138, 145)",
        buttonGray: "rgb(43, 43, 44)",
        buttonDarkGray: "rgb(44, 44, 44)",
        shopColor: "rgb(95, 95, 95)",
        footerColor: "rgb(44, 62, 80)",
        oceanBlue: "rgb(44, 106, 243)",
        sideBlack: " rgb(33, 37, 41)",
        sideBlack2: "rgb(52, 58, 64)",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00b9e1",

          secondary: "#00dfff",

          accent: "#00cdf3",

          neutral: "#16202d",

          "base-100": "#fffdff",

          info: "#00bedb",

          success: "#7af38a",

          warning: "#ffa500",

          error: "#ff8694",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
