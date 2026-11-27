export type Decision = { title: string; body: string };
export type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  tagline: string;
  summary: string;
  role: string;
  scope: string;
  current?: boolean;
  hidden?: boolean;
  stack: string[];
  cardStack: string[];
  external?: { label: string; href: string };
  sections: Section[];
  whatIDid?: string[];
  skills?: string;
  decisions?: Decision[];
  seoTitle: string;
  seoDescription: string;
};

/**
 * Facts only. No metrics and no internal product details.
 * Open questions are tracked in TODO.md, never rendered on the page.
 */
export const projects: Project[] = [
  {
    slug: 'serva',
    index: '01',
    name: 'Serva',
    kicker: 'Legal technology · Process serving · Canada',
    tagline: 'Process-serving software for Canadian agencies.',
    summary:
      "Serva is process-serving software for Canadian agencies, delivered through A'sTechware. I work on the FastAPI backend as the main backend lead.",
    role: 'Backend lead',
    scope: 'Backend · Code review · Team leadership',
    current: true,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Next.js'],
    cardStack: ['Python', 'FastAPI', 'PostgreSQL'],
    external: { label: 'serva.legal', href: 'https://serva.legal/' },
    sections: [
      {
        title: 'Context',
        paragraphs: [
          "Serva is process-serving software for Canadian agencies, delivered through A'sTechware.",
        ],
      },
    ],
    whatIDid: [
      "Main backend lead on the FastAPI backend, working through A'sTechware.",
      'Code reviews and backend optimisation.',
      'Lead the work on Serva as team lead since June 2026.',
    ],
    skills: 'Python, FastAPI, PostgreSQL, Redis, code review, team leadership.',
    seoTitle: 'Serva — backend work on process-serving software | Ahsan Tariq',
    seoDescription:
      "Case study: main backend lead on Serva's FastAPI backend, including code reviews and optimisation. Delivered through A'sTechware.",
  },
  {
    slug: 'restaurant-resource',
    index: '02',
    name: 'Restaurant Resource',
    kicker: 'Marketplace · Directory',
    tagline: 'Search that stays fast while subscription tiers are respected.',
    summary:
      "An online directory and marketplace for restaurants, delivered through A'sTechware. I am the main backend lead, including code reviews.",
    role: 'Backend lead',
    scope: 'Search · Query optimisation · Code review',
    current: true,
    stack: ['Ruby on Rails', 'PostgreSQL', 'Elasticsearch', 'Next.js'],
    cardStack: ['Rails', 'Elasticsearch', 'PostgreSQL'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          "An online directory and marketplace for restaurants, delivered through A'sTechware.",
        ],
      },
    ],
    whatIDid: [
      'Main backend lead, including code reviews.',
      'Search was slow even with database indexing; I implemented Elasticsearch, which brought responses down to milliseconds.',
      'Removed N+1 queries on listing and search pages.',
      'Built tier-weighted ranking so subscription tiers are respected in search results.',
      'Built background indexing jobs so writes do not wait on the search cluster.',
    ],
    skills:
      'Ruby on Rails, PostgreSQL, Elasticsearch, query optimisation, background jobs, code review.',
    seoTitle: 'Restaurant Resource — Elasticsearch search and backend work | Ahsan Tariq',
    seoDescription:
      "Case study: main backend lead on a restaurant directory and marketplace — Elasticsearch search, N+1 removal, tier-weighted ranking and background indexing. Delivered through A'sTechware.",
  },
  {
    slug: 'grants-hub',
    index: '03',
    name: 'The Grants Hub',
    kicker: 'SaaS · Grants discovery',
    tagline: 'Algolia search on a Rails and PostgreSQL backend.',
    summary:
      'The Grants Hub helps organisations discover, track and manage grants. I implemented Algolia search on the Rails and PostgreSQL backend.',
    role: 'Backend engineer',
    scope: 'Algolia search',
    stack: ['Ruby on Rails', 'PostgreSQL', 'Algolia'],
    cardStack: ['Rails', 'Algolia', 'PostgreSQL'],
    sections: [
      {
        title: 'Context',
        paragraphs: ['The Grants Hub helps organisations discover, track and manage grants.'],
      },
    ],
    whatIDid: ['Implemented Algolia search on the Rails and PostgreSQL backend.'],
    skills: 'Ruby on Rails, PostgreSQL, Algolia.',
    seoTitle: 'The Grants Hub — Algolia search | Ahsan Tariq',
    seoDescription:
      "Case study: implementing Algolia search on the Rails and PostgreSQL backend of a grants discovery platform.",
  },
  {
    slug: 'golfpay',
    index: '04',
    name: 'Golfpay',
    kicker: 'Golf operations · Payments',
    tagline: 'Faster slot APIs and precomputed reports for golf courses.',
    summary:
      "Tee times, memberships and payments for golf courses, delivered through A'sTechware. I worked on the backend as an associate software engineer from July 2024 to September 2025.",
    role: 'Associate Software Engineer',
    scope: 'API performance · Reporting · Waitlist',
    stack: ['Ruby on Rails', 'PostgreSQL', 'ERB with Slim', 'StimulusReflex', 'ActionCable'],
    cardStack: ['Rails', 'PostgreSQL', 'StimulusReflex'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          "Tee times, memberships and payments for golf courses, delivered through A'sTechware.",
        ],
      },
    ],
    whatIDid: [
      'Cut the daily slots API from about 7–12 seconds to about 2–3 seconds by merging two nested loops into one and removing database calls inside loops with eager loading.',
      'Built nightly background jobs that precompute daily, weekly, monthly and yearly reports; report queries went from seconds to milliseconds.',
      'Built a waitlist feature on tee-time slots that are calculated from course settings (day start and end, slot duration, admin blocks) rather than stored, handling cases such as blocked times and cancellations, and added caching to keep slot calculation fast.',
    ],
    skills:
      'Ruby on Rails, PostgreSQL, query optimisation, caching, background jobs, ERB/Slim, StimulusReflex, ActionCable.',
    seoTitle: 'Golfpay — API performance and reporting | Ahsan Tariq',
    seoDescription:
      "Case study: cutting a daily slots API from 7–12 seconds to 2–3 seconds, precomputing reports and building a slot waitlist. Delivered through A'sTechware.",
  },
  {
    // Hidden from lists and routes until the case study is revised. Keep the file.
    slug: 'warco',
    index: '05',
    name: 'Warco',
    kicker: 'Warehouse & construction operations',
    tagline: 'Replacing a spreadsheet with a ledger that can be audited.',
    summary:
      'Warco tracks materials, inventory and jobs for a construction business, replacing spreadsheet-driven stock tracking with recorded movements and job consumption.',
    role: 'Backend engineer',
    scope: 'Inventory ledger · Job consumption · Reporting',
    hidden: true,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis'],
    cardStack: ['FastAPI', 'PostgreSQL', 'Celery'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          'Materials arrive at sites, get consumed by jobs, sometimes come back, and occasionally turn out to have been miscounted. The office needs two answers: what do we have, and what did this job cost.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'A spreadsheet allows any number in any cell. Inventory needs current stock to be derivable from recorded events, with every change attributable to a person, a job and a time.',
        ],
      },
      {
        title: 'Approach',
        bullets: [
          'An append-only movement ledger — receipts, issues, transfers, returns, adjustments — with on-hand stock as an aggregate over movements rather than a mutable counter.',
          'Job consumption written transactionally across multiple lines.',
          'A CSV import pipeline that validates and reports bad rows instead of coercing them.',
          'Reporting queries built as pre-aggregated views over the ledger, indexed on item, site and date.',
        ],
      },
    ],
    decisions: [
      {
        title: 'Ledger over counters',
        body: 'A counter records what someone believes. A movement ledger records why, which is what makes a stock number auditable.',
      },
      {
        title: 'Corrections are entries',
        body: 'A mistake is fixed by an adjustment with a reason, not by editing history.',
      },
    ],
    seoTitle: 'Warco — inventory and job costing backend | Ahsan Tariq',
    seoDescription:
      "Case study: inventory and job-costing backend work for a construction business. Delivered through A'sTechware.",
  },
];

/** Projects that are published: shown in lists, built as pages, included in the sitemap. */
export const visibleProjects = projects.filter((project) => !project.hidden);

export const getProject = (slug: string): Project | undefined =>
  visibleProjects.find((project) => project.slug === slug);

export const projectNeighbours = (slug: string) => {
  const i = visibleProjects.findIndex((project) => project.slug === slug);
  return {
    previous: i > 0 ? visibleProjects[i - 1] : visibleProjects[visibleProjects.length - 1],
    next: i < visibleProjects.length - 1 ? visibleProjects[i + 1] : visibleProjects[0],
  };
};
