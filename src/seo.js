// Machine-readable copies of the page for search engines and agents (#15), built from
// content.js at build time so they can only repeat Claims the page already makes.
import { caseStudies, contact, facts, hero, offer } from './content.js';

export const SITE = 'https://valerio.farrotti.com/';

const NAME = 'Valerio Farrotti';
const profiles = (...labels) => contact.links.filter((l) => labels.includes(l.label)).map((l) => l.href);

// schema.org Person and ProfessionalService, as one @graph.
export function jsonLd() {
  const person = {
    '@type': 'Person',
    '@id': `${SITE}#person`,
    name: NAME,
    jobTitle: hero.title,
    url: SITE,
    email: `mailto:${contact.email}`,
    sameAs: profiles('GitHub', 'LinkedIn'),
  };
  const service = {
    '@type': 'ProfessionalService',
    '@id': `${SITE}#service`,
    name: NAME,
    url: SITE,
    email: `mailto:${contact.email}`,
    image: `${SITE}og.png`,
    description: offer.terms,
    founder: { '@id': person['@id'] },
    address: { '@type': 'PostalAddress', addressCountry: 'IT' },
    availableLanguage: ['English', 'Italian'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: offer.heading,
      itemListElement: offer.types.map((t) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: t.title, description: t.lede },
      })),
    },
  };
  return { '@context': 'https://schema.org', '@graph': [person, service] };
}

// The JSON-LD as a <script> tag, with `<` escaped so the JSON cannot close it.
export function jsonLdScript() {
  return `<script type="application/ld+json">${JSON.stringify(jsonLd()).replace(/</g, '\\u003c')}</script>`;
}

const caseLink = (slug) => `${SITE}#case-${slug}`;

// llms.txt (https://llmstxt.org/): the offer, the Case studies and how to get in touch, in Markdown.
// Every line is page copy; only "Case studies", "Tech" and "Status" are added as labels.
export function llmsTxt() {
  const lines = [`# ${NAME}`, '', `> ${hero.title}`, '', hero.lead, '', hero.description, '', hero.badge, ''];
  lines.push(...facts.map((f) => `- ${f.label}: ${f.value}`), '');

  lines.push(`## ${offer.heading}`, '');
  for (const t of offer.types) {
    const study = caseStudies.find((c) => c.slug === t.caseSlug);
    const where = t.linkLabel ? t.cites : study.client;
    lines.push(`### ${t.title}`, '', t.tagline, '', t.lede, '', ...t.bullets.map((b) => `- ${b}`), '');
    lines.push(`Where I did this: [${where}](${caseLink(study.slug)})`, '');
  }
  lines.push(offer.terms, '', offer.agents, '');

  lines.push('## Case studies', '');
  for (const c of caseStudies) {
    lines.push(`### ${c.href ? `[${c.client}](${c.href})` : c.client}`, '', c.context, '');
    if (c.status) lines.push(`Status: ${c.status}`, '');
    lines.push(c.lead, '');
    if (c.supporting.length > 0) lines.push(...c.supporting.map((s) => `- ${s}`), '');
    lines.push(`Tech: ${c.tech.join(' · ')}`, '');
  }

  lines.push('## Contact', '', contact.heading, '', contact.body, '', `- Email: ${contact.email}`);
  lines.push(...contact.links.map((l) => `- [${l.label}](${l.href})`));
  return `${lines.join('\n')}\n`;
}
