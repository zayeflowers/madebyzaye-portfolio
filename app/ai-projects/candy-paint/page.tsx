import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

export default function CandyPaint() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="w-full bg-[#f6f0e9] text-black pt-16 pb-24 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container>
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

          <div className="rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://videopress.com/embed/6a6owULP"
              frameBorder="0"
              allowFullScreen
              allow="clipboard-write"
            ></iframe>
            <script src="https://videopress.com/videopress-iframe.js"></script>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-tight tracking-[-0.04em] text-[#000000] mb-[24px] [text-edge:cap] [leading-trim:both]">
            Candy Paint
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            Music video that infuses that latest generative A.I. creative art tools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Creative Director, AI Prompt Engineer</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Year</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">2023</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Midjourney, Runway ML, Adobe Premiere Pro</p>
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

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Process</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
              et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi
              facilisis et cras ullamcorper. Euismod felis non at integer.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Outcome</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Lorem ipsum dolor sit amet consectetur. Eu nec turpis condimentum mi facilisis
              et cras ullamcorper. Euismod felis non at integer. Eu nec turpis condimentum mi
              facilisis et cras ullamcorper. Euismod felis non at integer.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}
