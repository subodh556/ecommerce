import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://ecommerce-xkg9.vercel.app/",
      "/uploads/": "https://ecommerce-xkg9.vercel.app/",
    },
  },
})
