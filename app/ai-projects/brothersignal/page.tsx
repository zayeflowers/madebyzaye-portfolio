"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function BrotherSignal() {
  return (
    <PageLayout navbarKey="navbar-brothersignal">
      <main className="w-full text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-brothersignal">
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
                src="/brothersignal.jpg"
                alt="BrotherSignal"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[family-name:var(--font-montserrat)] font-extrabold leading-[74px] lg:leading-[74px] tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            BrotherSignal
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            SMS-Based Engagement Platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Founder & Systems Architect</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Status</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Launched</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                <a href="https://www.twilio.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Twilio</a>,
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Next.js</a>,
                <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Netlify</a>,
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Vercel</a>
              </p>
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">The Problem</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Many community-based initiatives rely on social media algorithms to reach their audience. For Black men specifically, there are few consistent, private, affirming digital touchpoints designed for everyday emotional support.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Social feeds are noisy. Email has low open rates. Apps require downloads. SMS is direct, personal, and accessible. BrotherSignal was designed to create a low-friction, high-trust communication channel.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">The Solution</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              BrotherSignal is a scalable SMS-based engagement platform that delivers culturally relevant daily affirmations directly to subscribers&apos; phones. The system was designed to:
            </p>
            <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6 list-disc pl-6 space-y-2">
              <li>Automate recurring message delivery</li>
              <li>Maintain content rotation without repetition</li>
              <li>Scale subscriber growth without manual effort</li>
              <li>Ensure compliance with SMS messaging standards</li>
              <li>Provide a simple onboarding experience</li>
            </ul>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">What Was Built</h2>
            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Platform Architecture</h3>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-4">
              BrotherSignal includes:
            </p>
            <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6 list-disc pl-6 space-y-2">
              <li>Custom landing page with subscriber capture form</li>
              <li>SMS opt-in workflow with compliance messaging</li>
              <li>Automated scheduling system (cron-based delivery)</li>
              <li>Dynamic content rotation logic</li>
              <li>API integration for message distribution</li>
              <li>Cloud-hosted deployment environment</li>
              <li>Version-controlled codebase</li>
            </ul>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              The system operates without manual daily input. Once configured, it runs automatically.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Tools & Technologies Used</h2>
            <div className="space-y-8 mb-6">
              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Communication Infrastructure</h3>
                <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                  Twilio SMS API for message delivery. Automated subscriber management. Compliance-based opt-in and unsubscribe workflows.
                </p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Backend & Automation</h3>
                <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                  Node-based serverless functions. Scheduled cron jobs for automated message dispatch. JSON-based content management structure. Environment variable configuration for secure deployment.
                </p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Web & Deployment</h3>
                <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                  React / Next.js frontend architecture. Cloud hosting (Netlify / Vercel). GitHub version control.
                </p>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">AI Integration</h3>
                <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                  Generative AI tools used for content ideation and tone refinement. AI-assisted development workflows (Cursor / ChatGPT).
                </p>
              </div>
            </div>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">My Role</h2>
            <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6 list-disc pl-6 space-y-2">
              <li><strong>Founder & Systems Architect</strong> — Conceived the product strategy and brand direction</li>
              <li>Designed full UX flow from landing to opt-in confirmation</li>
              <li>Architected backend automation logic</li>
              <li>Integrated third-party SMS infrastructure</li>
              <li>Built and deployed the platform independently</li>
              <li>Managed ongoing iteration and testing</li>
            </ul>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Impact & Early Learnings</h2>
            <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-20 list-disc pl-6 space-y-2">
              <li>Validated feasibility of automated SMS engagement model</li>
              <li>Demonstrated high deliverability rate typical of SMS platforms (90%+ open rate industry average)</li>
              <li>Proved ability to deploy a working communication infrastructure without external engineering support</li>
              <li>Created foundation for future expansion (donor alerts, event reminders, CRM integration)</li>
            </ul>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
