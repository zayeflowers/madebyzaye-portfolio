"use client";

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function HallSisters() {
  return (
    <PageLayout navbarKey="navbar-hall-sisters">
      <main className="w-full text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-hall-sisters">
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

          <div className="max-w-4xl mb-8">
            <div className="relative w-full aspect-video rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <iframe
                src="https://player.vimeo.com/video/1164179928?badge=0&autopause=0&player_id=0&app_id=58479"
                title="The Hall Sisters: A Texas True Crime Story"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[family-name:var(--font-montserrat)] font-extrabold leading-[74px] lg:leading-[74px] tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            Hall Sisters
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            AI-assisted research and storytelling for documentary narrative
          </p>

          <div className="max-w-4xl">
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              The Hall Sisters is a documentary-style exploration examining identity, trauma, and public narrative through an AI-assisted research and storytelling workflow.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              I used generative AI tools to organize source material, analyze patterns in coverage, structure narrative arcs, and assist in visual concept development.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-20">
              This project reflects how AI can support long-form storytelling, research synthesis, and cultural documentation.
            </p>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
