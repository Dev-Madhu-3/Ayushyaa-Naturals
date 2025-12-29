// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#4a6741",
        "light-green": "#7a9e7f",
        "accent-green": "#a7c4a5",
        "herbal-brown": "#8c6d46",
        "light-brown": "#c9b18c",
        cream: "#f8f5f0",
        "off-white": "#f9f7f2",
        "text-dark": "#2c3e2f",
        "text-light": "#5a6a5d",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(135deg, #4a6741 0%, #7a9e7f 100%)",
        "brown-gradient": "linear-gradient(135deg, #8c6d46 0%, #c9b18c 100%)",
        "cream-gradient": "linear-gradient(135deg, #f8f5f0 0%, #f9f7f2 100%)",
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.07)",
        medium: "0 8px 15px rgba(0, 0, 0, 0.1)",
        large: "0 20px 25px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
