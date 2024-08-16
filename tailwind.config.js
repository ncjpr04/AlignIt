/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      margin: {
        calc: 'calc(82vw - 4.5rem)',
    },
      colors: {
        'primary': 'var(--primary-color)',
        'primary/50': 'var(--primary-color-50)',
        'secondary': 'var(--secondary-color)',
        'background': 'var(--background-color)',
        'text': 'var(--text-color)',
      },
      fontFamily: {

        poppins: ["Poppins", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

