"use client";

import React, { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { PageTransition } from './animations';

interface PageLayoutProps {
  children: ReactNode;
  navbarKey?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, navbarKey = "navbar" }) => {
  // Force scroll to top on page load to ensure animations trigger properly
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar key={navbarKey} />
      <main className="flex-grow">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
