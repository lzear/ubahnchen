import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

export default tailwindConfig
