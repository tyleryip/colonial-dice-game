/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createViteLicensePlugin } from 'rollup-license-plugin'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createViteLicensePlugin(),
    VitePWA({
      registerType: "autoUpdate"
    })
  ],
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version)
  },
  test: {
    coverage: {
      enabled: true,
      include: ['**/slices/**'],
      exclude: ['**/slices/session/shared']
    },
    reporters: [
      'verbose',
      'github-actions'
    ]
  }
})
