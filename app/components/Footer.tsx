"use client";

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white h-[70px] relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-black opacity-80"></div>
      <Container>
        <div className="flex items-center justify-between h-[70px]">
          <motion.p
            className="text-sm font-[family-name:var(--font-montserrat)] text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © 2025 Made By Zaye
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="https://www.linkedin.com/in/zayeflowers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-[family-name:var(--font-montserrat)] text-[#CC0101] hover:text-[#a50000] transition-colors"
            >
              LinkedIn
            </Link>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
