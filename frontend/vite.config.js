import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://ecommerce-theta-hazel.vercel.app/",
      "/uploads/": "http://localhost:5000",
    },
  },
})
