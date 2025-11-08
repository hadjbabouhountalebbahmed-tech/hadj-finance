import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Configuration pour Vite
// base './' permet au site de fonctionner en local (localhost)
// et après déploiement sur GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './', // <-- Très important pour éviter la page blanche
})
