module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "300px",
      xs: "375px",
      sm: "640px",
      md: "768px",
      subLg: "980px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
      colors: {
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
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
