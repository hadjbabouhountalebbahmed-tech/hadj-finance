import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ base './' fonctionne en local et sur GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './', // <-- change cette ligne
})
