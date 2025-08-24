import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // make sure the folder where components will be added is included
  theme: { extend: {} },
  plugins: [
    tailwindcss(),
  ],
})