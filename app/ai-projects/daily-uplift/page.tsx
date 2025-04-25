"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function DailyUplift() {
  return (
    <PageLayout navbarKey="navbar-daily-uplift">
      <main className="w-full text-black pt-[16px] pb-0 relative">
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

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[family-name:var(--font-montserrat)] font-extrabold leading-[74px] lg:leading-[74px] tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            Daily Uplift
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-8 text-[#CC0101]">
            An AI-powered wellness app that delivers mood-based affirmations and reflections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Role</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Owner, Design Engineer</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Status</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">Coming Soon (2024)</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">Tools</h2>
              <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Figma</a>,
                <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">React Native</a>,
                <a href="https://openai.com/api/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">OpenAI API</a>,
                <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#CC0101] hover:underline">Firebase</a>
              </p>
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Project Overview</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Daily Uplift is an AI-powered wellness app designed to provide personalized emotional support through mood-based messaging. The app uses natural language processing to generate affirmations and reflections that feel human, relevant, and genuinely helpful.
            </p>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Built with React Native and powered by OpenAI&apos;s API, Daily Uplift aims to create a more empathetic digital wellness experience that adapts to users&apos; emotional needs and provides meaningful support when they need it most.
            </p>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">The Problem</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              Wellness apps often feel sterile, generic, or overproduced. Users seeking daily motivation or emotional support are bombarded with cliché quotes or impersonal push notifications. There&apos;s a need for something softer, smarter, and more in tune with people&apos;s emotional realities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Mood-Based Messaging</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Users select their current emotional state — the app responds with a generated message tailored to that mood.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Personal Journaling</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Write, reflect, and revisit your growth. Entries are stored securely in Firebase and editable anytime.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Favorite Quotes & Authors</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  Bookmark your favorite affirmations or follow specific authors and themes for ongoing inspiration.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-3">Customizable Categories</h3>
                <p className="font-[family-name:var(--font-montserrat)] leading-[28px]">
                  From &quot;Emotional Support&quot; to &quot;Daily Mindset,&quot; categories evolve as we learn what users actually need — not just what&apos;s trendy.
                </p>
              </div>
            </div>

            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4 mt-12">Coming Soon</h2>
            <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
              We&apos;re polishing the experience, adding accessibility improvements, and expanding mood categories with more nuanced emotional ranges. The app will launch on iOS first, with Android and web versions in the future.
            </p>

            <div className="mt-8 mb-20">
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
    </PageLayout>
  );
}
