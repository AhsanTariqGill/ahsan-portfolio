# TODO

Open items for this site. Nothing here should contain grades or personal identifiers.

## Publishing

- [ ] Buy a domain, then update `site.url` in `src/data/site.ts`, `astro.config.mjs` and
      `robots.txt` (currently `ahsantariq.dev`).
- [ ] Replace `public/ahsan-tariq-cv.pdf` with the official CV. The current file is a
      generated placeholder.
- [ ] Confirm the client is fine with the public case study naming `serva.legal`.

## Application details

- [ ] IELTS: test date and section scores. Only "IELTS overall 6.5" is shown.
- [ ] Final-year project: measured results (accuracy, F1 or localisation overlap) only if
      they can be shown.
- [ ] Restaurant Resource: the "before" search time, if it can be found.
- [ ] Verify the ULB, UPC and summer-school wording in About against the official DEAI page.
- [ ] Rewrite the About motivation section with the career goal and the specific reasons
      for choosing DEAI.

## Open Graph images

The images in `public/og/` are not edited. Two now conflict with the final stacks:

- [ ] `public/og/grants-hub.png` shows "FASTAPI / ALGOLIA / POSTGRESQL"; the stack is Ruby
      on Rails, PostgreSQL, Algolia.
- [ ] `public/og/golfpay.png` shows "FASTAPI / POSTGRESQL / REDIS"; the stack is Ruby on
      Rails, PostgreSQL, ERB with Slim, StimulusReflex, ActionCable.

## Optional

- [ ] Architecture diagram for each case study.
- [ ] Warco: revise the case study and re-publish. It is hidden from lists and routes
      (`hidden: true` in `src/data/projects.ts`) but the file is kept.
