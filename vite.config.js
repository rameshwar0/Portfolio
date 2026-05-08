import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

<<<<<<< Updated upstream
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
})
=======
export default defineConfig({
  plugins: [tailwindcss(), react()],
})
>>>>>>> Stashed changes
