"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

export default function DailyUplift() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar key="navbar-daily-uplift" />

      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-24 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-daily-uplift">
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
                src="/dailyupliftapp.svg"
                alt="Daily Uplift App"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            Daily Uplift
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            An AI-powered wellness app that delivers mood-based affirmations and reflections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Founder, Product Designer, AI Engineer</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Status</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Coming Soon (2024)</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Figma, React Native, OpenAI API, Firebase</p>
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Project Overview</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
              et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi
              facilisis et cras ullamcorper. Euismod felis non at integer.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
              et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi
              facilisis et cras ullamcorper. Euismod felis non at integer.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">The Problem</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
              et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi
              facilisis et cras ullamcorper. Euismod felis non at integer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Key Feature 1</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
                  et cras ullamcorper.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Key Feature 2</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
                  et cras ullamcorper.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Key Feature 3</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
                  et cras ullamcorper.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Key Feature 4</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
                  et cras ullamcorper.
                </p>
              </div>
            </div>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Coming Soon</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
              et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi
              facilisis et cras ullamcorper. Euismod felis non at integer.
            </p>

            <div className="mt-8 text-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center box-border w-[300px] h-[68px] bg-[#CC0101] border border-[#FFFFFF] border-opacity-50 rounded-[60px] hover:bg-[#a50000] transition-colors"
              >
                <span className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] leading-[29px] tracking-[-0.02em] text-white">
                  Join Waitlist
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
