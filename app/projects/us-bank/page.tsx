"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const ACTIVITIES = [
  'Workshops (w/ US Bank Team)',
  'Competitive Analysis',
  'Card sorting sessions (Navigation)',
  'User Interviews',
  'Wireframes',
  'Visual Design',
  'Concept Testing',
];

export default function USBankProject() {
  return (
    <PageLayout navbarKey="navbar-usbank">
      <CaseStudyHero
        eyebrow="Case study · Enterprise UX"
        title="Redefining Banking Essentials with US Bank"
        summary="A new digital and human experience for Business Banking — one snapshot view of the money, clear navigation to the tools, and outside apps brought into a single interface."
        logoSrc="/usbank.svg"
        logoAlt="US Bank"
        meta={[
          { label: 'Role', value: 'Senior UX Designer' },
          { label: 'Client', value: 'US Bank × Publicis Sapient' },
          { label: 'Launched', value: 'February 2023' },
        ]}
      />

      <section className="gutter pb-[40px] max-sm:pb-[26px]">
        <div className="border-t border-[color:var(--hair-strong)] pt-[30px] max-sm:pt-[22px] grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-[28px] lg:gap-[64px]">
          <div>
            <div className="fact-k">Outcome</div>
            <div className="display t-md mt-[14px] whitespace-nowrap">Feb 2023</div>
            <p className="body-copy-sm mt-[12px]">
              US Bank moved forward with the vision and launched the Business Essentials
              Dashboard.
            </p>
          </div>

          <div>
            <div className="fact-k">In short</div>
            <div className="measure mt-[14px] flex flex-col gap-[16px]">
              <p className="body-copy">
                Small business owners use banks for transactions but run the business
                somewhere else — QuickBooks, Square, an accountant they trust. They do not
                expect their bank to offer relevant advice.
              </p>
              <p className="body-copy">
                As Senior UX Designer I led the design of a Business Banking experience
                built around that gap: one snapshot view of the money, clear navigation to
                the tools, and outside apps integrated into a consistent interface. We
                tested the vision with nine small business owners, learned where it was
                still unclear, and refined it into the concepts US Bank took forward.
              </p>
            </div>
            <a href="#overview" className="link-red mt-[24px] max-sm:mt-[18px]">
              Read the full case study
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <Prose className="pb-[48px] max-sm:pb-[28px]">
        <blockquote className="display t-sm text-center max-w-[46ch] mx-auto">
          U.S. Bank and Publicis Sapient collaborated on a new digital and human
          experience for Business Banking. The vision aimed to better align with business
          owners&apos; needs, provide a snapshot view of information, and offer clear
          navigation to tools. It also integrated tools into a more consistent interface
          and validated the vision with customers.
        </blockquote>
      </Prose>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2 id="overview" className="scroll-mt-[24px] !mt-0">
          Role
        </h2>
        <p>Senior UX Designer</p>
        <p>
          <strong>Overview</strong>: I led the design of a transformative Business Banking
          experience. Aligning with business owners&apos; needs, I ensured clarity,
          consistency, and customer-validated excellence in information display and tool
          navigation.
        </p>

        <h2>Problem</h2>
        <p>
          Small business owners use banks just for transactions but run their business
          elsewhere. They don&apos;t expect relevant advice from their bank.
        </p>

        <h2>Our Business Essentials Opportunity</h2>
        <p>
          Small business owners use banks for transactions, yet they run their business
          through services like QuickBooks and Square. Business owners do not expect their
          bank to offer relevant advice — preferring guidance from their network and
          trusted partners like an accountant or lawyer who understands what is unique
          about their business or industry.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/usbank/01-business-essentials-framework.png"
          alt="The U.S. Bank Business Essentials framework — Pay & Receive, View & Manage, and Plan & Grow — beside a matrix placing Bank of America, Chase, TD Bank, Revolut, Gusto, Xero and QuickBooks across digital-only and digital-plus-in-person offerings"
          width={1800}
          height={606}
        />
      </section>

      <section className="section band-navy">
        <h2 className="display t-md text-center">Process</h2>

        <div className="mt-[46px] max-sm:mt-[28px] grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-[40px] lg:gap-[64px] items-start">
          <Figure
            src="/usbank/02-process-diagram.png"
            alt="A five-step process — Empathize, Research, Ideate, Prototype, Test — with a marker showing the team started at Research"
            width={1705}
            height={670}
            className="!border-0 !bg-transparent"
          />

          <div>
            <h3 className="display text-[24px] leading-[1.1] tracking-[-0.03em]">
              Activities:
            </h3>
            <ul className="mt-[20px] flex flex-col gap-[10px]">
              {ACTIVITIES.map((item) => (
                <li key={item} className="body-copy text-[color:var(--paper-70)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Prose className="pt-[56px] max-sm:pt-[36px] pb-[24px] max-sm:pb-[16px]">
        <h2 className="!mt-0 text-center">Ideation</h2>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/usbank/03-ideation-invoicing.png"
          alt="Invoicing wireframe with a static left-side navigation grouping Banking, Expenses, Sales, Projects, Workers, Reports, Taxes and Accounting, and All, Drafts, Outstanding and Overdue modules"
          width={1800}
          height={1194}
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[24px]">
          <ul className="prose-zaye flex flex-col gap-[10px]">
            <li>Uses a delineated grouping navigation (similar to QuickBooks and Talech)</li>
            <li>Static left-side nav. For easy navigation</li>
            <li>Expands as you click : drop-down</li>
            <li>Easy access to Apps hub to install internal and external apps</li>
          </ul>

          <ul className="prose-zaye flex flex-col gap-[10px]">
            <li>Tailored modules and tools suited for the selected task tab (i.e., Invoicing)</li>
            <li>Support Hub as a part of global nav</li>
            <li>
              Nav recommended for ease of use, simplified hierarchy and delineated
              structure to better support a task-oriented experience
            </li>
          </ul>
        </div>
      </section>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <div className="border-t border-[color:var(--hair-strong)] pt-[38px] max-sm:pt-[26px] grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-[28px] lg:gap-[56px] items-start">
          <ul className="prose-zaye flex flex-col gap-[10px]">
            <li>One place for all apps and integrations</li>
            <li>
              Users want to be integrated with their accounting, payroll, and other
              business applications
            </li>
            <li>Manage all → integrated apps</li>
            <li>
              If you click on one, each has a dedicated product page. This way users know
              exactly how the app will help them Onboarding Dashboard
            </li>
          </ul>

          <Figure
            src="/usbank/04-apps-hub.png"
            alt="Apps hub wireframe showing a dedicated US Bank Invoicing product page with key features, an about section and a Try US Bank Invoicing Now button"
            width={1488}
            height={988}
          />
        </div>
      </section>

      <section className="section band-navy">
        <h2 className="display t-md">
          Failing <em>forward</em>
        </h2>

        <div className="mt-[46px] max-sm:mt-[28px] grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-[36px] lg:gap-[56px] items-start">
          <div>
            <p className="body-copy font-semibold text-[color:var(--white)]">
              Feedback received from our initial first phase:
            </p>
            <ul className="mt-[20px] flex flex-col gap-[12px]">
              <li className="body-copy text-[color:var(--paper-70)]">
                Wireframe aesthetics are nice, clean
              </li>
              <li className="body-copy text-[color:var(--paper-70)]">
                App integration is interesting, but may confuse users who have to navigate
                back and forth.
              </li>
              <li className="body-copy text-[color:var(--paper-70)]">
                We may need to rethink the nomenclature in the menu
              </li>
              <li className="body-copy text-[color:var(--paper-70)]">
                <strong className="text-[color:var(--white)]">
                  &ldquo;It&apos;s a banking app.&rdquo;
                </strong>{' '}
                The modules shouldn&apos;t have the same weight as the main transactions on
                the screen.
              </li>
            </ul>
          </div>

          <Figure
            src="/usbank/05-failing-forward-wireframes.png"
            alt="Three overlapping first-phase wireframes — the Invoicing list, a Good morning dashboard with to-dos and charts, and the Apps product page"
            width={1493}
            height={816}
            className="!border-0 !bg-transparent"
          />
        </div>
      </section>

      <Prose className="pt-[56px] max-sm:pt-[36px] pb-[24px] max-sm:pb-[16px]">
        <h2 className="!mt-0 text-center">Concept Testing</h2>
        <p className="text-center">
          We recruited 9 participants based on U.S. Bank&apos;s key personas across the
          micro business and Tier 1 segments.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/usbank/06-concept-testing-participants.png"
          alt="Nine research participants grouped into Micro, Tier 1 and Tier 2 segments, alongside the banks and apps they use — Chase, Security Bank, US Bank, Bank of America, QuickBooks, Square, Shopify, Zelle, Venmo and PayPal"
          width={1800}
          height={691}
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2 className="!mt-0 text-center">Testing Objectives</h2>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/usbank/07-testing-objectives.png"
          alt="Four testing objectives — navigation, usefulness of dashboard concepts, vision concept validation, and uncovering experience gaps — each with its research questions"
          width={1800}
          height={796}
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2 className="!mt-0 text-center">Key Findings</h2>
        <p className="text-center">
          Concepts tested well, participants got the key ideas - and they are valuable to
          them. Now, we need to move into more refined designs to enhance the areas that
          were not clearly understood and provide some additional thinking.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/usbank/08-key-findings.png"
          alt="Two columns of findings — what worked well, and what to address in next steps including vague navigation categories and cashflow clarification"
          width={1800}
          height={506}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2 className="!mt-0 text-center">Concepts / Solutions</h2>
        <p>
          Designs successfully allowed participants to envision what an integrated and
          one-stop small business accounting experience may look like.
        </p>
        <ul>
          <li>
            Concepts address participants&apos; key issue of having their banking
            information spread across many sources
          </li>
          <li>
            Many commented on the streamlined ways to look at their accounts and reduces
            their &ldquo;current pain&rdquo; of looking at too many financial institutions
            and accounts
          </li>
        </ul>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/usbank/09-dashboard-accounts.png"
          alt="Business Essentials dashboard showing all accounts in one view, recent activity, a weekly cashflow chart, scheduled payments, a to-do list and app integrations"
          width={1800}
          height={1387}
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/usbank/10-dashboard-cashflow.png"
          alt="Business Essentials dashboard cashflow view with a forecast snapshot warning of a shortfall, recent transactions, top expenses and recommended tools"
          width={1800}
          height={2016}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2 className="!mt-0 text-center">Impact</h2>
        <p className="text-center">
          Overall concepts tested well and customers responded positively. Identified key
          areas for refinement in navigation, cashflow specifics, and app integration.
        </p>

        <h2 className="text-center">Reflections / Obstacles</h2>
        <ul>
          <li>Unable to design outside of the box due to a design system</li>
          <li>Too much emphasis on apps/tools than the banking experience (wireframes)</li>
          <li>
            Main obstacle was unclear navigation categories and cash flow data specifics,
            which concepts testing helped uncover.
          </li>
        </ul>

        <h2 className="text-center">Success Stories</h2>
        <ul>
          <li>
            The client (US Bank) moved forward for the new vision for Business Essentials
            Dashboard
          </li>
        </ul>
        <p>
          Participants liked the integrated account views and detailed workspace concepts,
          showing the vision resonates.
        </p>
        <p>Business Essentials Dashboard was launched in February 2023</p>
        <p>
          <a
            href="https://www.usbank.com/about-us-bank/company-blog/article-library/us-bank-upgrades-digital-experience-for-small-business-clients.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.usbank.com/about-us-bank/company-blog/article-library/us-bank-upgrades-digital-experience-for-small-business-clients.html
          </a>
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
              title="US Bank Business Essentials Dashboard demo"
            />
          </div>
          <figcaption className="frame-caption">
            US Bank Business Essentials Dashboard demo
          </figcaption>
        </div>
      </section>

      <NextProject title="CNN Election Center" href="/projects/cnn" />
    </PageLayout>
  );
}
