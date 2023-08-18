import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default {
  server: {
    host: 'https://stringsandkeysback-production.up.railway.app/', // Cambia esta línea
  },
};
