"use client";

import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
}

const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  delayChildren = 0.1,
  staggerChildren = 0.1,
  once = true,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1, // Trigger when 10% of the element is in view
    rootMargin: '-50px 0px', // Start animation slightly before element enters viewport
  });

  useEffect(() => {
    if (inView) {
      // Add a small delay to ensure all children are mounted
      const timer = setTimeout(() => {
        controls.start('visible');
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
