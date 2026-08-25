"use client";

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Content container: spans the viewport minus the design gutter (56px desktop /
 * 20px mobile) until the viewport clears `--shell`, past which the gutter grows
 * into a centring margin and the content stops widening. Reading width is
 * constrained per-block with the `measure` helpers.
 */
const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`gutter ${className}`}>
      {children}
    </div>
  );
};

export default Container;
