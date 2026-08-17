"use client";

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Full-bleed container: content spans the viewport minus the design gutter
 * (56px desktop / 20px mobile). Width is constrained per-block with the
 * `measure` helpers rather than by a page-level max-width.
 */
const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`gutter ${className}`}>
      {children}
    </div>
  );
};

export default Container;
