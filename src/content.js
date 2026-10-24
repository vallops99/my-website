// All site copy. Decisions: #1, #4, #5, #6 and #8 on vallops99/my-website.

export const nav = [
  { href: '#help', label: 'How I can help' },
  { href: '#more-work', label: 'More work' },
  { href: '#skills', label: 'What I work with' },
  { href: '#contact', label: 'Contact' },
];

export const hero = {
  badge: 'Open to new freelance projects',
  title: 'Freelance backend developer',
  lead: 'Valerio Farrotti, passionate about open source and Bitcoin.',
  description:
    'Building backend systems professionally since 2018: APIs, data models and the pipelines that ship them. CI/CD automation and simplicity.',
  primary: { href: '#contact', label: 'Tell me about your project' },
  secondary: { href: '#help', label: 'See my work →' },
};

export const contact = {
  heading: "Tell me what you're building",
  body: 'Open to new freelance projects. A few lines about the problem are enough. I reply within two working days.',
  email: 'valerio@farrotti.com',
  links: [
    { href: 'https://github.com/vallops99', label: 'GitHub' },
    { href: 'https://linkedin.com/in/valerio-farrotti', label: 'LinkedIn' },
    { href: 'https://farrotti.com/resume.pdf', label: 'Resume (PDF)' },
  ],
};

// The "at a glance" card in the Hero. The Email row is added from `contact.email`.
export const facts = [
  { label: 'Where', value: 'Remote, based in Italy (CET)' },
  { label: 'Languages', value: 'English & Italian' },
  { label: 'Experience', value: 'Professionally since 2018' },
  { label: 'Engagements', value: 'Fixed-scope or ongoing, direct or through your agency' },
  { label: 'Reply time', value: 'Within two working days' },
];

// Ids and h2s of the sections that are not driven by their own content object.
export const sections = {
  moreWork: { id: 'more-work', heading: 'More work' },
  skills: { id: 'skills', heading: 'What I work with' },
};

// "How I can help" (#13). Terms and agents lines close the section.
export const offer = {
  heading: 'How I can help',
  types: [
    {
      title: 'Build a new backend',
      tagline: 'From blank repo to production',
      lede: 'APIs, data model and auth designed together, with tests from day one.',
      bullets: [
        'API design (REST, gRPC, OpenAPI)',
        'Modular, layered architecture',
        'Data models and database-backed workflows',
        'Authentication and secrets management (OAuth/JWT, token verification, Vault)',
      ],
      cites: 'Subscription and billing service at a regulated crypto fintech',
      caseSlug: 'crypto-fintech',
    },
    {
      title: 'Scale or rework an existing system',
      tagline: 'Without stopping it',
      lede: 'Take a service that has outgrown itself and make it run as many instances.',
      bullets: ['Fault-tolerant, horizontally scalable services', 'Event-driven and async processing (Kafka, Redis)'],
      cites: 'Multi-instance job scheduler for an industrial-automation Client',
      caseSlug: 'industrial-scheduler',
    },
    {
      title: 'Set up delivery and operations',
      tagline: 'Ship often, sleep well',
      lede: 'Pipelines, clusters and alerts, so releases are boring.',
      bullets: [
        'Automated testing, build and deployment pipelines',
        'Kubernetes, GitOps and Serverless Framework',
        'Metrics and alerting (Prometheus/Grafana)',
      ],
      cites: 'Kubernetes/GitOps delivery platform at a regulated crypto fintech',
      caseSlug: 'crypto-fintech',
      linkLabel: 'a regulated crypto fintech engagement above',
    },
  ],
  terms:
    'Remote, based in Italy (CET) · English & Italian · Fixed-scope projects or ongoing work, direct or through your agency.',
  agents: 'I work with coding agents, and I design, review and own everything they write.',
};

// Case studies, in the order they are numbered on the page.
export const caseStudies = [
  {
    slug: 'crypto-fintech',
    client: 'A regulated crypto fintech',
    context: 'Used daily by hundreds of end users',
    lead: 'Designed and built the subscription and recurring-billing service: plans, renewals, promotions and payment events.',
    supporting: [
      'A compliant crypto-withdrawal flow with travel-rule validation',
      'A Kubernetes/GitOps delivery platform (multi-environment, service mesh, canary releases) for new Go services',
    ],
    tech: ['Python', 'Go', 'REST / OpenAPI', 'gRPC', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Serverless Framework', 'Docker', 'Kubernetes', 'ArgoCD / GitOps', 'Nix', 'Jenkins', 'Prometheus / Grafana', 'Vault'],
  },
  {
    slug: 'industrial-scheduler',
    client: 'An industrial-automation Client',
    context: 'Team work',
    lead: 'Rewrote the job scheduler to run as multiple stateless instances: a database row-lock state machine and a lease-based deadline sweeper. Two instances run today and it scales on command.',
    supporting: ['Nested parallel groups, shipped end to end across engine, API and editor UI'],
    tech: ['Java & Spring Boot', 'Oracle', 'RabbitMQ', 'TypeScript & React', 'Docker', 'Nix'],
  },
  {
    slug: 'production-line-inspection',
    client: 'A production-line inspection Client',
    context: 'Team work over 16 months',
    lead: 'Real-time computer-vision inspection of a live production line: a multi-process pipeline, backend error checking and CAD-based flaw detection, in production.',
    supporting: ['Automated per-session production reports from time-series data (sole author, in production)'],
    tech: ['Python', 'Computer vision (OpenCV)', 'InfluxDB', 'Node.js', 'Vue', 'C#/.NET', 'Docker'],
  },
  {
    slug: 'tax-product',
    client: 'A tax-assistance product',
    context: 'Sole engineer',
    status: 'In delivery',
    lead: 'Building the product end to end: a Rust/Axum API and a Flutter app.',
    supporting: [
      'Secure sign-in: local Google/Facebook token verification, rotating sessions, one-time tokens',
      'A domain model for the Italian 730 tax-return lifecycle',
    ],
    tech: ['Rust (Axum, SQLx)', 'Flutter', 'PostgreSQL', 'OAuth/JWT', 'OpenAPI', 'Docker', 'Nix'],
  },
  {
    slug: 'ohomemy',
    client: 'OHomeMy',
    href: 'https://github.com/vallops99/OHomeMy',
    context: 'Open source',
    lead: 'A Home Assistant integration for building dashboards graphically, released through HACS and in active development.',
    supporting: [],
    tech: ['Python', 'TypeScript & React', 'Home Assistant (HACS)'],
  },
  {
    slug: 'conda-autoactivate-env',
    client: 'Conda-autoactivate-env',
    href: 'https://github.com/vallops99/Conda-autoactivate-env',
    context: 'Open source · 61★ · 7 forks',
    lead: 'Adds auto-activation of Conda environments on Unix shells. Outside contributions maintained since 2021.',
    supporting: [],
    tech: ['Shell (bash, zsh, Nushell)'],
  },
];

export const skills = {
  heading: 'What I work with',
  groups: [
    { name: 'Languages', chips: ['Python', 'Go', 'Rust'] },
    { name: 'APIs & auth', chips: ['REST', 'gRPC', 'OpenAPI', 'OAuth/JWT', 'Vault'] },
    { name: 'Data & messaging', chips: ['PostgreSQL', 'Redis', 'Kafka', 'RabbitMQ'] },
    {
      name: 'Cloud & delivery',
      chips: ['AWS (Lambda, API Gateway, S3)', 'Serverless Framework', 'Docker', 'Kubernetes (Helm, Kustomize)', 'ArgoCD / GitOps', 'Nix', 'Jenkins & CI pipelines', 'Prometheus / Grafana'],
    },
  ],
  alsoShippedLabel: 'Also shipped with',
  alsoShipped: ['TypeScript & React', 'Flutter', 'Java & Spring Boot', 'Node.js', 'Computer vision (OpenCV)', 'InfluxDB', 'Shell (bash, zsh, Nushell)'],
  coverage: 'Everything above is used in at least one Case study.',
  handsOn: {
    title: 'Hands-on with',
    subtitle: 'from personal projects and experiments',
    items: ['Django', 'Zig', 'OpenTelemetry', 'ClickHouse'],
  },
  contributions: {
    label: 'Open-source contributions',
    items: [
      { text: 'Bitcoin Core RPC client for walle (Zig Bitcoin wallet)', href: 'https://github.com/iskyd/walle/pull/4' },
      { text: 'transaction broadcasting for walle', href: 'https://github.com/iskyd/walle/pull/10' },
      { text: 'docs for devbox', href: 'https://github.com/jetify-com/devbox/pull/2074' },
    ],
  },
};

export const footer = {
  text: 'Valerio Farrotti. Built with React and Coding Agents.',
  source: { href: 'https://github.com/vallops99/my-website', label: 'See the source code on GitHub' },
};
