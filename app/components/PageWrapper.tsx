"use client";

import React, { ReactNode } from 'react';
import { PageTransition } from './animations';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <PageTransition className={className}>
      {children}
    </PageTransition>
  );
};

export default PageWrapper;
