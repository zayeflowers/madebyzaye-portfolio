"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function GeicoProject() {
  return (
    <PageLayout navbarKey="navbar-projects">
      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-0 min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-geico-project">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors"
            >
              <svg className="mr-2 w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Back to Projects
            </Link>
          </div>

          {/* Hero Section */}
          <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8 p-6">
            <div className="flex items-center justify-center">
              <div className="h-24 flex items-center">
                <Image
                  src="/geico.svg"
                  alt="GEICO Logo"
                  width={300}
                  height={80}
                  className="object-contain h-full"
                />
              </div>
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            GEICO - Injury Intake
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            Redesigning a critical part of the auto claims experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[40px]">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Lead UX Designer</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Timeline</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Q3 2024 – Present</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Figma, Quantum Metrics, PowerBI</p>
            </div>
          </div>

          {/* Widescreen Image - GEICO Hero */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-12">
            <div className="p-6">
              <div className="relative">
                <div className="w-full h-[400px] bg-[#0066b2] flex items-center justify-center text-white">
                  <p className="font-[family-name:var(--font-montserrat)] text-xl">GEICO Injury Intake Hero Image</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                GEICO Injury Intake Redesign Overview
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🔍 Overview</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              Injury Intake is a critical part of GEICO&apos;s auto claims experience—where users report bodily injuries after an accident. However, it&apos;s one of the last steps in a long, multi-screen flow, and it had a staggering 30.2% abandonment rate by the time users reached it.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              My role as Lead UX Designer was to overhaul the experience. I led design, testing, and strategy for this phase, advocating for user needs while aligning with business goals and technical constraints.
            </p>
          </div>

          {/* Team Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">👥 Team</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              1 UX Lead, 1 Senior Content Strategist, 1 Product Manager, 9+ Engineers
            </p>
          </div>

          {/* Platform Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">💻 Platform</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              Web & Mobile (MCP and SSC systems)
            </p>
          </div>

          {/* Problem Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🚩 Problem</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              The existing Injury Intake flow suffered from:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                High drop-off rates near the final step
              </li>
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                Low user engagement due to cognitive fatigue after 10–15 previous screens
              </li>
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                Overwhelming form layouts with accessibility issues
              </li>
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                Inconsistent UI patterns and unclear guidance throughout
              </li>
            </ul>
          </div>

          {/* Before/After comparison image */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <div className="w-full h-[400px] bg-[#f5f5f5] flex items-center justify-center">
                  <p className="font-[family-name:var(--font-montserrat)] text-xl text-gray-700">Before/After Comparison</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Before/after comparison of the Injury Intake flow
              </p>
            </div>
          </div>

          {/* My Approach Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🛠️ My Approach</h2>
            
            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">1. Mapped the End-to-End Experience</h3>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              I audited the real production flows (outside Figma) and collaborated with First Party Medical (FPM) adjusters to understand how the data was used. This gave us a true picture of what was essential and what wasn&apos;t.
            </p>

            {/* User journey map image */}
            <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8">
              <div className="p-6">
                <div className="relative">
                  <div className="w-full h-[400px] bg-[#f5f5f5] flex items-center justify-center">
                    <p className="font-[family-name:var(--font-montserrat)] text-xl text-gray-700">User Journey Map</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                  End-to-end user journey mapping of the claims process
                </p>
              </div>
            </div>

            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">2. Identified Drop-Off Pain Points</h3>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              Using analytics (Quantum Metrics / PowerBI) and user feedback, I discovered users were often mentally fatigued by the time they reached Injury Intake. Many didn&apos;t know why they were answering more questions or how it connected to the claim&apos;s outcome.
            </p>

            {/* Analytics dashboard image */}
            <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8">
              <div className="p-6">
                <div className="relative">
                  <div className="w-full h-[400px] bg-[#f5f5f5] flex items-center justify-center">
                    <p className="font-[family-name:var(--font-montserrat)] text-xl text-gray-700">Analytics Dashboard</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                  Analytics showing drop-off points in the user journey
                </p>
              </div>
            </div>

            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">3. Redesigned for Clarity & Compassion</h3>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              I implemented several key improvements:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                Prefilled key data (like name and accident date) from earlier responses, with an &quot;Edit&quot; option
              </li>
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                Prioritized empathy and tone in UI text: &quot;We know this part isn&apos;t easy. Let&apos;s take it step by step.&quot;
              </li>
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                Added sticky guidance and conditional logic to reduce overwhelm
              </li>
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                Proposed grouping medical questions into digestible sections: Hospital/Medical Providers, Wages
              </li>
            </ul>

            {/* Redesigned UI image */}
            <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8">
              <div className="p-6">
                <div className="relative">
                  <div className="w-full h-[400px] bg-[#f5f5f5] flex items-center justify-center">
                    <p className="font-[family-name:var(--font-montserrat)] text-xl text-gray-700">Redesigned UI</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                  Redesigned UI with improved clarity and compassion
                </p>
              </div>
            </div>

            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">4. Prototyped & Usability Tested</h3>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              I created a working prototype and collaborated with Researchers on usability sessions with real users. Feedback helped validate the chunked format and highlighted remaining accessibility gaps.
            </p>

            {/* Prototype testing image */}
            <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8">
              <div className="p-6">
                <div className="relative">
                  <div className="w-full h-[400px] bg-[#f5f5f5] flex items-center justify-center">
                    <p className="font-[family-name:var(--font-montserrat)] text-xl text-gray-700">Prototype Testing</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                  Usability testing sessions with real users
                </p>
              </div>
            </div>

            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">5. Navigated Constraints & Alignment</h3>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              I partnered closely with Product and Engineering to negotiate what could be released now vs. later, and documented pros/cons of proposed features like the Body Map and DocuSign No-Fault Form (NF-2) for future implementation.
            </p>
          </div>

          {/* Outcome Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🏆 Outcome</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                <strong>Streamlined MVP:</strong> A phased rollout of the redesigned Injury Intake flow is planned for mid-2025
              </li>
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                <strong>Increased visibility:</strong> My findings helped shift team understanding toward user mental load, not just screen count
              </li>
              <li className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
                <strong>Foundation for future improvements:</strong> My documentation and testing paved the way for enhancements like the NF-2 form integration and Documents Upload
              </li>
            </ul>
          </div>

          {/* Reflection Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">💭 Reflection</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              This project reminded me that design isn&apos;t just about simplifying screens—it&apos;s about advocating for what the user has left to give. When we respect their emotional and cognitive bandwidth, we build better products and better trust.
            </p>
          </div>

          {/* Next Project Navigation */}
          <div className="border-t border-gray-300 pt-8 mb-40">
            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">Next Project</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/projects/cnn" className="text-[#CC0101] hover:text-[#a50000] transition-colors font-[family-name:var(--font-montserrat)] font-medium">
                CNN Election Center →
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
