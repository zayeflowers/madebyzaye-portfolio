"use client";

import React from 'react';
import PageLayout from '../../components/PageLayout';
import CaseStudyHero from '../../components/CaseStudyHero';
import Figure from '../../components/Figure';
import Prose from '../../components/Prose';
import NextProject from '../../components/NextProject';

const TOOLS = [
  { label: 'Figma', href: 'https://www.figma.com/' },
  { label: 'React Native', href: 'https://reactnative.dev/' },
  { label: 'OpenAI API', href: 'https://openai.com/api/' },
  { label: 'Firebase', href: 'https://firebase.google.com/' },
];

const FEATURES = [
  {
    title: 'Mood-based messaging',
    description:
      'Users select their current emotional state — the app responds with a generated message tailored to that mood.',
  },
  {
    title: 'Personal journaling',
    description:
      'Write, reflect, and revisit your growth. Entries are stored securely in Firebase and editable anytime.',
  },
  {
    title: 'Favorite quotes & authors',
    description:
      'Bookmark your favorite affirmations or follow specific authors and themes for ongoing inspiration.',
  },
  {
    title: 'Customizable categories',
    description:
      'From "Emotional Support" to "Daily Mindset," categories evolve as we learn what users actually need — not just what\'s trendy.',
  },
];

export default function DailyUplift() {
  return (
    <PageLayout navbarKey="navbar-daily-uplift">
      <CaseStudyHero
        eyebrow="Case study · Wellness"
        title="Daily Uplift"
        summary="An AI-powered wellness app that delivers mood-based affirmations and reflections — emotional design married to intelligent content."
        backHref="/ai-projects"
        backLabel="Back to AI projects"
        meta={[
          { label: 'Role', value: 'Owner, Design Engineer' },
          { label: 'Status', value: 'Coming soon' },
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
          src="/dailyupliftapp.png"
          alt="Daily Uplift app"
          fit="contain"
          height_="h-[420px] max-sm:h-[260px]"
          caption="Daily Uplift — mood-based affirmations"
        />
      </section>

      <Prose className="pb-[48px] max-sm:pb-[28px]">
        <h2>Project overview</h2>
        <p>
          Daily Uplift is an AI-powered wellness app designed to provide personalized
          emotional support through mood-based messaging. The app uses natural
          language processing to generate affirmations and reflections that feel
          human, relevant, and genuinely helpful.
        </p>
        <p>
          Built with React Native and powered by OpenAI&apos;s API, Daily Uplift aims
          to create a more empathetic digital wellness experience that adapts to
          users&apos; emotional needs and provides meaningful support when they need
          it most.
        </p>

        <h2>The problem</h2>
        <p>
          Wellness apps often feel sterile, generic, or overproduced. Users seeking
          daily motivation or emotional support are bombarded with cliché quotes or
          impersonal push notifications. There&apos;s a need for something softer,
          smarter, and more in tune with people&apos;s emotional realities.
        </p>
      </Prose>

      <section className="section band-cream">
        <div className="micro-label mb-[24px]">Features</div>
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

      <Prose className="pt-[56px] pb-[48px] max-sm:pt-[32px] max-sm:pb-[28px]">
        <h2>Coming soon</h2>
        <p>
          We&apos;re polishing the experience, adding accessibility improvements, and
          expanding mood categories with more nuanced emotional ranges. The app will
          launch on iOS first, with Android and web versions to follow.
        </p>
        <p>
          <a href="mailto:hey@madebyzaye.com?subject=Daily%20Uplift%20Waitlist%20Request&body=Hi%20Zaye%2C%0A%0AI'd%20like%20to%20join%20the%20waitlist%20for%20Daily%20Uplift.%20Please%20notify%20me%20when%20it%20launches.%0A%0AThank%20you!">
            Join the waitlist
          </a>
        </p>
      </Prose>

      <NextProject title="UX Strip" href="/ai-projects/ux-strip" />
    </PageLayout>
  );
}
