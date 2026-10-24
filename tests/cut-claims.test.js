import { readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

// Claims cut by #5 and #4: none may survive anywhere in src/ or the root index.html.
const cutClaims = [
  /10 to 10 million/i,
  /millions? of (users|requests)/i,
  /\b6\s*\+?\s*years/i,
  /technical blog/i,
  /mentoring/i,
  /terraform/i,
  /fastapi/i,
  /advanced security protocols/i,
  /encryption/i,
  /load balancing/i,
  /performance optimization/i,
  /disaster recovery/i,
  /light.?bulb/i,
  /simpleness/i,
  /bitcoin enthusiast/i,
]

function sourceFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return sourceFiles(path)
    return /\.(jsx?|css|svg|html)$/.test(entry.name) ? [path] : []
  })
}

describe('cut claims', () => {
  const files = [...sourceFiles(resolve(import.meta.dirname, '../src')), resolve(import.meta.dirname, '../index.html')]

  it.each(cutClaims.map((re) => [String(re), re]))('%s is absent from src/ and index.html', (_name, re) => {
    const hits = files.filter((f) => re.test(readFileSync(f, 'utf8')))
    expect(hits).toEqual([])
  })
})
