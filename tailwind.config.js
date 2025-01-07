/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line(flowbite install)
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // add this line(flowbite install)
  ],
  darkMode: "selector",
};
