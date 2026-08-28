"use client";

import React from 'react';
import SectionHeading from './SectionHeading';
import WorkCard, { WorkCardProps } from './WorkCard';

const PROJECTS: WorkCardProps[] = [
  {
    kicker: 'Insurance · 2024',
    title: 'GEICO',
    description: 'Injury intake, redesigned around the moment people need it most.',
    href: '/projects/geico',
    imageSrc: '/geico.webp',
    imageAlt: 'GEICO injury intake',
  },
  {
    kicker: 'Media · 2020',
    title: 'CNN',
    description: 'Election night data, legible at national scale.',
    href: '/projects/cnn',
    imageSrc: '/casestudy2.jpg',
    imageAlt: 'CNN Election Center',
  },
  {
    kicker: 'Enterprise UX · 2023',
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
      <SectionHeading title="Selected work" tone="light" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[28px]">
        {PROJECTS.map((project) => (
          <WorkCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
