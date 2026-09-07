"use client";

import React from 'react';
import Link from 'next/link';

interface NextProjectProps {
  label?: string;
  title: string;
  href: string;
}

const NextProject: React.FC<NextProjectProps> = ({
  label = 'Next project',
  title,
  href,
}) => {
  return (
    <section className="gutter pt-[48px] pb-[76px] max-sm:pt-[32px] max-sm:pb-[40px]">
      <div className="border-t border-[color:var(--hair-strong)] pt-[30px] max-sm:pt-[20px] flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-5">
        <div>
          <div className="micro-label">{label}</div>
          <Link
            href={href}
            className="display t-md mt-[14px] block transition-colors hover:text-[color:var(--red)]"
          >
            {title} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NextProject;
