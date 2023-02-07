/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      ss: "375px",

      sm: "480px",
      // => @media (min-width: 640px) { ... }

      mmm: "622px",

      mm: "712px",

      md: "547px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1024px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1680x",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
      rubik: ["Rubik", "sans-serif"],
      ubuntu: "Ubuntu",
    },
    extend: {
      spacing: {},
      borderRadius: {},
      fontSize: {
        45: ["34px", "48px"],
      },
      colors: {
        primary: "#f54708",
        tinted: "#ff5a08",
        black: {
          3: "#333",
          7: "#777",
          4: "#444",
          5: "#555",
          6: "#F9F9F9",
        },
        primary2: "#3a7bd5",
        tinted2: "#00d2ff",
        main: "#017a01",
        main_tint: "#37af4b",
        sec_tint: "#b3d342",
      },
      backgroundImage: {
        logo: "linear-gradient(180deg, #F6734A 0%, rgba(253, 172, 20, 0.75) 100%)",
        button:
          "linear-gradient(90deg, #00D2FF -0.89%, rgba(58, 123, 213, 0.75) 101%)",
        header:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.05) 52.08%, rgba(255, 255, 255, 0.01) 100%)",
      },
    },
  },
  plugins: [],
};
