import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        caveat: ["Caveat", "cursive"],
        greatVibes: ["Great Vibes", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
