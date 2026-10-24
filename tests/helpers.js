import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

// The prerendered page (built once by global-setup.js), with React's `<!-- -->`
// text separators removed and the HTML entities it emits decoded back to text.
export function readPage() {
  const html = readFileSync(resolve(root, 'dist/client/index.html'), 'utf8')
  return html.replace(/<!-- -->/g, '').replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
}

// The visible text of the prerendered #root: tags become spaces, whitespace collapses.
export function readPageText() {
  const page = readPage()
  const body = page.slice(page.indexOf('<div id="root">'), page.lastIndexOf('</body>'))
  return body
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
}

// A built file under dist/client, e.g. readBuilt('robots.txt').
export function readBuilt(path, encoding = 'utf8') {
  return readFileSync(resolve(root, 'dist/client', path), encoding)
}
