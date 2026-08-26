"use client";

import React from 'react';
import PageHeading from '../components/PageHeading';
import PageLayout from '../components/PageLayout';
import Marquee from '../components/Marquee';

const CHANNELS = [
  {
    label: 'Email',
    value: 'hey@madebyzaye.com',
    href: 'mailto:hey@madebyzaye.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'in/zayeflowers',
    href: 'https://www.linkedin.com/in/zayeflowers/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'zayeflowers',
    href: 'https://github.com/zayeflowers',
    external: true,
  },
  { label: 'Based in', value: 'Baltimore / D.C.', href: null, external: false },
];

export default function Contact() {
  return (
    <PageLayout navbarKey="navbar-contact">
      <div className="gutter pt-[72px] pb-[48px] max-sm:pt-[34px] max-sm:pb-[28px]">
        <PageHeading
          eyebrow="Contact"
          title="Tell me what you're building"
          redPeriod
          lede="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
          actions={
            <>
              <a
                className="pill pill--dark"
                href="mailto:hey@madebyzaye.com?subject=Work%20Inquiry"
              >
                Send an email
              </a>
              <a
                className="pill pill--ghost"
                href="https://www.linkedin.com/in/zayeflowers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </>
          }
        />
      </div>

      <Marquee />

      <section className="section band-cream grid grid-cols-1 sm:grid-cols-2 gap-[48px] sm:gap-[64px]">
        <div>
          <h2 className="display t-md">Get in touch</h2>

          <dl className="mt-[30px] max-sm:mt-[20px]">
            {CHANNELS.map((channel) => (
              <div
                key={channel.label}
                className="border-t border-[color:var(--hair-strong)] py-[20px] last:border-b last:border-[color:var(--hair-strong)] flex items-baseline justify-between gap-6"
              >
                <dt className="fact-k">{channel.label}</dt>
                <dd className="display t-xs text-right">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noopener noreferrer' : undefined}
                      className="transition-colors hover:text-[color:var(--red)]"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="display t-md">Work inquiries</h2>

          <p className="body-copy measure-tight mt-[22px] max-sm:mt-[16px]">
            Interested in working together? Share a few details about the problem,
            the timeline, and who&apos;s involved — I&apos;ll come back with how I&apos;d
            approach it.
          </p>

          <ul className="mt-[30px]">
            {[
              'Product design leadership',
              'End-to-end UX for complex systems',
              'AI-assisted prototyping and build',
              'Design systems and handoff',
            ].map((item) => (
              <li
                key={item}
                className="border-t border-[color:var(--hair-strong)] py-[14px] last:border-b last:border-[color:var(--hair-strong)] text-[15px] leading-[1.5] flex items-center gap-3"
              >
                <span className="text-[color:var(--red)]">✳</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            className="pill pill--red mt-[30px] max-sm:w-full"
            href="mailto:hey@madebyzaye.com?subject=Work%20Inquiry"
          >
            Start a conversation →
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
