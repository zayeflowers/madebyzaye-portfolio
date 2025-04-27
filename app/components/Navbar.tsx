"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <Container className="flex flex-row items-center justify-between">
        {/* Logo */}
        <FadeIn direction="none">
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
        </FadeIn>

        {/* Mobile Menu Button - visible on mobile and tablet (including landscape) */}
        <div className="xl:hidden">
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

        {/* Desktop Navigation Links - only visible on xl screens */}
        <StaggerContainer className="hidden xl:flex flex-wrap items-center justify-end gap-6 py-4 md:py-0 w-full md:w-auto md:h-[128px] md:items-center" delayChildren={0.1} staggerChildren={0.05}>
          <StaggerItem><NavLink href="/" label="HOME" /></StaggerItem>
          <StaggerItem><NavLink href="/work" label="WORK" /></StaggerItem>
          <StaggerItem><NavLink href="/ai-projects" label="AI PROJECTS" /></StaggerItem>
          <StaggerItem><NavLink href="/about" label="ABOUT ME" /></StaggerItem>
          <StaggerItem><NavLink href="/now" label="NOW" /></StaggerItem>
          <StaggerItem><NavLink href="/contact" label="CONTACT" /></StaggerItem>
        </StaggerContainer>
      </Container>

      {/* Mobile Menu - visible on mobile and tablet (including landscape) */}
      <motion.div
        className={`xl:hidden bg-white w-full border-t border-gray-100 py-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <Container>
          <StaggerContainer className="flex flex-col space-y-4 py-2" delayChildren={0.05} staggerChildren={0.05}>
            <StaggerItem><MobileNavLink href="/" label="HOME" onClick={toggleMobileMenu} /></StaggerItem>
            <StaggerItem><MobileNavLink href="/work" label="WORK" onClick={toggleMobileMenu} /></StaggerItem>
            <StaggerItem><MobileNavLink href="/ai-projects" label="AI PROJECTS" onClick={toggleMobileMenu} /></StaggerItem>
            <StaggerItem><MobileNavLink href="/about" label="ABOUT ME" onClick={toggleMobileMenu} /></StaggerItem>
            <StaggerItem><MobileNavLink href="/now" label="NOW" onClick={toggleMobileMenu} /></StaggerItem>
            <StaggerItem><MobileNavLink href="/contact" label="CONTACT" onClick={toggleMobileMenu} /></StaggerItem>
          </StaggerContainer>
        </Container>
      </motion.div>
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
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="font-[family-name:var(--font-lexend-exa)] text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.1em] font-normal text-black hover:text-[#e53935] transition-colors pr-[24px] last:pr-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e53935] after:transition-all hover:after:w-full"
      >
        {label}
      </Link>
    </motion.div>
  );
};

// Mobile NavLink component
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, label, onClick }) => {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className="font-[family-name:var(--font-lexend-exa)] text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.1em] font-normal text-black hover:text-[#e53935] transition-colors block py-3 border-b border-gray-100 last:border-b-0"
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default Navbar;
