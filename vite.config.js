import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.mp4", "**/*.PNG", "**/*.JPG"],
    base: '/ProfileWebsite', // Change this to your repository name
});

