"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f0e9] text-black pt-0 pb-16 md:pb-20 lg:pb-24 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pt-[56px] relative">
          {/* Vertical divider between columns - positioned in the gap */}
          <div className="hidden md:block absolute left-[calc(58.33%+0.75rem-24px-16px)] top-[60px] bottom-0 border-l border-black/[0.38]"></div>
          {/* Left column with heading and intro text */}
          <div className="flex flex-col gap-8 md:gap-10 max-w-xl md:col-span-7">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[family-name:var(--font-montserrat)] font-extrabold leading-[74px] lg:leading-[74px] tracking-[-0.04em] [text-edge:cap] [leading-trim:both]">
              Creating what I wish existed.
            </h1>

            <div className="space-y-8">
              <p className="text-lg md:text-xl font-[family-name:var(--font-montserrat)] leading-[28px] text-[20px]">
                I&apos;m a Designer Founder crafting inspiring, tech-powered tools that meet people where they are.
                Currently building <span className="text-red-600 font-medium">Daily Uplift</span> — an AI-powered emotional wellness app rooted in empathy, mood, and motivation.
              </p>

              <p className="text-lg md:text-xl font-[family-name:var(--font-montserrat)] leading-[28px] text-[20px]">
                Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi facilisis et cras ullamcorper. Euismod felis non at integer.
              </p>
            </div>

            <div className="pt-[4px]">
              <Link
                href="/work"
                className="relative inline-flex items-center justify-center box-border w-[300px] h-[68px] bg-[#CC0101] border border-[#FFFFFF] border-opacity-50 rounded-[60px] hover:bg-[#a50000] transition-colors"
              >
                <span className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] leading-[29px] tracking-[-0.02em] text-white">
                  Explore my work
                </span>
              </Link>
            </div>
          </div>

          {/* Right column with Latest Work */}
          <div className="md:block md:col-span-5 pt-8 md:pt-[40px]">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] leading-[39px] tracking-[-0.04em] text-[#000000] mb-4 [text-edge:cap] [leading-trim:both]">
                Latest Work
              </h2>
            </div>

            {/* Daily Uplift Project */}
            <div className="mb-8">
              <div className="bg-[#FFFFFF] rounded-[14px] p-6 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
                <div className="mb-4">
                  <Image
                    src="/DU.svg"
                    alt="Daily Uplift Logo"
                    width={200}
                    height={64}
                    className="h-16 object-contain"
                  />
                </div>
                <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis et cras ullamcorper. Euismod felis non at integer.
                </p>
                <p className="mt-4">
                  <span className="font-bold">Status:</span> Coming soon
                </p>
              </div>
            </div>

            {/* Candy Paint Project */}
            <div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-[20px] font-medium leading-[24px] tracking-[-0.04em] mb-4 [text-edge:cap] [leading-trim:both] text-[#000000]">Candy Paint - AI Music Video</h3>
              <div className="bg-[#FFFFFF] rounded-[14px] px-6 pt-6 pb-0 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 flex items-end">
                <Image
                  src="/candypaint.svg"
                  alt="Candy Paint"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
