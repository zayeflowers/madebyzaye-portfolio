"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeading from './SectionHeading';

export interface ExperienceRow {
  period: string;
  role: string;
  company: string;
}

export const EXPERIENCE: ExperienceRow[] = [
  { period: '2025 — NOW', role: 'Owner, Design Engineer', company: 'Daily Uplift' },
  { period: '2024 — 2025', role: 'UX / Product Lead', company: 'GEICO' },
  { period: '2021 — 2023', role: 'Senior UX Designer', company: 'Publicis Sapient' },
  { period: '2019 — 2023', role: 'Product Design Mentor', company: 'Thinkful' },
  { period: '2019 — 2021', role: 'Senior Product Designer', company: 'CNN' },
  { period: '2018 — 2019', role: 'Senior UX Designer', company: 'IHG' },
];

interface ExperienceListProps {
  title?: string;
  meta?: string;
  /** Trim to the most recent N roles. */
  limit?: number;
  showLink?: boolean;
  className?: string;
}

const ExperienceList: React.FC<ExperienceListProps> = ({
  title = 'Experience',
  meta,
  limit,
  showLink = false,
  className = '',
}) => {
  const rows = limit ? EXPERIENCE.slice(0, limit) : EXPERIENCE;

  return (
    <section
      className={`gutter pt-[48px] pb-[76px] max-sm:pt-[36px] max-sm:pb-[32px] ${className}`}
    >
      <SectionHeading title={title} meta={meta} className="mb-[30px] max-sm:mb-[14px]" />

      <div className="rule-list">
        {rows.map((row) => (
          <div key={`${row.period}-${row.company}`} className="rule-row">
            <span className="rule-when">{row.period}</span>
            <span className="rule-role display">{row.role}</span>
            <span className="rule-co">{row.company}</span>
          </div>
        ))}
      </div>

      {showLink && (
        <Link href="/work" className="link-red mt-[30px]">
          See the work
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </section>
  );
};

export default ExperienceList;
