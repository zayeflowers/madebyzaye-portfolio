"use client";

import React from 'react';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';
import SectionHeading from '../components/SectionHeading';
import WorkCard, { WorkCardProps } from '../components/WorkCard';

const PROJECTS: (WorkCardProps & { status?: string })[] = [
  {
    kicker: 'Identity · 2025',
    title: 'Candy Paint',
    description:
      'A music video experiment blending motion, style, and identity through generative AI — bold, weird, and unapologetically future-facing.',
    href: '/ai-projects/candy-paint',
    imageSrc: '/candypaint 1.png',
    imageAlt: 'Candy Paint',
  },
  {
    kicker: 'Illustration · Launched',
    title: 'UX Strip',
    description:
      'A comic strip series capturing the humorous, relatable, and sometimes absurd moments of working in UX and product design.',
    href: '/ai-projects/ux-strip',
    imageSrc: '/uxstrip.png',
    imageAlt: 'UX Strip',
  },
  {
    kicker: 'Documentary · Research',
    title: 'Hall Sisters',
    description:
      'A documentary-style exploration of identity, trauma, and public narrative through an AI-assisted research and storytelling workflow.',
    href: '/ai-projects/hall-sisters',
    imageSrc: '/hallsisters.jpg',
    imageAlt: 'Hall Sisters',
  },
];

export default function AIProjects() {
  return (
    <PageLayout navbarKey="navbar-ai-projects">
      <div className="gutter pt-[72px] pb-[48px] max-sm:pt-[34px] max-sm:pb-[28px]">
        <PageHeading
          eyebrow="AI Projects"
          title="Creativity meets computation"
          redPeriod
          lede="These projects combine storytelling, visual design, and generative AI to push boundaries — and spark new conversations about what technology can feel like."
        />
      </div>

      <section className="section band-red">
        <SectionHeading
          title="Experiments"
          meta={`${PROJECTS.length} projects`}
          tone="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[28px]">
          {PROJECTS.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
