"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import CareerTimeline from '../components/CareerTimeline';
import PageHeading from '../components/PageHeading';
import PageWrapper from '../components/PageWrapper';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';

export default function About() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar key="navbar-about" />

      <PageWrapper>
        <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-0 min-h-screen relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
          <Container key="container-about">
            <FadeIn>
              <PageHeading title="About Me" />
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative mt-4">
              {/* Left column with bio text */}
              <StaggerItem className="flex flex-col gap-8 md:gap-10 max-w-xl md:col-span-7">

                <div className="space-y-8">
                  <p className="font-[family-name:var(--font-montserrat)]">
                    I&apos;m a Designer Founder with a passion for creating tech-powered tools that inspire and empower people. My journey in design and technology has been driven by a simple philosophy: create what I wish existed.
                  </p>

                  <p className="font-[family-name:var(--font-montserrat)]">
                    With over 8 years of experience working with brands like CNN, GEICO, and US Bank, I&apos;ve developed a deep understanding of how to create digital experiences that resonate with users and drive business results.
                  </p>

                  <p className="font-[family-name:var(--font-montserrat)]">
                    Currently, I&apos;m focused on building <span className="text-red-600 font-medium">Daily Uplift</span> — an AI-powered emotional wellness app that combines my passion for technology with my commitment to creating tools that make a positive impact on people&apos;s lives.
                  </p>
                </div>

                <div className="pt-4">
                  <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] leading-[39px] tracking-[-0.04em] text-[#000000] mb-6 [text-edge:cap] [leading-trim:both]">
                    Expertise
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Design</h3>
                      <ul className="space-y-2 font-[family-name:var(--font-montserrat)] leading-[28px]">
                        <li>UI/UX Design</li>
                        <li>Product Design</li>
                        <li>Brand Identity</li>
                        <li>Design Systems</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Technology</h3>
                      <ul className="space-y-2 font-[family-name:var(--font-montserrat)] leading-[28px]">
                        <li>AI Engineering</li>
                        <li>Front-end Development</li>
                        <li>Mobile App Development</li>
                        <li>Prototyping</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              {/* Right column with image and personal details */}
              <StaggerItem className="md:col-span-5">
                <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8 hover-lift">
                  <Image
                    src="/IMG_6082.jpg"
                    alt="Zaye Flowers"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                <div className="bg-white rounded-[14px] p-6 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 hover-lift">
                  <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">Personal Details</h2>

                  <div className="space-y-4 font-[family-name:var(--font-montserrat)] leading-[28px]">
                    <div>
                      <h3 className="font-bold">Location</h3>
                      <p>Washington D.C.</p>
                    </div>

                    <div>
                      <h3 className="font-bold">Interests</h3>
                      <p>AI, Music Production, Photography, Travel</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </Container>
        </main>

        <div className="h-[100px] bg-[#f6f0e9]"></div>

        <FadeIn delay={0.3}>
          <CareerTimeline key="career-timeline-about" />
        </FadeIn>
      </PageWrapper>
    </div>
  );
}
