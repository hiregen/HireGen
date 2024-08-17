import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/HireGen/",
  assetsInclude: ["**/*.png", "**/*.PNG"],  // Consider adding both lowercase and uppercase if needed
})
