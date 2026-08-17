"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

export default function GeicoProject() {
  return (
    <PageLayout navbarKey="navbar-geico">
      <CaseStudyHero
        eyebrow="Case study · Insurance"
        title="Injury Intake, rebuilt for real people"
        summary="Redesigning a critical part of the auto claims experience — where users report bodily injuries after an accident, at the end of a long, exhausting flow."
        logoSrc="/geico.svg"
        logoAlt="GEICO"
        backHref="/projects"
        backLabel="Back to case studies"
        meta={[
          { label: 'Role', value: 'Product Design Lead' },
          { label: 'Timeline', value: 'Q1 2024 — present' },
          { label: 'Tools', value: 'Figma, Quantum Metric, PowerBI' },
        ]}
      />

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/geico_banner.png"
          alt="GEICO Injury Intake"
          fit="contain"
          height_="h-[380px] max-sm:h-[220px]"
          caption="GEICO — Injury Intake experience"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Overview</h2>
        <p>
          Injury Intake is a critical part of GEICO&apos;s auto claims experience where
          users report bodily injuries after an accident. However, it&apos;s one of the
          last steps in a long, multi-screen flow, and it had a staggering abandonment
          rate by the time users reached it.
        </p>
        <p>
          My role as Lead UX Designer was to overhaul the experience. I led design and
          strategy for this phase, advocating for user needs while aligning with
          business goals and technical constraints.
        </p>

        <h2>Team &amp; platform</h2>
        <p>
          1 UX Lead, 1 Senior Content Strategist, 1 Product Manager, and 9+ engineers,
          working across web and mobile (MCP and SSC systems).
        </p>

        <h2>Problem</h2>
        <p>The existing Injury Intake flow suffered from:</p>
        <ul>
          <li>High drop-off rates at the first step</li>
          <li>Low engagement due to cognitive fatigue after 10–15 previous screens</li>
          <li>Form elements with no clear guidance</li>
          <li>Inconsistent UI patterns from siloed teams</li>
        </ul>

        <h2>My approach</h2>

        <h3>1. Mapped the end-to-end experience</h3>
        <p>
          I audited the real production flows using Quantum Metric and collaborated with
          product adjusters to understand how the data was used. This gave us a true
          picture of what our users were experiencing.
        </p>

        <h3>2. Identified drop-off pain points</h3>
        <p>
          Using analytics (Quantum Metric / PowerBI) and user feedback, I discovered
          users were often mentally fatigued by the time they reached Injury Intake.
          Many didn&apos;t know why they were answering more questions or how it
          connected to the claim&apos;s outcome.
        </p>

        <h3>3. Redesigned for clarity &amp; compassion</h3>
        <ul>
          <li>
            Prioritized empathy and tone in UI text: &quot;We know this part isn&apos;t
            easy. Let&apos;s take it step by step.&quot;
          </li>
          <li>Added sticky guidance and conditional logic to reduce overwhelm</li>
          <li>
            Proposed grouping medical questions into digestible sections: hospital and
            medical providers, wages
          </li>
        </ul>

        <h3>4. Prototyped &amp; usability tested</h3>
        <p>
          I created a functional prototype that brought early design concepts to life,
          enabling cross-functional teams to test interactions and gather actionable
          insights directly from users.
        </p>

        <h3>5. Navigated constraints &amp; alignment</h3>
        <p>
          I partnered closely with product and engineering to negotiate what could be
          released now versus later, and documented the pros and cons of future proposed
          features.
        </p>

        <h2>Outcome</h2>
        <ul>
          <li>
            <strong>Streamlined MVP:</strong> a phased rollout of the redesigned Injury
            Intake flow
          </li>
          <li>
            <strong>Increased visibility:</strong> my findings helped shift team
            understanding toward user mental load, not just screen count
          </li>
          <li>
            <strong>Foundation for future improvements:</strong> documentation and
            testing paved the way for enhancements like state form integration and
            uploaded documents
          </li>
        </ul>

        <h2>Reflection</h2>
        <p>
          This project reminded me that design isn&apos;t just about simplifying screens
          — it&apos;s about advocating for what the user has left to give. When we
          respect their emotional and cognitive bandwidth, we build better products and
          better trust.
        </p>
      </Prose>

      <NextProject title="IHG Hotels" href="/projects/ihg" />
    </PageLayout>
  );
}
