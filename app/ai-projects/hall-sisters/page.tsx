"use client";

import React from 'react';
import Script from 'next/script';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const WORKFLOW = [
  {
    title: 'Source collection',
    description:
      'Gathered news articles, interview transcripts, public statements, and related documentation.',
  },
  {
    title: 'Narrative mapping',
    description:
      'Used generative AI to cluster themes and identify dominant narrative threads.',
  },
  {
    title: 'Timeline reconstruction',
    description:
      'Structured events chronologically to understand cause-and-effect relationships.',
  },
  {
    title: 'Perspective analysis',
    description: 'Examined how media framing shifted over time.',
  },
  {
    title: 'Script development',
    description:
      'Drafted and iterated long-form narration using AI-assisted outline refinement.',
  },
  {
    title: 'Visual direction',
    description:
      'Developed a documentary visual tone using generative tools for conceptual framing.',
  },
];

export default function HallSisters() {
  return (
    <PageLayout navbarKey="navbar-hall-sisters">
      <CaseStudyHero
        eyebrow="Case study · Documentary"
        title="The Hall Sisters"
        summary="A documentary-style exploration of identity, trauma, media narrative, and public perception through an AI-assisted research and storytelling workflow."
        meta={[
          { label: 'Role', value: 'Director, Researcher, Editor' },
          { label: 'Format', value: 'Long-form documentary' },
          { label: 'Tools', value: 'Generative AI, prompt-based iteration, manual verification' },
        ]}
      />

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <div className="frame">
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src="https://player.vimeo.com/video/1164179928?badge=0&autopause=0&player_id=0&app_id=58479"
              title="The Hall Sisters: A Texas True Crime Story"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <figcaption className="frame-caption">
            The Hall Sisters — a Texas true crime story
          </figcaption>
        </div>
      </section>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Overview</h2>
        <p>
          This project was an experiment in using generative AI not as a replacement
          for authorship, but as a structured research collaborator — helping organize
          information, synthesize perspectives, and refine narrative arcs across
          complex, emotionally charged subject matter.
        </p>
        <p>
          The goal was not sensationalism. The goal was clarity, documentation, and
          thoughtful narrative construction.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure src="/vlcsnap1.jpg" alt="Hall Sisters documentary still" />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>The challenge</h2>
        <p>
          True crime stories often become fragmented across news outlets, interviews,
          and social commentary. Over time, context is lost and nuance collapses into
          headlines.
        </p>
        <p>This project asked:</p>
        <ul>
          <li>How can AI assist in organizing large volumes of source material?</li>
          <li>How can generative systems help identify narrative gaps?</li>
          <li>Can AI support ethical storytelling without distorting facts?</li>
          <li>
            How can long-form cultural documentation benefit from structured synthesis
            tools?
          </li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure src="/vlcsnap2.jpg" alt="Hall Sisters documentary still" />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>My approach</h2>
        <p>This was not a &quot;generate and publish&quot; experiment. The workflow combined:</p>
        <ul>
          <li>Manual research and source verification</li>
          <li>AI-assisted pattern recognition</li>
          <li>Narrative structuring using prompt-based iteration</li>
          <li>Timeline reconstruction</li>
          <li>Script drafting and refinement</li>
          <li>Visual concept development</li>
        </ul>
        <p>AI was used to summarize interviews, identify recurring themes, map chronology, surface contradictions or missing perspectives, and assist in draft restructuring. All outputs were reviewed, edited, and validated manually.</p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure src="/vlcsnap3.jpg" alt="Hall Sisters documentary still" />
      </section>

      <section className="section band-cream">
        <div className="micro-label mb-[24px]">AI workflow &amp; research process</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[28px]">
          {WORKFLOW.map((step, index) => (
            <div
              key={step.title}
              className="border-t border-[color:var(--hair-strong)] py-[26px] max-sm:py-[20px]"
            >
              <span className="mono text-[11px] text-[color:var(--ink-42)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="display t-xs mt-[12px]">{step.title}</h3>
              <p className="body-copy-sm mt-[10px]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Prose className="pt-[56px] pb-[48px] max-sm:pt-[32px] max-sm:pb-[28px]">
        <h2>Why this project matters</h2>
        <p>This work demonstrates how generative AI can support:</p>
        <ul>
          <li>Long-form storytelling</li>
          <li>Cultural documentation</li>
          <li>Research synthesis</li>
          <li>Ethical narrative structuring</li>
          <li>Media literacy analysis</li>
        </ul>
        <p>
          It reflects my broader interest in how emerging technologies can be applied
          responsibly in contexts involving identity, trauma, and community narratives.
        </p>

        <h2>Reflection</h2>
        <p>
          Working on <em>The Hall Sisters</em> reinforced something important: AI is
          most powerful not when it replaces human thought, but when it helps structure
          it.
        </p>
        <p>
          This project reflects my approach to technology — intentional, structured,
          ethical, and grounded in context.
        </p>
      </Prose>

      <NextProject title="Candy Paint" href="/ai-projects/candy-paint" />
    </PageLayout>
  );
}
