"use client";

import React from 'react';
import Image from 'next/image';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  /** `contain` pads the image on a cream plate — for logos and screens with transparency. */
  fit?: 'cover' | 'contain' | 'natural';
  /** Fixed slot height, only used with cover/contain. */
  height_?: string;
  className?: string;
}

const Figure: React.FC<FigureProps> = ({
  src,
  alt,
  caption,
  width = 1600,
  height = 900,
  fit = 'natural',
  height_ = 'h-[420px] max-sm:h-[220px]',
  className = '',
}) => {
  return (
    <figure className={`frame ${className}`}>
      {fit === 'natural' ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto block"
        />
      ) : (
        <div
          className={`relative w-full ${height_} bg-[color:var(--cream)] ${
            fit === 'contain' ? 'p-6 max-sm:p-4' : ''
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, 80vw"
            className={fit === 'contain' ? 'object-contain' : 'object-cover'}
          />
        </div>
      )}

      {caption && <figcaption className="frame-caption">{caption}</figcaption>}
    </figure>
  );
};

export default Figure;
