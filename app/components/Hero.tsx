"use client";

import React from 'react';
import Link from 'next/link';

const FACTS = [
  { key: 'Now building', value: 'BrotherSignal', href: '/ai-projects/brothersignal' },
  { key: 'Experience', value: '12 years' },
];

const Hero: React.FC = () => {
  return (
    <section className="gutter pt-[88px] pb-[72px] max-sm:pt-[34px] max-sm:pb-[30px] grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[26px] lg:gap-[72px] items-end animate-rise">
      <div>
        <div className="eyebrow">
          <span className="rule" />
          Creative Technologist
        </div>

        <h1 className="display t-hero mt-[22px] max-sm:mt-[16px]">
          Creating what I wish existed<span className="red-period">.</span>
        </h1>

        <p className="lede mt-[36px] max-sm:mt-[20px]">
          Product Design Lead using AI to create meaningful experiences. Twelve
          years shaping UX at Geico, CNN and Publicis Sapient — complex systems,
          aligned teams, products that feel personal.
        </p>

        <div className="flex gap-3 max-sm:gap-[10px] mt-[38px] max-sm:mt-[24px] max-sm:flex-col">
          <Link className="pill pill--dark" href="/work">
            Explore my work
          </Link>
          <Link className="pill pill--ghost" href="/about">
            About me
          </Link>
        </div>
      </div>

      {/* Facts column — only the live status row shows on mobile */}
      <div className="facts max-sm:border-t-0">
        {FACTS.map((fact) => (
          <div key={fact.key} className="fact max-sm:hidden">
            <div className="fact-k">{fact.key}</div>
            <div className="fact-v display">
              {fact.href ? (
                <Link
                  href={fact.href}
                  className="transition-colors hover:text-[color:var(--red)]"
                >
                  {fact.value}
                </Link>
              ) : (
                fact.value
              )}
            </div>
          </div>
        ))}

        <div className="fact max-sm:flex max-sm:items-center max-sm:justify-between max-sm:border-b-0 max-sm:border-t max-sm:border-[color:var(--hair)] max-sm:pt-4 max-sm:pb-0">
          <div className="fact-k">Status</div>
          <div className="fact-live max-sm:mt-0 max-sm:text-[14px]">
            <span className="dot" />
            Open to work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
