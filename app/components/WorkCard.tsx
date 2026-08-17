"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface WorkCardProps {
  /** Uppercase kicker, e.g. "Product · 2026". */
  kicker: string;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Filename label shown in the striped slot when imagery is still missing. */
  placeholder?: string;
  /** Image slot height. `tall` matches the 230px homepage grid. */
  imageHeight?: 'tall' | 'short';
  /** Contain rather than cover — for logo lockups on light plates. */
  contain?: boolean;
  external?: boolean;
}

const WorkCard: React.FC<WorkCardProps> = ({
  kicker,
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  placeholder,
  imageHeight = 'tall',
  contain = false,
  external = false,
}) => {
  const slotHeight =
    imageHeight === 'tall'
      ? 'h-[230px] max-sm:h-[165px]'
      : 'h-[180px] max-sm:h-[150px]';

  const media = imageSrc ? (
    <div
      className={`relative w-full ${slotHeight} ${
        contain ? 'bg-[color:var(--cream)] p-6' : 'bg-[color:var(--cream)]'
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt ?? title}
        fill
        sizes="(max-width: 640px) 100vw, 33vw"
        className={contain ? 'object-contain' : 'object-cover'}
      />
    </div>
  ) : (
    <div className={`slot ${slotHeight}`}>
      <span className="mono">{placeholder ?? 'image-coming-soon.jpg'}</span>
    </div>
  );

  const body = (
    <>
      {media}
      <div className="card-body">
        <div className="kicker">{kicker}</div>
        <div className="card-title display">{title}</div>
        <p className="card-desc">{description}</p>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className="card">
      {body}
    </Link>
  );
};

export default WorkCard;
