/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        mainColor: "#263459",
      },
      backgroundColor: {
        mainColor: "#263459",
      },
      textColor: {
        mainColor: "#263459",
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
