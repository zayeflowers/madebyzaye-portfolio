"use client";

import React from 'react';
// Updated to fix build issue
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import CareerTimeline from '../components/CareerTimeline';
import PageHeading from '../components/PageHeading';

export default function Work() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar key="navbar-work" />

      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-24 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-work">
          <PageHeading title="Work" />

          <p className="max-w-3xl text-lg mb-[32px] font-[family-name:var(--font-montserrat)] leading-[28px]">
            I&apos;ve designed for scale, speed, and soul — leading product design initiatives across finance, insurance, hospitality, and media. Whether refining form flows or mentoring designers, I approach each challenge with empathy, experimentation, and strategic focus.
          </p>
          <p className="max-w-3xl text-lg mb-[32px] font-[family-name:var(--font-montserrat)] leading-[28px]">
            From launching AI-powered features to transforming claims workflows used by millions, I build experiences that move with people — not against them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[46px] gap-x-6 md:gap-x-[93px] max-w-6xl">
            {/* GEICO */}
            <div className="flex flex-col">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/geico.svg"
                  alt="GEICO"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] leading-[28px]">
                Redesigning critical insurance workflows across mobile and desktop. I lead Injury Intake usability testing, drive KPI improvements, and collaborate across design, product, and engineering to reduce friction and improve conversions at scale.
              </p>
            </div>

            {/* Thinkful */}
            <div className="flex flex-col">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/thinkful.png"
                  alt="Thinkful"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] leading-[28px]">
                Mentored 10+ aspiring designers through portfolio reviews, mock interviews, and job search prep. Helped 85% land roles while building confidence, clarity, and design craft in a fast-moving remote learning environment.
              </p>
            </div>

            {/* Publicis Sapient */}
            <div className="flex flex-col">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/publicissapient.svg"
                  alt="Publicis Sapient"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] leading-[28px]">
                Contributed to digital transformation work for clients like U.S. Bank, Goldman Sachs, and Comcast. Focused on small business tools and early AI features, bringing a user-first lens to highly regulated, data-driven environments.
              </p>
            </div>

            {/* CNN */}
            <div className="flex flex-col">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/cnn.svg"
                  alt="CNN"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="text-base md:text-lg font-[family-name:var(--font-montserrat)] leading-[28px]">
                Launched CNN&apos;s &quot;My Election&quot; feature during the 2020 cycle, driving 186K new users and a 45% revenue increase. Led accessibility improvements across internal tools, helping CNN rank #1 in desktop/mobile visibility with over 4.6M+ user interactions.
              </p>
            </div>
          </div>
        </Container>
      </main>

      <CareerTimeline key="career-timeline-work" />
    </div>
  );
}
