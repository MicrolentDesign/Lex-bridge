import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * `base` comes from VITE_BASE rather than being hardcoded.
 *
 * GitHub Pages serves this project site under /Lex-bridge/, so built asset URLs need
 * that prefix or they resolve to microlentdesign.github.io/assets/... and 404. The CI
 * workflow sets VITE_BASE=/Lex-bridge/.
 *
 * It is NOT hardcoded because the client's own domain serves from the root (the domain is
 * the client's responsibility per PLAN.md §0) — that deploy simply omits VITE_BASE and
 * gets '/'. Local dev also stays at '/'.
 */
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
