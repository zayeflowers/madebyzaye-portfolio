"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

interface ProjectCardProps {
  title: string;
  href: string;
  imageSrc?: string;
  bgColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, href, imageSrc, bgColor = '#f0f0f0' }) => {
  return (
    <Link href={href}>
      <div className="bg-white rounded-[16px] h-[223px] w-full max-w-[373px] mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
        {imageSrc && (
          <div className="relative h-full w-full">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">{title}</h3>
            </div>
          </div>
        )}
        {!imageSrc && (
          <div className="flex items-end justify-start h-full p-6" style={{ backgroundColor: bgColor }}>
            <h3 className="text-white font-[family-name:var(--font-montserrat)] font-medium text-xl">{title}</h3>
          </div>
        )}
      </div>
    </Link>
  );
};

const FeaturedProjects: React.FC = () => {
  return (
    <section className="w-full bg-black text-white pt-[56px] pb-[56px] overflow-hidden">
      <Container>
        <h2 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[48px] leading-tight mb-[32px] [text-edge:cap] [leading-trim:both] tracking-tight">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[16px] max-w-full overflow-x-auto">
          <ProjectCard
            title="US Bank Case Study"
            href="/projects/us-bank"
            bgColor="#1a365d"
          />
          <ProjectCard
            title="CNN Case Study"
            href="/projects/cnn"
            bgColor="#cc0000"
          />
          <ProjectCard
            title="IHG Case Study"
            href="/projects/ihg"
            bgColor="#003366"
          />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
