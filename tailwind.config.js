/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // ... other content paths
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
} 