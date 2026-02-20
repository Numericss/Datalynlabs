# Datalynlabs Homepage

Dark, conversion-focused SaaS landing page for Datalynlabs (AI voice automation agency), built with Next.js App Router and Tailwind CSS v4 utilities.

## Booking CTA

All booking CTAs are standardized and fixed to:

- `https://cal.com/datalynlabs/30min`

Configured in:

- `/Users/kevinrosario/Library/Mobile Documents/com~apple~CloudDocs/Apple Developer/Website/Datalynlabs/lib/site.ts`

## Homepage Composition

Main entrypoint:

- `/Users/kevinrosario/Library/Mobile Documents/com~apple~CloudDocs/Apple Developer/Website/Datalynlabs/app/page.tsx`

Sections:

1. Sticky navigation (frosted on scroll)
2. Hero with animated conversation preview
3. Interactive ROI calculator (4 sliders, live model)
4. Social proof marquee logo strip
5. Features grid
6. Voice AI systems/services grid
7. Deployment process steps
8. Performance stats + comparison table
9. FAQ accordion
10. Footer CTA

Additional behavior:

- Scroll-triggered reveal animations via `IntersectionObserver`
- Count-up animation for performance metrics
- Reduced motion support (`prefers-reduced-motion`)
- Mobile floating `Book a Call` button

## Development

```bash
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```
