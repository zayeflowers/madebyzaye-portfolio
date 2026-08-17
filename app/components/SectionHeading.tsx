import React from 'react';

interface SectionHeadingProps {
  title: string;
  /** Right-aligned micro-label, hidden on mobile. */
  meta?: string;
  /** Colour treatment for use on the red or black bands. */
  tone?: 'dark' | 'light';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  meta,
  tone = 'dark',
  className = '',
}) => {
  return (
    <div
      className={`flex items-baseline justify-between mb-[38px] max-sm:mb-[20px] ${className}`}
    >
      <h2 className={`display t-md ${tone === 'light' ? 'text-white' : ''}`}>
        {title}
      </h2>
      {meta && (
        <span
          className={`micro-label max-sm:hidden ${
            tone === 'light' ? 'text-[color:var(--paper-60)]' : ''
          }`}
        >
          {meta}
        </span>
      )}
    </div>
  );
};

export default SectionHeading;
