"use client";

import React from 'react';
import Link from 'next/link';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';

interface NowBlock {
  label: string;
  items: React.ReactNode[];
}

const BLOCKS: NowBlock[] = [
  {
    label: 'Building',
    items: [
      <>
        Scaling <strong>BrotherSignal</strong> — automated scheduling, delivery
        reliability, and the subscriber onboarding flow
      </>,
      <>
        Final polish and App Store prep for <strong>Daily Uplift</strong>
      </>,
      <>
        Rolling the new visual identity across{' '}
        <Link href="/">madebyzaye.com</Link>
      </>,
    ],
  },
  {
    label: 'Exploring',
    items: [
      <>
        Deeper prototyping with{' '}
        <a href="https://www.cursor.com" target="_blank" rel="noopener noreferrer">
          Cursor
        </a>{' '}
        and Claude Code
      </>,
      <>Sketching early concepts for a mental wellness companion</>,
    ],
  },
  {
    label: 'Learning',
    items: [
      <>React Native best practices for iOS deployment</>,
      <>Advanced Firebase functions for mobile authentication</>,
      <>Generative workflows for visual storytelling in UX comics</>,
    ],
  },
  {
    label: 'Next up',
    items: [
      <>
        A minimalist UX comic collection for{' '}
        <a href="https://uxstrip.com" target="_blank" rel="noopener noreferrer">
          UXStrip.com
        </a>
      </>,
      <>Expanding this site with a writing section</>,
    ],
  },
];

export default function NowPage() {
  return (
    <PageLayout navbarKey="navbar-now">
      <div className="gutter pt-[72px] pb-[48px] max-sm:pt-[34px] max-sm:pb-[28px]">
        <PageHeading
          eyebrow="Now"
          title="What I'm working on"
          redPeriod
          lede="A living update of what I'm building, exploring, and learning."
        />
        <p className="micro-label mt-[24px]">Last updated · August 2026</p>
      </div>

      <section className="gutter pb-[76px] max-sm:pb-[40px]">
        {BLOCKS.map((block) => (
          <div
            key={block.label}
            className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-x-[24px] gap-y-[12px] border-t border-[color:var(--hair-strong)] py-[30px] max-sm:py-[22px] last:border-b last:border-[color:var(--hair-strong)]"
          >
            <h2 className="display t-xs">{block.label}</h2>

            <ul className="rich-text flex flex-col gap-[12px]">
              {block.items.map((item, index) => (
                <li key={index} className="flex gap-3 text-[17px] max-sm:text-[15px] leading-[1.6] text-[color:var(--ink-70)]">
                  <span className="text-[color:var(--red)] shrink-0" aria-hidden="true">
                    ✳
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </PageLayout>
  );
}
