import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

// The prerendered page (built once by global-setup.js), with React's `<!-- -->`
// text separators removed and the HTML entities it emits decoded back to text.
export function readPage() {
  const html = readFileSync(resolve(root, 'dist/client/index.html'), 'utf8')
  return html.replace(/<!-- -->/g, '').replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
}
