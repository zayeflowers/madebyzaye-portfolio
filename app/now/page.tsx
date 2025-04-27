"use client";

import React from 'react';
import Container from '../components/Container';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';
import { FadeIn } from '../components/animations';

export default function NowPage() {
  return (
    <PageLayout navbarKey="navbar-now">
      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-0 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-now">
          <FadeIn>
            <PageHeading title="Now" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="max-w-3xl text-lg mb-[48px] font-[family-name:var(--font-montserrat)] leading-[28px]">
              This page is a living update of what I&apos;m currently building, exploring, and learning. Last updated: April 27, 2025.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="mb-[60px]">
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🚀 Building</h2>
              <ul className="list-disc pl-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                <li>Final polish and prepping for App Store launch of <strong>Daily Uplift</strong></li>
                <li>Adding subtle transitions and animations across <Link href="/" className="text-[#CC0101] hover:text-[#a50000] transition-colors">madebyzaye.com</Link> for a smoother experience</li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section className="mb-[60px]">
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🔍 Exploring</h2>
              <ul className="list-disc pl-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                <li>Deeper prototyping with <a href="https://www.cursor.com" className="text-[#CC0101] hover:text-[#a50000] transition-colors font-medium" target="_blank" rel="noopener noreferrer">Cursor AI</a> and <a href="https://www.augmentcode.com" className="text-[#CC0101] hover:text-[#a50000] transition-colors font-medium" target="_blank" rel="noopener noreferrer">Augment Code</a></li>
                <li> Sketching early concepts for a mental and wellness app </li>
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.4}>
            <section className="mb-[60px]">
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">📚 Learning</h2>
              <ul className="list-disc pl-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                <li>React Native best practices for iOS deployment</li>
                <li>Advanced Firebase functions for mobile authentication</li>
                <li>Experimenting with ChatGPT and Midjourney collaboration for visual storytelling in UX comics ✍🏾🎨</li>
       
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.5}>
            <section className="mb-[60px]">
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">⏭️ Next Up</h2>
              <ul className="list-disc pl-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                <li>Creating a minimalist UX comic strip collection for <a href="https://uxstrip.com" className="text-[#CC0101] hover:text-[#a50000] transition-colors" target="_blank" rel="noopener noreferrer">UXStrip.com</a></li>
                <li>Expanding madebyzaye.com with a Blog/Essays section</li>

              </ul>
            </section>
          </FadeIn>
        </Container>
      </main>
    </PageLayout>
  );
}
