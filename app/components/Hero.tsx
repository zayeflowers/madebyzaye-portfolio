"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import PageHeading from './PageHeading';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';

const Hero: React.FC = () => {
  // Add a unique key to force re-render and avoid hydration issues
  const uniqueKey = "hero-component-v1";
  return (
    <section key={uniqueKey} className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-0 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 relative">
          {/* Vertical divider between columns - positioned in the gap with additional 16px left margin */}
          <div className="hidden md:block absolute left-[calc(58.33%+0.75rem-24px)] top-[80px] bottom-0 border-l border-black/[0.38]"></div>
          {/* Left column with heading and intro text */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-xl md:col-span-7">
            <FadeIn>
              <PageHeading title="Creating what I wish existed." className="mb-0" />
            </FadeIn>

            <StaggerContainer className="space-y-4" delayChildren={0.1} staggerChildren={0.1}>
              <StaggerItem>
                <p className="font-[family-name:var(--font-montserrat)] -mt-[20px]">
                  I&apos;m a Product Design Lead using AI to create meaningful experiences. Right now, I&apos;m building <span className="text-red-600 font-medium">Daily Uplift</span> &mdash; an emotional wellness app that delivers the right words when people need them most.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="font-[family-name:var(--font-montserrat)]">
                  My work blends design, emerging tech, and a deep understanding of real-world needs. I&apos;m focused on creating products that feel personal and purposeful.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="font-[family-name:var(--font-montserrat)]">
                  I&apos;ve shaped UX at companies like Geico, CNN, and Publicis Sapient, designing complex systems, aligning teams, and creating solutions that connect people and products.
                </p>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="pt-[24px]">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/work"
                    className="relative inline-flex items-center justify-center box-border w-[300px] h-[68px] bg-[#CC0101] border border-[#FFFFFF] border-opacity-50 rounded-[60px] hover:bg-[#a50000] transition-colors"
                  >
                    <span className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] leading-[29px] tracking-[-0.02em] text-white">
                      Explore my work
                    </span>
                  </Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Right column with Latest Work */}
          <div className="md:block md:col-span-5 pt-8 md:pt-[40px]">
            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] leading-[39px] tracking-[-0.04em] text-[#000000] mb-4 [text-edge:cap] [leading-trim:both]">
                  Latest Work
                </h2>
              </div>
            </FadeIn>


            {/* Daily Uplift Project */}
            <FadeIn delay={0.3} className="mb-8">
              <h3 className="font-[family-name:var(--font-montserrat)] text-[20px] font-medium leading-[24px] tracking-[-0.04em] mb-4 [text-edge:cap] [leading-trim:both] text-[#000000]">Daily Uplift - AI Wellness App</h3>
              <motion.div
                className="bg-[#FFFFFF] rounded-[14px] px-6 pt-6 pb-6 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 hover-lift"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <Image
                    src="/dailyupliftapp.png"
                    alt="Daily Uplift App"
                    width={600}
                    height={400}
                    priority
                    className="w-full h-auto object-contain block"
                  />
                </div>
                <p className="font-[family-name:var(--font-montserrat)] mb-4">
                  An AI-powered wellness app that delivers mood-based affirmations and reflections.
                </p>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/ai-projects/daily-uplift"
                    className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors"
                  >
                    View Project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </FadeIn>

            {/* Candy Paint Project - Commented out temporarily
            <div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-[20px] font-medium leading-[24px] tracking-[-0.04em] mb-4 [text-edge:cap] [leading-trim:both] text-[#000000]">Candy Paint - AI Music Video</h3>
              <div className="bg-[#FFFFFF] rounded-[14px] px-6 pt-6 pb-6 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
                <div className="flex items-end mb-4">
                  <Image
                    src="/candypaint.svg"
                    alt="Candy Paint"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain block"
                  />
                </div>
                <p className="font-[family-name:var(--font-montserrat)] mb-4">
                  A music video experiment that blends motion, style, and identity through generative AI tools.
                </p>
                <Link
                  href="/ai-projects/candy-paint"
                  className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors"
                >
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
