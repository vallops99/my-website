import { beforeAll, describe, expect, it } from 'vitest'
import { caseStudies } from '../src/content.js'
import { readPage } from './helpers.js'

// Pulls #help out of the prerendered page and lists its headings and anchors.
function parseHelp(page) {
  const start = page.indexOf('id="help"')
  const end = page.indexOf('id="more-work"')
  const section = page.slice(page.lastIndexOf('<section', start), end)
  const headings = [...section.matchAll(/<h([1-6])[^>]*>(.*?)<\/h\1>/g)].map((m) => ({
    level: Number(m[1]),
    text: m[2].replace(/<[^>]+>/g, ''),
  }))
  const hrefs = [...section.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
  return { section, headings, hrefs }
}

describe('How I can help (#help) in the prerendered page', () => {
  let page
  let help
  beforeAll(() => {
    page = readPage()
    help = parseHelp(page)
  })

  it('outlines as h2, then an h3 per engagement type, then an h4 per Case study', () => {
    expect(help.headings.map((h) => [h.level, h.text])).toEqual([
      [2, 'How I can help'],
      [3, 'Build a new backend'],
      [4, 'A regulated crypto fintech'],
      [3, 'Scale or rework an existing system'],
      [4, 'An industrial-automation Client'],
      [3, 'Set up delivery and operations'],
    ])
  })

  it('has a 3-item numbered index whose links and the Case study back-reference resolve', () => {
    const index = help.section.match(/<ol class="toc">(.*?)<\/ol>/)[1]
    expect([...index.matchAll(/<a /g)]).toHaveLength(3)
    expect(help.hrefs.length).toBeGreaterThanOrEqual(4)
    for (const id of help.hrefs) expect(page).toContain(`id="${id}"`)
    expect(help.hrefs).toContain('case-crypto-fintech')
  })

  it('"See my work" lands on #help', () => {
    expect(page).toMatch(/href="#help"[^>]*>See my work →/)
  })

  it('chapter 3 links back to chapter 1 instead of repeating the Case study', () => {
    const chapter3 = help.section.slice(help.section.indexOf('id="help-2"'))
    expect(chapter3).toContain('href="#case-crypto-fintech"')
    expect(chapter3).not.toContain('<h4')
    expect(chapter3).toContain('Kubernetes/GitOps delivery platform at a regulated crypto fintech')
    expect(page.match(/id="case-crypto-fintech"/g)).toHaveLength(1)
  })

  it('carries the engagement copy, Case study leads, tech lines, terms and agents line', () => {
    for (const text of [
      'From blank repo to production',
      'Without stopping it',
      'Ship often, sleep well',
      'Authentication and secrets management (OAuth/JWT, token verification, Vault)',
      'Used daily by hundreds of end users',
      'Designed and built the subscription and recurring-billing service',
      'Two instances run today and it scales on command.',
      'Team work',
      'ArgoCD / GitOps',
      'Prometheus / Grafana',
      'Java & Spring Boot',
      'Remote, based in Italy (CET) · English & Italian · Fixed-scope projects or ongoing work, direct or through your agency.',
      'I work with coding agents, and I design, review and own everything they write.',
    ]) {
      expect(help.section).toContain(text)
    }
    expect(help.section).not.toMatch(/€|\$\d|per hour/i)
  })

  it('numerals are decorative', () => {
    expect(help.section).toMatch(/class="numeral" aria-hidden="true"/)
  })

  it('names no real Client: each Case study client is anonymised or one of the two open-source projects', () => {
    const openSource = ['OHomeMy', 'Conda-autoactivate-env']
    for (const { client } of caseStudies) {
      expect(/^An? /.test(client) || openSource.includes(client), client).toBe(true)
    }
  })
})
