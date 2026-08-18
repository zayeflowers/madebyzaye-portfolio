"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="band-cream section grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[64px] items-center">
      <div>
        <div className="eyebrow eyebrow--red">
          <span className="rule" />
          Case study
        </div>

        <h3 className="display t-lg mt-[22px] max-sm:mt-[16px]">
          One voice a day
        </h3>

        <p className="body-copy measure-tight mt-[22px] max-sm:mt-[16px]">
          How Before Us turns a daily quote into an inheritance — Black voices,
          credited and contextualized, with nothing to scroll past.
        </p>

        <Link
          className="pill pill--red mt-[30px] max-sm:mt-[20px] max-sm:w-full"
          href="/work/before-us"
        >
          Read the case study →
        </Link>
      </div>

      <div className="relative h-[340px] max-sm:h-[200px] max-sm:order-2 rounded-[14px] border border-black overflow-hidden bg-[#1B1109]">
        <Image
          src="/beforeus/og.png"
          alt="Before Us — a voice a day, from those who came before"
          fill
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
