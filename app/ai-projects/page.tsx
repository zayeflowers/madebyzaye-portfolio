"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Container from '../components/Container';

export default function AIProjects() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar key="navbar-ai-projects" />

      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-24 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-ai-projects">
          <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-5xl md:text-6xl lg:text-[64px] leading-tight tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            AI Projects
          </h1>

          <p className="max-w-3xl text-lg mb-[48px] font-[family-name:var(--font-montserrat)] leading-[28px]">
            Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
            et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi
            facilisis et cras ullamcorper. Euismod felis non at integer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            {/* Candy Paint Project */}
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="relative">
                <Image
                  src="/candypaint_medium.svg"
                  alt="Candy Paint"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6">
                <h2 className="font-[family-name:var(--font-montserrat)] font-medium text-2xl mb-3 tracking-[-0.04em]">
                  Candy Paint
                </h2>
                <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-4">
                  Music video that infuses that latest generative A.I. creative art tools.
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

            {/* Daily Uplift Project */}
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="p-6">
                <div className="mb-4">
                  <Image
                    src="/dailyupliftapp.svg"
                    alt="Daily Uplift App"
                    width={300}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h2 className="font-[family-name:var(--font-montserrat)] font-medium text-2xl mb-3 tracking-[-0.04em]">
                  Daily Uplift
                </h2>
                <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-4">
                  An AI-powered emotional wellness app rooted in empathy, mood, and motivation.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-base mb-4">
                  <span className="font-bold">Status:</span> Coming soon
                </p>
                <Link
                  href="/ai-projects/daily-uplift"
                  className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors"
                >
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
