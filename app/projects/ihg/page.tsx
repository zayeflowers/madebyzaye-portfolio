"use client";

import React from 'react';
import Link from 'next/link';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function IHGProject() {
  return (
    <PageLayout navbarKey="navbar-ihg">
      <main className="w-full text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-ihg">
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

          <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-8 p-6">
            <div className="flex items-center justify-center">
              <div className="h-24 flex items-center justify-center bg-[#003366] text-white px-8 py-4 rounded-md">
                <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-3xl">IHG</h2>
              </div>
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            IHG Hotels — Optimizing the Online Booking Experience
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            Client: IHG Hotels & Resorts
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">UX Designer / Research Lead</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Timeline</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">2019</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Sketch, InVision, Fullstory</p>
            </div>
          </div>

          {/* Widescreen Image - IHG Hero Section */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-12">
            <div className="p-6">
              <div className="relative">
                <div className="w-full h-[400px] bg-[#003366] flex items-center justify-center text-white">
                  <p className="font-[family-name:var(--font-montserrat)] text-xl">IHG Booking Homepage UI</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                IHG booking homepage UI highlight
              </p>
            </div>
          </div>

          {/* The Challenge Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🚩 The Challenge</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              IHG wanted to reduce friction in their hotel booking experience and improve conversion rates. With high bounce rates and user drop-off during the selection and checkout process, our challenge was to identify usability gaps and streamline the digital journey for both leisure and business travelers.
            </p>
          </div>

          {/* My Role Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">💼 My Role</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              I served as the UX Designer and Research Lead responsible for shaping the usability strategy. My contributions included:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Conducting competitive audits and stakeholder interviews</li>
              <li>Facilitating usability tests and synthesizing key insights</li>
              <li>Creating UX reports, heatmaps, and behavioral analysis dashboards</li>
              <li>Collaborating with engineering and visual design to shape next steps</li>
            </ul>
          </div>

          {/* User research setup image */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <div className="w-full h-[400px] bg-[#f5f5f5] flex items-center justify-center">
                  <p className="font-[family-name:var(--font-montserrat)] text-xl text-gray-700">User Research Setup</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                User research setup and test feedback board
              </p>
            </div>
          </div>

          {/* Discovery & Research Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🔍 Discovery & Research</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              We ran moderated usability tests to better understand user friction points across the hotel selection, booking, and checkout flows. We also evaluated behavioral data using heatmaps and clickstream analysis.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] font-medium text-base mb-4">Key findings:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Users were confused by inconsistent filtering options across devices</li>
              <li>Room selection pages were overwhelming due to content hierarchy issues</li>
              <li>Mobile users had difficulty with calendar inputs and pricing clarity</li>
            </ul>
          </div>

          {/* Mobile calendar UI example */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <div className="w-full h-[400px] bg-[#f5f5f5] flex items-center justify-center">
                  <p className="font-[family-name:var(--font-montserrat)] text-xl text-gray-700">Mobile Calendar UI Example</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Mobile calendar UI example and annotated wireframes
              </p>
            </div>
          </div>

          {/* Ideation & Solutions Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">💡 Ideation & Solutions</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              After validating problem areas, we proposed several UX improvements:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Reorganized filters and applied consistent UI logic across platforms</li>
              <li>Introduced quick-glance comparison for room types and amenities</li>
              <li>Streamlined date selectors for mobile-first users</li>
              <li>Added progressive disclosure patterns for pricing details</li>
            </ul>
          </div>

          {/* Before/after comparison image */}
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
                Before/after comparison of redesigned booking flows
              </p>
            </div>
          </div>

          {/* Testing the New Experience Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🧪 Testing the New Experience</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              Our redesigned prototypes were tested with a mix of frequent travelers, first-time bookers, and business travel coordinators. We used Fullstory and session replays to identify micro-interactions that frustrated users and made real-time refinements during test cycles.
            </p>
          </div>

          {/* Outcomes Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">📈 Outcomes</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Increased clarity and ease-of-use on mobile booking flows</li>
              <li>Reduced task completion time for room selection and checkout</li>
              <li>Higher user satisfaction in follow-up surveys post-launch</li>
            </ul>
          </div>

          {/* Reflections & Takeaways Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🤔 Reflections & Takeaways</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Booking experiences are emotional — users want speed *and* confidence</li>
              <li>Mobile parity shouldn&apos;t mean copy/paste — rethink the form factor</li>
              <li>Collaborative testing with devs early on prevents late-stage rework</li>
            </ul>
          </div>

          {/* Final Thought Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🏆 Final Thought</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              This project reminded me that the best digital hospitality feels human — clear, responsive, and thoughtful. Our team helped IHG move closer to that vision, one touchpoint at a time.
            </p>
          </div>

          {/* Previous Project Link */}
          <div className="border-t border-gray-300 pt-12 mt-16 mb-40">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-6">Previous Project</h2>
            <Link href="/projects/cnn" className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors text-xl">
              <svg className="mr-2 w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              CNN Case Study
            </Link>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
