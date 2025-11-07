/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{components,context,services,App,index}.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D9488',
        'primary-focus': '#0F766E',
        'secondary': '#4B5563',
        'background': '#111827',
        'surface': '#1F2937',
        'card': '#374151',
        'text-primary': '#F9FAFB',
        'text-secondary': '#D1D5DB',
        'accent': '#38BDF8',
        'success': '#10B981',
        'warning': '#F59E0B',
        'danger': '#EF4444',
      }
    },
  },
  plugins: [],
}
