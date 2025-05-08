/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './features/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: '#2E5AAC',
            light: '#3C6DCC',
            dark: '#224587',
          },
          background: '#f8fafc',
          surface: '#ffffff',
          primary: '#3b82f6', // blue-500
          secondary: '#6b7280', // gray-500
          danger: '#ef4444', // red-500
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  