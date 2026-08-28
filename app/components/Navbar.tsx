"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/ai-projects', label: 'AI Projects' },
  { href: '/about', label: 'About' },
];

const MOBILE_LINKS = [...NAV_LINKS, { href: '/now', label: 'Now' }];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[color:var(--hair)] relative z-50">
      <div className="gutter flex items-center justify-between py-6 max-sm:py-4">
        <Link href="/" aria-label="Made By Zaye — home" className="block">
          <Image
            src="/madebyzaye-logo.svg"
            alt="Made By Zaye"
            width={377}
            height={93}
            className="h-[68px] max-sm:h-[clamp(32px,10vw,40px)] w-auto block"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8 text-[12px] font-medium leading-none tracking-[0.1em] uppercase">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black transition-colors hover:text-[color:var(--red)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-black rounded-full px-[18px] py-[10px] text-black transition-colors hover:bg-[color:var(--red)] hover:border-[color:var(--red)] hover:text-white"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile: CTA + menu toggle */}
        <div className="flex sm:hidden items-center gap-3">
          <Link
            href="/contact"
            className="border border-black rounded-full px-4 py-[9px] text-[10px] font-medium leading-none tracking-[0.1em] uppercase text-black transition-colors hover:bg-[color:var(--red)] hover:border-[color:var(--red)] hover:text-white"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex flex-col justify-center gap-[5px] w-8 h-8 items-center"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-black transition-transform duration-200 ${
                mobileMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-black transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-black transition-transform duration-200 ${
                mobileMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            className="sm:hidden overflow-hidden border-t border-[color:var(--hair)] bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="gutter py-2">
              {MOBILE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-[color:var(--hair)] last:border-b-0 text-[13px] font-medium tracking-[0.14em] uppercase text-black transition-colors hover:text-[color:var(--red)]"
                >
                  {link.label}
                  <span className="text-[color:var(--red)]">→</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
