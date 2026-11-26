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
  decisions: Decision[];
  seoTitle: string;
  seoDescription: string;
};

/**
 * Facts only. No metrics, no dates and no claims that are not confirmed.
 * Open questions are tracked in TODO.md, never rendered on the page.
 */
export const projects: Project[] = [
  {
    slug: 'serva',
    index: '01',
    name: 'Serva',
    kicker: 'Legal technology · Process serving · Canada',
    tagline: 'From an instruction email to a sworn affidavit on one governed record.',
    summary:
      "Serva is process-serving software for Canadian agencies, delivered through A'sTechware. Intake reads instruction emails and court PDFs, an affidavit is assembled from recorded field facts, and billing is derived from logged attempts.",
    role: 'Backend engineer',
    scope: 'Intake · Data model · Document assembly',
    current: true,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Mailgun'],
    cardStack: ['Python', 'FastAPI', 'PostgreSQL'],
    external: { label: 'serva.legal', href: 'https://serva.legal/' },
    sections: [
      {
        title: 'The product',
        paragraphs: [
          'A process server receives an instruction by email with court documents attached, serves them, records what happened at the door, and later swears an affidavit describing it. Serva covers that chain — intake, assignment, field attempts, proof of service and billing — on one record instead of an inbox, a spreadsheet and a folder.',
          'The output is a legal document that a commissioner signs and a court files. Facts cannot be reconstructed later, so everything downstream has to be assembled from what was actually recorded.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'Intake facts already sat in the covering email and its attachments, but someone re-keyed them into a form. At the other end, the affidavit asked a fixed list of questions that lived in the frontend, so a new court or a reworded form meant editing components and shipping code.',
          'The fix had to be structural: one intake record, and one definition of what a question means, shared by the form that asks it and the document that swears to it.',
        ],
      },
      {
        title: 'The record model',
        paragraphs: [
          'The record has five levels — File, Cases, Documents, Jobs, Attempts — because a matter can carry more than one court file, a claim can name several defendants, one defendant can have several addresses, and each address can take several visits.',
        ],
        bullets: [
          'Attempts are append-only. A correction is a compensating entry and the original stays visible, because the affidavit rests on that record.',
          'Billing prices attempts, mileage and disbursements against an effective-dated catalogue, so a later rate change does not rewrite a closed file.',
          'Public verification issues a per-document ID so a third party can confirm what was signed, when, and by whom, without an account.',
        ],
      },
      {
        title: 'Intake and extraction',
        paragraphs: [
          'Mail arrives through a Mailgun inbound webhook and is stored before any model runs. A classification step sorts the message into new request, quote request, client update or spam. Extraction then proposes a structured file from the body and the court PDFs — firm, court, file number, parties, targets, addresses and documents — with a confidence value per field.',
        ],
        bullets: [
          'Messages above a configured threshold can be approved automatically; the rest wait in a review queue before any record is created.',
          'A classifier failure is routed to review rather than treated as spam.',
          'Approved intake creates the file, case and job records from the extracted values.',
        ],
      },
      {
        title: 'Questions as data, not frontend code',
        paragraphs: [
          'Field capture used to be static frontend code: every service method had a hardcoded list of questions. It is now driven by a capture profile, a versioned JSON document that declares the outcome options, the questions each method asks, their widgets, which answers are required, and when a question appears.',
          'Both sides read the same definition. The backend publishes the profile and serves the resolved version for a job; the frontend renders whatever it describes.',
        ],
        bullets: [
          'Published profiles are immutable: a change is a new file with a new reference, and a profile can extend a pinned base to add or reword fields.',
          'Every attempt stores the profile reference it was captured under, so older answers are still read by the definition in force at the time.',
          'A job spanning courts with different profiles captures against a composite reference built from the pinned parts.',
          'The affidavit side is declarative too: a routing file maps court, method and jurisdiction to a form, and binding files map stable fact paths to PDF fields. A missing fact clears the field and raises a warning rather than being guessed.',
        ],
      },
      {
        title: 'My role',
        paragraphs: [
          "I am the main backend lead on Serva, working through A'sTechware. My work includes code reviews and backend optimisation.",
        ],
      },
    ],
    decisions: [
      {
        title: 'Triage before extraction',
        body: 'Classification is a short call; extraction is the costly one. Sorting first means the heavier model only runs on mail that is an instruction rather than on every newsletter and out-of-office reply.',
      },
      {
        title: 'A classifier failure is not spam',
        body: 'If the classifier errors, the message goes to review. Filing it as spam would drop a real instruction silently, which costs more than a noisy queue.',
      },
      {
        title: 'Automatic where safe, reviewed where not',
        body: 'Extraction writes a proposed record. Above a configured threshold it can be approved automatically; otherwise it waits in review, and an incomplete extraction does not auto-approve.',
      },
      {
        title: 'A published profile is immutable',
        body: 'Changing a question means publishing a new version, not editing the old one. Attempts keep the reference they were captured under, so history stays interpretable.',
      },
      {
        title: 'Missing facts are cleared, not invented',
        body: 'In affidavit assembly a missing source clears the field and raises a warning. A blank the reviewer has to fill is recoverable; a guess inside a sworn document is not.',
      },
      {
        title: 'Append-only field records',
        body: 'A sworn document rests on the attempt record, so the attempt cannot be edited. Corrections are compensating entries and the original stays visible.',
      },
    ],
    seoTitle: 'Serva — intake and data-driven affidavit capture | Ahsan Tariq',
    seoDescription:
      "Case study: backend work on a legal-technology platform with a Mailgun intake pipeline, per-field confidence, and versioned capture profiles shared by the form and the affidavit. Delivered through A'sTechware.",
  },
  {
    slug: 'restaurant-resource',
    index: '02',
    name: 'Restaurant Resource',
    kicker: 'Marketplace · Directory',
    tagline: 'Search that stays fast while the ranking has to respect subscription tiers.',
    summary:
      "An online directory and marketplace for restaurants, built with React, Ruby on Rails, PostgreSQL and Elasticsearch. I am the main backend lead on the project, with code reviews and optimisation across the backend.",
    role: 'Backend engineer',
    scope: 'Search · Subscriptions · Background indexing',
    current: true,
    stack: ['React', 'Ruby on Rails', 'PostgreSQL', 'Elasticsearch', 'Redis'],
    cardStack: ['Rails', 'Elasticsearch', 'PostgreSQL'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          'The platform lists vendors across categories, with a dedicated page per vendor, filters for category and service type, and a subscription system that lets vendors upgrade, downgrade, add features and renew. Many listings are pre-created from curated and generated data, then claimed by the vendor who owns them.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'A marketplace loses in two directions at once. A slow search page loses buyers; a naive sort by subscription tier loses relevance and makes the directory feel broken. The ranking has to be commercially weighted and still correct across pagination, filters and category pages.',
          'The second problem was less visible: N+1 queries on listing pages and search results, where each rendered vendor triggered extra lookups for categories, media and subscription state.',
        ],
      },
      {
        title: 'How the search layer works',
        bullets: [
          'The index mapping is designed around the query shape rather than mirroring the database: fields needed for ranking and filtering are denormalised into the document, so a search request does not need a join.',
          'Relevance and tier weighting are applied inside the search query rather than by sorting the result set in Rails, because sorting after fetching breaks pagination.',
          'Indexing runs through background jobs, so a write to a listing does not block on a search-cluster round trip.',
          'Listing rendering uses preloaded associations and batched lookups for subscription and media data.',
          'Database indexes support the predicates the detail and claim flows use.',
        ],
      },
      {
        title: 'My role',
        paragraphs: [
          "I am the main backend lead on Restaurant Resource, working through A'sTechware. My work includes code reviews and optimisation of backend queries.",
        ],
      },
    ],
    decisions: [
      {
        title: 'Rank in the index, paginate on the result',
        body: 'A tier boost applied after fetching results cannot produce correct pages. The boost belongs in the scoring function, so the first page the user sees is already the ranked first page.',
      },
      {
        title: 'Denormalise what you sort on',
        body: 'Sort and filter fields are copied into the search document. Normalisation is a database virtue; a search index is a read model and should look like one.',
      },
      {
        title: 'The index is a projection',
        body: 'PostgreSQL stays the source of truth. Anything in Elasticsearch is derived, rebuildable, and can be reindexed.',
      },
    ],
    seoTitle: 'Restaurant Resource — search and backend work | Ahsan Tariq',
    seoDescription:
      "Case study: backend work on a restaurant directory and marketplace — Elasticsearch index design, tier-weighted ranking inside the query and N+1 removal with Ruby on Rails and PostgreSQL. Delivered through A'sTechware.",
  },
  {
    slug: 'grants-hub',
    index: '03',
    name: 'The Grants Hub',
    kicker: 'SaaS · Grants discovery',
    tagline: 'Keeping grant search aligned with PostgreSQL.',
    summary:
      'The Grants Hub helps organisations discover, track and manage grants. Search runs on Algolia with PostgreSQL as the source of truth. I worked on the backend search layer, saved lists and the synchronisation between the two.',
    role: 'Backend engineer',
    scope: 'Search indexing · Saved lists · Sync',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Algolia', 'Redis', 'Celery'],
    cardStack: ['FastAPI', 'Algolia', 'PostgreSQL'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          'Grants carry deadlines, categories, funders and eligibility rules. Users search across them, filter, save a shortlist, and come back to it; organisations subscribe to the product to keep that pipeline.',
          'Search runs on Algolia, which means grant records exist twice: once in PostgreSQL as the system of record, and once as an index shaped for retrieval.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'The index is only correct if every write path updates it. When one does not, users do not report a stale index — they see an expired grant still appears in search.',
          'The second constraint was latency: an index update inside the request path makes every write as slow as the external search service.',
        ],
      },
      {
        title: 'Approach',
        bullets: [
          'The index schema is designed from the interface: searchable attributes ordered by intent, faceting attributes chosen to match the filters people use, and replica indices for the alternate sort orders.',
          'Grant updates are indexed in the background after the database commit. Failed indexing tasks are retried, and reconciliation checks help identify mismatches.',
          'Sync tasks are keyed by database ID, so a repeated task updates the same record rather than adding a copy.',
          'Partial attribute updates are used for ordinary edits; the index is rebuilt when the mapping changes.',
          'Saved lists live in PostgreSQL with indexed join tables rather than in the search index.',
          'Deadline filters use explicit, timezone-safe boundaries, because "closes today" is a different query in every timezone.',
        ],
      },
      {
        title: 'My role',
        paragraphs: [
          "I worked on the backend search layer, the saved-list model and the indexing between PostgreSQL and Algolia, delivered through A'sTechware.",
        ],
      },
    ],
    decisions: [
      {
        title: 'The database is the source of truth',
        body: 'PostgreSQL owns the record and the index is a derived read model. When the two disagree, the index is rebuilt rather than patched by hand.',
      },
      {
        title: 'Index off the request path',
        body: 'Search writes go through the queue. Coupling a user-facing write to a third-party API makes availability someone else’s decision.',
      },
      {
        title: 'Saved lists are relational',
        body: 'A shortlist is user data with ordering and permissions. It belongs in tables with constraints, not in a search document designed to be disposed of.',
      },
    ],
    seoTitle: 'The Grants Hub — Algolia search and index synchronisation | Ahsan Tariq',
    seoDescription:
      "Case study: backend search for a grants SaaS — Algolia index design, background indexing after commit and saved lists in PostgreSQL. Delivered through A'sTechware.",
  },
  {
    slug: 'golfpay',
    index: '04',
    name: 'Golfpay',
    kicker: 'Golf operations · Payments',
    tagline: 'Managing concurrent tee-time bookings and payment events.',
    summary:
      'Golfpay runs tee times, memberships and payments for golf courses across web and mobile. I worked on it as an associate software engineer, mainly on bug fixing and query optimisation.',
    role: 'Backend engineer',
    scope: 'Availability · Bookings · Payments',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery'],
    cardStack: ['FastAPI', 'PostgreSQL', 'Redis'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          'Courses publish tee times for a day, players book them from the web or a phone, members hold recurring entitlements, and staff manage the sheet, check-ins and payments from an operational dashboard.',
          'Every one of those flows reads or writes the same scarce resource: a specific slot at a specific time on a specific course.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'Two players selecting the same slot at the same moment should not create two bookings. A payment provider that retries its webhook should not duplicate a payment event.',
          'Availability is also cached to keep the page fast, which adds a second place where slot state can be stale.',
        ],
      },
      {
        title: 'Approach',
        bullets: [
          'Availability queries are shaped around the tee sheet — one indexed range query per course and day, with slot state resolved from bookings and holds.',
          'Booking integrity is enforced in PostgreSQL with uniqueness on the slot and row-level locking around the booking steps.',
          "Payment events are processed idempotently using the provider's event ID.",
          'Availability is cached for a short period and invalidated when a booking is made.',
          'Reconciliation jobs help detect mismatches between the payment provider and the internal ledger.',
        ],
      },
      {
        title: 'My role',
        paragraphs: [
          "I worked on Golfpay from July 2024 to September 2025 as an associate software engineer at A'sTechware, mainly on bug fixing and query optimisation.",
        ],
      },
    ],
    decisions: [
      {
        title: 'Constraints hold under concurrency',
        body: 'An application-level check for a free slot is a race condition with extra steps. Uniqueness and row locks hold when two requests arrive at the same moment.',
      },
      {
        title: 'Payment events keyed by the provider ID',
        body: "A retried webhook is matched against the provider's event ID, so the same event is not applied twice.",
      },
      {
        title: 'Cache the read, not the truth',
        body: 'Availability is a cached projection with a short life. The booking decision goes to the database.',
      },
    ],
    seoTitle: 'Golfpay — concurrent bookings and payment events | Ahsan Tariq',
    seoDescription:
      "Case study: backend work on a golf operations and payments platform — tee-sheet availability queries, booking integrity in PostgreSQL and idempotent payment events. Delivered through A'sTechware.",
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
