import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration
export default defineConfig({
  plugins: [react()],
  base: "/HireGen/",
  assetsInclude: ["**/*.png", "**/*.PNG"],  // Include PNG files
  build: {
    assetsInlineLimit: 0,  // Adjust limit if necessary to ensure assets are handled correctly
  }
})
