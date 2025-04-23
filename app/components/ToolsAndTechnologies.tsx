"use client";

import React from 'react';
import Container from './Container';

interface TechItemProps {
  name: string;
}

const TechItem: React.FC<TechItemProps> = ({ name }) => {
  return (
    <li className="font-[family-name:var(--font-montserrat)] text-gray-300 mb-3 flex items-center">
      <div className="w-2 h-2 bg-[#CC0101] rounded-full mr-3"></div>
      {name}
    </li>
  );
};

const ToolsAndTechnologies: React.FC = () => {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "OpenAI API",
    "Netlify",
    "GitHub",
    "Figma",
    "Cursor",
    "Augment Code",
    "ChatGPT / Claude"
  ];

  return (
    <section className="w-full bg-black text-white pt-[32px] pb-[64px]">
      <Container>
        <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[48px] leading-tight mb-[32px] [text-edge:cap] [leading-trim:both] tracking-tight">
          Tools & Technologies
        </h2>

        <div className="max-w-5xl">
          <p className="font-[family-name:var(--font-montserrat)] text-gray-300 mb-[24px]">
            <span className="text-white font-medium">Made By Zaye</span> was built with the following technologies:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 mb-[24px]">
            {technologies.map((tech, index) => (
              <TechItem
                key={`tech-${index}`}
                name={tech}
              />
            ))}
          </ul>

          <p className="font-[family-name:var(--font-montserrat)] text-gray-300">
            I prioritize modern, maintainable code with a focus on performance and user experience. My approach combines technical expertise with design thinking to create solutions that are both functional and beautiful.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ToolsAndTechnologies;
