"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function UXStrip() {
  return (
    <PageLayout navbarKey="navbar-ux-strip">
      <main className="w-full text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-ux-strip">
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
                src="/uxstrip.png"
                alt="UX Strip"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[family-name:var(--font-montserrat)] font-extrabold leading-[74px] lg:leading-[74px] tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            UX Strip
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            A comic strip series capturing the humorous moments of working in UX design
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Creator, Writer, Illustrator</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Status</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Launched</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Figma</a>,
                <a href="https://openai.com/api/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">OpenAI API</a>,
                <a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Midjourney</a>
              </p>
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Project Overview</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              UX Strip is a comic strip series that captures the humorous, relatable, and sometimes absurd moments of working in UX and product design. Created to document the real conversations, frustrations, and ironies that designers experience daily — all through simple, satirical illustrations.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              What started as a personal creative outlet has evolved into a growing collection that resonates with designers across the industry. Each strip is based on real experiences, conversations overheard in meetings, or common design scenarios that many in the field immediately recognize.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">The Approach</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              I wanted to create something that felt authentic to the daily experience of working in UX — the good, the bad, and the hilariously frustrating. Each comic strip follows a minimalist style with simple characters and dialogue that cuts straight to the heart of design culture.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              The process involves collecting observations and anecdotes from my own experience and conversations with other designers, then distilling them into concise visual stories that capture universal truths about the profession.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">AI Integration</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              While the concepts and writing are human-created, I've experimented with using AI tools to help refine ideas and generate visual variations. This hybrid approach allows for rapid iteration while maintaining the authentic voice that makes the strips relatable.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              The AI assists with brainstorming scenarios, refining dialogue, and sometimes generating background elements — but the core humor and insights come from real human experiences in the design world.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Impact & Future</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              UX Strip has found an audience among designers who appreciate seeing their daily challenges reflected with humor and honesty. The project continues to grow with new strips added regularly, exploring different aspects of design culture from client interactions to internal team dynamics.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Future plans include expanding into animated shorts, collaborations with other designers to capture diverse perspectives, and potentially compiling the strips into a published collection.
            </p>

            <div className="mt-12 mb-20">
              <a
                href="https://uxstrip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center box-border w-[300px] h-[68px] bg-[#CC0101] border border-[#FFFFFF] border-opacity-50 rounded-[60px] hover:bg-[#a50000] transition-colors"
              >
                <span className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] leading-[29px] tracking-[-0.02em] text-white">
                  Visit UX Strip
                </span>
              </a>
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
