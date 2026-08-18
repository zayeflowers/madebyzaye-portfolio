"use client";

import React from 'react';
import Script from 'next/script';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const TOOLS = [
  { label: 'Midjourney', href: 'https://www.midjourney.com/' },
  { label: 'Runway ML', href: 'https://runwayml.com' },
  {
    label: 'DaVinci Resolve',
    href: 'https://www.blackmagicdesign.com/products/davinciresolve',
  },
  { label: 'CapCut', href: 'https://www.capcut.com/' },
];

export default function CandyPaint() {
  return (
    <PageLayout navbarKey="navbar-candy-paint">
      <CaseStudyHero
        eyebrow="Case study · Identity"
        title="Candy Paint"
        summary="A music video experiment that blends motion, style, and identity through generative AI — generative type, motion and machine-made texture."
        backHref="/ai-projects"
        backLabel="Back to AI projects"
        meta={[
          { label: 'Role', value: 'Creative Director, AI Prompt Engineer' },
          { label: 'Year', value: '2024' },
          {
            label: 'Tools',
            value: (
              <>
                {TOOLS.map((tool, index) => (
                  <React.Fragment key={tool.label}>
                    {index > 0 && ', '}
                    <a href={tool.href} target="_blank" rel="noopener noreferrer">
                      {tool.label}
                    </a>
                  </React.Fragment>
                ))}
              </>
            ),
          },
        ]}
      />

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <div className="frame">
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src="https://player.vimeo.com/video/1164171496?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute top-0 left-0 w-full h-full"
              title="Candy Paint — Generative AI Music Visual"
            />
          </div>
          <figcaption className="frame-caption">
            Candy Paint — generative AI music visual
          </figcaption>
        </div>
      </section>

      <Prose className="pb-[48px] max-sm:pb-[28px]">
        <h2>Project overview</h2>
        <p>
          Candy Paint explores how AI can be used as a creative collaborator — not
          just a tool. What began as a prompt experiment quickly evolved into a full
          visual narrative that blurs the line between reality and imagination. This
          project investigates digital identity, futurism, and the aesthetics of
          self-expression through synthetic visuals and stylized motion.
        </p>

        <h2>Process</h2>
        <p>
          Using Midjourney for visual concepting and Runway ML for motion, I
          constructed a visual storyline that would feel cinematic but surreal. The
          character design, framing, and styling were all directed with an intentional
          nod to Afrofuturism, digital fashion, and the idea of &quot;digital
          armor.&quot; The edit was mostly composed in DaVinci Resolve, allowing for
          tight control over pacing and mood.
        </p>

        <h2>Outcome</h2>
        <p>
          The result is a high-style music visual that merges narrative with
          generative art. More than an experiment, Candy Paint is a proof-of-concept
          for how emerging tools can extend the creative voice of independent
          storytellers — blending tech and intention in unexpected ways.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <div className="border-t border-[color:var(--hair-strong)] pt-[24px]">
          <div className="micro-label">Music credits</div>
          <dl className="mt-[20px] grid grid-cols-1 sm:grid-cols-3 gap-x-[28px]">
            {[
              { label: 'Artist', value: 'Normani' },
              { label: 'Produced by', value: 'TBHits' },
              {
                label: 'Written by',
                value:
                  'Normani, Starrah, Jacob Gago, June Nawakii, Keynon Moore, 302Quan & Ty Steez',
              },
            ].map((credit) => (
              <div key={credit.label} className="py-[10px]">
                <dt className="fact-k">{credit.label}</dt>
                <dd className="mt-[10px] text-[15px] leading-[1.5] text-[color:var(--ink-70)]">
                  {credit.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <NextProject title="UX Strip" href="/ai-projects/ux-strip" />

      <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
    </PageLayout>
  );
}
