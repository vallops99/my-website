import { beforeAll, describe, expect, it } from 'vitest'
import { caseStudies, contact } from '../src/content.js'
import { readBuilt, readPage, readPageText } from './helpers.js'

const SITE = 'https://valerio.farrotti.com/'

function head() {
  return readPage().match(/<head>([\s\S]*?)<\/head>/)[1]
}

function meta(html, attr, key) {
  const tag = html.match(new RegExp(`<meta ${attr}="${key}" content="([^"]*)"`))
  return tag && tag[1]
}

describe('head tags', () => {
  let html
  beforeAll(() => {
    html = head()
  })

  it('has a title, a description built on the offer, and a canonical URL', () => {
    expect(html).toContain('<title>Valerio Farrotti · Freelance backend developer</title>')
    const description = meta(html, 'name', 'description')
    expect(description).toMatch(/^Freelance backend developer/)
    for (const type of ['Build a new backend', 'Scale or rework an existing system', 'Set up delivery and operations']) {
      expect(description.toLowerCase()).toContain(type.toLowerCase())
    }
    expect(html).toContain(`<link rel="canonical" href="${SITE}">`)
  })

  it('has Open Graph and Twitter card tags pointing at the 1200×630 image', () => {
    expect(meta(html, 'property', 'og:type')).toBe('website')
    expect(meta(html, 'property', 'og:url')).toBe(SITE)
    expect(meta(html, 'property', 'og:title')).toBe('Valerio Farrotti · Freelance backend developer')
    expect(meta(html, 'property', 'og:description')).toBe(meta(html, 'name', 'description'))
    expect(meta(html, 'property', 'og:image')).toBe(`${SITE}og.png`)
    expect(meta(html, 'property', 'og:image:width')).toBe('1200')
    expect(meta(html, 'property', 'og:image:height')).toBe('630')
    expect(meta(html, 'property', 'og:image:alt')).toBeTruthy()
    expect(meta(html, 'name', 'twitter:card')).toBe('summary_large_image')
    expect(meta(html, 'name', 'twitter:image')).toBe(`${SITE}og.png`)
  })

  it('makes no Claim in the description that is not on the page', () => {
    const text = readPageText().toLowerCase()
    for (const piece of meta(html, 'name', 'description').split(/\. |, |\.$/).filter(Boolean)) {
      expect(text).toContain(piece.toLowerCase())
    }
  })

  it('uses the --bg token colours for theme-color, light and dark', () => {
    expect(html).toContain('<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">')
    expect(html).toContain('<meta name="theme-color" content="#0d0b14" media="(prefers-color-scheme: dark)">')
  })
})

// Keys whose values are identifiers or machine-readable codes, not copy.
const MACHINE_KEYS = new Set(['url', 'image', 'sameAs', 'email', 'addressCountry'])

function copyStrings(node, out = []) {
  if (Array.isArray(node)) node.forEach((n) => copyStrings(n, out))
  else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) if (!k.startsWith('@') && !MACHINE_KEYS.has(k)) copyStrings(v, out)
  } else if (typeof node === 'string') out.push(node)
  return out
}

describe('JSON-LD', () => {
  let graph
  beforeAll(() => {
    const blocks = [...readPage().matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    expect(blocks).toHaveLength(1)
    const data = JSON.parse(blocks[0][1])
    expect(data['@context']).toBe('https://schema.org')
    graph = data['@graph']
  })

  it('describes the Person with GitHub and LinkedIn as sameAs', () => {
    const person = graph.find((n) => n['@type'] === 'Person')
    expect(person).toMatchObject({
      name: 'Valerio Farrotti',
      jobTitle: 'Freelance backend developer',
      email: 'mailto:valerio@farrotti.com',
      url: SITE,
      sameAs: ['https://github.com/vallops99', 'https://linkedin.com/in/valerio-farrotti'],
    })
  })

  it('describes the ProfessionalService: three engagement types, remote from Italy (CET), English and Italian', () => {
    const service = graph.find((n) => n['@type'] === 'ProfessionalService')
    const person = graph.find((n) => n['@type'] === 'Person')
    expect(service.founder).toEqual({ '@id': person['@id'] })
    expect(service.address).toEqual({ '@type': 'PostalAddress', addressCountry: 'IT' })
    expect(service.availableLanguage).toEqual(['English', 'Italian'])
    expect(service.description).toContain('Remote, based in Italy (CET)')
    expect(service.hasOfferCatalog.itemListElement.map((o) => o.itemOffered.name)).toEqual([
      'Build a new backend',
      'Scale or rework an existing system',
      'Set up delivery and operations',
    ])
  })

  // The page names no Client, so copy taken only from the page names none either.
  it('makes no Claim that is not on the page', () => {
    const text = readPageText()
    for (const s of copyStrings(graph)) expect(text).toContain(s)
  })
})

describe('crawler files', () => {
  it('serves robots.txt with content signals and the sitemap', () => {
    const robots = readBuilt('robots.txt')
    expect(robots).toMatch(/^User-agent: \*$/m)
    expect(robots).toMatch(/^Content-Signal: search=yes, ai-input=yes, ai-train=no$/m)
    expect(robots).toMatch(/^Allow: \/$/m)
    expect(robots).toMatch(new RegExp(`^Sitemap: ${SITE}sitemap.xml$`, 'm'))
  })

  it('serves a sitemap listing the home page', () => {
    const sitemap = readBuilt('sitemap.xml')
    expect(sitemap).toMatch(/^<\?xml version="1.0" encoding="UTF-8"\?>/)
    expect(sitemap).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    expect([...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1])).toEqual([SITE])
  })

  it('serves a 1200×630 PNG as the OG image', () => {
    const png = readBuilt('og.png', null)
    expect(png.subarray(0, 8)).toEqual(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
    expect([png.readUInt32BE(16), png.readUInt32BE(20)]).toEqual([1200, 630])
  })
})

describe('llms.txt', () => {
  let llms
  beforeAll(() => {
    llms = readBuilt('llms.txt')
  })

  it('opens with the name and a one-line summary', () => {
    expect(llms).toMatch(/^# Valerio Farrotti\n\n> Freelance backend developer\n/)
  })

  it('covers the offer, every Case study and how to get in touch', () => {
    for (const heading of ['## How I can help', '## Case studies', '## Contact']) expect(llms).toContain(`\n${heading}\n`)
    for (const c of caseStudies) expect(llms).toMatch(new RegExp(`^### .*${c.client.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'm'))
    expect(llms).toContain(contact.email)
    for (const link of contact.links) expect(llms).toContain(`[${link.label}](${link.href})`)
  })

  // Labels that structure the file and are not Claims.
  const LABELS = new Set(['Case studies', 'Tech', 'Status'])

  it('makes no Claim that is not on the page', () => {
    const text = readPageText()
    for (const line of llms.split('\n')) {
      const plain = line
        .replace(/^(#+|>|-) /, '')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/\*\*/g, '')
      for (const piece of plain.split(/: | · /).filter(Boolean)) {
        if (!LABELS.has(piece)) expect(text, line).toContain(piece)
      }
    }
  })
})
