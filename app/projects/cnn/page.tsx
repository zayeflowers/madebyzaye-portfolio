"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const OUTCOMES = [
  { value: '#1', label: 'Digital news destination every month of 2020 (Comscore)' },
  { value: '116M', label: 'Unique visitors on a single day in November' },
  { value: '46M', label: 'People on a single story' },
];

export default function CNNProject() {
  return (
    <PageLayout navbarKey="navbar-cnn">
      <CaseStudyHero
        eyebrow="Case study · Media"
        title="CNN Election Center — Storytelling with data"
        summary="The presidential election in the United States in 2020 was unlike any other in the country's history. Over 152 million Americans voted, and in the midst of a global pandemic it was critical to provide users with accurate information."
        logoSrc="/cnn.svg"
        logoAlt="CNN"
        backHref="/projects"
        backLabel="Back to case studies"
        meta={[
          { label: 'Role', value: 'Senior Product Designer' },
          { label: 'Timeline', value: 'Dec 2019 – Nov 2020' },
          { label: 'Tools', value: 'Sketch, Figma, Miro, Abstract, Jira, Zeplin, Fullstory' },
        ]}
      />

      <section className="gutter pb-[40px] max-sm:pb-[26px]">
        <div className="border-t border-[color:var(--hair-strong)] pt-[30px] max-sm:pt-[22px] grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-[28px] lg:gap-[64px]">
          <div>
            <div className="fact-k">Outcome</div>
            <div className="display t-md mt-[14px] whitespace-nowrap">215M</div>
            <p className="body-copy-sm mt-[12px]">
              Monthly average unique visitors globally in 2020 — CNN&apos;s largest
              digital audience in its history.
            </p>
          </div>

          <div>
            <div className="fact-k">In short</div>
            <div className="measure mt-[14px] flex flex-col gap-[16px]">
              <p className="body-copy">
                The 2020 presidential election was unlike any other in the
                country&apos;s history — 152 million voters, a global pandemic and a
                divided electorate. CNN&apos;s Election Center had to help people make
                sense of it without telling them what to think.
              </p>
              <p className="body-copy">
                I worked as a Senior Product Designer on the Election Center team,
                covering data visualization, product and visual design, competitor
                analysis, analytics and content strategy. I designed and iterated the
                state pages, Polling Center and the Who&apos;s Winning tracker —
                contrasting the candidates, surfacing shifting demographics and cutting
                each chart down to something a reader could grasp at a glance. Much of
                the work meant trading ambition for what legacy APIs and an immovable
                election date would allow.
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
          src="/cnn/01-hero-whitehouse.jpg"
          alt="The White House, tinted blue and red and overlaid with stock-chart and hexagon data graphics"
          width={1920}
          height={1080}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <blockquote className="display t-md max-w-[26ch] mx-auto text-center">
          &ldquo;How do we empower our users to decide on an Election unlike any that
          America had seen before?&rdquo;
        </blockquote>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/02-cnn-election-night.jpg"
          alt="The CNN.com homepage on election night with the headline Biden Wins"
          caption="CNN.com on Election night"
          width={1800}
          height={1447}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2 id="overview" className="scroll-mt-[24px]">
          Overview
        </h2>
        <p>
          The presidential election in the United States in 2020 was unlike any other in
          the country&apos;s history. Over 152 million Americans voted to elect a new
          president and federal, state, and local officials across the world. In the
          midst of a global pandemic, it was critical to provide users with accurate
          information.
        </p>

        <h2>Goals for the Project</h2>
        <p>
          The project&apos;s ultimate aim was to demonstrate a comparison between
          candidates, how the country&apos;s demographics are shifting, and how a few
          counties will be in play relative to previous elections. Past coverage had only
          shown surface-level information that most users were already aware of.
        </p>
        <p>
          <strong>High-level goals:</strong>
        </p>
        <ol>
          <li>Show a distinct contrast between candidates.</li>
          <li>
            Remove bias by presenting data visualizations that allow the user to draw
            their own conclusions.
          </li>
          <li>
            Provide users with specific facts (historical context) and encourage them to
            participate in the content and interactions.
          </li>
        </ol>

        <h2>Users and Audience</h2>
        <p>
          Our users told us their concerns about the election. Who are my elected
          officials? How do I update my voter information? What is a Caucus? Who&apos;s
          winning the fundraising race? What&apos;s changed from 2016 to 2020? What states
          are in play? How do I view the differences between the candidates?
        </p>
        <p>
          <strong>Target Audience</strong>
        </p>
        <p>
          &ldquo;Users who are involved in politics and enjoy delving into the world of
          data visualization.&rdquo;
        </p>

        <h2>User Feedback</h2>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/cnn/03-survey-popups.png"
          alt="Research slide: Pop Ups and Discussion Boards, an area of improvement, with verbatim user quotes"
          caption="User feedback from our survey findings (Research Team)"
          width={1800}
          height={1207}
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/04-survey-features.png"
          alt="Research slide listing requested features across topics, data, and other categories"
          caption="User recommendations (Research Team)"
          width={1800}
          height={1002}
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2>Timeline</h2>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/05-timeline.png"
          alt="Project timeline from the CNN Election Team kickoff in January 2019 to the presidential election in November 2020"
          width={1800}
          height={583}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>My Role</h2>
        <p>
          I worked as a <strong>Senior Product Designer</strong>; my overall duties and
          responsibilities included data visualization, product/visual design, competitor
          analysis, conceptual ideas, quantitative/qualitative analytics, storytelling,
          content strategy, and collaboration with the product and engineering team.
        </p>
        <p>
          My team (Election Center) involved three Sr. Product Designers, Sr. Product
          Manager, Project Manager, Tech/Engineering Director, three QA Analysts, and a
          slew of Developers. Our wider team included editorial writers, researchers,
          content strategists, architects, graphic designers, various stakeholders, and
          several developers.
        </p>
        <h3>Collaboration Tools</h3>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/06-collaboration-tools.png"
          alt="Table of collaboration tools: Sketch, Figma, Miro and Abstract for design; Jira and Zeplin for dev and QA; Dropbox and SharePoint for documents; Slack, Webex and Monday.com for communication"
          caption="During our brainstorming sessions, Miro became the ultimate collaborative method. It allowed Product Managers and Engineers to become more involved and it allowed our team to save time, which was our biggest constraint."
          width={1800}
          height={505}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h3>Work Process</h3>
        <p>
          After the initial research and brainstorming sessions, it&apos;s time to work. A
          two-week sprint kicks off our project. Products designers are assigned to
          various tasks by our team (pages, initiatives, etc). Afterward, we have
          continuous meetings with developers, product/project managers and stakeholders.
          Here&apos;s a short rundown of how it works:
        </p>
        <ol>
          <li>
            Biz/Product Managers write the requirements/acceptance criteria using{' '}
            <a
              href="https://www.atlassian.com/software/jira"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jira
            </a>
          </li>
          <li>
            The project manager sets the Dev/Design meeting to discuss req. We decide who
            will work on the project (mini-team) and others (legal, editorial, Wolf
            Blitzer, etc).
          </li>
          <li>
            We break off — Design focuses on the structure with wireframes, mood boards,
            ideas, visual competitor analysis, feedback from other designers, concepts,
            etc. During this stage, we may have brainstorming sessions with our Product
            Manager / Tech Directors to make sure our ideas are even workable. (side-note:
            It is the worse when you have the greatest idea and you&apos;re told because of
            our servers it is not capable).
          </li>
          <li>
            After two/three days of brainstorming with the team, we usually will have a
            Stakeholder meeting (Directors, Editorial, etc) to present our best approaches
            and mockups. Our stakeholders will provide extensive feedback and we followup
            by email or Slack.
          </li>
          <li>
            This process continues until all parties have signed off for development and
            code. Development begins and collaboration still occurs with feedback from the
            Design team. One or two designers are assigned quality assurance before the
            final approval for release.
          </li>
        </ol>
      </Prose>

      <section className="section band-cream">
        <h2 className="display t-md">Constraints</h2>

        <div className="mt-[46px] max-sm:mt-[28px] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[38px] max-sm:gap-y-[26px]">
          <div>
            <h3 className="display text-[24px] leading-[1.1] tracking-[-0.03em]">
              Feasibility
            </h3>
            <p className="body-copy mt-[14px] text-[color:var(--ink-70)]">
              You may have a great idea but due to complexity, budget, and resources you
              may have to make trade-offs.
            </p>
          </div>

          <div>
            <h3 className="display text-[24px] leading-[1.1] tracking-[-0.03em]">Time</h3>
            <p className="body-copy mt-[14px] text-[color:var(--ink-70)]">
              You can&apos;t move an election! Moving the release was impossible for
              additional work.
            </p>
          </div>

          <div>
            <h3 className="display text-[24px] leading-[1.1] tracking-[-0.03em]">
              Stakeholder pushback
            </h3>
            <p className="body-copy mt-[14px] text-[color:var(--ink-70)]">
              I&apos;ve learned not to take it personally. It&apos;s a balancing act
              between the user and business needs.
            </p>
          </div>

          <div>
            <h3 className="display text-[24px] leading-[1.1] tracking-[-0.03em]">
              Design systems
            </h3>
            <p className="body-copy mt-[14px] text-[color:var(--ink-70)]">
              It requires Designers and Engineers for it to be successful and adaptable;
              otherwise, your team will be spending countless hours with workarounds.
            </p>
          </div>
        </div>
      </section>

      <Prose className="pt-[56px] max-sm:pt-[36px] pb-[40px] max-sm:pb-[24px]">
        <h2>Brainstorming</h2>
        <p>
          Traditionally, user-centric research and testing have not been an important part
          of developing an election experience. It was highly encouraging that CNN
          incorporates this activity into the process to get a better understanding of what
          users need during election cycles.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <div className="border-t border-[color:var(--hair-strong)] pt-[38px] max-sm:pt-[26px] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[32px]">
          <div className="prose-zaye">
            <h3 className="!mt-0">Activities</h3>
            <ul className="mt-[22px]">
              <li>
                Conduct research and gather learnings from various work sessions,
                interviews, and CNN and competitor audits
              </li>
              <li>
                Interview stakeholders across CNN to understand their current roadmap,
                future plans, goals, and success metrics
              </li>
              <li>
                Hold two collaborative workshops, focusing on:
                <br />1 – With a broad stakeholder group, define core goals for product
                concepts and workshop current ideas against those goals
                <br />2 – An open idea workshop to concept opportunities that map against
                core CNN product goals
              </li>
              <li>Begin Technical Audit</li>
            </ul>
          </div>

          <div className="prose-zaye">
            <h3 className="!mt-0">Outputs</h3>
            <ul className="mt-[22px]">
              <li>Alignment on strategic business goals</li>
              <li>
                Multiple ideas culled down to 2-5 testable concepts that will be moved into
                Phase 2
              </li>
              <li>
                Aligned approaches on:
                <br />- Concepting &amp; creation of testing stimuli
                <br />- Testing
                <br />- Socialized design, concept, and testing plan
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h3 className="!mt-0">Competitor Comparisons</h3>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/07-competitor-comparison.png"
          alt="Competitor election coverage: an issue-by-issue Biden and Trump comparison, a fundraising comparison, and a side-by-side economy stance breakdown"
          caption="It will be essential to draw a contrast between candidates"
          width={1800}
          height={870}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h3 className="!mt-0">Discovering Insights</h3>
        <p>
          <a
            href="https://www.quantummetric.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quantum Metric
          </a>{' '}
          is one of my favorite tools that I&apos;ve always enjoyed using. I encountered
          the IHG tool on the UX team and it was very important for our studies. I
          proposed using the CNN tool, but learned they used a similar service—
          <a href="https://www.fullstory.com" target="_blank" rel="noopener noreferrer">
            Fullstory
          </a>
          —but it was not implemented in our product Election Center.
        </p>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/08-fullstory.png"
          alt="An illustration of session-replay research alongside a Fullstory recording of the CNN delegate tracker"
          caption="Fullstory example"
          width={1800}
          height={574}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          I clarified that by using Fullstory, we will be able to discover quantitative and
          qualitative insights such as annoyance signals (are they even clicking on our
          interactive maps!?), error messages, and replay sessions, which I could then share
          with the development/product team.
        </p>
        <p>
          <strong>Other tools used:</strong> Google Analytics, Domo Analytics
        </p>

        <h2>Ideation</h2>
        <p>
          <strong>Design objective</strong>: Provide users with specific facts (historical
          context) and encourage them to participate in the content and interactions.
        </p>
        <p>
          <strong>Concept:</strong> I wanted to show users how the demographics of a state
          (Florida, example below) are changing. Since Florida is a <em>swing state</em>, I
          wanted to demonstrate how demographics are evolving, how the population has
          changed in previous elections, and encourage users to draw their own conclusions
          about the likely outcome. I suggested not all states would require a timeline
          since we know factually how most will play out.
        </p>
        <blockquote className="pl-[22px] border-l-2 border-[color:var(--red)]">
          &ldquo;This will take a huge amount of resources to display on our pages&rdquo; —{' '}
          <strong>CNN Dev/Tech Director</strong>
        </blockquote>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/09-florida-timeline-concept.png"
          alt="Concept for a Florida state page with a 2008–2016 election timeline, annotated to show the three API calls it would require"
          caption="(click on thumbnail for full view)"
          width={1025}
          height={592}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          I responded to the amount of resources needed, suggesting that CNN already had
          this information from previous elections; however, they countered by stating that
          the App had too many external sources (APIs) in place for this to be feasible.
        </p>
        <p>
          However, they agreed on my overall idea. We agreed on a scale-back version rather
          than a timeline. It wasn&apos;t feasible to display the four past elections but
          only 2016.
        </p>
        <p>
          <strong>Result</strong>
        </p>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/cnn/10-florida-result.png"
          alt="Shipped President: Florida results card with candidate percentages and a county-level size-of-lead map"
          caption="Scale-down version"
          width={1800}
          height={751}
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/11-past-results.png"
          alt="Past Results cards for the 2016 Florida presidential race and the 2018 Florida Senate, Governor and House races"
          caption="Previous election (2016)"
          width={1800}
          height={921}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          <strong>State page</strong> (full view)
        </p>

        <p className="!mt-[56px]">
          <strong>Design objective</strong>: Show a distinct contrast between candidates.
        </p>
        <p>
          <strong>Note</strong>. With this particular design, I decided to be more
          thoughtful. My aim was to contrast the candidates without overcrowding the page
          with poll results. At first glance, there&apos;s a lot to take in.
        </p>
        <ul>
          <li>AD stakeholders wanted more advertisements on the Poll Exits</li>
          <li>
            The design, while innovative shorten the page which prevented more ads from
            being displayed
          </li>
        </ul>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/cnn/12-polling-center.png"
          alt="Polling Center concept comparing Clinton and Trump exit-poll results by race for Florida, with a year timeline and demographic breakdown"
          width={1800}
          height={1527}
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/13-exit-polls.png"
          alt="The shipped Exit Polls page with demographic filters and keyword search, annotated 'Pages of exit polls'"
          width={1800}
          height={1414}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          I worked with the <strong>Editorial Team</strong> to bring more content to the
          page that would balance out the advertisements. We scaled down due to time
          constraints and feedback but added demographic filters and the ability for the
          user to browse by keywords.
        </p>

        <p className="!mt-[56px]">
          <strong>Design objective:</strong> Remove bias by presenting data visualizations
          that allow the user to draw their own conclusions.
        </p>
        <p>
          <strong>Note</strong>. My idea was to demonstrate how a state&apos;s demographics
          are shifting, making it a competitive race (historical data). The illustration
          does not go far enough; it only reveals one aspect. I continued to iterate.
        </p>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/cnn/14-demographics-concept1.png"
          alt="Concept 1: a demographics table of Florida population by race with percentages and totals"
          width={1800}
          height={573}
        />
      </section>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/15-demographics-concept2.png"
          alt="Concept 2: the demographics table paired with income and education donut charts"
          width={1800}
          height={634}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          Adding a comparison chart would increase the user&apos;s cognitive load, while
          adding a drop-down menu would force the user to toggle back and forth in the
          results.
        </p>
        <p>
          <strong>Stakeholder/Design Crit Feedback</strong>
          <br />A good start, but more demographics are needed. For the user, what story are
          we trying to tell? I decided and went deeper. I partnered with the Editorial Team
          on iterations and utilized their input. Concept 2 is fine, but other designers
          have told me that it&apos;s difficult to understand.
        </p>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/16-demographics-final.png"
          alt="Final demographics result: race, income and education compared as horizontal state-versus-U.S. bar charts"
          width={1800}
          height={1097}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          On the final result, I collaborated with another designer. Also, stakeholders
          preferred this direction, it was easier to absorb.
        </p>
        <p>
          The user could compare two categories using a horizontal bar chart based on the
          story we were trying to convey. Also, I noticed that our eyes are drawn to the
          category names first, before moving on to the details. I would have liked to take
          it a step further to provide historical background.
        </p>
        <p>
          <strong>Additional constraints:</strong> time, dev complexity, competing content
        </p>

        <p className="!mt-[56px]">
          <strong>Design objective:</strong> Provide users with specific facts and encourage
          them to participate in the content and interactions (Who&apos;s Winning)
        </p>
        <blockquote className="pl-[22px] border-l-2 border-[color:var(--red)] text-[color:var(--red)]">
          &ldquo;You have to design this like…will your grandma understand this at first
          glance.&rdquo; – Head of Product (Politics)
        </blockquote>
        <p>
          The bar chart was ineffective, particularly in the absence of context. The user
          knew we were making comparisons between the two candidates, but what did it really
          mean?
        </p>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/17-whos-winning-bars.png"
          alt="Who's Winning concept as a grouped monthly bar chart of Biden, Trump and third-party polling"
          width={1800}
          height={1301}
        />
      </section>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/18-whos-winning-line.png"
          alt="Who's Winning concept redrawn as a line chart tracking Biden, Trump and a third-party candidate over time"
          width={1800}
          height={1345}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          In the next version, I removed the bar graph but retained the colors for the
          candidates, the monthly timeframes, and the color key at the bottom. I also wanted
          the Editorial Team to contribute more. From a strategy standpoint, I needed them
          to support the user in framing the story.
        </p>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/19-whos-winning-final.png"
          alt="Final Who's Winning chart: a two-line Biden versus Trump poll tracker with the key moved to the top and end points labelled 49% and 44%"
          width={1800}
          height={1153}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          <strong>Final iteration:</strong> Poll text is removed. I collaborated with the
          Editorial Team with the content strategy and Dev team on some of the components.
        </p>
        <p>
          I moved the Trump/Biden color key at the top to conserve space, removed 3rd party
          candidate (<strong>heavy political debate!</strong>) and reduced the monthly
          time-stamps because it was advised that the last months were the most important for
          the polls.
        </p>
        <p>
          Also, the description of the candidates is removed. I felt users already knew who
          these two candidates were. End points were added to inform users where the
          candidates were at present time. I felt this told a fuller story of showing the
          differences between the candidates.
        </p>
        <p className="!mt-[56px]">
          <strong>Below are additional designs that I worked with my team on.</strong>
        </p>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/20-candidate-page.png"
          alt="Donald Trump candidate page with a CNN Poll of Polls module and a quarterly fundraising chart"
          width={1800}
          height={1080}
        />
      </section>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/21-results-map.png"
          alt="Presidential results page showing 306 Biden to 232 Trump above the interactive CNN Projection map"
          width={1800}
          height={1074}
        />
      </section>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/22-sketch-file.png"
          alt="The EC-State October 2020 Sketch file open on a laptop, showing annotated state-page artboards"
          width={1800}
          height={1049}
        />
      </section>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/23-sitemap.png"
          alt="Election Center sitemap branching from the hub page into Who's Running, Who's Winning, Polling Center, Road to 270, Election Calendar, My Election Center and Voter Resources"
          caption="Sitemap + Nav focus"
          width={1129}
          height={1175}
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/24-work-overview.png"
          alt="A canvas of every Election Center screen grouped into Live Now, Before October and Election Night"
          caption="Overview of entire work"
          width={1800}
          height={1789}
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2>User feedback results</h2>
      </Prose>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/cnn/25-feedback-results-1.png"
          alt="Research chart: election results ranked most important to respondents and live video least, mapped to the mobile state page"
          width={1800}
          height={1009}
        />
      </section>

      <section className="gutter pb-[28px] max-sm:pb-[20px]">
        <Figure
          src="/cnn/26-feedback-results-2.png"
          alt="The same ranking chart mapped to the presidential scoreboard and national results map"
          width={1800}
          height={754}
        />
      </section>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/cnn/27-homepage-scoreboard.png"
          alt="Homepage scoreboard: easy to read and informative for most but busy and distracting for many respondents"
          width={1800}
          height={865}
        />
      </section>

      <Prose className="pb-[24px] max-sm:pb-[16px]">
        <h2>Key Takeaways</h2>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[32px]">
          <div className="prose-zaye">
            <p>
              <strong className="underline underline-offset-4">
                What didn&apos;t work so well
              </strong>
            </p>
            <ul>
              <li>Chasing feedback</li>
              <li>Prioritizing design decisions</li>
              <li>Scattered design systems</li>
              <li>Dealing with burnout (pandemic/riots/protests)</li>
              <li>Lack of prototyping</li>
              <li>Not enough collaboration with the Editorial team</li>
              <li>Didn&apos;t have enough time to innovate</li>
              <li>Abstract</li>
            </ul>
          </div>

          <div className="prose-zaye">
            <p>
              <strong className="underline underline-offset-4">What worked well</strong>
            </p>
            <ul>
              <li>Remote collaboration with Engineers</li>
              <li>Our sense of humor</li>
              <li>Focused feedback</li>
              <li>Tools to do the job right (Miro, Figma)</li>
              <li>Caring (Covid-19, protests, family challenges)</li>
              <li>Partnerships with other teams</li>
              <li>Monday.com - project management for us designers</li>
            </ul>
          </div>
        </div>
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2 className="!mt-0 border-t border-[color:var(--hair-strong)] pt-[46px]">
          Outcomes
        </h2>
        <p>
          CNN reached its largest digital audience in history in 2020 according to Comscore,
          shattering all records and ranking #1 in every available month to date for global
          and U.S. unique visitors, wrapping the year with{' '}
          <strong>a monthly average of 215 million unique visitors</strong> globally (2020
          global numbers represent a monthly average of January-November). CNN holds the #1
          spot in every key category and is also the only news outlet to rank in the top five
          of each of those categories, with every other competitor falling out of the top five
          in either video, mobile, global or overall unique visitors.
        </p>
      </Prose>

      <section className="gutter pb-[40px] max-sm:pb-[24px]">
        <Figure
          src="/cnn/28-cnn-studio.jpg"
          alt="John King at the Magic Wall in the CNN election studio, with a camera operator and crew"
          width={1030}
          height={762}
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <p>
          Throughout 2020, CNN retained its position as the{' '}
          <strong>#1 digital news destination, according to Comscore</strong>, and held the
          #1 ranking for more than 4 consecutive years for U.S. unique visitors, and for more
          than one year for global unique visitors, by holding the #1 position in every month
          of 2020 to date in the key categories of global news, U.S. unique visitors, mobile
          unique visitors, video unique viewers, and millennial unique visitors (November
          2020 data is the most current available for global traffic rankings).
        </p>
        <p>
          In November of 2020, more people searched for the term &ldquo;CNN&rdquo; than ever
          before, expanding the gap between CNN and every other news competitor on the
          internet. On a single day in the month of November,{' '}
          <strong>CNN saw 116 million unique visitors</strong>, with 46 million people on a
          single story, according to Adobe.
        </p>
        <p>
          <strong>Source</strong>: CNN Press Room
        </p>

        <h2 className="border-t border-[color:var(--hair-strong)] pt-[46px]">Learnings</h2>
        <ul>
          <li>
            Get feedback quickly; Our team would have save quite a bit of time if we
            didn&apos;t chase feedback from several stakeholders.
          </li>
          <li>
            Collaboration is key. Get several involved early on; not as an option to provide
            details once work has been approved and shipped.
          </li>
          <li>
            Allow designers to make strategic decisions and to have more ownership over the
            product.
          </li>
          <li>
            Account for more time for user research and testing. Research teams should be
            more involved in the process.
          </li>
        </ul>

        <h2>Summary</h2>
        <p>
          In general, I&apos;m satisfied with the work I did at the CNN Election Center.
          Working there taught me that just because not all of my ideas were implemented, it
          didn&apos;t mean they weren&apos;t successful; particularly when working under time
          (and technical) constraints. I really appreciated how our team tried to do great
          work by being thoughtful and encouraged users to digest what was presented to them.
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
