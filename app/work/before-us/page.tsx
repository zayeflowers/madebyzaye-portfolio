"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const APP_STORE_URL = 'https://apps.apple.com/us/app/before-us/id6746684297';

const TOOLS = [
  { label: 'Figma', href: 'https://www.figma.com/' },
  { label: 'React Native', href: 'https://reactnative.dev/' },
  { label: 'Firebase', href: 'https://firebase.google.com/' },
  { label: 'Cursor', href: 'https://cursor.com/' },
  { label: 'Claude', href: 'https://claude.ai/' },
];

const ROLE = [
  'Product strategy',
  'User experience design',
  'Visual design',
  'Brand direction',
  'Content direction and review',
  'AI-assisted development',
  'Testing and iteration',
  'App Store preparation and submission',
];

const FEATURES = [
  {
    title: 'A voice a day',
    description:
      'One carefully chosen quote each morning. Keep going and scroll for more when you want them.',
  },
  {
    title: 'Collections',
    description:
      'Voices across time, grouped by what they speak to — Justice, Grief, Belonging, Truth-Telling, and more.',
  },
  {
    title: 'Know the voice',
    description:
      'A short bio and the context behind every quote, so a name becomes a person.',
  },
  {
    title: 'Keep what moves you',
    description:
      'Save quotes to your own collection and return to them any time.',
  },
  {
    title: 'Two moods',
    description:
      'A warm tan light theme and a deep dark brown — whichever suits the moment.',
  },
  {
    title: 'A gentle nudge',
    description:
      'An optional daily reminder at a time you choose. One thing. That’s all.',
  },
];

const DEFERRED = [
  'Mood tracking',
  'Journaling',
  'Notifications beyond a single daily reminder',
  'Expanded filters',
  'AI-generated context for each quote',
];

export default function BeforeUs() {
  return (
    <PageLayout navbarKey="navbar-before-us">
      <CaseStudyHero
        eyebrow="Case study · Product"
        title="Before Us"
        summary="Turning a familiar quote app into a culturally focused experience for Black wisdom — and my first app in the App Store."
        logoSrc="/beforeus/app-icon.svg"
        logoAlt="Before Us app icon"
        logoIsIcon
        meta={[
          { label: 'Role', value: 'Owner, Creative Technologist' },
          { label: 'Timeline', value: 'Roughly three months, concept to submission' },
          {
            label: 'Status',
            value: (
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                Live on the App Store
              </a>
            ),
          },
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
          {
            label: 'Site',
            value: (
              <a href="https://www.beforeus.app" target="_blank" rel="noopener noreferrer">
                beforeus.app
              </a>
            ),
          },
        ]}
      />

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/beforeus/home-light.png"
          alt="The Before Us daily quote screen, showing a quote from Oprah Winfrey"
          fit="contain"
          height_="h-[520px] max-sm:h-[320px]"
          caption="One quote a day — no feed, no ads, nothing to scroll past"
        />
      </section>

      <Prose className="pb-[48px] max-sm:pb-[28px]">
        <h2 id="overview" className="scroll-mt-[24px]">
          Overview
        </h2>
        <p>
          Before Us began as an experiment: could I use emerging AI tools to move beyond
          designing interfaces and build a complete application myself?
        </p>
        <p>
          What started as a generalized motivational product called Daily Uplift
          eventually became something more focused — a mobile experience centered on the
          words, wisdom, and lived experiences of Black historical and cultural figures.
        </p>
        <p>
          Over three months, I directed the strategy, user experience, visual design,
          brand, content, and product decisions while using AI as a technical partner.
          The process took me from an idea and a set of Figma screens to my first app in
          the App Store.
        </p>
      </Prose>

      <section className="section band-cream">
        <div className="micro-label mb-[24px]">My role</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[28px]">
          {ROLE.map((item, index) => (
            <div
              key={item}
              className="border-t border-[color:var(--hair-strong)] py-[18px] max-sm:py-[14px] flex items-baseline gap-4"
            >
              <span className="mono text-[11px] text-[color:var(--ink-42)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="body-copy">{item}</span>
            </div>
          ))}
        </div>
        <p className="body-copy-sm measure mt-[28px] max-sm:mt-[20px]">
          My primary AI collaborators were ChatGPT, Claude, Cursor, and Augment Code.
          They helped with development, troubleshooting, testing, documentation, and
          deployment, while I kept ownership of the product vision, creative direction,
          and final decisions.
        </p>
      </section>

      <Prose className="pt-[56px] pb-[40px] max-sm:pt-[32px] max-sm:pb-[24px]">
        <h2>The spark</h2>
        <p>
          At the time, I was a Lead Product Designer on an insurance injury-reporting
          experience. The work was important, but the subject matter left me creatively
          uninspired.
        </p>
        <p>
          Meanwhile, large language models were getting noticeably better at writing
          code. I started reading about designers and independent creators using these
          tools to build and release their own apps, and the possibility fascinated me. I
          had front-end experience from the beginning of my career, but I had never built
          and shipped a complete mobile application.
        </p>
        <p>
          I started talking with ChatGPT about product ideas that would let me explore
          generative AI while making something meaningful. One suggestion was a quote
          app. I have always loved quote apps, so the idea felt approachable — familiar
          enough that I understood the experience, flexible enough for me to add my own
          perspective.
        </p>

        <h2>The original idea: Daily Uplift</h2>
        <p>
          The first concept was Daily Uplift, a motivational app that presented a daily
          message and let people record their mood. The original home screen carried a
          quote of the day, a mood selector, highlighted themes such as Black Excellence,
          Pride, and Mental Health, mood history over a week, and journaling.
        </p>
        <p>
          I imagined the audience as women who read inspirational quotations or
          affirmations to begin the day. Someone could record how they felt, encounter an
          encouraging message, and eventually see patterns between their mood and the
          content that resonated.
        </p>
        <p>
          I wasn&apos;t building the app in response to an emotional need of my own. I
          wanted a meaningful project that would help me understand generative AI and
          learn to build a complete application. I also believed there was value in
          receiving a positive word at the right moment. Sometimes a single sentence
          helps someone pause, reset, or enter a different headspace.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px] grid grid-cols-1 lg:grid-cols-2 gap-[28px] max-sm:gap-4">
        <Figure
          src="/beforeus/01-daily-uplift-home.png"
          alt="The Daily Uplift home screen: a greeting, a quote of the day from Martin Luther King, a How are you feeling today mood selector, and theme cards for Mental Health Awareness Month and Gay Pride Month"
          fit="contain"
          height_="h-[520px] max-sm:h-[320px]"
          caption="Phase one — Daily Uplift, with the quote, the mood selector, and the themes all on one screen"
        />
        <Figure
          src="/beforeus/02-daily-uplift-profile.png"
          alt="The Daily Uplift profile screen showing Your Stats — mood selections, daily moods, and favorite quotes — above links to mood analytics, history, and favorites"
          fit="contain"
          height_="h-[520px] max-sm:h-[320px]"
          caption="The mood data the app was collecting — analytics, history, favorites"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Learning to become a builder</h2>
        <p>
          I handled strategy, UX, and visual design while using AI tools to cross the gap
          between design and engineering. In the first phase I mostly used Cursor and
          Augment Code to develop the application. Eventually I had a working experience
          I could test on my phone:
        </p>
        <p>
          <strong>Open the app → view the daily quote.</strong>
        </p>
        <p>
          It was a simple interaction, but seeing it run on an actual device was
          groundbreaking for me.
        </p>
        <p>
          One reason many designers never release their own applications is that they
          don&apos;t have an engineering partner, or don&apos;t believe they have enough
          technical knowledge to build the product themselves. AI-assisted development
          let me test whether that limitation still had to exist.
        </p>
        <p>
          Along the way I learned GitHub, Next.js, React-based mobile development,
          Firebase, Firestore, authentication, OpenAI integrations, Vercel, Xcode, and
          app deployment. I had seen GitHub through engineers at previous companies and
          assumed it was mainly where engineers updated code. Building Before Us made it
          part of my own creative workflow.
        </p>
        <p>
          I also began to understand prompting as a form of problem-solving. AI
          couldn&apos;t help me unless I could diagnose the current problem, describe the
          intended behavior, and judge whether the proposed solution was right.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/beforeus/03-development-claude-code.png"
          alt="A Claude Code session in the Before Us repository, writing a project README from the actual source tree and opening a pull request"
          width={3824}
          height={2484}
          caption="Directing the build — a session in the app repo, from prompt to merged pull request"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Working within technical constraints</h2>
        <p>
          The biggest technical constraint was my hardware. My MacBook Air kept running
          low on storage and memory with Xcode, Cursor, and the project&apos;s packages
          all running. I had to manage resources continuously and move files to external
          drives to keep going.
        </p>
        <p>
          The process was often exhausting, but it was exciting too. The first time the
          app worked, I felt the same disbelief I had after building my first website: I
          took an idea that existed in my head and made it real.
        </p>
        <p>
          To hold continuity across a technically complicated process, I used Notion as a
          development journal. At the end of a session I asked Cursor to summarize what
          we finished, what broke, and what we decided, then saved those summaries in a
          master document. The journal let me resume work without losing technical or
          product context.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/beforeus/04-notion-journal.png"
          alt="A Notion page dated May 10, 2025 in the Daily Uplift updates database, summarizing the sign-up screen, navigation, Firebase authentication, and styling work from that session"
          width={3824}
          height={2484}
          caption="The development journal — one entry per session, so the next one could pick up the thread"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Recognizing that the idea was too broad</h2>
        <p>
          I stepped away from Daily Uplift and came back to it months later. The concept
          didn&apos;t feel distinctive enough. The motivational-app market was already
          crowded, and Daily Uplift had several interesting features but no clear reason
          to exist beyond daily encouragement.
        </p>
        <p>
          I was also conflicted about monetization. Many motivational apps charge for
          premium content, but I kept thinking: <em>these are just quotes. Who am I to
          put a price on words I did not create?</em> That question showed me I was
          thinking too narrowly. People wouldn&apos;t be paying for individual
          quotations — they would be paying for the experience, the curation, and the
          personalization around them.
        </p>
        <p>
          Even so, the name never excited me. And the answer was already inside the
          product: one of Daily Uplift&apos;s highlighted themes was Black Excellence. It
          was a small category within a broad product, and it felt more meaningful than
          everything around it. Instead of treating Black wisdom as one theme among many,
          I made it the foundation.
        </p>

        <h2>The pivot</h2>
        <p>
          The product moved from a generalized motivational app to an experience centered
          on Black American quotations, history, and wisdom, for Black Americans and the
          wider Black diaspora. Few apps centered Black voices and stories this way, and
          the direction felt purposeful.
        </p>
        <p>
          The pivot didn&apos;t require throwing out what I had built. Quotes had always
          been the heart of the experience. The most important change wasn&apos;t
          structural — it was conceptual. I moved from a general inspiration app
          containing a Black Excellence category to a culturally focused product built
          around Black voices, experiences, and wisdom.
        </p>
        <p>
          I wanted each quotation to create a moment of reflection, observation, or
          conversation. One day a friend came across Maya Angelou&apos;s reflection on
          how people remember the way they were made to feel, and we talked briefly about
          how it related to something happening in his own life. That small interaction is
          what I wanted Before Us to do. The product didn&apos;t need an elaborate
          engagement loop. Sometimes its job is to create a meaningful pause.
        </p>
      </Prose>

      <Prose className="pb-[48px] max-sm:pb-[28px]">
        <blockquote className="display t-md max-w-[30ch] mx-auto text-center">
          Before Us isn&apos;t just a quote app. It turns Black wisdom into moments of
          reflection, conversation, and connection.
        </blockquote>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/beforeus/05-pivot-before-after.png"
          alt="Daily Uplift and Before Us side by side: the same quote screen before and after the pivot, the second one attributing Serena Williams with her role and a Black Voices tag"
          width={1638}
          height={1600}
          caption="The same interaction before and after — the quote survives, the person arrives with it"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>From Daily Uplift to Before Us</h2>
        <p>
          The name Daily Uplift no longer fit. It was generic, already claimed in the App
          Store, and disconnected from the app&apos;s cultural purpose. I explored
          alternatives — Kindred Words, Kin Voice, Front Porch, Passed Down, Root Notes —
          and many of the strongest options were already registered or otherwise
          unavailable.
        </p>
        <p>
          Eventually I arrived at Before Us. The name stands for the people whose words,
          wisdom, and experiences carried us forward. It reflects the tradition of
          looking back, preserving knowledge, and passing it on. It carries a light
          contemporary echo of Kendrick Lamar&apos;s &ldquo;Not Like Us,&rdquo; but its
          deeper meaning comes from ancestry and continuity.
        </p>
        <p>
          For the first time, I was genuinely excited by the product&apos;s name. It set
          Before Us apart in a crowded category and gave the experience a worldview
          rather than a description of its function.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/beforeus/06-naming-exploration.png"
          alt="A ChatGPT conversation exploring names for the app — invented words such as Rootwell, EchoKin, and Kinward, then a shift to metaphors: a porch, a barbershop, a kitchen table, a relay baton"
          width={3824}
          height={2484}
          caption="Working the name — from invented words toward a metaphor with something behind it"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Designing the identity</h2>
        <p>
          The identity needed to feel contemporary, professional, and culturally
          intentional without leaning on familiar visual clichés. I deliberately avoided
          reaching for Pan-African colors just because the product centered Black people;
          I wanted the brand to develop its own visual language.
        </p>
        <p>
          The final portal-inspired logo stands for ancestry and continuity. It suggests
          entering a space where knowledge can be retrieved, experienced, and passed
          forward — which felt more aligned with the app&apos;s purpose than the other
          concepts.
        </p>
        <p>
          The website and the application didn&apos;t need to mirror each other exactly,
          but they needed to feel like parts of the same world. The logo, typography,
          color relationships, and tone carry that connection across both.
        </p>
      </Prose>

      <section className="gutter pb-[48px] max-sm:pb-[28px]">
        <Figure
          src="/beforeus/07-icon-exploration.png"
          alt="An app icon exploration board with three directions — The Echo, a voice radiating forward; The Thread, a continuous line of wisdom; and The Portal, a passage between generations — each shown in four colorways and at small sizes"
          width={1254}
          height={1254}
          caption="Three directions — The Echo, The Thread, The Portal — each tested down to icon size"
        />
      </section>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/beforeus/08-identity-mark.png"
          alt="The final Before Us mark: nested gold arches forming a portal around a small figure, shown on a black square and as a transparent icon"
          width={1906}
          height={1034}
          caption="The portal that shipped — a passage between generations, with someone standing in it"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Designing with restraint</h2>
        <p>
          The original Daily Uplift experience opened on a traditional home screen with a
          daily quote, mood tracking, and highlighted themes. Once mood tracking was gone
          and the content narrowed to Black wisdom, that home screen no longer served a
          clear purpose. Rather than keep it because it already existed, I streamlined
          the journey:
        </p>
        <p>
          <strong>
            Open the app → discover a quote → learn about the person → save, share, or
            continue.
          </strong>
        </p>
        <p>
          I focused on color balance, alignment, hierarchy, typography, and whitespace. I
          wanted the interface quiet enough for the words to stay central. It is a quote
          app, not Facebook. Playfair Display gives the quotations an editorial,
          reflective quality, while DM Sans Light keeps the rest of the interface clean
          and contemporary. There is little imagery in the first release, and that
          restraint was intentional — later versions may add visuals where they carry
          meaning rather than decoration.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px] grid grid-cols-1 lg:grid-cols-2 gap-[28px] max-sm:gap-4">
        <Figure
          src="/beforeus/09-quote-screen-light.png"
          alt="The Before Us quote screen in the light theme: a Frederick Douglass quote set in a serif face, his name and role beneath it, a Black Voices tag, and a rail of share, save, context, and link actions"
          fit="contain"
          height_="h-[520px] max-sm:h-[320px]"
          caption="The light theme — warm tan, wide margins, the words carrying the screen"
        />
        <Figure
          src="/beforeus/10-quote-screen-dark.png"
          alt="The same Frederick Douglass quote screen in the dark theme, set in cream and gold on deep brown"
          fit="contain"
          height_="h-[520px] max-sm:h-[320px]"
          caption="The dark theme — the same page, read at a different hour"
        />
      </section>

      <section className="gutter pb-[56px] max-sm:pb-[32px] grid grid-cols-1 lg:grid-cols-2 gap-[28px] max-sm:gap-4">
        <Figure
          src="/beforeus/collections.png"
          alt="The Collections screen, showing voices grouped by theme"
          fit="contain"
          height_="h-[480px] max-sm:h-[300px]"
          caption="Collections — voices across time, grouped by what they speak to"
        />
        <Figure
          src="/beforeus/context.png"
          alt="A context screen with a biography of Oprah Winfrey and her quote"
          fit="contain"
          height_="h-[480px] max-sm:h-[300px]"
          caption="Know the voice — a bio and the context behind every quote"
        />
      </section>

      <section className="section band-cream">
        <div className="micro-label mb-[24px]">Six things, and no more</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[28px]">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="border-t border-[color:var(--hair-strong)] py-[26px] max-sm:py-[20px]"
            >
              <span className="mono text-[11px] text-[color:var(--ink-42)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="display t-xs mt-[12px]">{feature.title}</h3>
              <p className="body-copy-sm mt-[10px]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-[40px] max-sm:mt-[28px] border-t border-[color:var(--hair-strong)] pt-[24px]">
          <div className="micro-label">Deliberately deferred</div>
          <p className="body-copy-sm measure mt-[14px]">
            {DEFERRED.join(' · ')} — all viable ideas, none of them necessary to
            establish the core value of the first release.
          </p>
        </div>
      </section>

      <Prose className="pt-[56px] pb-[40px] max-sm:pt-[32px] max-sm:pb-[24px]">
        <h2>Content, attribution, and trust</h2>
        <p>
          The initial quotation library was generated with help from Claude. I reviewed
          the collection, found important omissions, and added figures including Maya
          Angelou, Oprah Winfrey, and Barack Obama. Claude Code also helped organize the
          quotations, authors, and supporting information into a spreadsheet so I could
          examine the collection systematically.
        </p>
        <p>
          During that review I found quotations that were misquoted or wrongly
          attributed. I corrected the errors I caught, and the experience reinforced the
          lesson: AI-generated content libraries require ongoing human review.
        </p>
        <p>
          Before Us currently includes biographical information about the person behind
          each quotation. In the Daily Uplift phase I experimented with using OpenAI to
          generate additional context around individual quotes, and I deferred that from
          the first release while I consider a more reliable approach to accuracy and
          sourcing. In the future I may let people flag questionable quotations or submit
          corrections — reports would enter an editorial review rather than changing the
          content automatically.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/beforeus/11-quote-library.png"
          alt="The quote library open in a spreadsheet, with columns for name, quote, context, and category — rows for Alicia Garza, Amanda Gorman, Angela Davis, Arthur Ashe, and Audre Lorde, and a second tab organized by category"
          width={3824}
          height={2484}
          caption="The whole library in one view — where the duplicates, misquotes, and gaps become visible"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Testing the experience</h2>
        <p>
          Before release I shared the app with people close to me, including my partner.
          I wanted to know whether someone could understand the product, complete
          onboarding, and discover and navigate the library without instructions.
        </p>
        <p>Testing surfaced two notable issues:</p>
        <ol>
          <li>
            People paused at the reminder-setting step during onboarding, which suggested
            that either the action or its value wasn&apos;t clear enough.
          </li>
          <li>
            Some people didn&apos;t realize they could scroll past the first quotation.
            Without a visual cue, the library looked smaller than it was.
          </li>
        </ol>
        <p>
          The original Daily Uplift concept never reached the App Store or gathered
          enough testing to offer a meaningful comparison, so the decision to pivot rested
          on my own strategic and creative judgment rather than validated demand. That is
          an important distinction. Early reactions to Before Us were encouraging, and
          releasing it created the chance to gather stronger behavioral evidence over
          time.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px] grid grid-cols-1 lg:grid-cols-2 gap-[28px] max-sm:gap-4">
        <Figure
          src="/beforeus/12-onboarding-reminder.png"
          alt="The final onboarding step: Pick a time. We'll send one thing. A daily reminder set to 8:00 AM, with a Carry It Forward button and a Not now link"
          fit="contain"
          height_="h-[520px] max-sm:h-[320px]"
          caption="The reminder step, rewritten around what you get rather than what to set"
        />
        <Figure
          src="/beforeus/13-scroll-cue.png"
          alt="A Toni Morrison quote screen with a More Voices Below label and a downward chevron near the bottom of the page"
          fit="contain"
          height_="h-[520px] max-sm:h-[320px]"
          caption="More voices below — the cue that the library keeps going"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>Knowing when to ship</h2>
        <p>
          From concept to App Store submission, the project took roughly two to three
          months. As the product got closer to the vision in my head, I regularly asked
          Claude to evaluate its readiness and name what was left before I could submit.
        </p>
        <p>
          Testing and configuring the supporting infrastructure — Firebase in particular —
          were among the hardest parts. Designing an interface was familiar territory.
          Preparing a dependable product made me think harder about authentication, data,
          failure states, and technical behavior.
        </p>
        <p>
          I knew the app was ready when I could no longer find a major issue standing
          between someone and the core experience. My feedback had shifted from solving
          real problems to making increasingly minor adjustments. I was becoming
          nitpicky, and more polish would only postpone the chance to learn from a real
          release.
        </p>

        <h2>Responding to rejection</h2>
        <p>
          My first App Store submission was rejected: Apple wanted additional
          documentation showing how the app worked, including account creation and login.
          I created the walkthrough and resubmitted.
        </p>
        <p>
          Instead of reading the rejection as evidence that I didn&apos;t belong in this
          space, I treated it as one more unfamiliar part of shipping that I needed to
          understand. Submitting my first app gave me an enormous sense of
          accomplishment. I took an idea from my head, shaped its strategy and identity,
          worked through technical constraints, and turned it into a real product other
          people could use.
        </p>
      </Prose>

      <section className="gutter pb-[56px] max-sm:pb-[32px]">
        <Figure
          src="/beforeus/14-app-store-rejection.png"
          alt="App Store Connect showing Apple's review message, Guideline 2.1 — Information Needed, asking for a screen recording of the app on a physical device covering registration, login, and account deletion"
          width={3824}
          height={2484}
          caption="The rejection — Apple asking for a recording of the app running on a real device"
        />
      </section>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>What I learned</h2>
        <p>
          The most important decision I made was narrowing the product from generalized
          encouragement to Black American wisdom. Daily Uplift might have performed well
          as a motivational product, but I don&apos;t know whether it would have held my
          interest. Before Us gave me a reason to keep building after the original
          technical experiment was over.
        </p>
        <p>
          I also learned that an interesting feature doesn&apos;t automatically make a
          meaningful product. Mood tracking, journaling, themes, and AI-generated context
          were all viable, but together they competed with the central experience. If a
          feature adds complexity at the expense of clarity, it may not deserve to be
          there, however interesting it is on its own.
        </p>
        <p>
          AI accelerated the engineering, the troubleshooting, and the navigation of
          unfamiliar technical requirements. My judgment stayed essential to defining the
          product&apos;s purpose, shaping its visual direction, finding edge cases,
          reviewing content, and deciding what to remove.
        </p>
        <p>
          If I started again, I would spend more time sketching and wireframing before
          producing polished screens. AI makes it tempting to jump straight to
          high-fidelity output, but speed can hide structural problems. Just because I can
          produce full screens quickly does not mean I should — establishing the structure
          and interaction model earlier would have prevented real rework later.
        </p>

        <h2>What comes next</h2>
        <p>
          The immediate priority is expanding the quotation library and improving its
          representation and verification.
        </p>
        <p>
          I am also exploring ways to visualize connections among people, ideas, themes,
          eras, and movements — not visualization as decoration, but as a way to help
          people see relationships within Black history and thought that are hard to catch
          through a single quote. Any future feature has to strengthen the core
          experience without giving up the restraint that made the product clearer.
        </p>
      </Prose>

      <Prose className="pb-[40px] max-sm:pb-[24px]">
        <h2>From designer to builder</h2>
        <p>
          Before Us shows that I can recognize when a concept lacks focus, refine its
          purpose, and simplify an experience around its most meaningful interaction. It
          reflects attention to typography, spacing, hierarchy, balance, and the emotional
          effect of design — and, more importantly, it shows the difference between adding
          features and building a product people understand immediately.
        </p>
        <p>
          As a creative technologist, the project demonstrates determination,
          independence, adaptability, and resourcefulness. I am willing to learn
          unfamiliar tools, work through technical constraints, and use the best resources
          available to move an idea forward.
        </p>
        <p>
          It also changed how I think about pivoting. A pivot is not necessarily evidence
          that the original idea failed. Sometimes it is evidence that you understand the
          product more clearly than when you began.
        </p>
      </Prose>

      <section className="gutter pb-[76px] max-sm:pb-[40px]">
        {/* measure + mx-auto so the buttons line up with the prose column above. */}
        <div className="measure mx-auto flex gap-3 max-sm:gap-[10px] max-sm:flex-col">
          <a
            className="pill pill--dark"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on the App Store
          </a>
          <a
            className="pill pill--ghost"
            href="https://www.beforeus.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            beforeus.app
          </a>
        </div>
      </section>

      <NextProject title="GEICO Injury Intake" href="/projects/geico" />
    </PageLayout>
  );
}
