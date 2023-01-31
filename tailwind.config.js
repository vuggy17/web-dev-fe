module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    aspectRatio: {
      square: "1 / 1",
    },
    screens: {
      xxs: "300px",
      xs: "375px",
      sm: "640px",
      md: "768px",
      subLg: "980px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1440px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      spacing: {
        fit: "fit-content",
      },
      colors: {
        "next-primary": "var(--next-primary-color)",
        "next-secondary": "var(--next-secondary-color)",
        "next-bg": "var(--next-bg-color)",
        "next-btn": "var(--next-btn-color)",

        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        textPrimary: "var(--primary-text-color)",
        textSecondary: "var(--secondary-text-color)",
        e2e2e2: "#e2e2e2",
        f7f7f7: "#f7f7f7",
        f7f6f7: "#f7f6f7",
        alertSuccess: "var(--alert-success)",
        alertError: "var(--alert-error)",
        alertInfo: "var(--alert-info)",
        "product-border": "rgba(0,0,0,.125)",
      },
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', "cursive"],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        marquee2: "marquee2 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      lineHeight: {
        64: "4rem",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "5col-280": "repeat(5, minmax(120px, 280px))",
        "2col-category": "1fr 30%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("flowbite/plugin"),
  ],
};
