"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function BrotherSignal() {
  return (
    <PageLayout navbarKey="navbar-brothersignal">
      <main className="w-full text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-brothersignal">
          <div className="mb-8">
            <Link
              href="/ai-projects"
              className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors"
            >
              <svg className="mr-2 w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Back to AI Projects
            </Link>
          </div>

          <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8 p-0">
            <div className="flex items-center justify-center">
              <Image
                src="/brothersignal.jpg"
                alt="BrotherSignal"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[family-name:var(--font-montserrat)] font-extrabold leading-[74px] lg:leading-[74px] tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            BrotherSignal
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            SMS-Based Engagement Platform
          </p>

          <div className="max-w-4xl">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Project Overview</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              BrotherSignal is a scalable SMS-based engagement platform delivering culturally relevant daily affirmations to subscribers.
            </p>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
