import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Replace 'hadj-finance' with the exact name of your GitHub repository.
export default defineConfig({
  plugins: [react()],
  base: '/hadj-finance/', 
})
