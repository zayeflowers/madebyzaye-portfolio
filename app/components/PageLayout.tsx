"use client";

import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  navbarKey?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, navbarKey = "navbar" }) => {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar key={navbarKey} />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
