# Madebyzaye.com

The personal portfolio of Zaye Flowers — Lead Product Designer, builder, and creative technologist.

---

## Overview

**Madebyzaye.com** is a handcrafted portfolio site built using Next.js, Tailwind CSS, and React. It showcases a hybrid approach to design and development — featuring real case studies, AI-driven app projects, and experiments that live at the intersection of design, code, and creativity.

---

## Features

- ✨ Custom Next.js & React architecture
- 🎨 Tailwind-powered responsive design
- 💼 Case study templates for product design work
- 🤖 Sections for AI experiments, app builds, and creative tools
- 🌐 Fully deployed and version-controlled using GitHub and Netlify

---

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Version Control:** Git + GitHub
- **Hosting:** Netlify
- **Dev Tools:** Cursor AI, Augment Code

---

## Project Structure

```
madebyzaye-portfolio/
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── ai-projects/      # AI projects section
│   ├── components/       # Reusable React components
│   ├── contact/          # Contact page
│   ├── projects/         # Case studies and project pages
│   ├── work/             # Work experience page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Homepage
├── public/               # Static assets
│   ├── fonts/            # Custom fonts
│   ├── images/           # Image assets
│   └── favicon files     # Various favicon formats
├── .gitignore            # Git ignore file
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Design System

The site runs on the **Concept 2b** direction from `design_handoff_madebyzaye_2b/`: white
ground, hairline rules, Archivo Black display type, and red (`#CC0101`) used as a scalpel.

Everything lives in `app/globals.css`, inside `@layer components` so Tailwind utilities can
still override it. Build pages from these classes rather than raw Tailwind colors and sizes:

| Group | Classes |
| --- | --- |
| Type | `.display` `.mono` `.t-hero` `.t-xl` `.t-lg` `.t-md` `.t-sm` `.t-xs` |
| Copy | `.lede` `.body-copy` `.body-copy-sm` `.measure` `.measure-tight` `.prose-zaye` `.rich-text` |
| Labels | `.eyebrow` (`--red`, `--light`) `.kicker` `.micro-label` `.red-period` |
| Layout | `.gutter` `.section` `.band-red` `.band-cream` `.band-black` |
| Buttons | `.pill` + `--dark` `--ghost` `--red` `--light` `--outline-light`, `.link-red` |
| Surfaces | `.card` `.panel` `.frame` `.slot` |
| Lists | `.rule-list` / `.rule-row`, `.facts` / `.fact` |
| Motion | `.marquee` `.animate-rise` `.dot` (all disabled under `prefers-reduced-motion`) |

Tokens are CSS custom properties on `:root` (`--red`, `--cream`, `--hair`, `--ink-*`,
`--gutter`, `--radius-card`, `--shadow-card`). Breakpoints: mobile `≤639px`, tablet
`640–1023px` (reduced display scale, 36px gutter), desktop `≥1024px` (56px gutter).

Shared components in `app/components/`: `Navbar`, `Footer`, `Hero`, `Marquee`,
`SelectedWork`, `FeaturedCaseStudy`, `ExperienceList`, `WhatIDo`, `WorkCard`,
`SectionHeading`, `PageHeading`, `CaseStudyHero`, `Figure`, `Prose`, `NextProject`.

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/madebyzaye-portfolio.git
   cd madebyzaye-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## Design System

The site uses a consistent design system with:

- **Typography:**
  - Montserrat for body text and headings
  - Lexend Exa for navigation elements
  - Geist Sans for UI elements

- **Colors:**
  - Primary: #CC0101 (red)
  - Background: #F6F0E9 (beige)
  - Text: #000000 (black)
  - White: #FFFFFF

- **Components:**
  - Custom animations using Framer Motion
  - Responsive layout with mobile-first approach
  - Consistent spacing and proportions

---

## Deployment

The site is deployed on Netlify with continuous deployment from the main branch.

---

## License

All rights reserved. This code is not open-source.

---

## Contact

For any inquiries, please reach out to hey@madebyzaye.com
