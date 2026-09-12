"use client";

import React from 'react';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';
import SectionHeading from '../components/SectionHeading';
import WorkCard, { WorkCardProps } from '../components/WorkCard';

const PROJECTS: (WorkCardProps & { status?: string })[] = [
  {
    kicker: 'Identity · 2024',
    title: 'Candy Paint',
    description:
      'A music video experiment blending motion, style, and identity through generative AI: bold, weird, and unapologetically future-facing.',
    href: '/ai-experiments/candy-paint',
    imageSrc: '/candypaint 1.png',
  },
  {
    kicker: 'Illustration · Launched',
    title: 'UX Strip',
    description:
      'A comic strip series capturing the humorous, relatable, and sometimes absurd moments of working in UX and product design.',
    href: '/ai-experiments/ux-strip',
    imageSrc: '/uxstrip.png',
  },
  {
    kicker: 'Documentary · Research',
    title: 'Hall Sisters',
    description:
      'A documentary-style exploration of identity, trauma, and public narrative through an AI-assisted research and storytelling workflow.',
    href: '/ai-experiments/hall-sisters',
    imageSrc: '/hallsisters.jpg',
  },
];

export default function AIExperiments() {
  return (
    <PageLayout navbarKey="navbar-ai-experiments">
      <div className="gutter pt-[72px] pb-[48px] max-sm:pt-[34px] max-sm:pb-[28px]">
        <PageHeading
          eyebrow="AI Experiments"
          title="Playing with the new tools"
          redPeriod
          lede="Self-directed work made with generative AI: a music video, a comic strip, a documentary. No client, no brief, just finding out what the tools can do."
        />
      </div>

      <section className="section band-red">
        <SectionHeading title="The work" tone="light" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[28px]">
          {PROJECTS.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
