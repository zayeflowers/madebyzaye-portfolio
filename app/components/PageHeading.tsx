import React from 'react';

interface PageHeadingProps {
  title: string;
  className?: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, className = '' }) => {
  return (
    <h1 className={`text-[48px] font-[family-name:var(--font-montserrat)] font-bold leading-[54px] tracking-[-0.04em] text-[#000000] mb-[16px] mt-[20px] [text-edge:cap] [leading-trim:both] ${className}`}>
      {title}
    </h1>
  );
};

export default PageHeading;
