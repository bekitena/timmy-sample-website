import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/timmy-sample-website/',  // must match your repo name exactly
  plugins: [react()],
})
