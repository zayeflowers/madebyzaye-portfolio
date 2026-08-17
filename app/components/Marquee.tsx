"use client";

import React from 'react';

interface MarqueeProps {
  /** Phrases looped across the band. Duplicated internally for a seamless loop. */
  items?: string[];
}

const DEFAULT_ITEMS = [
  'Product Thinking',
  'Creative Direction',
  'Frontend w/ AI',
  'Prototyping',
];

const Marquee: React.FC<MarqueeProps> = ({ items = DEFAULT_ITEMS }) => {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track display">
        {[0, 1].map((copy) =>
          items.map((item) => (
            <React.Fragment key={`${copy}-${item}`}>
              <span>{item}</span>
              <span className="star">✳</span>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default Marquee;
