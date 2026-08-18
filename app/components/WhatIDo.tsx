"use client";

import React from "react";
import SectionHeading from './SectionHeading';

const WHAT_I_DO = [
  {
    title: "UX Design",
    description: "Crafting intuitive, scalable experiences rooted in empathy and systems thinking.",
  },
  {
    title: "Frontend w/ AI",
    description: "Building modern interfaces with React / Next.js and AI tools like Cursor and Claude.",
  },
  {
    title: "AI Experiments",
    description: "Prototyping with generative tools to unlock new creative workflows.",
  },
  {
    title: "Product Thinking",
    description: "Balancing strategy and execution to launch apps like Before Us.",
  },
  {
    title: "Creative Direction",
    description: "Shaping visual identity and storytelling across product, brand, and motion design.",
  },
  {
    title: "Prototyping & Handoff",
    description: "Rapid prototyping and dev-ready specs using Figma, Cursor, and modern toolchains.",
  },
];

export default function WhatIDo() {
  return (
    <section className="section band-cream">
      <SectionHeading title="What I do" meta="Six disciplines" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[28px]">
        {WHAT_I_DO.map((item, index) => (
          <div
            key={item.title}
            className="border-t border-[color:var(--hair-strong)] py-[26px] max-sm:py-[20px] group"
          >
            <span className="mono text-[11px] text-[color:var(--ink-42)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="display t-xs mt-[12px] transition-colors group-hover:text-[color:var(--red)]">
              {item.title}
            </h3>
            <p className="body-copy-sm mt-[10px]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
