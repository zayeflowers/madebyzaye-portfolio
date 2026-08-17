"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const TOOLS = [
  { label: 'Twilio', href: 'https://www.twilio.com/' },
  { label: 'Next.js', href: 'https://nextjs.org/' },
  { label: 'Netlify', href: 'https://www.netlify.com/' },
  { label: 'Vercel', href: 'https://vercel.com/' },
];

export default function BrotherSignal() {
  return (
    <PageLayout navbarKey="navbar-brothersignal">
      <CaseStudyHero
        eyebrow="Case study · Product"
        title="Quiet affirmations at scale"
        summary="BrotherSignal turned a text message into a daily ritual for Black men — consent-first, no app required."
        backHref="/ai-projects"
        backLabel="Back to AI projects"
        meta={[
          { label: 'Role', value: 'Founder & Systems Architect' },
          { label: 'Status', value: 'Launched' },
          {
            label: 'Tools',
            value: (
              <>
                {TOOLS.map((tool, index) => (
                  <React.Fragment key={tool.label}>
                    {index > 0 && ', '}
                    <a href={tool.href} target="_blank" rel="noopener noreferrer">
                      {tool.label}
                    </a>
                  </React.Fragment>
                ))}
              </>
            ),
          },
        ]}
      />

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/brothersignal.jpg"
          alt="BrotherSignal"
          caption="BrotherSignal — SMS-based engagement platform"
        />
      </section>

      <Prose className="pb-[48px] max-sm:pb-[28px]">
        <h2>The problem</h2>
        <p>
          Many community-based initiatives rely on social media algorithms to reach
          their audience. For Black men specifically, there are few consistent,
          private, affirming digital touchpoints designed for everyday emotional
          support.
        </p>
        <p>
          Social feeds are noisy. Email has low open rates. Apps require downloads.
          SMS is direct, personal, and accessible. BrotherSignal was designed to
          create a low-friction, high-trust communication channel.
        </p>

        <h2>The solution</h2>
        <p>
          BrotherSignal is a scalable SMS-based engagement platform that delivers
          culturally relevant daily affirmations directly to subscribers&apos;
          phones. The system was designed to:
        </p>
        <ul>
          <li>Automate recurring message delivery</li>
          <li>Maintain content rotation without repetition</li>
          <li>Scale subscriber growth without manual effort</li>
          <li>Ensure compliance with SMS messaging standards</li>
          <li>Provide a simple onboarding experience</li>
        </ul>

        <h2>What was built</h2>
        <h3>Platform architecture</h3>
        <p>BrotherSignal includes:</p>
        <ul>
          <li>Custom landing page with subscriber capture form</li>
          <li>SMS opt-in workflow with compliance messaging</li>
          <li>Automated scheduling system (cron-based delivery)</li>
          <li>Dynamic content rotation logic</li>
          <li>API integration for message distribution</li>
          <li>Cloud-hosted deployment environment</li>
          <li>Version-controlled codebase</li>
        </ul>
        <p>
          The system operates without manual daily input. Once configured, it runs
          automatically.
        </p>

        <h3>Communication infrastructure</h3>
        <p>
          Twilio SMS API for message delivery. Automated subscriber management.
          Compliance-based opt-in and unsubscribe workflows.
        </p>

        <h3>Backend &amp; automation</h3>
        <p>
          Node-based serverless functions. Scheduled cron jobs for automated message
          dispatch. JSON-based content management structure. Environment variable
          configuration for secure deployment.
        </p>

        <h3>Web &amp; deployment</h3>
        <p>
          React / Next.js frontend architecture. Cloud hosting (Netlify / Vercel).
          GitHub version control.
        </p>

        <h3>AI integration</h3>
        <p>
          Generative AI tools used for content ideation and tone refinement.
          AI-assisted development workflows (Cursor / Claude).
        </p>

        <h2>My role</h2>
        <ul>
          <li>
            <strong>Founder &amp; Systems Architect</strong> — conceived the product
            strategy and brand direction
          </li>
          <li>Designed full UX flow from landing to opt-in confirmation</li>
          <li>Architected backend automation logic</li>
          <li>Integrated third-party SMS infrastructure</li>
          <li>Built and deployed the platform independently</li>
          <li>Managed ongoing iteration and testing</li>
        </ul>

        <h2>Impact &amp; early learnings</h2>
        <ul>
          <li>Validated feasibility of an automated SMS engagement model</li>
          <li>
            Demonstrated the high deliverability typical of SMS platforms (90%+ open
            rate industry average)
          </li>
          <li>
            Proved the ability to deploy working communication infrastructure without
            external engineering support
          </li>
          <li>
            Created a foundation for future expansion — donor alerts, event reminders,
            CRM integration
          </li>
        </ul>
      </Prose>

      <NextProject title="Candy Paint" href="/ai-projects/candy-paint" />
    </PageLayout>
  );
}
