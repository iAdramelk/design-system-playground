module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    colors: {
      red: "#F00",
      green: "#0F0",
      blue: "#00F",
    },
    borderRadius: {
      sm: "2px",
      md: "4px",
      lg: "8px",
    },
    spacing: {
      "1/2m": "4px",
      "1m": "8px",
      "2m": "16px",
      "3m": "24px",
      "4m": "32px",
      "5m": "40px",
    },
    fontSize: {
      sm: ["12px", { lineHeight: "1" }],
      md: ["16px", { lineHeight: "1" }],
      lg: ["20px", { lineHeight: "1" }],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
