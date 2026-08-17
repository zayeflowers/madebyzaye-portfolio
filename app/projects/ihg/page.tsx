"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

export default function IHGProject() {
  return (
    <PageLayout navbarKey="navbar-ihg">
      <CaseStudyHero
        eyebrow="Case study · Hospitality"
        title="Optimizing the booking experience"
        summary="Reducing friction across IHG's hotel booking journey — simplifying user flows and aligning the design system across brands."
        logoSrc="/ihg.svg"
        logoAlt="IHG"
        backHref="/projects"
        backLabel="Back to case studies"
        meta={[
          { label: 'Role', value: 'UX Designer / Research Lead' },
          { label: 'Timeline', value: '2019' },
          { label: 'Tools', value: 'Sketch, InVision, Fullstory' },
        ]}
      />

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>The challenge</h2>
        <p>
          IHG wanted to reduce friction in their hotel booking experience and improve
          conversion rates. With high bounce rates and user drop-off during the
          selection and checkout process, our challenge was to identify usability gaps
          and streamline the digital journey for both leisure and business travelers.
        </p>

        <h2>My role</h2>
        <p>
          I served as the UX Designer and Research Lead responsible for shaping the
          usability strategy. My contributions included:
        </p>
        <ul>
          <li>Conducting competitive audits and stakeholder interviews</li>
          <li>Facilitating usability tests and synthesizing key insights</li>
          <li>Creating UX reports, heatmaps, and behavioral analysis dashboards</li>
          <li>Collaborating with engineering and visual design to shape next steps</li>
        </ul>

        <h2>Discovery &amp; research</h2>
        <p>
          We ran moderated usability tests to better understand user friction points
          across the hotel selection, booking, and checkout flows. We also evaluated
          behavioral data using heatmaps and clickstream analysis.
        </p>
        <h3>Key findings</h3>
        <ul>
          <li>Users were confused by inconsistent filtering options across devices</li>
          <li>Room selection pages were overwhelming due to content hierarchy issues</li>
          <li>Mobile users had difficulty with calendar inputs and pricing clarity</li>
        </ul>

        <h2>Ideation &amp; solutions</h2>
        <p>After validating problem areas, we proposed several UX improvements:</p>
        <ul>
          <li>Reorganized filters and applied consistent UI logic across platforms</li>
          <li>Introduced quick-glance comparison for room types and amenities</li>
          <li>Streamlined date selectors for mobile-first users</li>
          <li>Added progressive disclosure patterns for pricing details</li>
        </ul>

        <h2>Testing the new experience</h2>
        <p>
          Our redesigned prototypes were tested with a mix of frequent travelers,
          first-time bookers, and business travel coordinators. We used Fullstory and
          session replays to identify micro-interactions that frustrated users and made
          real-time refinements during test cycles.
        </p>

        <h2>Outcomes</h2>
        <ul>
          <li>Increased clarity and ease-of-use on mobile booking flows</li>
          <li>Reduced task completion time for room selection and checkout</li>
          <li>Higher user satisfaction in follow-up surveys post-launch</li>
        </ul>

        <h2>Reflections &amp; takeaways</h2>
        <ul>
          <li>Booking experiences are emotional — users want speed and confidence</li>
          <li>Mobile parity shouldn&apos;t mean copy/paste — rethink the form factor</li>
          <li>Collaborative testing with devs early on prevents late-stage rework</li>
        </ul>

        <h2>Final thought</h2>
        <p>
          This project reminded me that the best digital hospitality feels human —
          clear, responsive, and thoughtful. Our team helped IHG move closer to that
          vision, one touchpoint at a time.
        </p>
      </Prose>

      <NextProject
        title="US Bank"
        href="/projects/us-bank"
        secondary={{ label: 'Download the PDF', href: '/ihg.pdf', external: true }}
      />
    </PageLayout>
  );
}
