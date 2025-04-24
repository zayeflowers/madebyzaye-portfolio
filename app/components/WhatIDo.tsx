"use client";

import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from './animations';

const whatIDo = [
  {
    title: "UX Design",
    description: "Crafting intuitive, scalable experiences rooted in empathy and systems thinking.",
  },
  {
    title: "Frontend Development",
    description: "Building modern interfaces with React, Next.js, and Tailwind CSS.",
  },
  {
    title: "AI Experiments",
    description: "Prototyping with generative tools to unlock new creative workflows.",
  },
  {
    title: "Product Thinking",
    description: "Balancing strategy and execution to launch tools like Daily Uplift.",
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
    <section className="pt-[90px] pb-16 bg-[#f6f0e9] px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn>
        <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[48px] leading-tight tracking-[-0.04em] mb-10 text-center [text-edge:cap] [leading-trim:both]">
          What I Do
        </h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" delayChildren={0.1} staggerChildren={0.1}>
        {whatIDo.map((item, index) => (
          <StaggerItem
            key={index}
            className="transition-transform duration-300 hover:scale-[1.03] group"
          >
            <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-xl mb-2 group-hover:text-[#CC0101] transition-colors">
              {item.title}
            </h3>
            <p className="font-[family-name:var(--font-montserrat)] text-gray-600 leading-[28px]">{item.description}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
