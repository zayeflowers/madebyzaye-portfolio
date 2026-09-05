"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const TOOLS = [
  { label: 'Figma', href: 'https://www.figma.com/' },
  { label: 'OpenAI API', href: 'https://openai.com/api/' },
  { label: 'Midjourney', href: 'https://www.midjourney.com/' },
];

export default function UXStrip() {
  return (
    <PageLayout navbarKey="navbar-ux-strip">
      <CaseStudyHero
        eyebrow="Case study · Illustration"
        title="UX Strip"
        summary="A comic strip series capturing the humorous, relatable, and sometimes absurd moments of working in UX and product design."
        meta={[
          { label: 'Role', value: 'Creator, Writer, Illustrator' },
          { label: 'Status', value: 'Launched' },
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
        <Figure src="/uxstrip.png" alt="UX Strip" caption="UX Strip — the daily absurdities of design work" />
      </section>

      <Prose className="pb-[48px] max-sm:pb-[28px]">
        <h2>Project overview</h2>
        <p>
          UX Strip is a comic strip series that captures the humorous, relatable, and
          sometimes absurd moments of working in UX and product design. Created to
          document the real conversations, frustrations, and ironies that designers
          experience daily — all through simple, satirical illustrations.
        </p>
        <p>
          What started as a personal creative outlet has evolved into a growing
          collection that resonates with designers across the industry. Each strip is
          based on real experiences, conversations overheard in meetings, or common
          design scenarios that many in the field immediately recognize.
        </p>

        <h2>The approach</h2>
        <p>
          I wanted to create something that felt authentic to the daily experience of
          working in UX — the good, the bad, and the hilariously frustrating. Each
          comic strip follows a minimalist style with simple characters and dialogue
          that cuts straight to the heart of design culture.
        </p>
        <p>
          The process involves collecting observations and anecdotes from my own
          experience and conversations with other designers, then distilling them into
          concise visual stories that capture universal truths about the profession.
        </p>

        <h2>AI integration</h2>
        <p>
          While the concepts and writing are human-created, I&apos;ve experimented
          with using AI tools to help refine ideas and generate visual variations. This
          hybrid approach allows for rapid iteration while maintaining the authentic
          voice that makes the strips relatable.
        </p>
        <p>
          The AI assists with brainstorming scenarios, refining dialogue, and sometimes
          generating background elements — but the core humor and insights come from
          real human experiences in the design world.
        </p>

        <h2>Impact &amp; future</h2>
        <p>
          UX Strip has found an audience among designers who appreciate seeing their
          daily challenges reflected with humor and honesty. The project continues to
          grow with new strips added regularly, exploring different aspects of design
          culture from client interactions to internal team dynamics.
        </p>
        <p>
          Future plans include expanding into animated shorts, collaborations with
          other designers to capture diverse perspectives, and potentially compiling
          the strips into a published collection.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <a
          className="pill pill--red max-sm:w-full"
          href="https://uxstrip.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit UX Strip →
        </a>
      </section>

      <NextProject title="Hall Sisters" href="/ai-projects/hall-sisters" />
    </PageLayout>
  );
}
