# Archive

Pages kept for later, deliberately excluded from the site.

Next.js App Router treats an underscore-prefixed folder as a
[private folder](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders):
`_archive` and everything under it is opted out of routing, so nothing here is
reachable at a URL. The files are still type-checked and linted, so an archived
page cannot silently rot against component changes.

## Contents

| Page | Archived | Original route |
| --- | --- | --- |
| `ai-projects/brothersignal/page.tsx` | 2026-08-18 | `/ai-projects/brothersignal` |

Supporting imagery stays in `public/` (`brothersignal.jpg`, `brothersignal.png`,
`brotherSignal_logo.png`) so a restore needs no asset work.

## Restoring a page

1. Move the folder back under `app/`, e.g.
   `git mv app/_archive/ai-projects/brothersignal app/ai-projects/brothersignal`
2. Fix the import depth — archived pages sit one level deeper, so their imports
   read `../../../components/`; a page at `app/ai-projects/<slug>/` needs
   `../../components/`.
3. Re-add the entry points that were removed alongside it. For BrotherSignal
   those were:
   - `PROJECTS` in `app/ai-projects/page.tsx`
   - `ENGAGEMENTS` in `app/work/page.tsx`
   - `EXPERIENCE` in `app/components/ExperienceList.tsx`
   - the `NextProject` chain in `app/ai-projects/hall-sisters/page.tsx`
   - prose mentions in `app/about/page.tsx` and `app/now/page.tsx`

   See the commit that archived the page for the exact copy.
