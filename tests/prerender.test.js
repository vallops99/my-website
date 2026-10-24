import { beforeAll, describe, expect, it } from 'vitest'
import { readPage } from './helpers.js'

describe('prerendered index.html', () => {
  let page
  beforeAll(() => {
    page = readPage()
  })

  it('has a non-empty #root and preloads the WOFF2', () => {
    expect(page).toMatch(/<div id="root"><[a-z]/)
    expect(page).toMatch(/<link rel="preload" href="\/assets\/[^"]+\.woff2" as="font" type="font\/woff2" crossorigin>/)
  })

  it('hard-codes no year in the footer', () => {
    expect(page.match(/<footer[\s\S]*?<\/footer>/)[0]).not.toMatch(/\b(19|20)\d{2}\b|©/)
  })

  it('contains the Hero copy', () => {
    for (const text of [
      'Open to new freelance projects',
      'Freelance backend developer',
      'Valerio Farrotti, passionate about open source and Bitcoin.',
      'Building backend systems professionally since 2018',
      'Tell me about your project',
      'See my work →',
      'Within two working days',
      'valerio@farrotti.com',
    ]) {
      expect(page).toContain(text)
    }
  })

  it('contains the Contact copy', () => {
    for (const text of [
      "Tell me what you're building",
      'A few lines about the problem are enough. I reply within two working days.',
      'mailto:valerio@farrotti.com',
      'https://github.com/vallops99',
      'https://linkedin.com/in/valerio-farrotti',
      'Resume (PDF)',
    ]) {
      expect(page).toContain(text)
    }
  })

  it('has the section ids the nav points to', () => {
    for (const id of ['help', 'more-work', 'skills', 'contact']) {
      expect(page).toContain(`id="${id}"`)
    }
  })

  it('does not load Inter from Google Fonts', () => {
    expect(page).not.toContain('fonts.googleapis.com')
  })
})
