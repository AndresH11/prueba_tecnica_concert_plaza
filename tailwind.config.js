/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors:{
        customWhite: "#F6F6F6",
        backgroundMain: "#3b3b3b",
        backgroundAside:"#262626",
        backgroundInput:"#1C1C1C",
        customYellow:"#f0b90b",
        bgScrollBarTrack:"#f0b90b6e",
        darkText: '#C8C6C6',
        blueDark: "#273142",

      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}