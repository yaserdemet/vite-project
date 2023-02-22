/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primaryRed: "#E31C25",
        primaryGreen: "#1D7832",
        secondaryGreen: "#5FDBA7",
        primaryBlue: "#006EBE",
        bgPrimary: "#F5F8FF",
        darkGrey: "#424242",
        lightGrey: "#F2F4F7",
        primaryYellow : "#FFD646",
        secondaryYellow: "#FFD481",
        alertSuccess: "#D6F3E9",
        alertPrimary: "#DCEDFC",
        alertWarning: "#FCF0DB",
        alertError: "#FDE1E1",
        alertRed : "#FF7985",
        textBlack: "#000000",
        textPrimary: "#64748B",
        textSecondary: "#424242",
        primaryBorder: "#E5E9EB",
        skeletonLight : "#F9FAFB",
        skeletonDark : "#E5E7EB",
        textBlack : "#252C32"
      },

      boxShadow: {
        primaryShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        secondaryShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
      },

      fonts: {
        mainFont: "Manrope', sans-serif",
        secondaryFont: "Poppins",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
};
