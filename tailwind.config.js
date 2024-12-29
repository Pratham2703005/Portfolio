/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/@magic-ui/react/dist/**/*.{js,ts,jsx,tsx}", // Include Magic UI components
  ],
  theme: {
    extend: {
      build: {
        rollupOptions: {
          external: ['emailjs-com'],
        },
      },
      colors: {
        "mid-blue": "#8f9ba8",
      },
      animation: {
        "shiny-text": "shine 2s cubic-bezier(.6,.6,0,1) infinite",
      },
      keyframes: {
        shine: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },
      screens: {
        mobile: "375px",
        tablet: "640px",
        desktop: "1024px",
        "large-desktop": "1280px",
      },
    },
  },
  plugins: [],
};
