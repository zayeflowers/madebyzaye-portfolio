"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="band-cream section grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-[64px] items-center">
      <div>
        <div className="eyebrow eyebrow--red">
          <span className="rule" />
          Case study
        </div>

        <h3 className="display t-lg mt-[22px] max-sm:mt-[16px]">
          Quiet affirmations at scale
        </h3>

        <p className="body-copy measure-tight mt-[22px] max-sm:mt-[16px]">
          How BrotherSignal turned a text message into a daily ritual for Black
          men — consent-first, no app required.
        </p>

        <Link
          className="pill pill--red mt-[30px] max-sm:mt-[20px] max-sm:w-full"
          href="/ai-projects/brothersignal"
        >
          Read the case study →
        </Link>
      </div>

      <div className="relative h-[340px] max-sm:h-[200px] max-sm:order-2 rounded-[14px] border border-black overflow-hidden bg-[color:var(--cream)]">
        <Image
          src="/brothersignal.png"
          alt="BrotherSignal screens"
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
