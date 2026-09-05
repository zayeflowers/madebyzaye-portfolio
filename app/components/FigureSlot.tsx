"use client";

import React from 'react';
import Figure from './Figure';

interface FigureSlotProps {
  /** Drop the exported screen in here and the slot turns into a real Figure. */
  src?: string;
  alt?: string;
  /** What the screen is, in a few words. Shown in the empty slot. */
  label: string;
  /** What to capture — a note to self while the screen is still missing. */
  note?: string;
  /** Suggested filename, so the export lands where the `src` above expects it. */
  file?: string;
  caption?: string;
  fit?: 'cover' | 'contain' | 'natural';
  height_?: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * A Figure that does not have its image yet.
 *
 * While `src` is empty it renders the striped handoff slot with the screen it is
 * waiting on. Add `src` (and `alt`) and it becomes an ordinary Figure — nothing
 * else about the call has to change.
 */
const FigureSlot: React.FC<FigureSlotProps> = ({
  src,
  alt,
  label,
  note,
  file,
  caption,
  fit = 'contain',
  height_ = 'h-[420px] max-sm:h-[240px]',
  width,
  height,
  className = '',
}) => {
  if (src) {
    return (
      <Figure
        src={src}
        alt={alt ?? label}
        caption={caption}
        fit={fit}
        height_={height_}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    <figure className={`frame ${className}`}>
      <div className={`slot ${height_}`}>
        {/* self-stretch beats the slot's own align-items so the note can sit at
            the top and the filename stays pinned to the bottom. */}
        <div className="self-stretch w-full flex flex-col justify-between gap-4">
          <div>
            <div className="micro-label">Screen to add</div>
            <div className="display t-xs mt-[10px] max-w-[26ch]">{label}</div>
            {note && <p className="body-copy-sm mt-[10px] max-w-[46ch]">{note}</p>}
          </div>
          {file && <span className="mono text-[11px] text-[color:var(--ink-42)]">{file}</span>}
        </div>
      </div>

      {caption && <figcaption className="frame-caption">{caption}</figcaption>}
    </figure>
  );
};

export default FigureSlot;
