import React, { ReactNode } from 'react';

interface PageHeadingProps {
  /** Uppercase micro-label above the title, preceded by a red rule. */
  eyebrow?: string;
  title: string;
  /** Renders the trailing period in red, matching the display treatment. */
  redPeriod?: boolean;
  lede?: ReactNode;
  actions?: ReactNode;
  /** `lg` (62px) for section landings, `md` (40px) for sub-pages. */
  size?: 'lg' | 'md';
  className?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({
  eyebrow,
  title,
  redPeriod = false,
  lede,
  actions,
  size = 'lg',
  className = '',
}) => {
  return (
    <div className={`animate-rise ${className}`}>
      {eyebrow && (
        <div className="eyebrow">
          <span className="rule" />
          {eyebrow}
        </div>
      )}

      <h1
        className={`display ${size === 'lg' ? 't-lg' : 't-md'} ${
          eyebrow ? 'mt-[22px] max-sm:mt-[16px]' : ''
        }`}
      >
        {title}
        {redPeriod && <span className="red-period">.</span>}
      </h1>

      {lede && <p className="lede mt-[22px] max-sm:mt-[16px]">{lede}</p>}

      {actions && (
        <div className="mt-[30px] max-sm:mt-[20px] flex flex-wrap gap-3 max-sm:flex-col">
          {actions}
        </div>
      )}
    </div>
  );
};

export default PageHeading;
