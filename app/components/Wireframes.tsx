import React from 'react';
import { SCREENS, ScreenId } from './wireframes/screens';

export interface WireframeItem {
  id: ScreenId;
  /** Short chip — "Current", "Redesign", "Step 1". */
  tag?: string;
  /** Red chip for the redesigned state, grey for the shipped one. */
  tone?: 'current' | 'solution';
  /** Overrides the screen's own label. */
  label?: string;
  /** One line on what this screen is doing. */
  note?: string;
}

interface WireframesProps {
  items: WireframeItem[];
  caption?: string;
  /** Small label above the frame. */
  title?: string;
  className?: string;
}

/**
 * A row of Injury Intake wireframes in the site's figure treatment.
 *
 * The row scrolls inside its own frame rather than widening the page, so a
 * three-up comparison stays readable on a phone without the body ever
 * scrolling sideways.
 */
const Wireframes: React.FC<WireframesProps> = ({
  items,
  caption,
  title,
  className = '',
}) => {
  return (
    <div className={className}>
      {title && <div className="micro-label mb-[18px]">{title}</div>}

      <figure className="frame">
        <div className="bg-[color:var(--cream)] overflow-x-auto">
          {/* w-max + mx-auto: centres a row that fits, scrolls one that doesn't
              (auto margins resolve to 0 on overflow, so nothing goes unreachable). */}
          <div className="flex items-start gap-[28px] max-sm:gap-[18px] p-[28px] max-sm:p-[18px] w-max mx-auto">
            {items.map((item, index) => {
              const screen = SCREENS[item.id];
              const { Screen } = screen;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[340px] max-sm:w-[min(340px,calc(100vw-80px))] flex flex-col gap-[12px]"
                >
                  <div className="flex items-baseline gap-[8px] min-h-[16px]">
                    {item.tag && (
                      <span
                        className={
                          item.tone === 'solution'
                            ? 'kicker'
                            : 'kicker text-[color:var(--ink-40)]'
                        }
                      >
                        {item.tag}
                      </span>
                    )}
                    <span className="text-[11px] leading-[1.3] text-[color:var(--ink-45)]">
                      {item.label ?? screen.label}
                    </span>
                  </div>

                  <Screen />

                  {item.note && (
                    <p className="text-[12px] leading-[1.5] text-[color:var(--ink-55)] text-pretty">
                      {item.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {caption && <figcaption className="frame-caption">{caption}</figcaption>}
      </figure>
    </div>
  );
};

export default Wireframes;
