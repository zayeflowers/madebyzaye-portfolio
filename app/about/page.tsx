"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';
import WhatIDo from '../components/WhatIDo';
import ExperienceList from '../components/ExperienceList';
import SectionHeading from '../components/SectionHeading';

const DETAILS = [
  { label: 'Location', value: 'Washington D.C.' },
  { label: 'Interests', value: 'AI, music production, photography, travel' },
  { label: 'Currently building', value: 'Daily Uplift, UX Strip' },
  { label: 'Favorite tools', value: 'Figma, Cursor, Claude, Midjourney, Notion' },
];

const EXPERTISE = [
  {
    heading: 'Design',
    items: ['UI/UX Design', 'Product Design', 'Brand Identity', 'Design Systems'],
  },
  {
    heading: 'Technology',
    items: ['AI Engineering', 'Front-end Development', 'Mobile App Development', 'Prototyping'],
  },
];

export default function About() {
  return (
    <PageLayout navbarKey="navbar-about">
      <div className="gutter pt-[72px] pb-[48px] max-sm:pt-[34px] max-sm:pb-[28px]">
        <PageHeading
          eyebrow="About"
          title="Create what I wish existed"
          redPeriod
          lede="I'm Zaye Flowers — a Product Design Lead and creative technologist building tech-powered tools that inspire and empower people."
          actions={
            <>
              <Link className="pill pill--dark" href="/contact">
                Get in touch
              </Link>
              <Link className="pill pill--ghost" href="/work">
                See the work
              </Link>
            </>
          }
        />
      </div>

      {/* Bio + portrait */}
      <section className="gutter pb-[64px] max-sm:pb-[32px] grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[48px] lg:gap-[64px] items-start">
        <div className="prose-zaye measure">
          <p>
            My journey in design and technology has been driven by a simple philosophy:
            create what I wish existed. Over twelve years I&apos;ve shaped UX at brands
            like CNN, GEICO, IHG, and US Bank — learning how to make digital experiences
            that resonate with people and move the business at the same time.
          </p>
          <p>
            Today I&apos;m focused on <strong>Daily Uplift</strong>, an AI-powered
            emotional wellness app, and <strong>UX Strip</strong>, a comic series about
            the absurd side of product work. Both combine my passion for technology with
            a commitment to tools that make a positive impact.
          </p>
          <p>
            I&apos;m driven by curiosity — always exploring how design, technology, and
            storytelling can create real connection. I&apos;m also a huge R&amp;B fan with
            a side project brewing around music and storytelling.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[28px] gap-y-0 mt-[46px]">
            {EXPERTISE.map((group) => (
              <div
                key={group.heading}
                className="border-t border-[color:var(--hair-strong)] pt-[20px] pb-[10px]"
              >
                <div className="fact-k">{group.heading}</div>
                <ul className="mt-[14px] gap-[6px] pl-0 list-none">
                  {group.items.map((item) => (
                    <li key={item} className="text-[15px] leading-[1.6]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="frame">
            <Image
              src="/IMG_6082.jpg"
              alt="Zaye Flowers"
              width={600}
              height={800}
              className="w-full h-auto block"
              priority
            />
          </div>

          <dl className="mt-[28px]">
            {DETAILS.map((detail) => (
              <div
                key={detail.label}
                className="border-t border-[color:var(--hair)] py-[16px] last:border-b last:border-[color:var(--hair)]"
              >
                <dt className="fact-k">{detail.label}</dt>
                <dd className="mt-[10px] text-[15px] leading-[1.5]">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <WhatIDo />

      <ExperienceList meta="Career" />

      <section className="band-black section">
        <SectionHeading title="Now" meta="What I'm up to" tone="light" />
        <p className="body-copy measure text-[color:var(--paper-70)]">
          Prepping Daily Uplift for the App Store, drawing the next run of UX Strip, and
          writing about designing with AI.
        </p>
        <Link href="/now" className="link-red link-red--light mt-[30px]">
          Read the now page
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageLayout>
  );
}
