"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function CNNProject() {
  return (
    <PageLayout navbarKey="navbar-cnn">
      <main className="w-full text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-cnn">
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
                src="/cnn.svg"
                alt="CNN Logo"
                width={300}
                height={80}
                className="h-24 object-contain"
              />
            </div>
          </div>

          <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            CNN Election Center — Storytelling with Data
          </h1>



          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Senior Product Designer</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Timeline</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">2020 Election Cycle</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Figma, Fullstory</p>
            </div>
          </div>

          {/* Widescreen Image - CNN Election Hero */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-12">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/cnn1.png"
                  alt="CNN Election Center Hero"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                CNN Election Center Hero
              </p>
            </div>
          </div>

          {/* The Challenge Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🚩 The Challenge</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              How do we empower users to navigate and decide in an election unlike any in U.S. history? Our team at CNN was tasked with helping 150+ million voters engage with complex political information — amidst a pandemic and a deeply polarized climate.
            </p>
          </div>

          {/* My Role Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">💼 My Role</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              As Senior Product Designer, I led the UX efforts for data visualizations and storytelling. I worked across:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Visual design, wireframing, and content strategy</li>
              <li>Quantitative & qualitative analysis using tools like Fullstory</li>
              <li>Cross-functional collaboration with editorial, product, and engineering</li>
              <li>Stakeholder reviews with high-visibility contributors (legal, Wolf Blitzer, etc.)</li>
            </ul>
          </div>

          {/* Miro collaboration board or wireframes */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/cnn2.png"
                  alt="CNN Collaboration and Wireframing Process"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Collaboration and wireframing process
              </p>
            </div>
          </div>

          {/* Discovery & Research Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🔍 Discovery & Research</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              Our users had critical questions: Who are my elected officials? What changed since 2016? Which states are in play? What&apos;s a caucus? We synthesized feedback from research sessions and stakeholder interviews to inform our design priorities.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-4">Primary goals:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Show clear contrasts between candidates</li>
              <li>Empower users to interpret data — not steer them with bias</li>
              <li>Design interactions rooted in historical context and user participation</li>
            </ul>
          </div>

          {/* Demographic map or wireframe iteration */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/cnn3.png"
                  alt="CNN Demographic Map Visualization"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Demographic map and wireframe iterations
              </p>
            </div>
          </div>

          {/* Ideation Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">💡 Ideation</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              We explored how shifting demographics affect election outcomes in swing states like Florida. My proposal was to incorporate visual timelines for historic voting patterns — ultimately scaled down to a 2016 comparison due to performance constraints.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-4">We also ideated on:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Bar charts that highlight candidate contrast</li>
              <li>Demographic filters for deeper dives</li>
              <li>Keyword search and participation elements to drive engagement</li>
            </ul>
          </div>

          {/* Polling visualization mockups */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/cnn4.png"
                  alt="CNN Polling Visualization Mockups"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Polling visualization design iterations
              </p>
            </div>
          </div>

          {/* Testing & Iteration Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🧪 Testing & Iteration</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              Initial concepts led to stakeholder debates over data density and editorial clarity. Through ongoing feedback, we simplified interfaces while preserving critical context. One major pivot was redesigning a polling visualization to remove clutter, move the legend to the top, and streamline color usage (blue/red) to help users understand candidate progress at a glance.
            </p>
          </div>

          {/* Constraints Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🛠️ Constraints</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li><strong>Time:</strong> The election wasn&apos;t going to wait. We delivered on a fixed timeline.</li>
              <li><strong>Technical feasibility:</strong> Not all ideas could be supported by legacy systems and external APIs.</li>
              <li><strong>Ad pressure:</strong> Design decisions had to balance storytelling with space for advertising — a constant tension with editorial needs.</li>
            </ul>
          </div>

          {/* Final UI screens or charts */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-16">
            <div className="p-6">
              <div className="relative">
                <Image
                  src="/cnn5.png"
                  alt="CNN Final UI Screens"
                  width={1200}
                  height={675}
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Final UI screens and charts
              </p>
            </div>
          </div>

          {/* Outcomes Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">📈 Outcomes</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              CNN broke digital records in 2020, with over 215M monthly unique visitors globally — ranking #1 across every key digital metric for the year. Our Election Center work contributed to this historic moment in U.S. media engagement.
            </p>
          </div>

          {/* Reflections & Takeaways Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🤔 Reflections & Takeaways</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>Designing for democracy is layered — it&apos;s political, emotional, and data-driven</li>
              <li>Fast feedback cycles are crucial — we lost time chasing approvals</li>
              <li>Partnership with editorial and engineering was essential to ship thoughtful, scalable experiences</li>
            </ul>
          </div>

          {/* Final Thought Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🏆 Final Thought</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-base leading-[28px] mb-6">
              This work taught me that impact isn&apos;t always about perfection — it&apos;s about designing under real constraints to help people understand the world. That&apos;s what makes product design powerful.
            </p>
          </div>

          {/* Links Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">🔗 Links</h2>
            <ul className="space-y-2 font-[family-name:var(--font-montserrat)] text-base leading-[28px]">
              <li>
                <a
                  href="https://www.cnn.com/election/2020/results/president"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CC0101] hover:text-[#a50000] transition-colors underline"
                >
                  CNN Election 2020 Results: President
                </a>
              </li>
              <li>
                <a
                  href="https://www.cnn.com/election/2020/presidential-polls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CC0101] hover:text-[#a50000] transition-colors underline"
                >
                  CNN Election 2020 Presidential Polls
                </a>
              </li>
            </ul>
          </div>

          {/* Next Project Link */}
          <div className="border-t border-gray-300 pt-12 mt-16 mb-40">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-6">Next Project</h2>
            <Link href="/projects/geico" className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors text-xl">
              GEICO - Injury Intake
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
