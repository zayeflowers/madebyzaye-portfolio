"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  status?: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  status,
  imageSrc,
  imageAlt,
  href
}) => {
  return (
    <Link href={href}>
      <div className="bg-white rounded-[14px] p-6 mb-8 shadow-[0_3px_10px_-3px_rgba(0,0,0,0.25)] hover:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.3)] transition-shadow duration-300">
        <div className="mb-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={250}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="text-black">
          <h3 className="font-[family-name:var(--font-montserrat)] text-[20px] font-medium leading-[24px] tracking-[-0.04em] mb-2 [text-edge:cap] [leading-trim:both]">{title}</h3>
          <p className="font-[family-name:var(--font-montserrat)] text-base leading-relaxed">
            {description}
          </p>
          {status && (
            <p className="mt-4">
              <span className="font-bold">Status:</span> {status}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
