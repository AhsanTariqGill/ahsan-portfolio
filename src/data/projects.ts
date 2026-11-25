export type Metric = { label: string; value: string };
export type Decision = { title: string; body: string };
export type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  tagline: string;
  summary: string;
  role: string;
  period: string;
  scope: string;
  current?: boolean;
  stack: string[];
  cardStack: string[];
  external?: { label: string; href: string };
  sections: Section[];
  decisions: Decision[];
  metrics: Metric[];
  seoTitle: string;
  seoDescription: string;
};

/**
 * PLACEHOLDER CONVENTION
 * ⟨ ... ⟩ marks a value only you can supply (a number, a course title, a scope
 * confirmation). Every placeholder is rendered in a highlighted chip so it is
 * impossible to publish by accident. Search the repo for "⟨" before deploying.
 */
export const projects: Project[] = [
  {
    slug: 'serva',
    index: '01',
    name: 'Serva',
    kicker: 'Legal tech · Process serving · Canada',
    tagline: 'From an instruction email to a sworn affidavit on one governed record.',
    summary:
      'Serva is process-serving software for Canadian agencies. I lead the backend: the five-level record model, the AI intake pipeline that turns emails and court PDFs into structured files, affidavit assembly, and the billing engine that turns logged attempts into invoices.',
    role: 'Lead Backend Engineer',
    period: 'Present ⟨start date⟩',
    scope: 'Data model · Intake pipeline · Document assembly · Billing',
    current: true,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery'],
    cardStack: ['Python', 'FastAPI', 'PostgreSQL'],
    external: { label: 'serva.legal', href: 'https://serva.legal/' },
    sections: [
      {
        title: 'The product',
        paragraphs: [
          'A process server receives an instruction by email with court documents attached, serves them, records what happened at the door, and later swears an affidavit describing it. Serva covers that whole chain — intake, assignment, field attempts, proof of service, billing — on a single record instead of an inbox, a spreadsheet, a folder and someone\'s memory.',
          'The design constraint is unusual for a SaaS product: the output is a legal document that a commissioner signs and a court files. Facts cannot be reconstructed later, and they cannot be inferred from a note or a photograph. Everything downstream has to be assembled from what was actually recorded in the field.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'Three failures were baked into the spreadsheet-and-inbox workflow. Intake facts already existed in the email and PDFs but were re-keyed by hand. Attempts lived in personal notes, so an affidavit was retyped from memory days later. And billing was reconstructed from a file after the fact, which meant an invoice could never be reproduced if a rate changed.',
          'The product had to keep the same data honest through all three: one structured intake, one immutable field record, one price history.',
        ],
      },
      {
        title: 'Architecture',
        paragraphs: [
          'The record model has five levels — File, Cases, Documents, Jobs, Attempts — because real matters do not fit a single job ticket: a matter can carry two court files, a claim can name four defendants, one defendant can have three addresses, and each address can take several visits.',
        ],
        bullets: [
          'Intake proposes a structured file from the covering email and attached court documents, with a confidence score per field. Nothing is written to the live record until a human approves it.',
          'Attempts are append-only. A correction is a new entry; the original stays visible, because the affidavit rests on that record.',
          'Affidavit assembly fills the court\'s own government PDF forms, routed by court, method of service and commissioning mode — the jurat changes when a deponent and commissioner are in different municipalities.',
          'Billing prices attempts, mileage and disbursements against an effective-dated fee catalogue, so raising rates today never rewrites a closed file from last year.',
          'Public verification issues a per-document ID; a third party can confirm what was signed, when, and by whom, without an account.',
        ],
      },
      {
        title: 'My contribution',
        paragraphs: [
          'I am the lead backend engineer and own the service end to end: schema and migrations, the API surface, background work, and the boundary between what the machine proposes and what a human approves.',
          '⟨Confirm the pieces you personally built and delete the rest: intake extraction pipeline · affidavit assembly and PDF rendering · billing engine · verification service · dispatch network. Add the split of team size and who else worked on the backend.⟩',
        ],
      },
    ],
    decisions: [
      {
        title: 'Append-only field records',
        body: 'A sworn document rests on the attempt record, so the attempt cannot be edited. Corrections are compensating entries and the original stays visible. Enforced in the database, not only in the UI.',
      },
      {
        title: 'Propose, then approve',
        body: 'Extraction writes to a staging shape rather than the live file. Confidence is stored per field, and auto-approval is off by default until the agency sets its own threshold — so a bad extraction costs a review, not a misfiled court document.',
      },
      {
        title: 'Ask, do not infer',
        body: 'If a fact that will be sworn is missing, the system requests it on the attempt instead of guessing from a note or a photo. A missing field is recoverable; a plausible guess in an affidavit is not.',
      },
      {
        title: 'Temporal pricing',
        body: 'Fee catalogues carry validity dates and invoices are priced as of the day the work was done. Reproducibility beats convenience: an old invoice must still compute to the same total.',
      },
      {
        title: 'Precision over recall on matching',
        body: 'Duplicate detection matches building and unit, so unit 4 never matches unit 7, and it stays silent when unsure. A false "you have been here before" costs more trust than a missed one.',
      },
    ],
    metrics: [
      { label: 'Extraction review rate (fields approved without edit)', value: '⟨ add measurement ⟩' },
      { label: 'Field-level extraction accuracy on a labelled sample', value: '⟨ add measurement ⟩' },
      { label: 'Time from service to signed affidavit', value: '⟨ add measurement ⟩' },
      { label: 'Invoice reconstruction time, before → after', value: '⟨ add measurement ⟩' },
    ],
    seoTitle: 'Serva — AI intake and affidavit assembly for process serving | Ahsan Tariq',
    seoDescription:
      'Case study: leading the backend of a legal-tech platform that turns instruction emails into structured files, immutable field records and court-form affidavits. Python, FastAPI, PostgreSQL, Celery.',
  },
  {
    slug: 'restaurant-resource',
    index: '02',
    name: 'Restaurant Resource',
    kicker: 'Marketplace · Directory',
    tagline: 'Search that stays fast while the ranking has to respect commercial tiers.',
    summary:
      'An online directory and marketplace for restaurants — suppliers, software, services and events in one place. I lead the team and own the product direction: what gets built, how vendors are ranked, and where the subscription model meets search relevance. The stack underneath is React, Rails, PostgreSQL and Elasticsearch.',
    role: 'Team Lead — product & vision',
    period: 'Present — current project',
    scope: 'Product vision · Team leadership · Ranking & subscriptions',
    current: true,
    stack: ['Ruby on Rails', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Background jobs'],
    cardStack: ['Rails', 'Elasticsearch', 'PostgreSQL'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          'The platform lists vendors across categories, with a dedicated page per vendor, filters for category and service type, and a subscription system that lets vendors upgrade, downgrade, add features and renew. Many listings are pre-created from curated and AI-generated data, then claimed by the vendor who owns them.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'A marketplace loses in two directions at once. A slow search page loses buyers; a naive "sort by subscription tier" loses relevance and makes the directory feel broken. The ranking has to be commercially weighted and still correct across pagination, filters and category pages.',
          'That is a product decision with an engineering consequence — which is where a product lead with a backend background is useful. The rule can be argued in a roadmap meeting; it only holds if the data model and the query are built to support it.',
          'The second problem was less visible: N+1 queries on listing pages and search results, where each rendered vendor triggered extra lookups for categories, media and subscription state.',
        ],
      },
      {
        title: 'How the search layer works',
        bullets: [
          'Index mapping designed around the query shape rather than mirroring the database: fields needed for ranking and filtering are denormalised into the document so a search request never needs a join.',
          'Relevance and tier weighting applied inside the search query rather than by sorting the result set in Rails. Sorting in the application breaks pagination — page 2 is computed from an already-truncated page 1.',
          'Async indexing through background jobs with retries, so a write to a listing never blocks on a search-cluster round trip and a failed index update is retried instead of silently dropped.',
          'Listing rendering reworked to preload associations and batch the subscription and media lookups, removing the per-card query pattern.',
          'Database indexes added on the predicates the detail and claim flows actually used — measured against query plans, not guessed.',
        ],
      },
      {
        title: 'My contribution',
        paragraphs: [
          'I lead the team and own the vision for the product: the roadmap, the vendor and subscription model, and the rules that decide which listings surface first. My background is backend, so I stay in the technical detail of those decisions — why the ranking belongs in the query, what the index has to denormalise, and where a claimed listing should stop looking pre-generated.',
          '⟨Confirm what you personally still write: backend code, reviews, architecture? Add the team size and when you moved from backend into the lead role.⟩',
        ],
      },
    ],
    decisions: [
      {
        title: 'Tier never overrides relevance',
        body: 'A paid listing can outrank a comparable match, but it cannot turn an irrelevant result into the first one. The boost is bounded, so the directory still reads as a search product rather than an ad slot.',
      },
      {
        title: 'Rank in the index, paginate on the result',
        body: 'A tier boost applied after fetching results cannot produce correct pages. The boost belongs in the scoring function, so the first page the user sees is already the ranked first page.',
      },
      {
        title: 'Denormalise what you sort on',
        body: 'Sort and filter fields are copied into the search document. Normalisation is a database virtue; a search index is a read model and should look like one.',
      },
      {
        title: 'Generated data needs provenance',
        body: 'Pre-created listings are machine-generated and human-curated before they are claimable. That makes the generation step part of the data pipeline: duplicates have to be found before the vendor does.',
      },
      {
        title: 'The index is a projection',
        body: 'PostgreSQL stays the source of truth. Anything in Elasticsearch is derived, rebuildable, and allowed to be thrown away and reindexed.',
      },
    ],
    metrics: [
      { label: 'Search p95 latency', value: '⟨ add measurement ⟩' },
      { label: 'Elasticsearch query time, before → after tuning', value: '⟨ add measurement ⟩' },
      { label: 'Queries per listing page render, before → after', value: '⟨ add measurement ⟩' },
      { label: 'Indexed listings / documents', value: '⟨ add measurement ⟩' },
    ],
    seoTitle: 'Restaurant Resource — product leadership and search relevance | Ahsan Tariq',
    seoDescription:
      'Case study: leading the team and product direction of a restaurant directory and marketplace — bounded tier ranking, Elasticsearch relevance, subscriptions and AI-seeded listings on React, Rails and PostgreSQL.',
  },
  {
    slug: 'grants-hub',
    index: '03',
    name: 'The Grants Hub',
    kicker: 'SaaS · Grants discovery',
    tagline: 'A search index that stays in step with the database it copies.',
    summary:
      'The Grants Hub helps organisations discover, track and manage grants. I worked on the backend search layer — Algolia for discovery, PostgreSQL as the source of truth — plus saved lists, subscription state and the synchronisation between the two.',
    role: 'Backend Engineer',
    period: "A'sTechware ⟨dates⟩",
    scope: 'Search indexing · Saved lists · Subscriptions · Sync pipeline',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Algolia', 'Redis', 'Celery'],
    cardStack: ['FastAPI', 'Algolia', 'PostgreSQL'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          'Grants carry deadlines, categories, funders and eligibility rules. Users search across them, filter, save a shortlist, and come back to it; organisations subscribe to the product to keep that pipeline.',
          'Search runs on Algolia, which means the grant records exist twice: once in PostgreSQL as the system of record, and once as an index that has been shaped for retrieval.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'A second copy of your data is a consistency problem wearing a performance costume. Search is fast precisely because it is duplicated; it drifts the moment a write path forgets to update it, and no user reports "the index is stale" — they report "the grant I saved is gone".',
          'The second constraint was latency budget: an index update inside the request path makes every write as slow as the slowest external service.',
        ],
      },
      {
        title: 'Approach',
        bullets: [
          'Index schema designed from the UI: searchable attributes ordered by intent, faceting attributes chosen to match the filters people actually click, and replica indices for the alternate sort orders.',
          'Writes to grants enqueue a Celery task rather than calling the search API inline — the request stays fast, and a failed update is retried instead of lost.',
          'Tasks are idempotent and address records by database ID, so a retry or a duplicate enqueue converges instead of creating a second copy.',
          'Partial attribute updates for ordinary edits; full rebuilds only when the mapping changes, with the new index built before it is switched into service.',
          'Saved lists live in PostgreSQL with indexed join tables rather than in the search index, and a reconciliation job compares record counts and spot-checks checksums to catch drift.',
          'Date and deadline filters handled explicitly with timezone-safe boundaries, because "closes today" is a different query in every timezone.',
        ],
      },
      {
        title: 'My contribution',
        paragraphs: [
          'I owned the search integration and the indexing pipeline, the saved-list data model, and the subscription state the API exposes.',
          '⟨Confirm: did you write the sync tasks yourself, and was the subscription billing in scope? Add team size and timeframe.⟩',
        ],
      },
    ],
    decisions: [
      {
        title: 'The database wins every disagreement',
        body: 'PostgreSQL is the source of truth and the index is a derived read model. When they disagree, the index is rebuilt — never patched by hand.',
      },
      {
        title: 'Index off the request path',
        body: 'Search writes go through the queue. Coupling a user-facing write to a third-party API makes availability someone else\'s decision.',
      },
      {
        title: 'Rebuild behind a switch',
        body: 'Mapping changes build a fresh index and swap it in, so a bad rollout is a rollback rather than an outage.',
      },
      {
        title: 'Saved lists are relational',
        body: 'A shortlist is user data with ordering and permissions. It belongs in tables with constraints, not in a search document that is designed to be disposed of.',
      },
    ],
    metrics: [
      { label: 'Indexing lag, write → searchable', value: '⟨ add measurement ⟩' },
      { label: 'Search response time (p95)', value: '⟨ add measurement ⟩' },
      { label: 'Grant records indexed', value: '⟨ add measurement ⟩' },
      { label: 'Sync failures / drift incidents since launch', value: '⟨ add measurement ⟩' },
    ],
    seoTitle: 'The Grants Hub — Algolia search and index synchronisation | Ahsan Tariq',
    seoDescription:
      'Case study: backend search for a grants SaaS — Algolia index design, idempotent Celery sync from PostgreSQL, saved lists and subscription state in FastAPI.',
  },
  {
    slug: 'golfpay',
    index: '04',
    name: 'Golfpay',
    kicker: 'Golf operations · Payments',
    tagline: 'A tee sheet is a concurrency problem wearing a booking form.',
    summary:
      'Golfpay runs tee times, memberships and payments for golf courses across web and mobile. I worked on the backend: availability queries, booking integrity, payment event handling and the operational data the course staff run the day on.',
    role: 'Backend Engineer',
    period: "A'sTechware ⟨dates⟩",
    scope: 'Availability · Bookings · Payments · Operations',
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
          'Two failure modes decide whether the product is trusted. Two players tapping the same slot at the same moment must produce exactly one booking — not two, and not an error after the card is charged. And a payment provider that retries its webhook must not create a second charge or a second booking.',
          'A cached availability list makes both harder: it is the only way to keep the page fast, and the fastest way to sell a slot twice.',
        ],
      },
      {
        title: 'Approach',
        bullets: [
          'Availability queries shaped around the tee sheet — one indexed range query per course and day, with slot state resolved from bookings and holds, instead of a lookup per slot.',
          'Booking integrity enforced in PostgreSQL: uniqueness on the slot, plus row-level locking around the multi-step booking (hold, reserve, confirm) so concurrent requests serialise instead of racing.',
          'Payment webhooks handled idempotently against a processed-event table, with the provider event ID as the key, so retries and out-of-order delivery are safe by construction.',
          'Short-TTL caching for availability with explicit invalidation on booking, because a stale list is acceptable for seconds and unacceptable for minutes.',
          'Reconciliation jobs comparing gateway state with the internal payment ledger, so a missed webhook becomes a reportable exception instead of a silent gap.',
        ],
      },
      {
        title: 'My contribution',
        paragraphs: [
          'I worked on the booking and availability endpoints, the payment event handling and the reporting queries behind the staff dashboard.',
          '⟨Confirm: which gateway integration did you own, and did you build the membership/entitlement logic? Add team size and timeframe.⟩',
        ],
      },
    ],
    decisions: [
      {
        title: 'The database is the last line of defence',
        body: 'An application-level "is this slot free?" check is a race condition with extra steps. Constraints and locks hold when two requests arrive in the same millisecond; service code does not.',
      },
      {
        title: 'Idempotency keys over hope',
        body: 'Every payment event is recorded before it is acted on. Retried webhooks converge on the same state instead of compounding it.',
      },
      {
        title: 'Cache the read, not the truth',
        body: 'Availability is a cached projection with a short life. The booking decision always goes to the database.',
      },
      {
        title: 'Money leaves a ledger row',
        body: 'Every write that touches payment state writes an auditable record, which is what makes reconciliation possible later.',
      },
    ],
    metrics: [
      { label: 'Double-booking incidents after the locking change', value: '⟨ add measurement ⟩' },
      { label: 'Duplicate charge rate / webhook dedupe', value: '⟨ add measurement ⟩' },
      { label: 'Availability endpoint p95, before → after', value: '⟨ add measurement ⟩' },
      { label: 'Reconciliation exceptions per month', value: '⟨ add measurement ⟩' },
    ],
    seoTitle: 'Golfpay — booking integrity and payment idempotency | Ahsan Tariq',
    seoDescription:
      'Case study: backend engineering for a golf operations and payments platform — tee-sheet availability queries, database-enforced booking integrity and idempotent payment webhooks.',
  },
  {
    slug: 'warco',
    index: '05',
    name: 'Warco',
    kicker: 'Warehouse & construction operations',
    tagline: 'Replacing a spreadsheet with a ledger that can be audited.',
    summary:
      'Warco tracks materials, inventory and jobs for a construction business. I worked on the backend that replaced spreadsheet-driven stock tracking: movement records, job consumption, and the reporting the office runs the month on.',
    role: 'Backend Engineer',
    period: "A'sTechware ⟨dates⟩",
    scope: 'Inventory ledger · Job consumption · Imports · Reporting',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis'],
    cardStack: ['FastAPI', 'PostgreSQL', 'Celery'],
    sections: [
      {
        title: 'Context',
        paragraphs: [
          'Materials arrive at sites, get consumed by jobs, sometimes come back, and occasionally turn out to have been miscounted. The office needs two answers at any moment: what do we have, and what did this job actually cost.',
          'Before the platform, both answers lived in spreadsheets that had drifted apart from each other and from reality.',
        ],
      },
      {
        title: 'The problem',
        paragraphs: [
          'A spreadsheet allows any number in any cell. Inventory needs something stricter: current stock has to be derivable from recorded events, and every change has to be attributable to a person, a job and a time. Without that, the first wrong count is unfixable, because there is no history to reconcile against.',
          'The migration carried a second risk: years of historical rows had to enter the system without silently importing the errors that made the spreadsheet unreliable.',
        ],
      },
      {
        title: 'Approach',
        bullets: [
          'Append-only movement ledger — receipts, issues, transfers, returns, adjustments — with on-hand stock as an aggregate over movements rather than a mutable counter.',
          'Job consumption written transactionally across multiple lines: a job either consumes all of its lines or none of them, so a partially applied issue can never exist.',
          'CSV import pipeline that validates, quarantines and reports bad rows instead of coercing them into the nearest valid value.',
          'Reporting queries built as pre-aggregated views over the ledger, indexed on item, site and date, so the month-end report is a read rather than a recount.',
          'Celery jobs for the expensive aggregation and export work, kept off the request path.',
        ],
      },
      {
        title: 'My contribution',
        paragraphs: [
          'I worked on the inventory and job-consumption backend, the historical data import, and the reporting queries.',
          '⟨Confirm: did you own the import and reporting work specifically? Add team size and timeframe.⟩',
        ],
      },
    ],
    decisions: [
      {
        title: 'Ledger over counters',
        body: 'A counter can only tell you what someone believes. A movement ledger can tell you why, and that is the difference between an inventory system and a spreadsheet with a login page.',
      },
      {
        title: 'Corrections are entries',
        body: 'A mistake is fixed by an adjustment with a reason, not by editing history. The original stays visible to whoever audits the stock later.',
      },
      {
        title: 'Reject, do not coerce',
        body: 'Bad import rows are quarantined with a reason. Silent coercion is how a spreadsheet\'s errors get a second life inside a database.',
      },
      {
        title: 'Fix the model before adding a cache',
        body: 'When a report is slow, the first question is whether the data shape is wrong. Caching a bad model makes it permanently slow and temporarily fast.',
      },
    ],
    metrics: [
      { label: 'Stock accuracy after migration', value: '⟨ add measurement ⟩' },
      { label: 'Month-end close time, before → after', value: '⟨ add measurement ⟩' },
      { label: 'Historical rows imported / quarantined', value: '⟨ add measurement ⟩' },
      { label: 'Reporting query p95', value: '⟨ add measurement ⟩' },
    ],
    seoTitle: 'Warco — inventory ledger and job costing backend | Ahsan Tariq',
    seoDescription:
      'Case study: replacing spreadsheet stock tracking with an append-only inventory ledger, transactional job consumption, a validated import pipeline and fast reporting for a construction business.',
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const projectNeighbours = (slug: string) => {
  const i = projects.findIndex((project) => project.slug === slug);
  return {
    previous: i > 0 ? projects[i - 1] : projects[projects.length - 1],
    next: i < projects.length - 1 ? projects[i + 1] : projects[0],
  };
};
