"use client";

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="band-black">
      <div className="gutter py-[76px] max-sm:py-[34px] flex items-end justify-between gap-10 max-sm:flex-col max-sm:items-stretch max-sm:gap-5">
        <div>
          <div className="display t-xl">
            Let&apos;s build it<span className="red-period">.</span>
          </div>
          <a
            className="pill pill--light mt-[26px] max-sm:w-full"
            href="mailto:hey@madebyzaye.com"
          >
            hey@madebyzaye.com
          </a>
        </div>

        <div className="text-right max-sm:text-left text-[15px] max-sm:text-[13px] leading-[1.8] text-[color:var(--paper-60)]">
          <div className="flex gap-2 justify-end max-sm:justify-start">
            <a
              href="https://www.linkedin.com/in/zayeflowers/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://github.com/zayeflowers"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <Link href="/now" className="transition-colors hover:text-white">
              Now
            </Link>
          </div>
          <div>© {new Date().getFullYear()} Made By Zaye</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
