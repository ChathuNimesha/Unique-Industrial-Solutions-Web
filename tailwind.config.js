/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#E0F7F7",
          100: "#B3ECEC",
          200: "#80DFDF",
          300: "#4DD2D2",
          400: "#26C5C5",
          500: "#00A6A6",   // Main teal from logo
          600: "#008C8C",   // Darker teal
          700: "#007575",
          800: "#005A5A",
          900: "#003F3F",
        },
        industrial: {
          50:  "#F7F7F7",
          100: "#EAEAEA",
          200: "#D5D5D5",
          300: "#B0B0B0",
          400: "#8A8A8A",
          500: "#6A6A6A",   // Medium gray from logo
          600: "#4A4A4A",   // Main text gray from logo
          700: "#303030",
          800: "#1A1A1A",   // Deep dark for backgrounds
          900: "#0D0D0D",
        },
        accent: {
          teal: "#00A6A6",
          darkTeal: "#008C8C",
          gray: "#4A4A4A",
          lightGray: "#EAEAEA",
          black: "#0D0D0D",
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        shimmer: {
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
}
