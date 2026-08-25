"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const PRINCIPLES = [
  'Ask only what is relevant to the customer’s situation, using earlier responses to shape later questions.',
  'Use plain language and supporting guidance to explain unfamiliar insurance concepts.',
  'Preserve customer progress where possible so the journey does not have to be completed in one sitting.',
  'Make downstream actions clear, including when supporting documents or adjuster follow-up may be needed.',
  'Treat mobile as a primary context rather than a scaled-down desktop experience.',
];

/** Behavioral evidence from Quantum Metric, and what the team did about it. */
const EVIDENCE = [
  {
    evidence: 'Customers paused or left while entering provider details.',
    reading:
      'They may have been searching elsewhere for provider information, creating timeout and return risk.',
    response:
      'Provider search and autocomplete reduced a localized source of effort.',
  },
  {
    evidence: 'Customers struggled with Lost Wages and multiple employers.',
    reading:
      'The structure and quantity of employment information were difficult to understand.',
    response:
      'The team reviewed sequencing and guidance, while documenting platform limitations.',
  },
  {
    evidence: 'Sessions exposed broken paths and technical failures.',
    reading:
      'Some abandonment reflected infrastructure problems rather than customer intent.',
    response:
      'Evidence was shared with engineering to diagnose and repair the affected flows.',
  },
];

const OUTCOMES = [
  { value: '25.8% → 30.2%', label: 'Completion after continued iteration' },
  { value: '5 states', label: 'No-fault form expansion' },
  { value: '1 evidence loop', label: 'Behavioral monitoring after launch' },
];

export default function GeicoProject() {
  return (
    <PageLayout navbarKey="navbar-geico">
      <CaseStudyHero
        eyebrow="Case study · GEICO Claims"
        title="Simplifying Injury Reporting"
        summary="Transforming a phone-dependent claims process into a guided, measurable self-service experience."
        logoSrc="/geico.svg"
        logoAlt="GEICO"
        backHref="/projects"
        backLabel="Back to case studies"
        meta={[
          { label: 'Role', value: 'Lead UX/UI Designer' },
          { label: 'Platform', value: 'Responsive web' },
          { label: 'Scope', value: 'End-to-end product design, strategy and prototyping' },
          {
            label: 'Partners',
            value: 'Product, engineering, content, research and compliance',
          },
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
          Reporting an injury after an accident is emotionally demanding. Customers may
          be managing pain, medical appointments, missed work or the effects of a
          traumatic event while being asked to recall detailed information for an
          insurance claim. Before Injury Intake, much of that reporting depended on
          direct conversations with adjusters. Customers had limited visibility into
          what information was needed, whether they had reported everything accurately
          or what would happen next.
        </p>
        <p>
          Injury Intake introduced a guided self-service path for documenting injuries,
          treatment, healthcare providers, lost wages, expenses and supporting evidence.
          My role was not simply to design a collection of forms. I helped shape the
          digital capability: translating operational and legal requirements into a
          coherent customer journey, aligning cross-functional partners and establishing
          ways to learn from customer behavior after launch.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <div className="panel panel--cream measure mx-auto">
          <div className="micro-label">The design question</div>
          <p className="display t-sm mt-[16px]">
            How might we digitize a sensitive, legally complex injury-reporting process
            without transferring the insurer&apos;s operational complexity onto the
            customer?
          </p>
        </div>
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>The challenge</h2>
        <p>
          GEICO needed enough detail to begin handling an injury claim: affected body
          parts, medical treatment, healthcare providers, work impact, expenses and
          supporting documentation. Customers, however, did not always have every detail
          available when they entered the experience. They could also be uncertain about
          what qualified as an expense, whether reporting an injury could affect their
          rates or whether the information they provided would be considered sufficient.
        </p>
        <p>
          The digital experience therefore had to do more than capture accurate data. It
          had to reduce cognitive burden, explain unfamiliar requirements in plain
          language and provide reassurance without making promises the claims process
          could not support. At the same time, the team was working within an
          infrastructure that limited how questions could be grouped, sequenced and
          summarized.
        </p>

        <h2>My role</h2>
        <p>
          As Lead UX/UI Designer, I owned the end-to-end digital experience, including
          design direction, interaction strategy, prototyping and alignment with the
          product roadmap. I translated complex requirements into understandable
          concepts, managed shifting priorities and guided designers through iterations.
        </p>
        <p>
          I partnered closely with product and engineering to define scope and
          feasibility; with content design to make insurance language more
          understandable; with research to surface customer concerns and satisfaction;
          and with compliance partners to account for legal and insurance requirements.
          I also advocated for behavioral monitoring through Quantum Metric, which gave
          the team greater visibility into abandonment, technical failures and unexpected
          customer behavior after launch.
        </p>
      </Prose>

      {/* VISUAL TO ADD — End-to-end journey map. Show the major stages only:
          introduction, injuries, treatment, providers, work impact/expenses,
          confirmation and supporting documents. Drop the export in /public and
          render it with <Figure> here. */}

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Shaping the digital journey</h2>
        <p>
          The first leadership challenge was determining how a previously conversational
          process should work as self-service. An adjuster can respond to ambiguity, ask
          follow-up questions and explain why information matters. A digital experience
          has to anticipate those needs through structure, content and conditional logic.
        </p>
        <p>
          I worked across disciplines to turn a large set of claims requirements into a
          sequence customers could navigate. The journey had to accommodate different
          circumstances: a customer might have several injuries, multiple healthcare
          providers, more than one employer, medical expenses, lost wages or documents to
          upload. Their earlier answers could also change what appeared later in the
          experience.
        </p>
      </Prose>

      <section className="section band-cream">
        <div className="micro-label mb-[24px]">Design principles</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[64px]">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle}
              className="border-t border-[color:var(--hair-strong)] py-[24px] max-sm:py-[18px] flex gap-4"
            >
              <span className="mono text-[11px] text-[color:var(--ink-42)] pt-[5px]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="body-copy-sm">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <Prose className="pt-[56px] pb-[40px] max-sm:pt-[32px] max-sm:pb-[24px]">
        <h2>Working within platform constraints</h2>
        <p>
          The platform could not always support the experience I believed customers
          needed. The team was limited in how multiple questions could be combined on a
          screen, and the infrastructure did not support a clear progress indicator
          across the full journey. This mattered because customers were being asked to
          complete a lengthy process without a reliable sense of where they were or how
          much remained.
        </p>
        <p>
          I advocated for an introduction that set expectations and for a stepper or
          similar orientation mechanism. While not every recommendation could be
          implemented, documenting these gaps helped distinguish experience debt from
          intentional design decisions and kept future improvements visible to the team.
        </p>
      </Prose>

      {/* VISUAL TO ADD — Flow evolution or information architecture. Pair an early
          requirements-heavy flow with the simplified journey. Annotate what was
          grouped, deferred or made conditional. */}

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>A visual solution under scrutiny</h2>
        <p>
          One of the most visible features was an interactive Body Map that allowed
          customers to identify injured areas. The hypothesis was straightforward: a
          visual interface could help customers locate an injury when they did not know
          the correct anatomical term. Implementing that idea was considerably more
          complex. Engineering had to support front and back views, left and right
          orientation, zoom behavior and more than 250 selectable areas.
        </p>
        <p>
          The early results challenged the assumption that a more visual interaction
          would automatically be more usable. The Body Map initially produced greater
          abandonment than the existing dropdown, and the experience was particularly
          difficult on mobile — the primary context for many customers. It took months of
          iteration before the Body Map outperformed the dropdown, and even then the team
          continued to question whether the added complexity produced a meaningfully
          better experience.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <div className="panel panel--cream measure mx-auto">
          <div className="micro-label">Leadership lesson</div>
          <p className="display t-sm mt-[16px]">
            A solution can be innovative, technically ambitious and stakeholder-supported
            without being better for customers. The design had to earn its place through
            evidence.
          </p>
        </div>
      </section>

      {/* VISUAL TO ADD — Body Map interaction. One desktop and one mobile screen,
          with short annotations about terminology, laterality, zoom and the mobile
          tradeoff. */}

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Building an evidence-based iteration loop</h2>
        <p>
          Launch metrics could show where customers left the experience, but they did not
          always explain why. I advocated for using Quantum Metric to observe customer
          behavior within the flow. Session evidence helped the team identify broken
          paths, timeouts and infrastructure problems that would otherwise have appeared
          only as unexplained abandonment. It also surfaced areas where customers paused,
          left the experience or struggled to complete required information.
        </p>
        <p>
          Customer feedback added important context. Some customers were unsure which
          expenses they could report, including transportation, gas, housekeeping or
          in-home support. Others felt pressure to provide enough evidence to make their
          injuries credible. These findings reinforced that the experience needed to
          communicate purpose and eligibility — not merely present more fields.
        </p>
      </Prose>

      <section className="section band-cream">
        <div className="micro-label mb-[24px]">From observation to iteration</div>

        <div className="hidden lg:grid grid-cols-3 gap-x-[48px] border-b border-[color:var(--hair-strong)] pb-[14px]">
          <span className="fact-k">Evidence</span>
          <span className="fact-k">What it suggested</span>
          <span className="fact-k">Design response</span>
        </div>

        {EVIDENCE.map((row) => (
          <div
            key={row.evidence}
            className="grid grid-cols-1 lg:grid-cols-3 gap-x-[48px] gap-y-[10px] border-b border-[color:var(--hair-strong)] py-[26px] max-sm:py-[20px]"
          >
            <p className="body-copy-sm text-[color:var(--black)]">{row.evidence}</p>
            <div>
              <span className="fact-k lg:hidden">What it suggested</span>
              <p className="body-copy-sm lg:mt-0 mt-[8px]">{row.reading}</p>
            </div>
            <div>
              <span className="fact-k lg:hidden">Design response</span>
              <p className="body-copy-sm lg:mt-0 mt-[8px]">{row.response}</p>
            </div>
          </div>
        ))}

        <p className="body-copy measure mt-[36px] max-sm:mt-[24px]">
          These changes were important, but they were not the strategic center of my
          work. Their value was that they demonstrated a repeatable operating model:
          observe behavior, distinguish design friction from technical failure,
          prioritize the right intervention and measure again.
        </p>
      </section>

      <Prose className="pt-[56px] pb-[40px] max-sm:pt-[32px] max-sm:pb-[24px]">
        <h2>Connecting supporting documents to the journey</h2>
        <p>
          Customers who reported lost wages, medical expenses or treatment details could
          be directed to upload supporting evidence such as pay stubs or related
          documents. Document Upload existed as a separate experience, so Injury Intake
          had to provide a clear transition rather than imply that the customer was still
          inside the same flow.
        </p>
        <p>
          The confirmation experience used customers&apos; earlier responses to identify
          relevant next steps, including supporting documents and other claim actions.
          This helped the journey end with direction rather than a generic submission
          message, although the absence of a full review page remained a limitation.
        </p>
      </Prose>

      {/* VISUAL TO ADD — Confirmation and next steps. Show how previous answers
          generated relevant next steps and the transition into the separate
          Document Upload experience. */}

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Outcomes</h2>
        <p>
          Following launch and continued iteration, completion increased from
          approximately 25.8% to 30.2% — a 4.4 percentage-point improvement. The digital
          experience also reduced the amount of injury-intake correspondence that had to
          occur directly between customers and adjusters, while giving the organization a
          reusable foundation for additional injury-related capabilities.
        </p>
        <p>
          The work later expanded to support state-specific no-fault forms across New
          York, Maryland, Delaware, Hawaii and Pennsylvania. That expansion required
          mapping overlapping and state-specific requirements so the team could reuse
          common patterns without overlooking compliance differences.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6">
          {OUTCOMES.map((item) => (
            <div
              key={item.label}
              className="border-t border-[color:var(--hair-strong)] pt-[18px] pb-[18px] max-sm:pb-3"
            >
              <dd className="display t-sm">{item.value}</dd>
              <dt className="fact-k mt-[12px]">{item.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <Prose className="pb-[56px] max-sm:pb-[32px]">
        <h2>What I would improve</h2>
        <p>
          I would prioritize clearer journey-level orientation. Customers were asked to
          complete a long and emotionally demanding flow without a consistent way to
          understand their progress. A visible stepper, time expectation and stronger
          save-and-return cues would reduce uncertainty and help customers decide whether
          they were ready to continue.
        </p>
        <p>
          I would also continue testing the Body Map against lower-complexity
          alternatives on mobile rather than treating its implementation as settled.
          Finally, I would add a true review experience so customers could confirm
          injuries, providers, employment details and expenses before submission.
        </p>
      </Prose>

      <section className="section band-black">
        <div className="eyebrow eyebrow--light">
          <span className="rule" />
          Reflection
        </div>

        <blockquote className="display t-md mt-[26px] max-sm:mt-[18px] max-w-[24ch]">
          Simplification is not the removal of necessary complexity.
        </blockquote>

        <p className="lede mt-[22px] max-sm:mt-[16px] text-[color:var(--paper-70)]">
          It is the sequencing of complexity so customers only have to understand the
          decision directly in front of them.
        </p>

        <div className="measure mt-[38px] max-sm:mt-[26px] flex flex-col gap-[18px]">
          <p className="body-copy text-[color:var(--paper-60)]">
            This project reinforced the importance of measuring ambitious design ideas
            after launch. The most visually distinctive solution is not always the most
            usable, and leadership sometimes means questioning a solution the
            organization has already invested in.
          </p>
          <p className="body-copy text-[color:var(--paper-60)]">
            My contribution was helping the team move beyond a set of digital forms
            toward a measurable product capability — one that could respond to customer
            behavior, expose technical failures and evolve as claims and regulatory
            requirements changed.
          </p>
        </div>
      </section>

      <NextProject title="IHG Hotels" href="/projects/ihg" />
    </PageLayout>
  );
}
