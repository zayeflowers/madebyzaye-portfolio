import React, { ReactNode } from 'react';

interface ProseProps {
  children: ReactNode;
  /** Drop the reading-measure cap for blocks that hold figures or grids. */
  wide?: boolean;
  className?: string;
}

/** Long-form body copy block, gutter-aligned and capped to a reading measure. */
const Prose: React.FC<ProseProps> = ({ children, wide = false, className = '' }) => {
  return (
    <section className={`gutter ${className}`}>
      <div className={`prose-zaye ${wide ? '' : 'measure'}`}>{children}</div>
    </section>
  );
};

export default Prose;
