"use client";

import React, { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  direction = 'up',
  distance = 20,
  once = true,
}) => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
        return {};
      default:
        return { y: distance };
    }
  };

  useEffect(() => {
    // Start animation after a small delay to ensure component is mounted
    const timer = setTimeout(() => {
      if (!hasAnimated) {
        controls.start({
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0], // Smooth easing
          }
        });
        setHasAnimated(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [controls, delay, duration, hasAnimated]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getDirectionOffset() }}
      animate={controls}
      viewport={{ once, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
