/**
 * Mapping between the DEAI selection criteria and evidence.
 * Source for the left column: DEAI Application Manual (background section)
 * and the DEAI course descriptions.
 */

export type EvidenceRow = {
  requirement: string;
  evidence: string;
};

export const prerequisites: EvidenceRow[] = [
  {
    requirement: 'Relational databases, SQL, relational algebra, query optimisation',
    evidence:
      'Daily production work: schema design, index selection, reading query plans and rewriting slow queries across five products. See [[Restaurant Resource|/work/restaurant-resource]] and [[Golfpay|/work/golfpay]]. ⟨Add the database course title, university and grade.⟩',
  },
  {
    requirement: 'Algorithms and data structures',
    evidence:
      '⟨Course title, university, grade.⟩ In practice: pagination and ranking correctness, batching to remove N+1 patterns, aggregation over large tables ([[Warco|/work/warco]]).',
  },
  {
    requirement: 'Probability and statistics',
    evidence:
      '⟨Course title, university, grade.⟩ Applied in extraction confidence thresholds and the precision/recall trade-off behind human review ([[Serva|/work/serva]]).',
  },
  {
    requirement: 'Modelling languages such as UML and ER diagrams',
    evidence:
      'Entity-relationship modelling for the five-level legal record model, the inventory ledger and subscription data models. ⟨Add the course where you learned formal ER/UML notation.⟩',
  },
  {
    requirement: 'Graph theory (reachability, transitivity)',
    evidence:
      '⟨Course title and grade — DEAI expects this. If your degree did not cover it, note the self-study material you worked through.⟩',
  },
  {
    requirement: 'Set theory and logic (notation, argumentation, basic proofs)',
    evidence:
      '⟨Course title and grade. Set operations are part of daily SQL work; the proof-based treatment is the part to evidence here.⟩',
  },
  {
    requirement: 'Programming and object-oriented concepts',
    evidence:
      'Python and Ruby in production for 2.5 years: service and domain layers, typed API boundaries, background workers, tests. ⟨Add the programming course if it helps the reviewer tick the box.⟩',
  },
];

export const moduleFit: EvidenceRow[] = [
  {
    requirement: 'Advanced Databases (ULB, semester 1)',
    evidence:
      'Physical design as a daily decision: composite index order, partial indexes, constraint-backed invariants, and an effective-dated price catalogue that is a temporal data problem in practice ([[Serva|/work/serva]]).',
  },
  {
    requirement: 'Database Systems Architecture (ULB, semester 1)',
    evidence:
      'Transactions and isolation used as correctness tools: row-level locking and uniqueness to prevent double bookings ([[Golfpay|/work/golfpay]]), all-or-nothing multi-line writes ([[Warco|/work/warco]]), append-only records.',
  },
  {
    requirement: 'Data Warehouses (ULB, semester 1)',
    evidence:
      'Operational data reshaped for analysis: an append-only movement ledger with pre-aggregated reporting views, indexing on the (item, site, date) grain ([[Warco|/work/warco]]).',
  },
  {
    requirement: 'Management of Data Science and Business Workflows (ULB, semester 1)',
    evidence:
      'A human-in-the-loop workflow with explicit states, hold reasons and an approval gate between a machine proposal and a legal record ([[Serva|/work/serva]]).',
  },
  {
    requirement: 'Data Mining (ULB, semester 1)',
    evidence:
      'Applied evaluation rather than model training: per-field extraction confidence, threshold selection, and the cost asymmetry between false positives and false negatives ([[Serva|/work/serva]]).',
  },
  {
    requirement: 'Big Data Management (UPC, semester 2)',
    evidence:
      'Queue-backed pipelines: Celery tasks with retries, idempotent re-runs, full rebuild versus partial update, and reconciliation jobs that detect drift ([[The Grants Hub|/work/grants-hub]]).',
  },
  {
    requirement: 'Semantic Data Management (UPC, semester 2)',
    evidence:
      'Read models designed for retrieval: index schemas, denormalised sort fields, tier-weighted relevance and entity resolution on building plus unit ([[Restaurant Resource|/work/restaurant-resource]], [[Serva|/work/serva]]).',
  },
  {
    requirement: 'Machine Learning (UPC, semester 2)',
    evidence:
      '⟨This is the honest gap in my profile.⟩ I have shipped AI-adjacent features and evaluated them, but not trained or tuned models myself. DEAI is where I want to close that.',
  },
  {
    requirement: 'High-Performance Data Analytics (UPC, semester 2)',
    evidence:
      'Latency treated as a design constraint: query shape, caching with invalidation, batching, and keeping third-party calls off the request path.',
  },
];

export const gaps: string[] = [
  'Model training and tuning. I have evaluated extraction quality and set thresholds; I have not trained or fine-tuned a model. ⟨Adjust to your real experience.⟩',
  'Distributed compute. No Spark or cluster-scale work yet — my pipelines are queue-based and single-cluster PostgreSQL. ⟨Adjust if you have used Spark, dbt, Airflow or similar.⟩',
  'Formal statistics. ⟨Replace with the level you actually reached, and what you have reviewed since.⟩',
];
