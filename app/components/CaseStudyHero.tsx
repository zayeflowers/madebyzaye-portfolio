"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface MetaItem {
  label: string;
  value: React.ReactNode;
}

interface CaseStudyHeroProps {
  eyebrow: string;
  title: string;
  summary?: string;
  meta?: MetaItem[];
  logoSrc?: string;
  logoAlt?: string;
  /** The logo is a square app icon rather than a wordmark, so it gets sized
   *  and rounded like one instead of being fitted to the wordmark box. */
  logoIsIcon?: boolean;
  backHref?: string;
  backLabel?: string;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  eyebrow,
  title,
  summary,
  meta,
  logoSrc,
  logoAlt,
  logoIsIcon = false,
  backHref = '/work',
  backLabel = 'Back to work',
}) => {
  return (
    <section className="gutter pt-[40px] pb-[48px] max-sm:pt-[24px] max-sm:pb-[28px] animate-rise">
      <Link href={backHref} className="link-red mb-[38px] max-sm:mb-[24px]">
        <span aria-hidden="true">←</span>
        {backLabel}
      </Link>

      <div className="mt-[38px] max-sm:mt-[24px] flex items-start justify-between gap-10">
        <div className="flex-1">
          <div className="eyebrow eyebrow--red">
            <span className="rule" />
            {eyebrow}
          </div>

          <h1 className="display t-lg mt-[22px] max-sm:mt-[16px] max-w-[18ch]">
            {title}
          </h1>

          {summary && <p className="lede mt-[22px] max-sm:mt-[16px]">{summary}</p>}
        </div>

        {logoSrc && (
          <div className="hidden sm:flex items-center justify-center h-[80px] w-[200px] shrink-0">
            <Image
              src={logoSrc}
              alt={logoAlt ?? ''}
              width={logoIsIcon ? 160 : 300}
              height={logoIsIcon ? 160 : 80}
              className={
                logoIsIcon
                  ? 'h-[72px] w-[72px] rounded-[16px]'
                  : 'max-h-[64px] w-auto object-contain'
              }
            />
          </div>
        )}
      </div>

      {meta && meta.length > 0 && (
        <dl
          className={`mt-[46px] max-sm:mt-[28px] grid grid-cols-1 gap-x-6 ${
            meta.length % 4 === 0
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : 'sm:grid-cols-3'
          }`}
        >
          {meta.map((item) => (
            <div
              key={item.label}
              className="border-t border-[color:var(--hair-strong)] pt-[18px] pb-[18px] max-sm:pb-3"
            >
              <dt className="fact-k">{item.label}</dt>
              <dd className="rich-text mt-[10px] text-[17px] max-sm:text-[15px] leading-[1.4] text-black">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
};

export default CaseStudyHero;
