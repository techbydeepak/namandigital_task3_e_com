import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // or 'tailwindcss' if using v3

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  base: import.meta.env.MODE === 'production' 
    ? '/namandigital_task3_e_com/' 
    : '/',
})
