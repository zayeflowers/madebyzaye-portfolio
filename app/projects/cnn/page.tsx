"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

export default function CNNProject() {
  return (
    <PageLayout navbarKey="navbar-cnn">
      <CaseStudyHero
        eyebrow="Case study · Media"
        title="Storytelling with data"
        summary="CNN's Election Center — helping 150 million voters navigate complex political information during a pandemic and a divided political climate."
        logoSrc="/cnn.svg"
        logoAlt="CNN"
        backHref="/projects"
        backLabel="Back to case studies"
        meta={[
          { label: 'Role', value: 'Senior Product Designer' },
          { label: 'Timeline', value: '2020 election cycle' },
          { label: 'Tools', value: 'Figma, Fullstory' },
        ]}
      />

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/cnn1.png"
          alt="CNN Election Center hero"
          caption="CNN Election Center hero"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>The challenge</h2>
        <p>
          How do we help people navigate and make decisions in an election unlike any
          other? Our team at CNN was tasked with reaching over 150 million voters,
          guiding them through complex political information during a pandemic and a
          divided political climate.
        </p>

        <h2>My role</h2>
        <p>
          As Senior Product Designer, I led the UX efforts for data visualizations and
          storytelling. I worked across:
        </p>
        <ul>
          <li>Visual design, wireframing, and content strategy</li>
          <li>Quantitative &amp; qualitative analysis using tools like Fullstory</li>
          <li>Cross-functional collaboration with editorial, product, and engineering</li>
          <li>
            Stakeholder reviews with high-visibility contributors (legal, Wolf Blitzer,
            and others)
          </li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn2.png"
          alt="CNN collaboration and wireframing process"
          caption="Collaboration and wireframing process"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Discovery &amp; research</h2>
        <p>
          Our users had critical questions: Who are my elected officials? What changed
          since 2016? Which states are in play? What&apos;s a caucus? We synthesized
          feedback from research sessions and stakeholder interviews to inform our
          design priorities.
        </p>
        <h3>Primary goals</h3>
        <ul>
          <li>Show clear contrasts between candidates</li>
          <li>Empower users to interpret data — not steer them with bias</li>
          <li>Design interactions rooted in historical context and user participation</li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn3.png"
          alt="CNN demographic map visualization"
          caption="Demographic map visualization"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Ideation</h2>
        <p>
          We explored how shifting demographics affect election outcomes in swing states
          like Florida. My proposal was to incorporate visual timelines for historic
          voting patterns — ultimately scaled down to a 2016 comparison due to
          performance constraints.
        </p>
        <p>We also ideated on:</p>
        <ul>
          <li>Bar charts that highlight candidate contrast</li>
          <li>Demographic filters for deeper dives</li>
          <li>Keyword search and participation elements to drive engagement</li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn4.png"
          alt="CNN polling visualization mockups"
          caption="Polling visualization mockups"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Testing &amp; iteration</h2>
        <p>
          Initial concepts led to stakeholder debates over data density and editorial
          clarity. Through ongoing feedback, we simplified interfaces while preserving
          critical context. One major pivot was redesigning a polling visualization to
          remove clutter, move the legend to the top, and streamline color usage so
          users could understand candidate progress at a glance.
        </p>

        <h2>Constraints</h2>
        <ul>
          <li>
            <strong>Time:</strong> the election wasn&apos;t going to wait. We delivered
            on a fixed timeline.
          </li>
          <li>
            <strong>Technical feasibility:</strong> not all ideas could be supported by
            legacy systems and external APIs.
          </li>
          <li>
            <strong>Ad pressure:</strong> design decisions had to balance storytelling
            with space for advertising — a constant tension with editorial needs.
          </li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn5.png"
          alt="CNN final UI screens"
          caption="Final UI screens and charts"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Outcomes</h2>
        <p>
          CNN broke digital records in 2020, with over 215M monthly unique visitors
          globally, ranking #1 across every key digital metric for the year. Our
          Election Center work contributed to this historic moment in U.S. media
          engagement.
        </p>

        <h2>Reflections &amp; takeaways</h2>
        <ul>
          <li>
            Designing for democracy is layered — it&apos;s political, emotional, and
            data-driven
          </li>
          <li>Fast feedback cycles are crucial; we lost time chasing approvals</li>
          <li>
            Partnership with editorial and engineering was essential to ship thoughtful,
            scalable experiences
          </li>
        </ul>

        <h2>Final thought</h2>
        <p>
          This work taught me that impact isn&apos;t always about perfection — it&apos;s
          about designing under real constraints to help people understand the world.
          That&apos;s what makes product design powerful.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <div className="border-t border-[color:var(--hair-strong)] pt-[24px]">
          <div className="micro-label">Links</div>
          <ul className="rich-text mt-[18px] flex flex-col gap-[10px] text-[16px]">
            <li>
              <a
                href="https://www.cnn.com/election/2020/results/president"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNN Election 2020 Results: President
              </a>
            </li>
            <li>
              <a
                href="https://www.cnn.com/election/2020/presidential-polls"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNN Election 2020 Presidential Polls
              </a>
            </li>
          </ul>
        </div>
      </section>

      <NextProject title="GEICO Injury Intake" href="/projects/geico" />
    </PageLayout>
  );
}
