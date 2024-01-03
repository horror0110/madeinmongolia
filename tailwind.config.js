/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        mainColor: "#263459",
        darkBlue: "rgb(38, 52, 89)"
      },
      backgroundColor: {
        mainColor: "#263459",
        blackColor: "rgb(30, 30, 28)",
        darkBlue: "rgb(38, 52, 89)",
        gg: "rgba(0, 0, 0, 0)"
      },
      textColor: {
        mainColor: "#263459",
        grayColor: "rgba(255, 255, 255, 0.8)",
        blackColor: "rgb(30, 30, 28)",
        mainGray: "rgb(51, 51, 51)",
        darkBlue: "rgb(38, 52, 89)",
        linkColor: "rgb(136, 136, 136)",
        darkGray: "rgb(52, 52, 52)",
        yellowColor: "rgb(245, 161, 0)"
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0039ff",

          secondary: "#00d500",

          accent: "#007000",

          neutral: "#0b110f",

          "base-100": "#fdf9ff",

          info: "#00bcff",

          success: "#4e8200",

          warning: "#ffd100",

          error: "#de0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
