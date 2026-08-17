"use client";

import React from 'react';
import SectionHeading from './SectionHeading';
import WorkCard, { WorkCardProps } from './WorkCard';

const PROJECTS: WorkCardProps[] = [
  {
    kicker: 'Product · 2026',
    title: 'BrotherSignal',
    description: 'An SMS platform delivering culturally relevant daily affirmations.',
    href: '/ai-projects/brothersignal',
    imageSrc: '/brothersignal.jpg',
    imageAlt: 'BrotherSignal',
  },
  {
    kicker: 'Identity · 2025',
    title: 'Candy Paint',
    description: 'Generative type, motion and machine-made texture.',
    href: '/ai-projects/candy-paint',
    imageSrc: '/candypaint 1.png',
    imageAlt: 'Candy Paint',
  },
  {
    kicker: 'Enterprise UX · 2024',
    title: 'US Bank',
    description: 'One system across a fragmented product estate.',
    href: '/projects/us-bank',
    imageSrc: '/casestudy1.jpg',
    imageAlt: 'US Bank case study',
  },
];

const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="band-red section">
      <SectionHeading title="Selected work" meta="Three of twelve" tone="light" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[28px]">
        {PROJECTS.map((project) => (
          <WorkCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
