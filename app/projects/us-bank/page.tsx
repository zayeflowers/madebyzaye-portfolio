"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

export default function USBankProject() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar key="navbar-usbank" />

      <main className="w-full bg-[#f6f0e9] text-black pt-[16px] pb-24 min-h-screen relative">
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
            US Bank Case Study
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            Redesigning digital banking experiences for enhanced customer engagement
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Lead UX Designer</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Timeline</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">2020-2022</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Figma, Sketch, Adobe XD, InVision</p>
            </div>
          </div>

          {/* Widescreen Image - Project Overview */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-12">
            <div className="aspect-w-16">
              <Image
                src="/usbank-overview.jpg"
                alt="US Bank Digital Banking Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Project Overview Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Project Overview</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              As part of a strategic initiative to modernize US Bank's digital presence, I led the UX design efforts to reimagine their online banking platform. The project focused on creating a more intuitive, accessible, and engaging experience for customers across all digital touchpoints.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Working closely with stakeholders, developers, and the product team, we developed a comprehensive design system and user-centered workflows that significantly improved customer satisfaction and digital engagement metrics.
            </p>
          </div>

          {/* The Challenge Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">The Challenge</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              US Bank faced several challenges with their existing digital platform:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
              <li>An aging interface that didn't meet modern accessibility standards</li>
              <li>Fragmented user journeys across different banking services</li>
              <li>Low mobile adoption rates compared to industry benchmarks</li>
              <li>Customer feedback indicating confusion with navigation and feature discovery</li>
              <li>Technical limitations preventing rapid iteration and feature deployment</li>
            </ul>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Our goal was to address these challenges while creating a cohesive, future-proof digital experience that would position US Bank as a leader in digital banking innovation.
            </p>
          </div>

          {/* Research Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">User Research</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  We conducted extensive user research including:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-[family-name:var(--font-montserrat)] leading-[28px]">
                  <li>12 stakeholder interviews</li>
                  <li>24 customer interviews across different demographics</li>
                  <li>Analysis of 1,500+ customer feedback submissions</li>
                  <li>Competitive analysis of 8 leading banking platforms</li>
                  <li>Usability testing with 18 participants</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">Key Insights</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px] mb-4">
                  Our research revealed several critical insights:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-[family-name:var(--font-montserrat)] leading-[28px]">
                  <li>Users prioritized quick access to account balances and recent transactions</li>
                  <li>Mobile users struggled with complex tasks like transfers and bill payments</li>
                  <li>Personalization features were highly valued but underutilized</li>
                  <li>Security concerns were a major barrier to digital adoption for older demographics</li>
                  <li>Customers wanted clearer visualization of spending patterns and financial goals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Process Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Design Process</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Our design process followed a user-centered approach with multiple iterations and validation checkpoints:
            </p>
          </div>

          {/* Design Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">1. Discovery & Definition</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  We began by mapping the current user journeys, identifying pain points, and defining success metrics. This phase included stakeholder workshops, competitive analysis, and initial user research to establish a solid foundation for the redesign.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">2. Ideation & Prototyping</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  We created user flows, wireframes, and interactive prototypes for key journeys. Multiple design directions were explored through collaborative design studios with stakeholders and rapid prototyping sessions to test concepts early.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">3. Testing & Refinement</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Iterative usability testing with diverse user groups helped refine our designs. We conducted A/B testing on key interactions and gathered feedback from internal stakeholders to ensure the designs met both user needs and business requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Widescreen Image - Design System */}
          <div className="w-full bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50 mb-12">
            <div className="aspect-w-16">
              <Image
                src="/usbank-design-system.jpg"
                alt="US Bank Design System Components"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-600 italic">
                Design system components created for consistent implementation across all digital touchpoints
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">The Solution</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Our solution addressed the key challenges through several innovative features and improvements:
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="relative h-[200px]">
                <Image
                  src="/usbank-dashboard.jpg"
                  alt="Redesigned Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">Personalized Dashboard</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  A customizable dashboard that provides at-a-glance information about accounts, recent transactions, and financial insights. Users can configure widgets based on their preferences and banking habits.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="relative h-[200px]">
                <Image
                  src="/usbank-mobile.jpg"
                  alt="Mobile Banking Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">Streamlined Mobile Experience</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  A completely redesigned mobile experience with simplified navigation, touch-optimized interactions, and quick access to frequently used features. The mobile app was rebuilt from the ground up with performance and accessibility as core principles.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="relative h-[200px]">
                <Image
                  src="/usbank-transfers.jpg"
                  alt="Simplified Transfers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">Simplified Transfers & Payments</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Redesigned money movement workflows that reduced the steps required to complete transfers and bill payments. Intelligent defaults and contextual suggestions help users complete these tasks more efficiently.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <div className="relative h-[200px]">
                <Image
                  src="/usbank-insights.jpg"
                  alt="Financial Insights"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-4">Enhanced Financial Insights</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Data visualization tools that help users understand their spending patterns, track progress toward financial goals, and receive personalized recommendations for improving their financial health.
                </p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Results & Impact</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              The redesigned digital banking experience delivered significant improvements across key metrics:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
              <li><span className="font-bold">32% increase</span> in mobile banking adoption</li>
              <li><span className="font-bold">28% reduction</span> in customer support calls related to digital banking</li>
              <li><span className="font-bold">41% improvement</span> in task completion rates for key journeys</li>
              <li><span className="font-bold">User satisfaction scores</span> improved from 3.6/5 to 4.5/5</li>
              <li><span className="font-bold">18% increase</span> in digital engagement metrics</li>
            </ul>
          </div>

          {/* Lessons Learned Section */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Lessons Learned</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              This project provided valuable insights that have shaped my approach to designing financial products:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
              <li><span className="font-bold">Balance simplicity with functionality</span> - Financial applications require comprehensive features, but they must be presented in an intuitive way that doesn't overwhelm users.</li>
              <li><span className="font-bold">Design for trust</span> - In financial services, building user confidence through transparent design patterns and clear communication is essential.</li>
              <li><span className="font-bold">Accessibility is non-negotiable</span> - Ensuring all users can access financial services regardless of ability is both a legal requirement and ethical imperative.</li>
              <li><span className="font-bold">Cross-functional collaboration</span> - Working closely with developers, product managers, and compliance teams from the start leads to more feasible and successful outcomes.</li>
            </ul>
          </div>

          {/* Next Project Link */}
          <div className="border-t border-gray-300 pt-12 mt-16">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-6">Next Project:</h2>
            <Link href="/projects/cnn" className="inline-flex items-center font-[family-name:var(--font-montserrat)] font-medium text-[#CC0101] hover:text-[#a50000] transition-colors text-xl">
              CNN Case Study
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </main>
    </div>
  );
}
