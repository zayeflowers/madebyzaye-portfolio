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
  /** Square icon rather than a wordmark — pair it with the name so the row is legible. */
  markOnly?: boolean;
}

const ENGAGEMENTS: Engagement[] = [
  {
    company: 'Before Us',
    logo: '/beforeus/app-icon.svg',
    kicker: 'Product · 2026',
    description:
      'My own product: a daily-quote app of Black American and Black Diaspora voices, credited and contextualized. I own the design and the build — brand, interface, and the React Native app, now shipped on the App Store.',
    href: '/work/before-us',
    linkLabel: 'View case study',
    markOnly: true,
  },
  {
    company: 'GEICO',
    logo: '/geico.svg',
    kicker: 'Insurance · 2024—2026',
    description:
      'Redesigning critical insurance workflows across mobile and desktop. I lead UX design for the Injury Intake experience, drive KPI improvements, and collaborate across design, product, and engineering to reduce friction and improve conversions at scale.',
    href: '/projects/geico',
    linkLabel: 'View case study',
  },
  {
    company: 'Publicis Sapient',
    logo: '/publicissapient.svg',
    kicker: 'Enterprise UX · 2021—2023',
    description:
      'Contributed to digital transformation work for clients like U.S. Bank, Goldman Sachs, and Comcast. Focused on small business tools and early AI features, bringing a user-first lens to highly regulated, data-driven environments.',
    href: '/projects/us-bank',
    linkLabel: 'View case study',
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
        <SectionHeading title="Work" />

        <div className="flex flex-col">
          {ENGAGEMENTS.map((item) => (
            <article
              key={item.company}
              className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-x-[56px] gap-y-[22px] items-start border-t border-[color:var(--hair-strong)] last:border-b py-[40px] max-sm:py-[26px]"
            >
              {/* A wordmark names the company on its own; a symbol needs the
                  name beside it, so only markOnly entries carry one. */}
              {item.markOnly ? (
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-[16px]">
                  <Image
                    src={item.logo}
                    alt=""
                    width={152}
                    height={152}
                    className="h-[76px] w-[76px] max-sm:h-[60px] max-sm:w-[60px] rounded-[17px] shrink-0"
                  />
                  <span className="display t-xs">{item.company}</span>
                </div>
              ) : (
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={400}
                  height={120}
                  className="w-auto h-auto max-h-[58px] max-sm:max-h-[40px] max-w-full object-contain object-left"
                />
              )}

              <div>
                <span className="kicker text-[color:var(--ink-40)]">{item.kicker}</span>

                <p className="body-copy-sm mt-[14px] max-w-[64ch]">{item.description}</p>

                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-red mt-[20px]"
                  >
                    {item.linkLabel}
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <Link href={item.href} className="link-red mt-[20px]">
                    {item.linkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ExperienceList meta="Roles" />
    </PageLayout>
  );
}
