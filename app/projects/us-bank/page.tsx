"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function USBankProject() {
  useEffect(() => {
    const video = document.getElementById('usbank-video') as HTMLVideoElement;
    const videoWrapper = document.getElementById('video-wrapper');
    const posterWrapper = document.getElementById('poster-wrapper');

    if (video && videoWrapper && posterWrapper) {
      // Show poster when video ends
      const handleEnded = () => {
        videoWrapper.style.display = 'none';
        posterWrapper.style.display = 'block';
      };

      video.addEventListener('ended', handleEnded);

      return () => {
        // Clean up event listeners
        if (video) {
          video.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <PageLayout navbarKey="navbar-usbank">
      <main className="w-full text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-usbank">
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
              <Image
                src="/usbank.svg"
                alt="US Bank Logo"
                width={300}
                height={80}
                className="h-24 object-contain"
              />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            Redefining Banking Essentials with US Bank
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            Client: US Bank x Publicis Sapient
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Sr. UX Designer</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Timeline</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">2020-2022</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Figma, Sketch, InVision</p>
            </div>
          </div>

          {/* Widescreen Image - US Bank Hero Section */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-12">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/usbank-overview.jpg"
                  alt="US Bank Hero Section"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                US Bank Overview
              </p>
            </div>
          </div>

          {/* The Challenge Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🚩 The Challenge</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Small business owners were struggling to find the right digital tools to manage their business finances. Many used workarounds or third-party services that lacked the integrated support and trust offered by their primary bank. US Bank saw an opportunity to redefine what &quot;business essentials&quot; could look like — more intuitive, more centralized, and deeply user-focused.
            </p>
          </div>

          {/* My Role Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">💼 My Role</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              As a Senior UX Designer, I partnered closely with strategy, research, and product teams to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Audit existing business tools</li>
              <li>Facilitate workshops to align on opportunity areas</li>
              <li>Build user flows and prototypes</li>
              <li>Lead usability testing and synthesize insights into product recommendations</li>
            </ul>
          </div>

          {/* Business Tools Diagram */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/usbank-business-tools.jpg"
                  alt="Business Tools Diagram"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Business Tools Diagram
              </p>
            </div>
          </div>

          {/* Discovery & Research Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🔍 Discovery & Research</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              We uncovered that small business owners want more than just transactional banking — they needed tools that could help with:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Invoicing</li>
              <li>Cash flow visualization</li>
              <li>Document management</li>
              <li>Tax preparation</li>
              <li>Business credit tracking</li>
            </ul>
          </div>

          {/* Ideation Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">💡 Ideation</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              We explored new experiences across the business dashboard:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Centralized homepage with integrated features</li>
              <li>A &quot;command center&quot; layout for finances, tasks, and notifications</li>
              <li>Quick actions to streamline repetitive tasks</li>
              <li>Modular UI that could scale with business growth</li>
            </ul>
          </div>

          {/* Wireframes and Prototypes Image */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/usbank-wireframes.jpg"
                  alt="Wireframes and Prototypes"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Wireframes and Prototypes
              </p>
            </div>
          </div>

          {/* Usability Testing Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🧪 Usability Testing</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              We tested with 8 participants across 3 target segments:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Solo entrepreneurs</li>
              <li>Growing small businesses</li>
              <li>Tech-savvy financial admins</li>
            </ul>

            <p className="font-[family-name:var(--font-montserrat)] font-medium text-base mb-4">Objectives:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Validate relevance of new business banking concepts</li>
              <li>Test task flows for invoicing, document uploads, and transaction tracking</li>
              <li>Evaluate visual clarity and feature prioritization</li>
            </ul>

            <p className="font-[family-name:var(--font-montserrat)] font-medium text-base mb-4">Key Findings:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Users appreciated clear entry points into invoicing and cash flow tools</li>
              <li>Information hierarchy needed refinement for quicker navigation</li>
              <li>Users wanted smart insights vs. passive data dumps</li>
            </ul>
          </div>

          {/* Solution Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🔧️ Solutions</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              We shipped core design concepts that focused on clarity, simplicity, and support:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>A dynamic homepage tailored to business goals</li>
              <li>Smart alerts for overdue invoices or unusual transactions</li>
              <li>Visual dashboards to track goals and performance</li>
              <li>Scalable UI system that aligned with US Bank&apos;s design language</li>
            </ul>
          </div>

          {/* Final UI Designs Image */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/usbank-final-ui.jpg"
                  alt="Final UI Designs"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Final UI Designs
              </p>
            </div>
          </div>

          {/* Impact Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">📈 Impact</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              The new dashboard designs improved early usability testing scores and user satisfaction. Stakeholders noted improved perception of US Bank as a small business ally.
            </p>
          </div>

          {/* Reflections & Takeaways Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🤔 Reflections & Takeaways</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Designing for small businesses means balancing simplicity with sophistication</li>
              <li>Deep collaboration across strategy, UX, and engineering was key to execution</li>
              <li>Fast iteration and validation cycles helped us move with confidence</li>
            </ul>
          </div>

          {/* Success Snapshot Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🏆 Success Snapshot</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              US Bank moved forward with this initiative as part of their broader Business Essentials roadmap. The concepts we delivered influenced how the bank continues to serve its small business audience with empathy and modern tools.
            </p>
          </div>

          {/* Success Video */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                {/* Video Player with Poster Image */}
                <div className="relative w-full">
                  {/* Video Element - Hidden initially */}
                  <div id="video-wrapper" className="w-full" style={{ display: 'none' }}>
                    <video
                      id="usbank-video"
                      src="/video.mov"
                      className="w-full h-auto rounded-md"
                      controls
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Poster Image - Shown initially */}
                  <div
                    id="poster-wrapper"
                    className="w-full relative"
                  >
                    <img
                      src="/casestudy1.jpg"
                      alt="US Bank Case Study"
                      className="w-full h-auto rounded-md"
                    />
                    <button
                      onClick={() => {
                        const videoWrapper = document.getElementById('video-wrapper');
                        const posterWrapper = document.getElementById('poster-wrapper');
                        const video = document.getElementById('usbank-video') as HTMLVideoElement;

                        if (videoWrapper && posterWrapper && video) {
                          // Show video, hide poster
                          videoWrapper.style.display = 'block';
                          posterWrapper.style.display = 'none';

                          // Play the video
                          video.play();
                        }
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#CC0101] bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                US Bank Success Video Demo
              </p>
            </div>
          </div>



          {/* Next Project Link */}
          <div className="border-t border-gray-300 pt-12 mt-16 mb-40">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-6">Next Project</h2>
            <Link href="/projects/cnn" className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors text-xl">
              CNN Case Study
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
