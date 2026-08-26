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

export default function BeforeUs() {
  return (
    <PageLayout navbarKey="navbar-before-us">
      <CaseStudyHero
        eyebrow="Case study · Product"
        title="Before Us"
        summary="A daily inheritance of Black wisdom — one quote a day from the writers, leaders, athletes, and artists who came before."
        backHref="/work"
        backLabel="Back to work"
        logoSrc="/beforeus/app-icon.svg"
        logoAlt="Before Us app icon"
        logoIsIcon
        meta={[
          { label: 'Role', value: 'Owner, Creative Technologist' },
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
        <h2>Project overview</h2>
        <p>
          Before Us is a daily-quote app drawn from Black American and Black Diaspora
          voices — writers, leaders, athletes, and artists. It opens to a single quote
          chosen for the day, set in a calm editorial page. Nothing more.
        </p>
        <p>
          Every quote arrives with the person behind it: a short bio, the year, the
          context. The point isn&apos;t to collect quotations — it&apos;s that a name
          becomes someone you know.
        </p>

        <h2>The problem</h2>
        <p>
          Daily inspiration apps tend toward the endless: infinite feeds, streak
          mechanics, push notifications competing for attention. Quotes arrive
          unattributed and uncontextualized, stripped of the people who said them.
          The words survive; the person disappears.
        </p>
        <p>
          Before Us takes the opposite bet. One voice a day, credited and contextualized,
          with nothing engineered to keep you in the app longer than the moment deserves.
        </p>
      </Prose>

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
      </section>

      <section className="gutter pt-[56px] max-sm:pt-[32px] grid grid-cols-1 lg:grid-cols-2 gap-[28px] max-sm:gap-4">
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

      <Prose className="pt-[56px] pb-[48px] max-sm:pt-[32px] max-sm:pb-[28px]">
        <h2>Design direction</h2>
        <p>
          The app reads as a page rather than a screen: a serif face, generous margins,
          and a warm tan ground that borrows from print more than product. Two themes
          ship — the light tan and a deep dark brown — because a quote read at night
          should feel different from one read at breakfast.
        </p>
        <p>
          Restraint is the feature. There is no feed, no streak, no badge. The daily
          quote does its work and gets out of the way.
        </p>

        <h2>Out now</h2>
        <p>
          Before Us is on the App Store — free, for iPhone on iOS 15.1 or later. The
          app is where the work actually lives;{' '}
          <a href="https://www.beforeus.app" target="_blank" rel="noopener noreferrer">
            beforeus.app
          </a>{' '}
          covers what it is and who it is for.
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
