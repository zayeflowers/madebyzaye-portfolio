"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <Container className="flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center py-6 md:py-0 md:h-[128px] md:flex md:items-center">
          <Link href="/">
            <Image
              src="/madebyzayelogo.svg"
              alt="MadebyZaye Logo"
              width={471}
              height={116}
              className="w-[225px] sm:w-[312px] md:w-[375px] h-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button - visible on mobile and tablet */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none transition-colors hover:bg-gray-100 rounded-md"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Image
              src="/bars-3.svg"
              alt="Menu"
              width={28}
              height={28}
              className={mobileMenuOpen ? 'opacity-70' : 'opacity-100'}
            />
          </button>
        </div>

        {/* Desktop Navigation Links - only visible on large screens */}
        <div className="hidden lg:flex flex-wrap items-center justify-end gap-4 sm:gap-6 md:gap-10 py-4 md:py-0 w-full md:w-auto md:h-[128px] md:items-center">
          <NavLink href="/" label="HOME" />
          <NavLink href="/work" label="WORK" />
          <NavLink href="/ai-projects" label="AI PROJECTS" />
          <NavLink href="/about" label="ABOUT ME" />
          <NavLink href="/contact" label="CONTACT" />
        </div>
      </Container>

      {/* Mobile Menu - visible on mobile and tablet */}
      <div className={`lg:hidden bg-white w-full border-t border-gray-100 py-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <Container>
          <div className="flex flex-col space-y-4 py-2">
            <MobileNavLink href="/" label="HOME" onClick={toggleMobileMenu} />
            <MobileNavLink href="/work" label="WORK" onClick={toggleMobileMenu} />
            <MobileNavLink href="/ai-projects" label="AI PROJECTS" onClick={toggleMobileMenu} />
            <MobileNavLink href="/about" label="ABOUT ME" onClick={toggleMobileMenu} />
            <MobileNavLink href="/contact" label="CONTACT" onClick={toggleMobileMenu} />
          </div>
        </Container>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="font-[family-name:var(--font-lexend-exa)] text-[20px] tracking-[-0.1em] font-normal text-black hover:text-[#e53935] transition-colors"
    >
      {label}
    </Link>
  );
};

// Mobile NavLink component
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label, onClick }) => {
  return (
    <Link
      href={href}
      className="font-[family-name:var(--font-lexend-exa)] text-[20px] tracking-[-0.1em] font-normal text-black hover:text-[#e53935] transition-colors block py-3 border-b border-gray-100 last:border-b-0"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;
