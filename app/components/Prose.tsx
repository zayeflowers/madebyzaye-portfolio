import React, { ReactNode } from 'react';

interface ProseProps {
  children: ReactNode;
  /** Drop the reading-measure cap for blocks that hold figures or grids. */
  wide?: boolean;
  className?: string;
}

/**
 * Long-form body copy block, gutter-aligned and capped to a reading measure.
 * The measure is centred in the content shell so case-study copy sits under the
 * middle of the page rather than hugging the left edge on wide displays.
 */
const Prose: React.FC<ProseProps> = ({ children, wide = false, className = '' }) => {
  return (
    <section className={`gutter ${className}`}>
      <div className={`prose-zaye ${wide ? '' : 'measure mx-auto'}`}>{children}</div>
    </section>
  );
};

export default Prose;
