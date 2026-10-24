import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createServer, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin"

const ROOT_MARKER = /<div id="root">\s*<\/div>/

// Renders the app to static HTML at build time and injects it into the client
// bundle's index.html, so `vite build` alone produces the prerendered page.
// Also preloads the hashed WOFF2 so text does not wait for the CSS to reveal it.
function prerender() {
  let root
  let clientOutDir
  let rendered = false
  return {
    name: 'prerender',
    apply: 'build',
    enforce: 'post',
    configResolved(config) {
      root = config.root
      clientOutDir = resolve(root, config.environments.client.build.outDir)
    },
    async writeBundle() {
      if (this.environment.name !== 'client') return
      const server = await createServer({
        root,
        configFile: false,
        plugins: [react()],
        appType: 'custom',
        server: { middlewareMode: true, ws: false, watch: null },
        logLevel: 'silent',
      })
      try {
        const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
        const file = resolve(clientOutDir, 'index.html')
        const html = readFileSync(file, 'utf8')
        if (!ROOT_MARKER.test(html)) throw new Error(`prerender: ${ROOT_MARKER} not found in index.html`)
        const font = readdirSync(resolve(clientOutDir, 'assets')).find((f) => f.endsWith('.woff2'))
        if (!font) throw new Error('prerender: no .woff2 found in the client bundle')
        const preload = `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin>`
        writeFileSync(
          file,
          html
            .replace(ROOT_MARKER, () => `<div id="root">${render()}</div>`)
            .replace('</head>', () => `    ${preload}\n  </head>`),
        )
        rendered = true
      } finally {
        await server.close()
      }
    },
    closeBundle() {
      if (this.environment.name === 'client' && !rendered) {
        throw new Error('prerender: the client writeBundle never ran, so index.html was not prerendered')
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cloudflare(),
    prerender(),
  ],
})
