"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import PageHeading from './PageHeading';

const Hero: React.FC = () => {
  // Add a unique key to force re-render and avoid hydration issues
  const uniqueKey = "hero-component-v1";
  return (
    <section key={uniqueKey} className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-16 md:pb-20 lg:pb-24 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative">
          {/* Vertical divider between columns - positioned in the gap */}
          <div className="hidden md:block absolute left-[calc(58.33%+0.75rem-24px-16px)] top-[80px] bottom-0 border-l border-black/[0.38]"></div>
          {/* Left column with heading and intro text */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-xl md:col-span-7">
            <PageHeading title="Creating what I wish existed." className="mb-0" />

            <div className="space-y-8">
              <p className="text-lg md:text-xl font-[family-name:var(--font-montserrat)] leading-[28px] text-[20px]">
                I&apos;m a Lead Product Designer using AI to build tools that feel. Right now, I&apos;m crafting <span className="text-red-600 font-medium">Daily Uplift</span> &mdash; an emotional wellness app powered by empathy, mood, and motivation. It&apos;s designed to meet people in their moment &mdash; with the right words, at the right time.
              </p>

              <p className="text-lg md:text-xl font-[family-name:var(--font-montserrat)] leading-[28px] text-[20px]">
                My work blends thoughtful design, emerging tech, and real-world care. Whether I&apos;m prototyping wellness experiences, exploring generative AI, or writing the front-end myself &mdash; I lead with intention.
              </p>

              <p className="text-lg md:text-xl font-[family-name:var(--font-montserrat)] leading-[28px] text-[20px]">
                I believe in building products that aren&apos;t just smart, but supportive. That don&apos;t just work &mdash; they resonate. Because it&apos;s not just what I build. It&apos;s how it connects.
              </p>
            </div>

            <div className="pt-[24px]">
              <Link
                href="/work"
                className="relative inline-flex items-center justify-center box-border w-[300px] h-[68px] bg-[#000000] border border-[#FFFFFF] border-opacity-50 rounded-[60px] hover:bg-black/80 transition-colors"
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
              <div className="mb-4">
                <Image
                  src="/DU.svg"
                  alt="Daily Uplift Logo"
                  width={200}
                  height={64}
                  className="h-16 object-contain"
                />
              </div>
              <div className="bg-[#FFFFFF] rounded-[14px] p-6 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
                <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                  AI-powered wellness made simple. Personalized messages to lift your mood and shift your mindset.
                </p>
                <p className="mt-4"><span className="font-bold">Status:</span> Coming soon
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
