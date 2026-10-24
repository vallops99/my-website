import { beforeAll, describe, expect, it } from 'vitest'
import { caseStudies, skills } from '../src/content.js'
import { readPage } from './helpers.js'

// Loose name matching: "REST" ~ "REST / OpenAPI", "AWS (Lambda…)" ~ "AWS", "Jenkins & CI pipelines" ~ "Jenkins".
const normalise = (s) =>
  s
    .toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/ & ci pipelines/g, ' ')
    .split(/\s*[/·]\s*/)
    .map((p) => p.trim())
    .filter(Boolean)
const covers = (techLine, name) => {
  const have = techLine.flatMap(normalise)
  return normalise(name).every((w) => have.includes(w))
}
const shippedNames = () => [...skills.groups.flatMap((g) => g.chips), ...skills.alsoShipped]

describe('skills coverage', () => {
  it('every chip and Also-shipped item appears in at least one Case study tech line', () => {
    const lines = caseStudies.map((c) => c.tech)
    const missing = shippedNames().filter((n) => !lines.some((l) => covers(l, n)))
    expect(missing).toEqual([])
  })

  it('lists each shipped tech once', () => {
    const all = shippedNames().map((n) => normalise(n).join('/'))
    expect(new Set(all).size).toBe(all.length)
  })
})

describe('prerendered More work and What I work with', () => {
  let page, more, skillsHtml
  beforeAll(() => {
    page = readPage()
    more = page.match(/<section id="more-work"[\s\S]*?<\/section>/)?.[0] ?? ''
    skillsHtml = page.match(/<section id="skills"[\s\S]*?<\/section>/)?.[0] ?? ''
  })

  it('shows the four uncited Case studies in order', () => {
    const order = ['A production-line inspection Client', 'A tax-assistance product', 'OHomeMy', 'Conda-autoactivate-env']
    const positions = order.map((t) => more.indexOf(t))
    expect(positions.every((p) => p >= 0)).toBe(true)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
    expect(more).toContain('In delivery')
    expect(more).toContain('61★ · 7 forks')
    expect(more).toContain('Team work over 16 months')
  })

  it('links only the two public repos', () => {
    const hrefs = [...more.matchAll(/href="([^"]+)"/g)].map((m) => m[1])
    expect(hrefs.sort()).toEqual([
      'https://github.com/vallops99/Conda-autoactivate-env',
      'https://github.com/vallops99/OHomeMy',
    ])
  })

  it('shows the skills copy', () => {
    for (const text of [
      'Languages',
      'APIs & auth',
      'Data & messaging',
      'Cloud & delivery',
      'Also shipped with',
      'Hands-on with',
      'Zig',
      'Everything above is used in at least one Case study.',
      'Open-source contributions',
    ]) {
      expect(skillsHtml).toContain(text)
    }
    for (const chip of skills.groups.flatMap((g) => g.chips)) expect(skillsHtml).toContain(chip)
  })

  it('links only the walle and devbox contributions', () => {
    const hrefs = [...skillsHtml.matchAll(/href="([^"]+)"/g)].map((m) => m[1])
    expect(hrefs.length).toBeGreaterThan(0)
    for (const h of hrefs) expect(h).toMatch(/^https:\/\/github\.com\/(iskyd\/walle|jetify-com\/devbox)\/pull\/\d+$/)
  })

  it('keeps chips non-interactive', () => {
    const chipLists = [...page.matchAll(/<ul class="chips[^"]*">[\s\S]*?<\/ul>/g)].map((m) => m[0])
    expect(chipLists.length).toBeGreaterThan(4)
    for (const ul of chipLists) expect(ul).not.toMatch(/<a[\s>]|<button|tabindex|role=/)
  })
})
