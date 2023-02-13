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
      animation: {
        scaleIn: "scaleIn 4s cubic-bezier(0.36, 0.11, 0.89, 0.32) infinite",
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        scaleIn: {
          from: {
            transform: "scale(0.8, 0.8)",
            opacity: "1",
          },
          to: {
            transform: "scale(1.5, 1.5)",
            opacity: "0",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
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
        myWhite: {
          1: " rgba(255, 255, 255, 0.9)",
          2: "rgba(255, 255, 255, 0.8)",
          3: "rgba(255, 255, 255, 0.7)",
          4: "rgba(255, 255, 255, 0.6)",
          5: "rgba(255, 255, 255, 0.5)",
          6: "rgba(255, 255, 255, 0.4)",
          8: "rgba(255, 255, 255, 0.01)",
          // 8: "rgba(255, 255, 255, 0.05)",
          // 8: "rgba(0, 0, 0, 0.05)",
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
