import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 🔽 ADD THIS EXACT BLOCK FOR WINDOWS HMR 🔽
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Forces local network exposure
  },
})

