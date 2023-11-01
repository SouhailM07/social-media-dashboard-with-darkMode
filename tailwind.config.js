/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        BrightRed: "hsl(356, 69%, 56%)",
        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        Instagram: " linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        YouTube: "hsl(348, 97%, 39%)",
        whiteText: "hsl(0, 0%, 100%)",
        // dark
        d_bg: "hsl(230, 17%, 14%)",
        d_topBGPattern: "hsl(232, 19%, 15%)",
        d_card: "hsl(228, 28%, 20%)",
        d_text: "hsl(228, 34%, 66%)",
        // light
        l_topBGPattern: "hsl(225, 100%, 98%)",
        l_CardBG: "hsl(227, 47%, 96%)",
        l_text: "hsl(228, 12%, 44%)",
        grayText: "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
