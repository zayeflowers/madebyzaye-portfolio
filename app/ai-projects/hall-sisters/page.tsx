"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Container from '../../components/Container';
import PageLayout from '../../components/PageLayout';

export default function HallSisters() {
  return (
    <PageLayout navbarKey="navbar-hall-sisters">
      <main className="w-full text-black pt-[16px] pb-0 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9E9E9E]"></div>
        <Container key="container-hall-sisters">
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

          <div className="max-w-4xl mb-8">
            <div className="relative w-full aspect-video rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
              <iframe
                src="https://player.vimeo.com/video/1164179928?badge=0&autopause=0&player_id=0&app_id=58479"
                title="The Hall Sisters: A Texas True Crime Story"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-[family-name:var(--font-montserrat)] font-extrabold leading-[74px] lg:leading-[74px] tracking-[-0.04em] text-[#000000] mb-[16px] [text-edge:cap] [leading-trim:both]">
            The Hall Sisters
          </h1>

          <p className="text-xl font-[family-name:var(--font-montserrat)] font-medium mb-10 text-[#CC0101]">
            AI-Assisted Documentary Exploration
          </p>

          <div className="max-w-4xl space-y-8">
            <section>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Overview</h2>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
                <em>The Hall Sisters</em> is a documentary-style exploration examining identity, trauma, media narrative, and public perception through an AI-assisted research and storytelling workflow.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
                This project was an experiment in using generative AI not as a replacement for authorship, but as a structured research collaborator — helping organize information, synthesize perspectives, and refine narrative arcs across complex, emotionally charged subject matter.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-2">
                The goal was not sensationalism.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                The goal was clarity, documentation, and thoughtful narrative construction.
              </p>
              <div className="mt-6 rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
                <Image
                  src="/vlcsnap1.jpg"
                  alt="Hall Sisters project screenshot"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            </section>

            <div className="border-t border-[#9E9E9E] pt-4" />

            <section>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">The Challenge</h2>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
                True crime stories often become fragmented across news outlets, interviews, and social commentary. Over time, context is lost and nuance collapses into headlines.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-4">
                This project asked:
              </p>
              <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6 list-disc pl-6 space-y-2">
                <li>How can AI assist in organizing large volumes of source material?</li>
                <li>How can generative systems help identify narrative gaps?</li>
                <li>Can AI support ethical storytelling without distorting facts?</li>
                <li>How can long-form cultural documentation benefit from structured synthesis tools?</li>
              </ul>
              <div className="mt-6 rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
                <Image
                  src="/vlcsnap2.jpg"
                  alt="Hall Sisters project screenshot"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            </section>

            <div className="border-t border-[#9E9E9E] pt-4" />

            <section>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">My Approach</h2>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
                This was not a &quot;generate and publish&quot; experiment.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-4">
                The workflow combined:
              </p>
              <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6 list-disc pl-6 space-y-2">
                <li>Manual research and source verification</li>
                <li>AI-assisted pattern recognition</li>
                <li>Narrative structuring using prompt-based iteration</li>
                <li>Timeline reconstruction</li>
                <li>Script drafting and refinement</li>
                <li>Visual concept development</li>
              </ul>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-4">
                AI was used to:
              </p>
              <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6 list-disc pl-6 space-y-2">
                <li>Summarize interviews</li>
                <li>Identify recurring themes</li>
                <li>Map chronology</li>
                <li>Surface contradictions or missing perspectives</li>
                <li>Assist in draft restructuring</li>
              </ul>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                All outputs were reviewed, edited, and validated manually.
              </p>
              <div className="mt-6 rounded-[14px] overflow-hidden shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] border border-[#CCCCCC] border-opacity-50">
                <Image
                  src="/vlcsnap3.jpg"
                  alt="Hall Sisters project screenshot"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            </section>

            <div className="border-t border-[#9E9E9E] pt-4" />

            <section>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-6">AI Workflow & Research Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">1. Source Collection</h3>
                  <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                    Gathered news articles, interview transcripts, public statements, and related documentation.
                  </p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">2. Narrative Mapping</h3>
                  <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                    Used generative AI to cluster themes and identify dominant narrative threads.
                  </p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">3. Timeline Reconstruction</h3>
                  <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                    Structured events chronologically to understand cause-and-effect relationships.
                  </p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">4. Perspective Analysis</h3>
                  <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                    Examined how media framing shifted over time.
                  </p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">5. Script Development</h3>
                  <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                    Drafted and iterated long-form narration using AI-assisted outline refinement.
                  </p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl mb-2">6. Visual Direction</h3>
                  <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                    Developed documentary visual tone using generative tools for conceptual framing.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-[#9E9E9E] pt-4" />

            <section>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Why This Project Matters</h2>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-4">
                This work demonstrates how generative AI can support:
              </p>
              <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6 list-disc pl-6 space-y-2">
                <li>Long-form storytelling</li>
                <li>Cultural documentation</li>
                <li>Research synthesis</li>
                <li>Ethical narrative structuring</li>
                <li>Media literacy analysis</li>
              </ul>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                It reflects my broader interest in how emerging technologies can be applied responsibly in contexts involving identity, trauma, and community narratives.
              </p>
            </section>

            <div className="border-t border-[#9E9E9E] pt-4" />

            <section>
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Tools & Systems Used</h2>
              <ul className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] list-disc pl-6 space-y-2">
                <li>Generative AI (ChatGPT / Claude) for thematic synthesis and drafting support</li>
                <li>Prompt-based iterative refinement workflows</li>
                <li>Research validation & cross-referencing</li>
                <li>Visual concept generation tools</li>
                <li>Structured narrative mapping techniques</li>
              </ul>
            </section>

            <div className="border-t border-[#9E9E9E] pt-4" />

            <section className="pb-10">
              <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-2xl mb-4">Reflection</h2>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
                Working on <em>The Hall Sisters</em> reinforced something important:
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px] mb-6">
                AI is most powerful not when it replaces human thought —<br />
                but when it helps structure it.
              </p>
              <p className="font-[family-name:var(--font-montserrat)] text-lg leading-[28px]">
                This project reflects my approach to technology:<br />
                Intentional. Structured. Ethical. And grounded in context.
              </p>
            </section>
          </div>
        </Container>
      </main>
    </PageLayout>
  );
}
