/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ['"Quicksand", "sans-serif"'],
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat Alternates", "sans-serif"],
        RocknRoll: ["RocknRoll One", "sans-serif"],
      },
      screens: {
        lg: "997px",
        md: "665px",
        sm: "530px",
        xsm: "380px",
      },
      colors: {
        // Base Colors
        white: "#FFFFFF",
        black: "#000000",

        // Background Colors
        bgLight: "#F9FAFB", // Light mode background
        bgDark: "#121212", // Dark mode background
        bgCardLight: "#FFFFFF", // Card background (light mode)
        bgCardDark: "#1E1E1E", // Card background (dark mode)

        // Text Colors
        textPrimary: "#333333", // Main text color
        textSecondary: "#757575", // Subtle text
        textLight: "#F5F5F5", // Text for dark backgrounds
        textMuted: "#B0BEC5", // Placeholder or less important text

        // Button Colors
        buttonPrimary: "#007AFF", // Main action buttons
        buttonPrimaryHover: "#005BB5", // Hover state for primary buttons
        buttonSecondary: "#00BFA5", // Secondary actions
        buttonSecondaryHover: "#008F7A", // Hover state for secondary buttons

        // Borders and Dividers
        borderLight: "#E0E0E0", // Light borders and dividers
        borderDark: "#333333", // Dark borders and dividers

        // Highlights and Alerts
        highlight: "#FFC107", // Highlights or warnings
        success: "#4CAF50", // Success messages or indicators
        error: "#F44336", // Error messages or states
        info: "#2196F3", // Informational messages or badges

        // Overlays
        overlayLight: "rgba(255, 255, 255, 0.7)", // Light overlay
        overlayDark: "rgba(0, 0, 0, 0.5)", // Dark overlay

        // Miscellaneous Colors
        shadowLight: "rgba(0, 0, 0, 0.1)", // Subtle shadows
        shadowDark: "rgba(0, 0, 0, 0.3)", // Darker shadows
        link: "#007AFF", // Links
        linkHover: "#005BB5", // Link hover state
      },
    },
  },
  plugins: [require("daisyui")],
};
