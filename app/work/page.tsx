"use client";

import React from 'react';
// Updated to fix build issue
import Image from 'next/image';
import Container from '../components/Container';
import CareerTimeline from '../components/CareerTimeline';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';

export default function Work() {
  return (
    <PageLayout navbarKey="navbar-work">
      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-0 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-work">
            <FadeIn>
              <PageHeading title="Work" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="max-w-3xl text-lg mb-[32px] font-[family-name:var(--font-montserrat)] leading-[28px]">
                I&apos;ve designed for scale, speed, and soul — leading product design initiatives across finance, insurance, hospitality, and media. Whether refining form flows or mentoring designers, I approach each challenge with empathy, experimentation, and strategic focus.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-3xl text-lg mb-[32px] font-[family-name:var(--font-montserrat)] leading-[28px]">
                From launching AI-powered features to transforming claims workflows used by millions, I build experiences that move with people — not against them.
              </p>
            </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-y-[46px] gap-x-6 md:gap-x-[93px] max-w-6xl" delayChildren={0.3} staggerChildren={0.1}>
            {/* GEICO */}
            <StaggerItem className="flex flex-col hover-lift">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/geico.svg"
                  alt="GEICO"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="font-[family-name:var(--font-montserrat)]">
                Redesigning critical insurance workflows across mobile and desktop. I lead Injury Intake usability testing, drive KPI improvements, and collaborate across design, product, and engineering to reduce friction and improve conversions at scale.
              </p>
            </StaggerItem>

            {/* IHG */}
            <StaggerItem className="flex flex-col hover-lift">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/ihg.svg"
                  alt="IHG"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="font-[family-name:var(--font-montserrat)]">
                I led UX efforts to streamline the booking experience across desktop and mobile. Working closely with Product and Engineering, I helped simplify user flows, reduce friction, and align the design system across brands.
              </p>
            </StaggerItem>

            {/* Thinkful */}
            <StaggerItem className="flex flex-col hover-lift">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/thinkful.png"
                  alt="Thinkful"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="font-[family-name:var(--font-montserrat)]">
                Mentored 10+ aspiring designers through portfolio reviews, mock interviews, and job search prep. Helped 85% land roles while building confidence, clarity, and design craft in a fast-moving remote learning environment.
              </p>
            </StaggerItem>

            {/* Publicis Sapient */}
            <StaggerItem className="flex flex-col hover-lift">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/publicissapient.svg"
                  alt="Publicis Sapient"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="font-[family-name:var(--font-montserrat)]">
                Contributed to digital transformation work for clients like U.S. Bank, Goldman Sachs, and Comcast. Focused on small business tools and early AI features, bringing a user-first lens to highly regulated, data-driven environments.
              </p>
            </StaggerItem>

            {/* CNN */}
            <StaggerItem className="flex flex-col hover-lift">
              <div className="h-24 flex items-center mb-6">
                <Image
                  src="/cnn.svg"
                  alt="CNN"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
              <p className="font-[family-name:var(--font-montserrat)]">
                Led design ops and delivery for CNN&apos;s Politics and 2020 Election platforms, managing cross-functional workflows and driving accessibility-focused design. Collaborated with a team of six designers using a component-based system, helping CNN become the #1 most visible publisher on desktop and mobile.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </main>

      <div className="h-[100px] bg-[#f6f0e9]"></div>

      <FadeIn delay={0.3}>
        <CareerTimeline key="career-timeline-work" />
      </FadeIn>
    </PageLayout>
  );
}
