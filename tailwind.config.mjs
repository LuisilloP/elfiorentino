/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
      colors: {
        page: "#faf8f3",
        surface: "#ffffff",
        sand: "#f3eee6",
        ink: "#111111",
        muted: "#4f4338",
        border: "#e6dfd5",
        accent: "#c79b3f",
        whatsapp: "#25d366",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 17, 17, 0.08)",
        card: "0 10px 32px rgba(17, 17, 17, 0.07)",
      },
      borderRadius: {
        xl: "24px",
        lg: "16px",
        md: "12px",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
