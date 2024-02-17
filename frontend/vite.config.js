import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend/",
  plugins: [react()], 
  server: {
    https: true,
    port: 5000,
    proxy: {
      "/api/": "https://ecommerce-theta-hazel.vercel.app/",
      "/uploads/": "https://ecommerce-theta-hazel.vercel.app/",
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets', 
    }
  },
})

