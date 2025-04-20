"use client";

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

export default function CandyPaint() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar key="navbar-candy-paint" />

      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-24 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-candy-paint">
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

          <div className="overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8 w-full aspect-video relative h-0 pb-[56.25%]">
            <iframe
              src="https://videopress.com/embed/6a6owULP"
              frameBorder="0"
              allowFullScreen
              allow="clipboard-write"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[family-name:var(--font-montserrat)] font-extrabold leading-[74px] lg:leading-[74px] tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            Candy Paint
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            A music video experiment that blends motion, style, and identity through generative AI tools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Creative Director, AI Prompt Engineer</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Year</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">2024</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                <a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Midjourney</a>,
                <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Runway ML</a>,
                <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Davinci Resolve</a>,
                <a href="https://www.capcut.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Capcut</a>
              </p>
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Project Overview</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Candy Paint explores how AI can be used as a creative collaborator — not just a tool. What began as a prompt experiment quickly evolved into a full visual narrative that blurs the line between reality and imagination. This project investigates digital identity, futurism, and the aesthetics of self-expression through synthetic visuals and stylized motion.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Process</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Using Midjourney for visual concepting and Runway ML for motion, I constructed a visual storyline that would feel cinematic but surreal. The character design, framing, and styling were all directed with an intentional nod to Afrofuturism, digital fashion, and the idea of &quot;digital armor.&quot; The edit was mostly composed in Davinci Resolve, allowing for tight control over pacing and mood.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Outcome</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              The result is a high-style music visual that merges narrative with generative art. More than an experiment, Candy Paint is a proof-of-concept for how emerging tools can extend the creative voice of independent storytellers — blending tech and intention in unexpected ways.
            </p>
          </div>
        </Container>
      </main>
      <Script src="https://videopress.com/videopress-iframe.js" strategy="afterInteractive" />
    </div>
  );
}
