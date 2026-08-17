import React from 'react';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';
import SectionHeading from '../components/SectionHeading';
import WorkCard, { WorkCardProps } from '../components/WorkCard';

const CASE_STUDIES: WorkCardProps[] = [
  {
    kicker: 'Enterprise UX · 2021—2023',
    title: 'US Bank',
    description: 'One system across a fragmented product estate.',
    href: '/projects/us-bank',
    imageSrc: '/casestudy1.jpg',
    imageAlt: 'US Bank case study',
  },
  {
    kicker: 'Media · 2020',
    title: 'CNN Election Center',
    description: 'Storytelling with data at national scale.',
    href: '/projects/cnn',
    imageSrc: '/casestudy2.jpg',
    imageAlt: 'CNN case study',
  },
  {
    kicker: 'Insurance · 2024',
    title: 'GEICO Injury Intake',
    description: 'Redesigning a critical part of the auto claims experience.',
    href: '/projects/geico',
    imageSrc: '/geico.webp',
    imageAlt: 'GEICO Injury Intake',
  },
  {
    kicker: 'Hospitality · 2019',
    title: 'IHG Hotels',
    description: 'Optimizing the online booking experience across brands.',
    href: '/projects/ihg',
    imageSrc: '/casestudy3.jpg',
    imageAlt: 'IHG Hotels',
  },
];

export default function Projects() {
  return (
    <PageLayout navbarKey="navbar-projects">
      <div className="gutter pt-[72px] pb-[48px] max-sm:pt-[34px] max-sm:pb-[28px]">
        <PageHeading
          eyebrow="Case studies"
          title="The work behind the work"
          redPeriod
          lede="Featured case studies from engagements with major brands — the research, the constraints, and what actually shipped."
        />
      </div>

      <section className="section band-red">
        <SectionHeading
          title="Case studies"
          meta={`${CASE_STUDIES.length} studies`}
          tone="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-[28px]">
          {CASE_STUDIES.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
