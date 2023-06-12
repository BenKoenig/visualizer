import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { defineConfig } from 'vite'
import million from 'million/compiler'

export default defineConfig({
  plugins: [react(), eslint(), million.vite()],
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})
