/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6826DF',
          dark: '#521cb5',
        },
        secondary: '#8B5CF6',
        'bg-light': '#F9FAFB',
        'surface-light': '#FFFFFF',
        'surface-container-low': '#F3F4F6',
        'border-light': '#E5E7EB',
        'text-light-primary': '#111827',
        'text-light-secondary': '#4B5563',
        'text-light-tertiary': '#9CA3AF',
        'status-success': '#10B981',
        'status-warning': '#F59E0B',
      },
    },
  },
  plugins: [],
};