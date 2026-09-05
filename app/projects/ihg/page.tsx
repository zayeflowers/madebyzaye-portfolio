"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const OUTCOMES = [
  {
    value: '$25M',
    label: 'Estimated annual incremental revenue on the IHG site, from nearly 122,000 additional bookings',
  },
  {
    value: '$33M',
    label:
      'Estimated annual incremental revenue on Holiday Inn Express, from roughly 145,000 additional bookings',
  },
  { value: '100+', label: 'Projects split-tested in 2019 — 42% more than in 2018' },
];

/** The six-step loop a test moved through, from product hypothesis to full rollout. */
const PROCESS_STEPS = [
  'Product Owners provide customer painpoints, a test idea or a hypothesis explaining why they think it could work, their goals (what success looks like), and any constraints.',
  'The core UX team determines whether the idea is relevant to the strategic goals of Web Channel leadership — revenue and bookings.',
  'If yes, the UX team starts data or research insights. If it is A/B testable, we create the hypothesis and test briefs. This also entails business discovery, analysis of the test, and prioritization.',
  'Design starts. UX tickets are submitted, a designer is assigned, concepts are created and approved, and test development begins.',
  'Build starts. Coding and production development (target campaign, metrics validation and creation), dev testing, QA testing, and preparation for launch.',
  'Run + analysis. Test monitoring for two weeks, results analysis, and a results deck created and shared with the Testing and Optimization team.',
];

const CONSTRAINTS = [
  {
    title: 'Time',
    body: 'Split-testing preparation and visual design both had to fit inside the test calendar.',
  },
  {
    title: 'Design systems',
    body: 'There was a separate design system for each brand — delivered as PDF branding guidelines rather than anything a designer could build from directly.',
  },
  {
    title: 'Stakeholder pushback',
    body: 'Proposals were regularly met with resistance, and approvals moved slowly.',
  },
  {
    title: 'Measuring UX',
    body: 'The larger obstacle was a lack of trust in UX itself. Findings were often met with disbelief until they arrived as data.',
  },
  {
    title: 'Analytics',
    body: 'Adobe Analytics introduced its own problems — failed tests and JavaScript issues that cost us running time.',
  },
];

const DIDNT_WORK = [
  'Lack of trust in UX',
  'No cross-functional collaboration with the Research team',
  'Fear of change',
  'Podio (project management)',
  'Design systems delivered as PDF files from Branding',
  'Slow approvals from stakeholders',
  'No Slack',
];

const WORKED_WELL = [
  'Collaboration with Devs and Product',
  'Feedback from Product Owners',
  'Research and feedback tools',
  'Analytics (Google and Adobe)',
  'Sketch and Adobe XD',
  'Teamwork.com',
  'Project Managers',
  'Information sharing with other UX teams',
];

export default function IHGProject() {
  return (
    <PageLayout navbarKey="navbar-ihg">
      <CaseStudyHero
        eyebrow="Case study · Hospitality"
        title="Optimizing the Hotel Online User Experience"
        summary="Bookers kept telling us the same thing: they could not work out what a room actually cost. Rewriting the payment page around that one complaint lifted booking conversion 6% and now serves every IHG and Holiday Inn Express visitor."
        logoSrc="/ihg.svg"
        logoAlt="IHG"
        meta={[
          { label: 'Role', value: 'Senior UX Designer' },
          { label: 'Brands', value: 'IHG, Holiday Inn, Holiday Inn Express, Crowne Plaza' },
          {
            label: 'Tools',
            value: 'Sketch, Adobe Target, Adobe Analytics, Quantum Metric, Clicktale, ForeSee',
          },
          { label: 'Team', value: 'Product managers, project manager, data scientist, developers' },
        ]}
      />

      <section className="gutter pb-[40px] max-sm:pb-[26px]">
        <div className="border-t border-[color:var(--hair-strong)] pt-[30px] max-sm:pt-[22px] grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-[28px] lg:gap-[64px]">
          <div>
            <div className="fact-k">Outcome</div>
            <div className="display t-md mt-[14px] whitespace-nowrap">+6%</div>
            <p className="body-copy-sm mt-[12px]">
              Booking conversion on the IHG site, with revenue per visitor up 5%. The
              winning experience now serves all IHG and Holiday Inn Express traffic.
            </p>
          </div>

          <div>
            <div className="fact-k">In short</div>
            <div className="measure mt-[14px] flex flex-col gap-[16px]">
              <p className="body-copy">
                Feedback collected across the booking funnel kept returning to one
                complaint. On the payment page, a quarter of it was rate confusion —
                uncertainty about the total cost and what was included. On rate
                selection it was the top category again. People could not tell what a
                room actually cost.
              </p>
              <p className="body-copy">
                As Senior UX Designer I built the case for changing that page and ran it
                as an A/B test. Three challengers went up against the control; the
                winner streamlined the page and opened the rate details by default, so
                the nightly rate, taxes and fees were visible without a click. It lifted
                booking conversion 6% on IHG and 5% on Holiday Inn Express, and it
                shipped to all traffic on both brands.
              </p>
            </div>
            <a href="#overview" className="link-red mt-[24px] max-sm:mt-[18px]">
              Read the full case study
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
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

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/ihg/01-hero-breakfast.jpg"
          alt="A boy in glasses at a hotel breakfast table as a member of staff sets down a plate of pancakes"
          width={1440}
          height={1080}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2 id="overview" className="scroll-mt-[24px]">
          Introduction
        </h2>
        <p>
          I worked as a <strong>Senior UX Designer</strong> across IHG&apos;s brand
          sites — IHG, Holiday Inn, Holiday Inn Express and Crowne Plaza. My
          responsibilities covered visual and product design, competitor analysis,
          conceptual ideas, split-testing, analytics, and collaborating with the product
          team. The immediate team was product managers, a project manager, a data
          scientist and developers.
        </p>
        <p>
          The work was continuous optimization rather than a single redesign: a standing
          testing programme where product hypotheses were researched, designed, built,
          run for two weeks and either rolled out or retired on the evidence.
        </p>

        <h2>Process and collaboration</h2>
        <p>Every test moved through the same six steps.</p>
        <ol>
          {PROCESS_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          <strong>If successful, the test is implemented fully.</strong>
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/02-process-collaboration.jpg"
          alt="The six-step process, from Product Owners supplying a hypothesis through to test monitoring and a results deck"
          width={1800}
          height={1012}
          caption="The testing loop, from product hypothesis to full rollout"
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2 className="!mt-0">Tools and apps</h2>
        <p>
          Each phase of a test had its own instrumentation — qualitative session and
          interaction analysis going in, quantitative results analysis coming out.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/03-tools-and-apps.jpg"
          alt="A matrix of tools across Plan, Design, Build and Run + Analysis — Teamwork, Clicktale, ForeSee, Adobe Target, Sketch, Quantum Metric and Adobe Analytics"
          width={1800}
          height={1012}
          caption="Additional tools included Office 365, Opinionlab, Adobe Creative Cloud, Balsamiq and Ensighten"
        />
      </section>

      <section className="section band-cream">
        <h2 className="display t-md">Constraints</h2>

        <div className="mt-[46px] max-sm:mt-[28px] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[38px] max-sm:gap-y-[26px]">
          {CONSTRAINTS.map((item) => (
            <div key={item.title}>
              <h3 className="display text-[24px] leading-[1.1] tracking-[-0.03em]">
                {item.title}
              </h3>
              <p className="body-copy mt-[14px] text-[color:var(--ink-70)]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Prose className="pt-[56px] max-sm:pt-[36px] pb-[40px] max-sm:pb-[24px]">
        <h2>Audience painpoints</h2>
        <p>
          A ForeSee interceptor collected user feedback throughout the booking funnel.
          Our <strong>data scientist</strong> analyzed it, built categories from the
          responses and presented the findings; the UX team and the business then
          prioritized what to act on.
        </p>
        <p>
          On the payment page, <strong>rate confusion was 25% of all feedback</strong> —
          uncertainty about the total cost and what was included: parking, breakfast,
          deposit, tax, fees. Adding a guest or a special request accounted for 19%,
          login status 14%, hotel information and redemption 12% each, and navigation 9%.
        </p>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/ihg/04-painpoints-payment.jpg"
          alt="Feedback analysis of the payment page, with rate confusion the largest category at 25%"
          width={1800}
          height={1012}
          caption="Payment page feedback, categorized"
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/05-painpoints-rate-selection.jpg"
          alt="Feedback analysis of the rate selection page, with rate clarification the largest category at 28%"
          width={1800}
          height={1012}
          caption="Rate selection told the same story — rate clarification at 28%, special rates at 21%"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          The rate selection page repeated the pattern. Rate clarification was the
          largest category at 28%, followed by difficulty finding applicable special
          rates at 21%. The top three painpoints across the funnel were{' '}
          <strong>rate clarification</strong>, <strong>rates</strong> and{' '}
          <strong>room clarification</strong> — the same problem, described three ways.
        </p>

        <h2>Empathy map</h2>
        <p>
          Mapping what bookers were thinking, hearing, seeing and saying put the
          complaints in the user&apos;s own words. &ldquo;Confused by the tax rates. Not
          clear what the total price per night is.&rdquo; &ldquo;The initial page has too
          many rate options and it is unclear what they mean.&rdquo;
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/06-empathy-map.jpg"
          alt="An empathy map organised into Think and Feel, Hear, See, and Say and Do, filled with verbatim booker comments"
          width={1800}
          height={1012}
          caption="Verbatim feedback, arranged around the booker"
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2 className="!mt-0">Personas</h2>
        <p>
          Two personas carried the research forward. Both list a version of the same
          painpoint — for John the price not matching the listing, for Tiffany confusion
          about room rates.
        </p>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/ihg/07-persona-john.jpg"
          alt="Persona for John, 37, a project manager in Charlotte, North Carolina, whose painpoints include the price not matching the listing"
          width={1800}
          height={1012}
          caption="John — 37, project manager, travelling as a family"
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/08-persona-tiffany.jpg"
          alt="Persona for Tiffany, 32, a senior recruiter in Dallas, Texas, whose painpoints include being confused about room rates"
          width={1800}
          height={1012}
          caption="Tiffany — 32, senior recruiter, travelling solo"
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2 className="!mt-0">Competitive analysis</h2>
        <p>
          If rate transparency was the problem, it was worth knowing how the competition
          handled it. Marriott hides the full rate behind a{' '}
          <em>Summary of Charges</em> click and takes five steps to complete a booking.
          Hyatt displays the full rate details on load and takes four. Choice Hotels also
          takes four, but does not show full rate details on load — and pre-enrolls the
          user in its rewards programme, which registers an account. Only Hyatt was
          showing people what they were paying before being asked to pay it.
        </p>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/ihg/09-competitive-marriott.jpg"
          alt="Marriott's checkout, where full rate details are hidden behind a Summary of Charges control"
          width={1800}
          height={1012}
          caption="Marriott — rate details hidden behind a click, five steps to book"
        />
      </section>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/ihg/10-competitive-hyatt.jpg"
          alt="Hyatt's checkout, showing the full rate breakdown including occupancy tax, state hotel fee and sales tax on load"
          width={1800}
          height={1012}
          caption="Hyatt — full rate details on load, four steps to book"
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/11-competitive-choice.jpg"
          alt="Choice Hotels' checkout, which does not show full rate details on load and pre-enrolls the user in Choice Privileges Rewards"
          width={1800}
          height={1012}
          caption="Choice Hotels — four steps, but rate details hidden and rewards enrollment pre-checked"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Design decisions and split testing</h2>
        <p>
          The payment page had been redesigned shortly before, to fix UX issues raised in
          user testing. The sign-in CTA moved into the form area and reservation details
          moved to the top of the page. But the layout had also become a single long
          column — which, for bookers who were not signed in, produced a page that
          required <em>more</em> scrolling than the design it replaced.
        </p>
        <p>We ran three challengers against the control.</p>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/ihg/12-experience-a-control.jpg"
          alt="Experience A, the control, annotated with questions about unused space and hidden rate details"
          width={1800}
          height={1012}
          caption="Experience A (control) — “Why are we hiding important information?”"
        />
      </section>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/ihg/13-experience-b-chase.jpg"
          alt="Experience B, streamlined with the Chase advertisement moved to the right column"
          width={1800}
          height={1012}
          caption="Experience B — streamlined, with the Chase ad moved right"
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/14-experience-c-rate-details.jpg"
          alt="Experience C, streamlined with the rate details section opened by default in the right column"
          width={1800}
          height={1012}
          caption="Experience C — streamlined, with rate details open by default on large viewports"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Outcomes</h2>
        <p>
          <strong>Experience C won.</strong> The streamlined page with rate details open
          by default consistently outperformed the control. On the IHG site, booking
          conversion increased 6% and revenue per visitor 5%. On the Holiday Inn Express
          site, booking conversion increased 5% and revenue per visitor 5%. Both were
          statistically significant.
        </p>
        <p>The winning experience:</p>
        <ul>
          <li>Removed the top brand navigation bar and global navigation links</li>
          <li>Condensed the reservation summary</li>
          <li>Eliminated repetitive copy and excess spacing</li>
          <li>Increased the size of form section headers</li>
          <li>
            Flipped the payment section background to dark grey to differentiate it and
            visually emphasize security
          </li>
          <li>
            Moved the Geotrust and TRUSTe icons up from the footer into the payment
            section, to answer anxiety about card and page security where it occurs
          </li>
          <li>Reduced the size of the legal language</li>
          <li>
            Opened the rate details by default in the right column — on large viewports
            only, since on mobile&apos;s single column that would have undercut the
            effort to reduce page length
          </li>
        </ul>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/15-outcomes-winning-tactics.jpg"
          alt="The winning experience alongside the list of tactics that produced the lift"
          width={1800}
          height={1012}
          caption="The winning page, and the tactics behind it"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          The device split was the more interesting finding. Desktop lifts came from a
          combination of content streamlining <em>and</em> rate details exposure, while
          mobile lifts came from streamlining alone. Bookers appear to want different
          things depending on the device: desktop users crave more information at
          checkout, mobile users want the basics and a quick exit.
        </p>
        <p>
          The winner also drove stronger bookings with both audiences — anonymous visitor
          bookings up 5%, explicit member bookings up 3% — and is now served to all
          traffic on the IHG and Holiday Inn Express brand sites (US and UK
          English-speaking audiences) through Adobe Target.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/16-metrics-by-brand.jpg"
          alt="Booking conversion and revenue metrics by brand, showing Experience C at a 6.3% booking conversion lift for IHG and 5.3% for Holiday Inn Express"
          width={1800}
          height={1012}
          caption="Booking conversion and revenue metrics by brand"
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2 className="!mt-0">The testing programme</h2>
        <p>
          Over 100 projects were tested in 2019 — 42% more than in 2018, and an average
          of eight a month. More than 75% of our A/B split-testing was successful across
          the IHG brands.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/ihg/17-projects-tested.jpg"
          alt="Annual projects tested, rising from 36 in 2016 to 40 in 2017, 70 in 2018 and 100 in 2019"
          width={1800}
          height={1012}
          caption="Annual projects tested, 2016–2019"
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <div className="border-t border-[color:var(--hair-strong)] pt-[30px] max-sm:pt-[22px] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[24px]">
          <div>
            <div className="fact-k">What didn&apos;t work so well</div>
            <ul className="rich-text mt-[18px] flex flex-col gap-[10px]">
              {DIDNT_WORK.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="fact-k">What worked well</div>
            <ul className="rich-text mt-[18px] flex flex-col gap-[10px]">
              {WORKED_WELL.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Learnings</h2>
        <p>
          I received a lot of pushback from stakeholders about the feedback coming from
          our users. Often it was met with disbelief. It was only when I collaborated
          with a <strong>data scientist</strong> and was able to summarize the findings
          and present them to the team that we got several people on board to make
          changes. It was a lesson I learned from other UX teams: data will always
          support design-driven decisions.
        </p>
        <p>
          A/B split-testing turned out to be a powerful way to measure success — using
          data research, data analysis in Quantum Metric, competitor analysis and user
          testing as the foundation for deciding where to focus testing effort.
        </p>
        <p>
          The other learning was about autonomy: maintaining the ability to test outside
          the normal web confines when needed, in order to improve what we learned and
          what we shipped.
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
