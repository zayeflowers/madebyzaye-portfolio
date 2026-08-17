"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

export default function USBankProject() {
  return (
    <PageLayout navbarKey="navbar-usbank">
      <CaseStudyHero
        eyebrow="Case study · Enterprise UX"
        title="Redefining banking essentials"
        summary="One system across a fragmented product estate — rethinking what business essentials could look like for US Bank's small business customers."
        logoSrc="/usbank.svg"
        logoAlt="US Bank"
        backHref="/projects"
        backLabel="Back to case studies"
        meta={[
          { label: 'Role', value: 'Sr. UX Designer' },
          { label: 'Timeline', value: '2021 — 2023' },
          { label: 'Client', value: 'US Bank × Publicis Sapient' },
        ]}
      />

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/usbank-overview.jpg"
          alt="US Bank overview"
          caption="US Bank — Business Essentials overview"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>The challenge</h2>
        <p>
          Small business owners were struggling to find the right digital tools to
          manage their business finances. Many used workarounds or third-party services
          that lacked the integrated support and trust offered by their primary bank.
          US Bank saw an opportunity to redefine what &quot;business essentials&quot;
          could look like — more intuitive, more centralized, and deeply user-focused.
        </p>

        <h2>My role</h2>
        <p>
          As a Senior UX Designer, I partnered closely with strategy, research, and
          product teams to:
        </p>
        <ul>
          <li>Audit existing business tools</li>
          <li>Facilitate workshops to align on opportunity areas</li>
          <li>Build user flows and prototypes</li>
          <li>
            Lead usability testing and synthesize insights into product recommendations
          </li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/usbank-business-tools.jpg"
          alt="Business tools diagram"
          caption="Business tools diagram"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Discovery &amp; research</h2>
        <p>
          We uncovered that small business owners want more than transactional banking —
          they needed tools that could help with:
        </p>
        <ul>
          <li>Invoicing</li>
          <li>Cash flow visualization</li>
          <li>Document management</li>
          <li>Tax preparation</li>
          <li>Business credit tracking</li>
        </ul>

        <h2>Ideation</h2>
        <p>We explored new experiences across the business dashboard:</p>
        <ul>
          <li>Centralized homepage with integrated features</li>
          <li>A &quot;command center&quot; layout for finances, tasks, and notifications</li>
          <li>Quick actions to streamline repetitive tasks</li>
          <li>Modular UI that could scale with business growth</li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/usbank-wireframes.jpg"
          alt="Wireframes and prototypes"
          caption="Wireframes and prototypes"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Usability testing</h2>
        <p>We tested with 8 participants across 3 target segments:</p>
        <ul>
          <li>Solo entrepreneurs</li>
          <li>Growing small businesses</li>
          <li>Tech-savvy financial admins</li>
        </ul>

        <h3>Objectives</h3>
        <ul>
          <li>Validate relevance of new business banking concepts</li>
          <li>
            Test task flows for invoicing, document uploads, and transaction tracking
          </li>
          <li>Evaluate visual clarity and feature prioritization</li>
        </ul>

        <h3>Key findings</h3>
        <ul>
          <li>Users appreciated clear entry points into invoicing and cash flow tools</li>
          <li>Information hierarchy needed refinement for quicker navigation</li>
          <li>Users wanted smart insights, not passive data dumps</li>
        </ul>

        <h2>Solutions</h2>
        <p>
          We shipped core design concepts focused on clarity, simplicity, and support:
        </p>
        <ul>
          <li>A dynamic homepage tailored to business goals</li>
          <li>Smart alerts for overdue invoices or unusual transactions</li>
          <li>Visual dashboards to track goals and performance</li>
          <li>A scalable UI system aligned with US Bank&apos;s design language</li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/usbank-final-ui.jpg"
          alt="Final UI designs"
          caption="Final UI designs"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Impact</h2>
        <p>
          The new dashboard designs improved early usability testing scores and user
          satisfaction. Stakeholders noted an improved perception of US Bank as a small
          business ally.
        </p>

        <h2>Reflections &amp; takeaways</h2>
        <ul>
          <li>
            Designing for small businesses means balancing simplicity with sophistication
          </li>
          <li>
            Deep collaboration across strategy, UX, and engineering was key to execution
          </li>
          <li>Fast iteration and validation cycles helped us move with confidence</li>
        </ul>

        <h2>Success snapshot</h2>
        <p>
          US Bank moved forward with this initiative as part of their broader Business
          Essentials roadmap. The concepts we delivered influenced how the bank
          continues to serve its small business audience with empathy and modern tools.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <div className="frame">
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src="https://player.vimeo.com/video/1077971840?h=1b86caa263"
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="US Bank Demo Video"
            />
          </div>
          <figcaption className="frame-caption">US Bank success video demo</figcaption>
        </div>
      </section>

      <NextProject title="CNN Election Center" href="/projects/cnn" />
    </PageLayout>
  );
}
