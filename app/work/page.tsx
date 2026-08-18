"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';
import SectionHeading from '../components/SectionHeading';
import ExperienceList from '../components/ExperienceList';
import Marquee from '../components/Marquee';

interface Engagement {
  company: string;
  logo: string;
  kicker: string;
  description: string;
  href: string;
  linkLabel: string;
  external?: boolean;
}

const ENGAGEMENTS: Engagement[] = [
  {
    company: 'GEICO',
    logo: '/geico.svg',
    kicker: 'Insurance · 2024',
    description:
      'Redesigning critical insurance workflows across mobile and desktop. I lead UX design for the Injury Intake experience, drive KPI improvements, and collaborate across design, product, and engineering to reduce friction and improve conversions at scale.',
    href: '/projects/geico',
    linkLabel: 'View snapshot',
  },
  {
    company: 'Publicis Sapient',
    logo: '/publicissapient.svg',
    kicker: 'Enterprise UX · 2021—2023',
    description:
      'Contributed to digital transformation work for clients like U.S. Bank, Goldman Sachs, and Comcast. Focused on small business tools and early AI features, bringing a user-first lens to highly regulated, data-driven environments.',
    href: '/projects/us-bank',
    linkLabel: 'US Bank case study',
  },
  {
    company: 'CNN',
    logo: '/cnn.svg',
    kicker: 'Media · 2019—2021',
    description:
      "Led design ops and delivery for CNN's Politics and 2020 Election platforms, managing cross-functional workflows and driving accessibility-focused design. Collaborated with a team of six designers using a component-based system, helping CNN become the #1 most visible publisher on desktop and mobile.",
    href: '/projects/cnn',
    linkLabel: 'View case study',
  },
  {
    company: 'IHG',
    logo: '/ihg.svg',
    kicker: 'Hospitality · 2018—2019',
    description:
      'I led UX efforts to streamline the booking experience across desktop and mobile. Working closely with Product and Engineering, I helped simplify user flows, reduce friction, and align the design system across brands.',
    href: '/projects/ihg',
    linkLabel: 'View case study',
  },
  {
    company: 'Thinkful',
    logo: '/thinkful.png',
    kicker: 'Mentorship · 2019—2023',
    description:
      'Mentored 10+ aspiring designers through portfolio reviews, mock interviews, and job search prep. Helped 85% land roles while building confidence, clarity, and design craft in a fast-moving remote learning environment.',
    href: '/interview',
    linkLabel: 'Read the interview',
  },
];

export default function Work() {
  return (
    <PageLayout navbarKey="navbar-work">
      <div className="gutter pt-[72px] pb-[48px] max-sm:pt-[34px] max-sm:pb-[28px]">
        <PageHeading
          eyebrow="Work"
          title="Twelve years of shipped work"
          redPeriod
          lede="I lead product design across finance, insurance, hospitality, and media — from AI-powered tools to large-scale claims systems. Always focused on building experiences that feel intuitive and useful."
        />
      </div>

      <Marquee />

      <section className="section band-cream">
        <SectionHeading title="Engagements" meta={`${ENGAGEMENTS.length} of twelve`} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[64px] gap-y-[10px]">
          {ENGAGEMENTS.map((item) => (
            <article
              key={item.company}
              className="group border-t border-[color:var(--hair-strong)] py-[30px] max-sm:py-[22px]"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="h-[46px] max-sm:h-[36px] flex items-center">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    width={300}
                    height={80}
                    className="h-full w-auto object-contain object-left"
                  />
                </div>
                <span className="kicker text-[color:var(--ink-40)]">{item.kicker}</span>
              </div>

              <p className="body-copy-sm mt-[18px]">{item.description}</p>

              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-red mt-[18px]"
                >
                  {item.linkLabel}
                  <span aria-hidden="true">→</span>
                </a>
              ) : (
                <Link href={item.href} className="link-red mt-[18px]">
                  {item.linkLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <ExperienceList meta="Roles" />
    </PageLayout>
  );
}
