import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration
export default defineConfig({
  plugins: [react()],
  base: "/HireGen/",
  assetsInclude: ["**/*.png", "**/*.PNG"],  // Ensure patterns match your files
})
